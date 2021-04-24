// Basics
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Views
import TableElement from '../../../../elements/Element/Table/SimpleTableElement';
import AtomPageHeading from '../../../../elements/Element/PageHeading';

// Utilities
import _ from 'lodash';
import { toLower } from 'lodash';

class RebateEarning extends React.Component {

    render() {
        const {
            userData,
        } = this.props;

        let userRebateDetails = {};
        if (typeof userData.user_rebate_earnings !== 'undefined' && userData.hasOwnProperty('user_rebate_earnings') && !_.isEmpty(userData.user_rebate_earnings.data)) {
            userRebateDetails = userData.user_rebate_earnings.data;
        }

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
                name: 'balance',
                title: 'Current Balance',
                getCellValue: row => row.balance.readable
            },
            {
                name: 'earnings_rebate',
                title: 'Total Rebate Earned',
                getCellValue: row => row.earnings.methods.rebate.readable
            },
            {
                name: 'spends_cash_adjustment',
                title: 'Total Cash Adjustments',
                getCellValue: row => row.spends.methods.cash_adjustment.readable
            },
            {
                name: 'spends_transfer',
                title: 'Total Transfers',
                getCellValue: row => row.spends.methods.transfer.readable
            },
            {
                name: 'spends_withdrawal',
                title: 'Total Withdrawals',
                getCellValue: row => row.spends.methods.withdrawal.readable
            },
        ];

        // Table configurations
        const tableProps = {
            columns: tableColumns,
            tableColumnExtensions: [
                { columnName: 'account_code' },
                { columnName: 'currency'},
                { columnName: 'platform'},
                { columnName: 'balance' },
                { columnName: 'earnings_rebate' },
                { columnName: 'spends_cash_adjustment' },
                { columnName: 'spends_transfer' },
                { columnName: 'spends_withdrawal' },
            ],
            defaultHiddenColumnNames: [],
            rowSelectorID: 'current_node_id',
            parentSelectorID: 'parent_node_id',
            tableTreeColumn: 'id',
            minimalView: true
        };

        if(!_.isEmpty(userRebateDetails)){
            return (
                <div>
                    <AtomPageHeading
                        title="Rebate earnings"
                    />
                    <TableElement
                        tableProps={tableProps}
                        rows={userRebateDetails}
                    />
                </div>
            );
        }else{
            return (
                <div>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated : state.auth.isAuthenticated,
        userData : state.data.user,
    }
};

export default (connect(mapStateToProps)(RebateEarning));
