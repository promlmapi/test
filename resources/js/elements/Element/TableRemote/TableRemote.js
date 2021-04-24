// Basics
import React from 'react';
import ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';
import {Dimmer, Loader} from 'semantic-ui-react';
import {Card} from 'reactstrap';
import {withRouter} from 'react-router-dom';

// Utilities
import {
    clone,
    concat,
    get,
    includes,
    isEmpty,
    isFunction,
    size,
    subtract,
    toNumber
} from 'lodash';

// Libraries
import {httpCallMake} from '../../../custom/Libraries/httpCall';
import {responseValidate} from '../../../custom/Libraries/Form';
import {removeNilFromArray} from '../../../custom/Libraries/Utility';
import {getTableRowActions} from '../../../elements/Element/TableRemote/ActionButton/Library';

// Views
import withQueryString from './WithQueryString';

// Packages
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';
import {
    Template,
    TemplatePlaceholder
} from "@devexpress/dx-react-core";
import {
    DataTypeProvider,
    TreeDataState,
    SortingState,
    SelectionState,
    FilteringState,
    PagingState,
    CustomPaging,
    SearchState,
    CustomTreeData,
    // IntegratedFiltering,
    // IntegratedPaging,
    // IntegratedSorting,
    // IntegratedSelection,
    // GroupingState,
    // IntegratedGrouping
} from '@devexpress/dx-react-grid';
import {
    Grid as GridBootstrap,
    // VirtualTable,
    TableBandHeader,
    // DragDropProvider,
    // TableColumnReordering,
    Table,
    TableHeaderRow,
    TableFilterRow,
    TableTreeColumn,
    // TableGroupRow,
    // GroupingPanel,
    // SearchPanel,
    PagingPanel,
    // TableColumnResizing,
    Toolbar,
    TableColumnVisibility,
    ColumnChooser,
    TableSelection,
    TableFixedColumns
} from '@devexpress/dx-react-grid-bootstrap4';
import {TableRemotePluginActionsColumn} from './Plugins/ActionsColumn';

//For row expanding
const ROOT_ID = '';
const getRowId = row => row['current_node_id'];

//For currency filters
const CurrencyEditor = ({value, onValueChange}) => {
    const handleChange = (event) => {
        const {value: targetValue} = event.target;
        if (targetValue.trim() === '') {
            onValueChange();
            return;
        }
        onValueChange(parseInt(targetValue, 10));
    };
    return (
        <input
            className="form-control"
            type="number"
            placeholder="Filter..."
            value={value === undefined ? '' : value}
            min={0}
            onChange={handleChange}
        />
    );
};

// URI encode filter values
const filterURIEncoded = ({ filters }) => {

    //Check if filters applied
    let filter = filters.reduce((acc, { columnName, operation, value }) => {
        acc.push(`["${columnName}", "${operation}", "${encodeURIComponent(value)}"]`);
        return acc;
    }, []);

    //If filter is applied
    if (filters.length > 0) {
        filter = `[${filter}]`;
    }

    return filter;
};

CurrencyEditor.propTypes = {
    value: PropTypes.number,
    onValueChange: PropTypes.func.isRequired,
};

CurrencyEditor.defaultProps = {
    value: undefined,
};

class ElementTableRemote extends React.Component {

    constructor(props) {
        super(props);

        //Props
        const { queryStringFilters } = props;
        const {
            columns,
            columnBands,
            apiUrl,
            tableColumnExtensions,
            defaultHiddenColumnNames,
            tableTreeColumn,
            rowSelectorID,
            parentSelectorID,
            currencyColumns,
            onlyContainsColumns,
            defaultSorting = [],
            showActionColumns,
            leftColumns,
            rightColumns,
            rowActions = null,
            forceRefresh = null,
            minimalViewWhenNoData = true,
            dateRangeFilters
        } = props['tableProps'];

        // Default filters
        const defaultFilters = dateRangeFilters
            ? concat(queryStringFilters, dateRangeFilters)
            : queryStringFilters;
        
        //Setting initial state
        this.state = {
            rows: [],
            columns,
            columnBands,
            pageSizes: [10, 20, 30],

            //Basics
            tableColumnExtensions,
            defaultHiddenColumnNames,
            tableTreeColumn,
            rowSelectorID,
            parentSelectorID,
            expandedRowIds: [],
            loading: true,
            minimalViewWhenNoData,

            //Currency filters
            onlyContainsColumns,
            onlyContainsFilterOperations: ['contains'],
            currencyColumns,
            currencyFilterOperations: ['equal', 'notEqual', 'greaterThan', 'greaterThanOrEqual', 'lessThan', 'lessThanOrEqual'],

            //Features
            filters: defaultFilters,
            defaultFilters,
            sorting: defaultSorting,
            totalCount: 0,
            pageSize: 10,
            currentPage: 0,
            selection: [],

            //Fixed columns
            leftColumns,
            rightColumns,

            //Formatters
            showActionColumns,
            actionsColumn: rowActions ? rowActions : getTableRowActions(),

            // Force refresh
            forceRefresh,

            //Server
            apiUrl,
        };

        //Binding
        this.getChildRows = this.getChildRows.bind(this);
        this.changeExpandedRowIds = this.changeExpandedRowIds.bind(this);
        this.changeFilters = this.changeFilters.bind(this);
        this.changeSorting = this.changeSorting.bind(this);
        this.changeCurrentPage = this.changeCurrentPage.bind(this);
        this.changePageSize = this.changePageSize.bind(this);
        this.changeSelection = this.changeSelection.bind(this);
        this.handleApiResponse = this.handleApiResponse.bind(this);
    }

    componentDidMount() {
        //Adding CSS class name to table
        const classList = ReactDOM.findDOMNode(this).querySelector('.table-responsive').classList;
        classList.add('tree-table');

        this.loadData();
    }

    componentDidUpdate(prevProps, prevState) {
        const {tableProps} = this.props;
        const {loading, filters, apiUrl} = this.state;

        //Only if props or state has updated
        if (
            prevState.loading !== loading && loading
        ) {
            this.loadData();
        }

        //If date range has been updated
        if (prevProps.tableProps.dateRangeFilters !== tableProps.dateRangeFilters) {

            this.changeFilters(
                clone(filters).concat(tableProps.dateRangeFilters)
            );
        }

        //If to force refresh
        if (
            prevProps.tableProps.forceRefresh !== tableProps.forceRefresh
            && get(tableProps.forceRefresh, 'shouldTableRefresh')
        ) {

            //Callback
            tableProps.forceRefresh.callback();

            //Refresh table
            this.loadData(true);
        }

        //If api URL changes
        if (
            prevProps.tableProps.apiUrl !== tableProps.apiUrl
            && (tableProps.apiUrl !== apiUrl)
        ) {
            this.setState({
                apiUrl: tableProps.apiUrl
            });
        }
    }

    componentWillMount() {
        this.delayedInputTimer = null;
    }

    getChildRows(row, rootRows) {

        //Getting props
        const {rowSelectorID, parentSelectorID} = this.props.tableProps;

        //Check if row has child
        const childRows = rootRows.filter(r => r[parentSelectorID] == (row ? row[rowSelectorID] : ROOT_ID));
        if (childRows.length) {
            return childRows;
        }
        return row
        && row.hasOwnProperty('has_children')
        && row.has_children
            ? []
            : null;
    };

    changeSelection(selection) {
        this.setState({
            selection,
        });
    }

    changeExpandedRowIds(expandedRowIds) {
        this.setState({
            expandedRowIds,
            loading: true,
        });
    }

    changeFilters(filters) {
        const {dateRangeFilters} = this.props.tableProps;

        //If dateRangeFilters is present
        if (!isEmpty(dateRangeFilters)) {

            //Merging dateRange filter with applied filter
            filters = filters.concat(dateRangeFilters);
        }

        //Clear timeout
        clearTimeout(this.delayedInputTimer);

        //Setting timer to setting state after a delay so that the filters will be in sync
        this.delayedInputTimer = setTimeout(() => {
            this.setState({
                loading: true,
                filters: filters,
                currentPage: 0,
            });
        }, 1000)
    }

    changeSorting(sorting) {
        this.setState({
            currentPage: 0,
            sorting,
            loading: true,
        });
    }

    changeCurrentPage(currentPage) {
        this.setState({
            currentPage,
            loading: true,
            expandedRowIds: [],
        });
    }

    changePageSize(pageSize) {
        const {totalCount, currentPage: stateCurrentPage} = this.state;
        const totalPages = Math.ceil(totalCount / pageSize);
        const currentPage = Math.min(stateCurrentPage, totalPages - 1);

        this.setState({
            pageSize,
            currentPage,
            loading: true,
        });
    }

    queryString() {
        const {
            apiUrl,
            sorting,
            filters,
            pageSize,
            currentPage
        } = this.state;

        //Query string
        let queryString = `${apiUrl}${includes(apiUrl, '?') ? '&' : '?'}page_size=${pageSize}&page=${currentPage + 1}`;

        //If sorting has applied
        const columnSorting = sorting[0];
        if (columnSorting) {
            const sortingDirectionString = columnSorting.direction === 'desc' ? ' desc' : 'asc';
            queryString = `${queryString}&sort_by=${columnSorting.columnName}&sort_direction=${sortingDirectionString}`;
        }

        //Returning prepared query string
        return `${queryString}&filter=${filterURIEncoded({ filters })}`;
    }

    handleApiResponse({ response }) {
        const { handleApiResponseCallback } = this.props;

        // If callback is present
        if (isFunction(handleApiResponseCallback)) {
            handleApiResponseCallback({ response });
        }
    }

    loadData(ignoreSameQuery = false) {
        const {
            expandedRowIds,
            rows,
            loading,
            apiUrl,
            parentSelectorID,
            pageSize,
            totalCount,
            currentPage,
        } = this.state;
        const {dateRangeFilters} = this.props.tableProps;

        //Check if any row has expanded
        let rowIdsWithNotLoadedChilds = [ROOT_ID, ...expandedRowIds]
            .filter(rowId => rows.findIndex(row => row[parentSelectorID] == rowId) === -1);

        //If row is expanded
        if (
            size(removeNilFromArray(rowIdsWithNotLoadedChilds))
            // rowIdsWithNotLoadedChilds.length
            // && isEmpty(filters)
        ) {
            //If not showing loading state then show
            if (!loading) {
                this.setState({loading: true});
            }

            //Get expanded row data
            Promise.all(rowIdsWithNotLoadedChilds
                .map(rowId =>

                    httpCallMake(
                        `${apiUrl}${includes(apiUrl, '?') ? '&' : '?'}page_size=${pageSize}&filter=${filterURIEncoded({ filters: dateRangeFilters })}&node_id=${rowId}`,
                        'get'
                    )
                        .then(data => {
                            return responseValidate(data);
                        })
                )).then((data) => {

                    //Add data in table data
                    let result = data[0].resource;
                    let resultData = result.data;

                    // Handle API response
                    this.handleApiResponse({ response: result });

                    this.setState({
                        rows: rows.concat(...resultData),
                        totalCount: toNumber(result.total) || totalCount ,
                        pageSize: toNumber(result.per_page) || pageSize,
                        currentPage: result.current_page ? subtract(toNumber(result.current_page), 1) : currentPage,
                        loading: false,
                    });
                })
                .catch(() => this.setState({loading: false}));

            //Returning
            return;
        }

        //Query string
        let queryString = this.queryString();

        //If last query is same as current then returning
        if (!ignoreSameQuery && queryString === this.lastQuery) {

            if (loading) {
                this.setState({loading: false});
            }
            return;
        }

        //Making API request
        httpCallMake(queryString, 'get')
            .then(data => {
                return responseValidate(data);
            }).then(data => {

            //Add table data
            let result = data.resource;

            // Handle API response
            this.handleApiResponse({ response: result });

            this.setState({
                rows: result.data,
                totalCount: toNumber(result.total),
                pageSize: toNumber(result.per_page),
                currentPage: subtract(toNumber(result.current_page), 1),
                loading: false,
            });
        }).catch(() =>
            this.setState({loading: false})
        );

        //Adding current query as last query for future use
        this.lastQuery = queryString;
    }

    render() {
        const {
            rows, columns, tableColumnExtensions, apiUrl,
            defaultHiddenColumnNames, columnBands,
            tableTreeColumn, loading, pageSize, pageSizes, grouping, expandedRowIds,
            sorting, currentPage, totalCount,
            currencyColumns, currencyFilterOperations,
            onlyContainsColumns, onlyContainsFilterOperations, filters, showActionColumns, selection, actionsColumn,
            leftColumns, rightColumns, minimalViewWhenNoData, defaultFilters
        } = this.state;

        // Checking if no data present.
        const noData = size(rows) < 1;

        // If to show minimal view
        const isMinimalView = minimalViewWhenNoData && (size(filters) < 1) && noData;

        return (
            <Card
                className="tree-table-card"
            >
                <GridBootstrap
                    rows={!isEmpty(rows) ? rows : []}
                    columns={columns}
                    getRowId={getRowId}
                >
                    { !isEmpty(currencyColumns) && <DataTypeProvider
                        for={currencyColumns}
                        availableFilterOperations={currencyFilterOperations}
                        editorComponent={CurrencyEditor}
                    /> }
                    { !isEmpty(currencyColumns) && <DataTypeProvider
                        for={onlyContainsColumns}
                        availableFilterOperations={onlyContainsFilterOperations}
                    /> }
                    <TreeDataState
                        expandedRowIds={expandedRowIds}
                        onExpandedRowIdsChange={this.changeExpandedRowIds}
                    />
                    {
                        !isMinimalView && (
                        <FilteringState
                            columnExtensions={tableColumnExtensions}
                            defaultFilters={defaultFilters}
                            onFiltersChange={this.changeFilters}
                        />
                    )}
                    {
                        !isMinimalView && (
                        <SortingState
                            sorting={sorting}
                            columnExtensions={tableColumnExtensions}
                            onSortingChange={this.changeSorting}
                        />
                    )}
                    {
                        !isMinimalView && (
                        <PagingState
                            currentPage={currentPage}
                            onCurrentPageChange={this.changeCurrentPage}
                            onPageSizeChange={this.changePageSize}
                            pageSize={pageSize}
                        />
                    )}

                    <CustomTreeData
                        getChildRows={this.getChildRows}
                    />
                    {
                        !isMinimalView && (
                        <CustomPaging
                            totalCount={totalCount}
                        />
                    )}
                    <SearchState />

                    <SelectionState
                        selection={selection}
                        onSelectionChange={this.changeSelection}
                    />

                    <Table
                        columnExtensions={tableColumnExtensions}
                    />
                    <TableColumnVisibility
                        defaultHiddenColumnNames={defaultHiddenColumnNames}
                    />
                    {/*<TableColumnResizing*/}
                    {/*defaultColumnWidths={tableColumnExtensions}*/}
                    {/*/>*/}
                    { showActionColumns && <TableRemotePluginActionsColumn apiUrl={apiUrl} actions={actionsColumn}/> }
                    <TableHeaderRow
                        showSortingControls={!isMinimalView}
                    />
                    <TableSelection
                        selectByRowClick
                        highlightRow
                        showSelectionColumn={false}
                    />
                    <TableBandHeader
                        columnBands={!isEmpty(columnBands) ? [] : []}
                    />
                    {
                        !isMinimalView && (
                        <TableFilterRow
                            showFilterSelector
                        />
                    )}
                    <TableTreeColumn
                        for={tableTreeColumn}
                    />
                    <TableFixedColumns
                        leftColumns={leftColumns}
                        rightColumns={rightColumns}
                    />

                    {/* {
                        !isMinimalView && ( */}
                        <Toolbar />
                    {/* )} */}
                    {/* {
                        !isMinimalView && ( */}
                        <ColumnChooser />
                    {/* )} */}
                    {/*<SearchPanel />*/}

                    {
                        !isMinimalView && (
                        <PagingPanel
                            pageSizes={pageSizes}
                        />
                    )}

                    { !isEmpty(leftColumns) &&
                    <Template
                        name="tableCell"
                        predicate={params => {
                            return (
                                params.tableRow.type === TableFilterRow.ROW_TYPE &&
                                leftColumns.find(item => item === params.tableColumn.name)
                            );
                        }}
                    >
                        {params => (
                            <TemplatePlaceholder
                                params={{...params, style: {...params.style, zIndex: 400}}}
                            />
                        )}
                    </Template> }
                </GridBootstrap>
                {
                    loading &&
                    <Dimmer active inverted>
                        <Loader />
                    </Dimmer>
                }
            </Card>
        );
    }
}

export default withRouter(withQueryString(ElementTableRemote));
