import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import { Card } from 'reactstrap';
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';
import {
    Grid as GridBootstrap, TableBandHeader,
    Table, TableHeaderRow, Toolbar, TableColumnVisibility, ColumnChooser
} from '@devexpress/dx-react-grid-bootstrap4';

const ROOT_ID = '';
const getRowId = row => row['current_node_id'];

class ElementTable extends React.Component {

    constructor(props) {

        super(props);

        //Props
        const {columns, columnBands, apiUrl, tableColumnExtensions, defaultHiddenColumnNames, tableTreeColumn, rowSelectorID, parentSelectorID, leftColumns, rightColumns, loading = false, minimalViewWhenNoData = true, minimalView = false} = props['tableProps'];

        //Setting initial state
        this.state = {
            columns: columns,
            columnBands: columnBands,
            pageSizes: [10, 20, 30],

            //Basics
            tableColumnExtensions: tableColumnExtensions,
            defaultHiddenColumnNames: defaultHiddenColumnNames,
            tableTreeColumn: tableTreeColumn,
            rowSelectorID: rowSelectorID,
            parentSelectorID: parentSelectorID,
            expandedRowIds: [],
            loading: loading,
            grouping: [],
            minimalViewWhenNoData: minimalViewWhenNoData,
            minimalView: minimalView,

            //Features
            filters: [],
            sorting: [],
            totalCount: 0,
            pageSize: 10,
            currentPage: 0,

            //Fixed columns
            leftColumns: leftColumns,
            rightColumns: rightColumns,

            //Server
            apiUrl: apiUrl,
        };

        //Binding
        this.getChildRows = this.getChildRows.bind(this);
    }

    componentDidMount() {
        const {rows}    = this.props;

        //Adding CSS class name to table
        const classList = ReactDOM.findDOMNode(this).querySelector('.table-responsive').classList;
        classList.add('tree-table');
        // classList.add('table-striped');

        //Only for first time
        if (!rows) {
            this.setState({
                loading: true,
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const {loading}   = this.state;
        const {rows}      = this.props;
        const loadingProp = this.props.tableProps.loading;

        //Only if props or state has updated for loading
        if (prevProps.tableProps.loading !== loadingProp) {

            //Setting it to true
            this.setState({
                loading: loadingProp,
            });
        }

        //Only if props or state has updated
        if ( prevProps.rows !== rows && loading ) {

            //Setting it to false
            this.setState({
                loading: false,
            });
        }
    }

    getChildRows(row, rootRows) {

        //Getting props
        const {rowSelectorID, parentSelectorID} = this.props.tableProps;

        //Check if row has child
        const childRows = rootRows.filter(
            r => r[parentSelectorID] == (row ? row[rowSelectorID] : ROOT_ID)
        );
        if (childRows.length) {
            return childRows;
        }
        return row && row['has_children'] ? [] : null;
    };

    render() {
        const {
            columns, tableColumnExtensions,
            defaultHiddenColumnNames, columnBands,
            minimalViewWhenNoData, minimalView
        } = this.state;
        const { rows } = this.props;

        // Checking if no data present.
        const noData = _.size(rows) < 1;

        // If to show minimal view
        let isMinimalView = minimalViewWhenNoData && noData;

        // If not minimal view because of no data
        if (!isMinimalView && minimalView) {
            isMinimalView = true;
        }

        return (
            <Card
                className="tree-table-card"
            >
                <GridBootstrap
                    rows={!_.isEmpty(rows) ? rows : []}
                    columns={columns}
                >
                <Table
                    columnExtensions={tableColumnExtensions}
                />
                <TableColumnVisibility
                    defaultHiddenColumnNames={defaultHiddenColumnNames}
                />
                <TableHeaderRow
                    showSortingControls={!isMinimalView}
                />
                <TableBandHeader
                    columnBands={!_.isEmpty(columnBands) ? [] : []}
                />
                <Toolbar />
                <ColumnChooser />
                </GridBootstrap>
            </Card>
        );
    }
}

export default ElementTable;
