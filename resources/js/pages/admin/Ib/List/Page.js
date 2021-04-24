// Basics
import React from 'react';
import {connect} from 'react-redux';
import {Label } from 'semantic-ui-react';

// Libraries
import {firstRun} from '../../../../custom/Libraries/Page';
import {getIBLeadVisibleUsers} from '../../../../custom/Libraries/App';
import i18n from '../../../../i18n';

// Views
import ElementContainer from '../../../../elements/Element/Container';
import ElementTableRemote from '../../../../elements/Element/TableRemote/TableRemote';
import ExportDateFilterButton from '../../../../elements/Element/ExportButton/ExportDateFilterButton';
import DateRangePickerWrapper from '../../../../elements/Element/DateRangePickerWrapper/DateRangePickerWrapper';
import withDateRangeFilter from '../../../../elements/Element/DateRangePickerWrapper/WithDateRangeFilter';
import {TableLinkViewFormatter} from '../../../../elements/Element/TableRemote/Helper';
import withTableRemote from '../../../../elements/Element/TableRemote/WithTableRemote';

// Constants
import {ConfigAppPageAdmin} from '../../../../custom/Configs/PageAdmin';

class Page extends React.Component {

    constructor(props) {
        super(props);

        //First run
        firstRun(props, null, true);
    }

    render() {
        const {
            dateRangeFilters,
            handleApiResponseCallback,
            location,
            onDateFilter,
            showExportButton,
            userID
        } = this.props;

        //Table props
        const tableProps = {
            columns: [
                {
                    name: 'current_node_id',
                    title: '#ID',
                    getCellValue: row => TableLinkViewFormatter(row.id, ConfigAppPageAdmin.adminIbList.route, {fromPage: location})
                },
                { name: 'full_name', title:i18n.t('nav.header.links.username.title'), getCellValue: row => (row.full_name) },
                { name: 'country_name', title:i18n.t('nav.header.links.country.title'), getCellValue: row => (row.country ? row.country.display_name : '') },
                { name: 'email', title:i18n.t('nav.header.links.email.title')},
                { name: 'entity_type', title:i18n.t('nav.header.links.entity.title'), getCellValue: row => (row.ib_metadata ? row.ib_metadata.entity_type.name : '') },
                { name: 'referrer_rebate_account_code', title:i18n.t('nav.header.links.agentcode.title'), getCellValue: row => (row.ib_metadata.referrer_rebate_account_code ? row.ib_metadata.referrer_rebate_account_code : 'N/A') },
                { name: 'user_level', title: i18n.t('nav.header.links.level.title'), getCellValue: row => (row.user_level ? row.user_level.name : '') },
                { name: 'status', title:i18n.t('nav.header.links.status.title'), getCellValue: row => {

                    //IB Status
                    let IBStatus = '';
                    let IbStatusColor = '';
                    if (row.hasOwnProperty('user_first_verified_address') && !_.isEmpty(row.user_first_verified_address)) {
                        let basics_verification_statuses = ['Pending', 'Verified', 'Declined'];
                        IBStatus = basics_verification_statuses[row.user_first_verified_address.verification_status_id-1];
                        IbStatusColor = (row.user_first_verified_address.verification_status_id==1)? "blue" : (row.user_first_verified_address.verification_status_id==2)? "green" :  "orange";
                    }else{
                        if(row.hasOwnProperty('user_addresses') && !_.isEmpty(row.user_addresses.data)){
                            _.forEach(row.user_addresses.data, function(value, key) {
                                let basics_verification_statuses = ['Pending', 'Verified', 'Declined'];
                                IBStatus = basics_verification_statuses[value.verification_status_id-1];
                                IbStatusColor = (value.verification_status_id==1)? "blue" : (value.verification_status_id==2)? "green" :  "orange";
                            });
                        }
                    }
                    IBStatus =  !_.isEmpty(IBStatus)?IBStatus: "Declined";
                    IbStatusColor = !_.isEmpty(IbStatusColor)?IbStatusColor: "orange";
                    // Return
                    return (
                        <Label as='a' basic size="mini" color={IbStatusColor}>
                            {IBStatus}
                        </Label>
                    )
                }},
                { name: 'account_code', title:i18n.t('nav.header.links.accountcode.title'), getCellValue: row => (row.ib_metadata ? row.ib_metadata.account_code : '') },
                { name: 'created_at', title:i18n.t('nav.header.links.registrationdate.title')},
            ],
            tableColumnExtensions: [
                { columnName: 'current_node_id', width: 100 },
                { columnName: 'full_name', sortingEnabled: false },
                { columnName: 'country_name', sortingEnabled: false },
                { columnName: 'email', sortingEnabled: false },
                { columnName: 'entity_type', sortingEnabled: false },
                { columnName: 'referrer_rebate_account_code', sortingEnabled: false },
                { columnName: 'user_level', sortingEnabled: false },
                { columnName: 'status', sortingEnabled: false, filteringEnabled: false },
                { columnName: 'account_code', sortingEnabled: false },
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
                        { columnName: 'full_name' },
                        { columnName: 'country_name' },
                    ],
                },
                {
                    title: 'Contact',
                    children: [
                        { columnName: 'email' },
                        { columnName: 'phone_number' },
                    ],
                },
                {
                    title: 'IB',
                    children: [
                        { columnName: 'entity_type' },
                        { columnName: 'referrer_rebate_account_code' },
                        { columnName: 'user_level' },
                        { columnName: 'account_code' },
                    ],
                },
                {
                    title: 'Account',
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
            defaultHiddenColumnNames: [ 'entity_type', 'account_code'],

            apiUrl: 'admin/ib/list',
            rowSelectorID: 'current_node_id',
            parentSelectorID: 'parent_node_id',
            tableTreeColumn: '',

            showActionColumns: false,
        };

        let columnValue = { name: 'phone_number', title:i18n.t('nav.header.links.phone.title'), getCellValue: row => (row.phone_code ? ('+' + row.phone_code.phone_code + '-') : '') + row.phone };
        let columnExtensionValue=  { columnName: 'phone_number', sortingEnabled: false, filteringEnabled: false };
        let hiddenColumnValue = 'phone_number'

        let ibLeadVisibleUsers = getIBLeadVisibleUsers().map(i=>Number(i));      
        
        if(ibLeadVisibleUsers.includes(userID)){
            tableProps.columns.push(columnValue);
            tableProps.tableColumnExtensions.push(columnExtensionValue);
            tableProps.defaultHiddenColumnNames.push(hiddenColumnValue);
        }

        return (
            <ElementContainer
                content={[
                    <DateRangePickerWrapper
                        onInputChange={onDateFilter}
                    />,
                    <ElementTableRemote
                        handleApiResponseCallback={handleApiResponseCallback}
                        tableProps={tableProps}
                        userID={userID}
                    />
                ]}
                contentPre={showExportButton ? [
                    <ExportDateFilterButton
                        tableProps={tableProps}
                        apiUrl={'admin/ib/list/export'}
                    />
                ] : null}
                hasExportButton={showExportButton}
                title={i18n.t('nav.header.links.iblist.title')}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userID : state.auth.user.id
    }
};

export default connect(mapStateToProps)(withDateRangeFilter(withTableRemote(Page)));
