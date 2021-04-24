// Basics
import React from 'react';
import ReactDOM from 'react-dom';

// Views
import TableElement from '../../../../elements/Element/Table/SimpleTableElement';
import AtomPageHeading from '../../../../elements/Element/PageHeading';

import _ from 'lodash';

class SectionNominatedBank extends React.Component {

    render() {
        const { dataList } = this.props;
        //Table props
        const tableProps = {
            loading: false,
            columns: [
                {
                    name: 'bank_name',
                    title: 'Bank Name',
                    getCellValue: row => row.bank_name,
                },
                {
                    name: 'verification_status',
                    title: 'Status',
                    getCellValue: row => row.basics_verification_status.name,
                },
                {
                    name: 'swift',
                    title: 'SWIFT# or ABA Code',
                    getCellValue: row => row.swift,
                },
                {
                    name: 'beneficiary_account_number',
                    title: 'Beneficiary Acc No',
                    getCellValue: row => row.beneficiary_account_number,
                },
                {
                    name: 'beneficiary_account_name',
                    title: 'Acc Name',
                    getCellValue: row => row.beneficiary_account_name,
                },
                {   name: 'account_holder_address', 
                    title: 'Address', 
                    getCellValue: row => row.account_holder_address,
                },
            ],
            tableColumnExtensions: [
                { columnName: 'bank_name',sortingEnabled: false, filteringEnabled: false},
                { columnName: 'verification_status',sortingEnabled: false , filteringEnabled: false},
                { columnName: 'swift',sortingEnabled: false ,filteringEnabled: false },
                { columnName: 'beneficiary_account_number',sortingEnabled: false,filteringEnabled: false },
                { columnName: 'beneficiary_account_name',sortingEnabled: false, filteringEnabled: false},
                { columnName: 'account_holder_address',sortingEnabled: false, filteringEnabled: false },
            ],
            rowSelectorID: 'current_node_id',
            parentSelectorID: 'parent_node_id',
            tableTreeColumn: 'id',
            minimalView: true,
        };

        return (
            <div>
                <AtomPageHeading
                    title="Nominated Bank Accounts"
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

export default SectionNominatedBank;
