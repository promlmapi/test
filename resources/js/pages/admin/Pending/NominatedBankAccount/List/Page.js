// Basics
import React from 'react';
import { connect } from 'react-redux';

// Libraries
import { firstRun } from '../../../../../custom/Libraries/Page';
import i18n from '../../../../../i18n';

// Views
import ElementContainer from '../../../../../elements/Element/Container';
import ElementTableRemote from '../../../../../elements/Element/TableRemote/TableRemote';
import DateRangePickerWrapper from '../../../../../elements/Element/DateRangePickerWrapper/DateRangePickerWrapper';
import withDateRangeFilter from '../../../../../elements/Element/DateRangePickerWrapper/WithDateRangeFilter';
import { TableLinkViewFormatter } from '../../../../../elements/Element/TableRemote/Helper';

// Configs
import { ConfigAppPageAdmin } from '../../../../../custom/Configs/PageAdmin';

class Page extends React.Component {

    constructor(props) {
        super(props);

        //First run
        firstRun(props, null, true);
    }

    render() {
        const {
            dateRangeFilters,
            location,
            onDateFilter,
            userID
        } = this.props;

        //Table props
        const tableProps = {
            columns: [
                { name: 'current_node_id', title: '#ID', getCellValue: row => TableLinkViewFormatter(row.id, ConfigAppPageAdmin.adminPendingNbaList.route, { fromPage: location }) },
                { name: 'user_name', title:i18n.t('nav.header.links.username.title'), getCellValue: row => (row.user ? row.user.full_name : '') },
                { name: 'user_email', title:i18n.t('nav.header.links.email.title'), getCellValue: row => (row.user ? row.user.email : '') },
                { name: 'bank_country', title:i18n.t('nav.header.links.country.title'), getCellValue: row => row.country_name },
                { name: 'bank_name', title:i18n.t('nav.header.links.bankname.title')},
                { name: 'beneficiary_account_number', title:i18n.t('nav.header.links.accountnumber.title')},
                { name: 'created_at', title:i18n.t('nav.header.links.submissiondate.title')},
            ],
            tableColumnExtensions: [
                { columnName: 'current_node_id', width: 110 },
                { columnName: 'user_name', sortingEnabled: false },
                { columnName: 'user_email', sortingEnabled: false },
                { columnName: 'bank_country', sortingEnabled: false, filteringEnabled: false },
                { columnName: 'bank_name', sortingEnabled: false },
                { columnName: 'beneficiary_account_number', sortingEnabled: false },
                { columnName: 'created_at', filteringEnabled: false },
            ],
            columnBands: [
                {
                    title: '',
                    children: [
                        { columnName: 'current_node_id' },
                    ],
                },
                {
                    title: 'User',
                    children: [
                        { columnName: 'user_name' },
                        { columnName: 'user_email' },
                    ],
                },
                {
                    title: 'Bank',
                    children: [
                        { columnName: 'bank_country' },
                        { columnName: 'bank_name' },
                        { columnName: 'beneficiary_account_number' },
                    ],
                },
                {
                    title: 'Submission',
                    children: [
                        { columnName: 'created_at' },
                    ],
                },
            ],

            //Filters
            dateRangeFilters,

            //Fixed columns
            leftColumns: ['current_node_id'],
            rightColumns: [],

            //Defaults
            defaultSorting: [{
                columnName: "current_node_id",
                direction: "desc"
            }],
            // defaultHiddenColumnNames: ['description'],

            apiUrl: 'admin/user/nominated-bank-account',
            rowSelectorID: 'current_node_id',
            parentSelectorID: 'parent_node_id',
            tableTreeColumn: '',

            showActionColumns: false,
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
                title={i18n.t('nav.header.links.pendingnominatedbankaccounts.title')}               
                
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userID: state.auth.user.id
    }
};

export default connect(mapStateToProps)(withDateRangeFilter(Page));
