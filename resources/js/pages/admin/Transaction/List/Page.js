// Basics
import React from 'react';
import { connect } from 'react-redux';

// Libraries
import { firstRun } from '../../../../custom/Libraries/Page';
import { getTableRowActions } from '../../../../elements/Element/TableRemote/ActionButton/Library';
import i18n from '../../../../i18n';
// Utilities
import {
    assignIn,
    concat,
    findIndex,
    forEach,
    get,
    reverse,
    size
} from 'lodash';

// View
import ElementContainer from '../../../../elements/Element/Container';
import ElementTableRemote from '../../../../elements/Element/TableRemote/TableRemote';
import DateRangePickerWrapper from '../../../../elements/Element/DateRangePickerWrapper/DateRangePickerWrapper';
import withDateRangeFilter from '../../../../elements/Element/DateRangePickerWrapper/WithDateRangeFilter';
import ActionButton from '../../../../elements/Element/TableRemote/ActionButton/ActionButton';

// Constants
import { ConfigAppPageAdmin } from '../../../../custom/Configs/PageAdmin';

// Page configs
const {
    adminTransactionTransferList,
    adminTransactionWithdrawalList,
    adminTransactionCashAdjustmentList,
} = ConfigAppPageAdmin;

// API URL
const apiURL = 'admin/ib/fund-management/transaction';

class Page extends React.Component {

    constructor(props) {
        super(props);

        //First run
        firstRun(props, null, true);

        //State
        this.state = {
            shouldTableRefresh: false,
        };

        // Bindings
        this.forceRefreshTable = this.forceRefreshTable.bind(this);
    }

    componentDidUpdate(prevProps) {
        const { transactionStatus } = this.props;

        // If transaction status updated
        if (prevProps.transactionStatus !== transactionStatus) {
            this.forceRefreshTable(true);
        }
    }

    forceRefreshTable(shouldRefresh = false) {
        this.setState({
            shouldTableRefresh: shouldRefresh,
        })
    }

    render() {
        const {
            dispatch,
            dateRangeFilters,
            location,
            onDateFilter,
            transactionStatus,
            userID
        } = this.props;
        const { shouldTableRefresh } = this.state;

        // Page type (transfers or withdrawals)
        let pageType = {
            pageConfig: adminTransactionTransferList,
            title: i18n.t('nav.header.links.transferrequest.title'),
            type: 1,
        };

        // If withdrawal page
        if (get(location, 'pathname') === adminTransactionWithdrawalList.route) {
            pageType = {
                pageConfig: adminTransactionWithdrawalList,
                title: i18n.t('nav.header.links.withdrawalrequests.title'),
                type: 4,
            };
        }

        // If cash adjustment page
        if (get(location, 'pathname') === adminTransactionCashAdjustmentList.route) {
            pageType = {
                pageConfig: adminTransactionCashAdjustmentList,
                title:i18n.t('nav.header.links.cashadjustment.title'),
                type: 8,
            };
        }

        // Table columns
        let tableColumns = [
            {
                name: 'current_node_id',
                title: '#ID',
            },
            {
                name: 'ib_name',
                title: i18n.t('nav.header.links.ibname.title'),
                getCellValue: row => (get(row, 'ib_rebate_account.user.full_name'))
            },
            {
                name: 'rebate_account_code',
                title: i18n.t('nav.header.links.rebateaccount.title'),
                getCellValue: row => (get(row, 'ib_rebate_account.account_code'))
            },
            {
                name: 'country_name',
                title: i18n.t('nav.header.links.country.title'),
                getCellValue: row => (get(row, 'ib_rebate_account.user.country.display_name'))
            },
            {
                name: 'request_date',
                title: i18n.t('nav.header.links.requestdate.title'),
                getCellValue: row => (get(row, 'created_at_readable'))
            },
            {
                name: 'transaction_status',
                title: i18n.t('nav.header.links.status.title'),
                getCellValue: row => {

                    // Find transaction status
                    const findTransaction = findIndex(transactionStatus, get(row, 'id'));

                    // If transaction status found
                    if (findTransaction !== -1) {
                        return findTransaction === 'approve' ? 'Approved' : 'Rejected';
                    }

                    // Return
                    return get(row, 'transaction_status');
                }
            },
            {
                name: 'actions',
                title: i18n.t('nav.header.links.actions.title'),
                getCellValue: row => {

                    // Available resource actions
                    const availableResourceActions = get(row, 'available_resource_actions');

                    // If no actions present
                    if (!availableResourceActions) {
                        return null;
                    }

                    // Default
                    let showActions = [];

                    // Iterate all available actions
                    forEach(availableResourceActions, function (actionRow, actionIndex) {

                        // If not approve
                        if (actionRow && (actionIndex !== 'approve')) {
                            showActions = concat(showActions, [actionIndex]);
                        }
                    });

                    // If no actions present
                    if (size(showActions) < 1) {
                        return null;
                    }

                    // Return
                    return (
                        <ActionButton
                            actions={
                                getTableRowActions(
                                    reverse(showActions),
                                    {
                                        view: {
                                            pathname: pageType.pageConfig.route + '/' + get(row, 'id'),
                                            state: { fromPage: location }
                                        }
                                    },
                                    dispatch
                                )
                            }
                            apiUrl={apiURL}
                            isTransactionPage
                            tableRow={assignIn(row, { rowId: get(row, 'id'), type: 'data' })}
                        />
                    )
                }
            },
        ];

        // If cash adjustment
        if (pageType.type === 8) {

            // Append another column for transaction type
            tableColumns = [
                ...tableColumns.slice(0, 4),
                {
                    name: 'transaction_type',
                    title: 'Transaction type',
                    getCellValue: row => (get(row, 'basics_account_journal_transaction_type.name'))
                },
                ...tableColumns.slice(4)
            ];
        }

        //Table props
        const tableProps = {
            columns: tableColumns,
            tableColumnExtensions: [
                { columnName: 'current_node_id', width: 110 },
                { columnName: 'ib_name', sortingEnabled: false },
                { columnName: 'rebate_account_code', sortingEnabled: false, width: 150 },
                { columnName: 'country_name', sortingEnabled: false },
                { columnName: 'request_date', sortingEnabled: false },
                { columnName: 'transaction_status', sortingEnabled: false },
                { columnName: 'actions', sortingEnabled: false, filteringEnabled: false, width: 100 },
            ],

            //Filters
            dateRangeFilters,

            //Fixed columns
            leftColumns: ['current_node_id'],
            rightColumns: ['actions'],

            //Defaults
            defaultSorting: [{
                columnName: "current_node_id",
                direction: "desc"
            }],
            defaultHiddenColumnNames: [
                'ib_name',
                'country_name'
            ],

            apiUrl: `${apiURL}?basics_reference_class_id=${pageType.type}`,
            rowSelectorID: 'current_node_id',
            parentSelectorID: 'parent_node_id',
            tableTreeColumn: '',

            showActionColumns: false,
            forceRefresh: {
                shouldTableRefresh: shouldTableRefresh,
                callback: this.forceRefreshTable
            },
        };

        return (
            <ElementContainer
                content={[
                    <DateRangePickerWrapper
                        onInputChange={onDateFilter}
                    />,
                    <ElementTableRemote
                        tableProps={tableProps}
                        userID={userID}
                    />
                ]}
                title={pageType.title}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userID: state.auth.user.id,
        transactionStatus: state.admin.transactionStatus
    };
};

export default connect(mapStateToProps)(withDateRangeFilter(Page));
