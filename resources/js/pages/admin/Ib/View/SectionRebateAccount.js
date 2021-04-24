// Basics
import React from 'react';
import { connect } from 'react-redux';
import {
    Link,
    withRouter
} from 'react-router-dom';
import {
    Button,
    Icon
} from 'semantic-ui-react';

// Utilities
import {
    assignIn,
    get,
    size
} from 'lodash';

// Views
import TableElement from '../../../../elements/Element/Table/Table';
import AtomPageHeading from '../../../../elements/Element/PageHeading';

// Configs
import { ConfigAppPageAdmin } from '../../../../custom/Configs/PageAdmin';

// Libraries
import { getTableRowActions } from '../../../../elements/Element/TableRemote/ActionButton/Library';
import { dataGetTableAvailableResourceActions } from '../../../../custom/Libraries/Data';
import { sprintf } from '../../../../custom/Libraries/Utility';

// Actions
import { adminIbDetailRebateAccountRemove } from '../../../../store/actions/admin';

// Views
import ActionButton from '../../../../elements/Element/TableRemote/ActionButton/ActionButton';

// Page configs
const {
    adminIbRebateAccountAdd,
    adminIbRebateAccountCommissionLevel,
    adminGroupView,
    adminTransactionCashAdjustmentAdd
} = ConfigAppPageAdmin;

class SectionRebateAccount extends React.Component {

    constructor(props) {
        super(props);

        // Bindings
        this.handleRebateAccountRemove = this.handleRebateAccountRemove.bind(this);
    }

    handleRebateAccountRemove(additionalData) {
        const { dispatch } = this.props;

        // Getting ids
        const ibID = get(additionalData, 'ibId');
        const rebateID = get(additionalData, 'rebateId');

        // If ids present
        if (ibID && rebateID) {
            dispatch(adminIbDetailRebateAccountRemove(ibID, rebateID));
        }
    }

    render() {
        const {
            dataList,
            dispatch,
            fromPage,
            hasPermissionToStore = false,
            ibId,
            location
        } = this.props;

        // Table columns
        const tableColumns = [
            {
                name: 'account_code',
                title: 'Account Code',
            },
            {
                name: 'currency',
                title: 'Currency',
                getCellValue: row => row.basics_currency.pretty_code
            },
            {
                name: 'platform',
                title: 'Platform',
                getCellValue: row => row.basics_trading_platform.pretty_name
            },
            {
                name: 'commission_level',
                title: 'Commission Level',
                getCellValue: row => row.basics_rebate_commission_level.name
            },
            {
                name: 'created_at',
                title: 'Created At',
                getCellValue: row => row.created_at_readable
            },
            {
                name: 'actions',
                title: 'Actions',
                getCellValue: row => {

                    // Available actions
                    const showActions = dataGetTableAvailableResourceActions(get(row, 'available_resource_actions'));

                    // If no actions present
                    if (size(showActions) < 1) {
                        return null;
                    }

                    // Rebate account ID
                    const rowId = get(row, 'id');

                    // Return
                    return (
                        <ActionButton
                            actions={
                                getTableRowActions(
                                    showActions,
                                    {
                                        can_update_commission_level: {
                                            pathname: sprintf(
                                                adminIbRebateAccountCommissionLevel.routeWithoutParam,
                                                ibId,
                                                rowId
                                            ),
                                            state: { fromPage: location }
                                        },
                                        destroy: {
                                            callback: this.handleRebateAccountRemove
                                        },
                                        do_cash_adjustment: {
                                            pathname: adminTransactionCashAdjustmentAdd.routeWithoutParam + '/' + rowId,
                                            state: { fromPage: location }
                                        },
                                        show_linked_rebate_rate_table: {
                                            pathname: adminGroupView.routeWithoutParam + '/' + get(row, 'linked_rebate_rate_table_id'),
                                            state: { fromPage: location }
                                        }
                                    },
                                    dispatch,
                                    {
                                        ibId,
                                        rebateId: rowId,
                                    }
                                )
                            }
                            apiUrl='admin/ib/rebate-account-management/rebate-account'
                            tableRow={assignIn(row, { rowId, type: 'data' })}
                        />
                    )
                }
            },
        ];

        // Table configurations
        const tableProps = {
            loading: false,
            columns: tableColumns,
            tableColumnExtensions: [
                { columnName: 'account_code', width: 160 },
                { columnName: 'currency', width: 110 },
                { columnName: 'platform', width: 110 },
                { columnName: 'commission_level', width: 155 },
                { columnName: 'created_at' },
                { columnName: 'actions', sortingEnabled: false, filteringEnabled: false },
            ],
            defaultHiddenColumnNames: [],
            rowSelectorID: 'current_node_id',
            parentSelectorID: 'parent_node_id',
            tableTreeColumn: 'id',
            minimalView: true
        };

        return (
            <div>
                <AtomPageHeading
                    button={hasPermissionToStore ? (
                        <Button
                            as={Link}
                            to={{
                                pathname: sprintf(adminIbRebateAccountAdd.routeWithoutParam, ibId),
                                state: { fromPage }
                            }}
                            inverted
                            color='blue'
                            size='tiny'
                        >
                            <Icon name='plus' /> Add rebate account
                        </Button>
                    ) : null}
                    dividerClassName=''
                    title='Rebate accounts'
                    withDivider
                />
                <TableElement
                    tableProps={tableProps}
                    rows={dataList}
                />
            </div>
        );
    }
}

export default connect(null)(withRouter(SectionRebateAccount));
