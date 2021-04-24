// Basics
import React from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

// Libraries
import { firstRun } from '../../../../custom/Libraries/Page';
import i18n from '../../../../i18n';

// Views
import ElementContainer from '../../../../elements/Element/Container';
import ElementTableRemote from '../../../../elements/Element/TableRemote/TableRemote';
import DateRangePickerWrapper from '../../../../elements/Element/DateRangePickerWrapper/DateRangePickerWrapper';
import withDateRangeFilter from '../../../../elements/Element/DateRangePickerWrapper/WithDateRangeFilter';

class Page extends React.Component {

    constructor(props) {
        super(props);

        //First run
        firstRun(props);
    }

    render() {
        const {
            dateRangeFilters,
            fundsHistory,
            onDateFilter,
            userID
        } = this.props;

        //Funds history data
        let fundsHistoryData = !isEmpty(fundsHistory) && fundsHistory.hasOwnProperty('data') ? fundsHistory.data : [];

        //Table props
        const tableProps = {
            columns: [
                { name: 'current_node_id', title: '#ID' },
                { name: 'account_number', title: i18n.t('nav.header.links.accountnumber.title')},
                { name: 'transaction_type', title: i18n.t('nav.header.links.type.title')},
                { name: 'transaction_amount', title: i18n.t('nav.header.links.amount.title')},
                { name: 'transaction_currency', title: i18n.t('nav.header.links.currency.title')},
                { name: 'description', title:  i18n.t('nav.header.links.description.title')},
                { name: 'created_at', title: i18n.t('nav.header.links.transactiondate.title')},
            ],
            tableColumnExtensions: [
                { columnName: 'current_node_id' },
                { columnName: 'account_number', sortingEnabled: false },
                { columnName: 'transaction_type', sortingEnabled: false },
                { columnName: 'transaction_amount' },
                { columnName: 'transaction_currency', sortingEnabled: false },
                { columnName: 'description', sortingEnabled: false, filteringEnabled: false },
                { columnName: 'created_at', filteringEnabled: false },
            ],
            columnBands: [
                {
                    title: 'Account',
                    children: [
                        { columnName: 'current_node_id' },
                        { columnName: 'account_number' },
                    ],
                },
                {
                    title: 'Transaction',
                    children: [
                        { columnName: 'transaction_type' },
                        { columnName: 'transaction_amount' },
                        { columnName: 'transaction_currency' },
                        { columnName: 'description' },
                        { columnName: 'created_at' },
                    ],
                },
            ],
            currencyColumns: ['transaction_amount'],
            onlyContainsColumns: ['transaction_type'],

            //Filters
            dateRangeFilters,

            //Defaults
            defaultSorting: [{
                columnName: "current_node_id",
                direction: "desc"
            }],
            defaultHiddenColumnNames: ['description'],

            apiUrl: 'user/' + userID + '/funding/funds-history',
            rowSelectorID: 'current_node_id',
            parentSelectorID: 'parent_node_id',
            tableTreeColumn: '',
        };

        return (
            <ElementContainer
                content={[
                    <DateRangePickerWrapper
                        onInputChange={onDateFilter}
                    />,
                    <ElementTableRemote
                        rows={fundsHistoryData}
                        tableProps={tableProps}
                        userID={userID}
                    />
                ]}
                title={i18n.t('nav.header.links.fundshistory.title')}              
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userID : state.auth.user.id,
        fundsHistory : state.data.fundsHistory
    }
};

export default connect(mapStateToProps)(withDateRangeFilter(Page));
