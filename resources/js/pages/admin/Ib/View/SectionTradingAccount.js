// Basics
import React from 'react';

// Views
import TableElement from '../../../../elements/Element/Table/Table';
import AtomPageHeading from '../../../../elements/Element/PageHeading';

class SectionTradingAccount extends React.Component {

    render() {
        const { dataList } = this.props;

        //Table props
        const tableProps = {
            loading: false,
            columns: [
                {
                    name: 'account_number',
                    title: 'Account Number',
                    getCellValue: row => row.ib_rebate_account.account_number
                },
                {
                    name: 'platform',
                    title: 'Platform',
                    getCellValue: row => row.ib_rebate_account.basics_trading_platform.pretty_code
                },
                {
                    name: 'currency',
                    title: 'Currency',
                    getCellValue: row => row.ib_rebate_account.basics_currency.pretty_code
                },
                {
                    name: 'commission_level',
                    title: 'Commission Level',
                    getCellValue: row => row.ib_rebate_account.basics_rebate_commission_level.name
                },
                {
                    name: 'created_at',
                    title: 'Created At',
                    getCellValue: row => row.created_at_readable
                }
            ],
            tableColumnExtensions: [
                { columnName: 'account_number', width: 160 },
                { columnName: 'platform' },
                { columnName: 'currency' },
                { columnName: 'commission_level', width: 160 },
                { columnName: 'created_at' },
            ],
            rowSelectorID: 'current_node_id',
            parentSelectorID: 'parent_node_id',
            tableTreeColumn: 'id',
            minimalView: true
        };

        return (
            <div>
                <AtomPageHeading
                    title="Trading accounts"
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

export default SectionTradingAccount;
