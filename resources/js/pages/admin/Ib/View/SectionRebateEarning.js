// Basics
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Views
import TableElement from '../../../../elements/Element/Table/Table';
import AtomPageHeading from '../../../../elements/Element/PageHeading';

// Configs
import { ConfigAppPageAdmin } from '../../../../custom/Configs/PageAdmin';

// Libraries
import { TableLinkViewFormatter } from '../../../../elements/Element/TableRemote/Helper';

// Utilities
import { toLower } from 'lodash';

// Page configs
const {
    adminTransactionCashAdjustmentList,
    adminTransactionTransferList,
    adminTransactionWithdrawalList
} = ConfigAppPageAdmin;

// Column formatter
const spendColumnFormatter = ({ accountCode, fromPage, pageConfig, readableText }) => {

    return TableLinkViewFormatter(
        '',
        pageConfig.route,
        { fromPage },
        readableText,
        false,
        `?rebate_account_code=${toLower(accountCode)}`
    );
};

class SectionRebateEarning extends React.Component {

    render() {
        const {
            dataList,
            fromPage
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
                title: 'Total Cash Adjuments',
                getCellValue: row => (
                    spendColumnFormatter({
                        accountCode: row.account_code,
                        fromPage,
                        pageConfig: adminTransactionCashAdjustmentList,
                        readableText: row.spends.methods.cash_adjustment.readable
                    })
                )
            },
            {
                name: 'spends_transfer',
                title: 'Total Transfers',
                getCellValue: row => (
                    spendColumnFormatter({
                        accountCode: row.account_code,
                        fromPage,
                        pageConfig: adminTransactionTransferList,
                        readableText: row.spends.methods.transfer.readable,
                    })
                )
            },
            {
                name: 'spends_withdrawal',
                title: 'Total Withdrawals',
                getCellValue: row => (
                    spendColumnFormatter({
                        accountCode: row.account_code,
                        fromPage,
                        pageConfig: adminTransactionWithdrawalList,
                        readableText: row.spends.methods.withdrawal.readable,
                    })
                )
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
                { columnName: 'balance' },
                { columnName: 'earnings_rebate', width: 160 },
                { columnName: 'spends_cash_adjustment', width: 170 },
                { columnName: 'spends_transfer' },
                { columnName: 'spends_withdrawal' },
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
                    title="Rebate earnings"
                    withDivider
                    dividerClassName=""
                />
                <TableElement
                    tableProps={tableProps}
                    rows={dataList}
                />
            </div>
        );
    }
}

export default connect(null)(withRouter(SectionRebateEarning));
