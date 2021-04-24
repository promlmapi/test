// Basics
import React from 'react';
import { connect } from 'react-redux';
import { Label, Divider } from 'semantic-ui-react';
import { get } from 'lodash';

// Libraries
import { firstRun } from '../../../../../custom/Libraries/Page';
import i18n from '../../../../../i18n';

// Views
import ElementContainer from '../../../../../elements/Element/Container';
import ElementTableRemote from '../../../../../elements/Element/TableRemote/TableRemote';
import ExportDateAdvancedFilterButton from '../../../../../elements/Element/ExportButton/ExportDateAdvancedFilterButton';
import DateRangePickerWrapper from '../../../../../elements/Element/DateRangePickerWrapper/DateRangePickerWrapper';
import withDateRangeFilter from '../../../../../elements/Element/DateRangePickerWrapper/WithDateRangeFilter';
import { TableLinkViewFormatter } from '../../../../../elements/Element/TableRemote/Helper';
import Note from './Note';

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
            userID,
        } = this.props;

        //Table props
        const tableProps = {
            columns: [
                { name: 'current_node_id', title: '#ID', getCellValue: row => TableLinkViewFormatter(row.id, ConfigAppPageAdmin.adminPendingAddressList.route, { fromPage: location }) },
                { name: 'full_name', title:i18n.t('nav.header.links.username.title'), getCellValue: row => (row.user ? row.user.full_name : '') },
                { name: 'email', title:i18n.t('nav.header.links.email.title'), getCellValue: row => (row.user ? row.user.email : '') },
                { name: 'user_parent_code', title:i18n.t('nav.header.links.parentibcode.title'), getCellValue: row => get(row, 'user.ib_user_hierarchy.immediate_parent.ib_metadata.account_code', '') },
                { name: 'user_level', title: i18n.t('nav.header.links.userlevel.title'), getCellValue: row => get(row, 'user.user_level.name', '') },
                { name: 'city', title:i18n.t('nav.header.links.city.title')},
                { name: 'state', title:i18n.t('nav.header.links.state.title')},
                { name: 'country_name', title:i18n.t('nav.header.links.country.title')},
                { name: 'status', title:i18n.t('nav.header.links.status.title'), getCellValue: row => {

                    //IB Status
                    let IBStatus = '';
                    let IbStatusColor = '';
                    if (row.hasOwnProperty('verification_status') && !_.isEmpty(row.verification_status)) {
                        let basics_verification_statuses = ['Pending', 'Verified', 'Declined'];
                        IBStatus = basics_verification_statuses[row.verification_status.id-1];
                        IbStatusColor = (row.verification_status.id==1)? "blue" : (row.verification_status.id==2)? "green" :  "orange";
                    }
                    IBStatus        = !_.isEmpty(IBStatus)?IBStatus: "Declined";
                    IbStatusColor   = !_.isEmpty(IbStatusColor)?IbStatusColor: "orange";
                    // Return
                    return (
                        <Label as='a' basic size='mini' color={IbStatusColor}>
                            {IBStatus}
                        </Label>
                    )
                }},
                { name: 'sales_status', title:i18n.t('nav.header.links.salesstatus.title'), getCellValue: row => {

                    //IB Status
                    let Status = '';
                    let IBSalesStatus = '';
                    let IBSaleStatusColor = '';
                    if (row.hasOwnProperty('user') && !_.isEmpty(row.user)) {
                        /**
                         * Sales status & User meta data
                         */
                        let userdata = row.user;
                        let basicSalesStatus = row.sales_status;
                        if ( typeof userdata.ib_metadata !='undefined' && userdata.hasOwnProperty('ib_metadata') && !_.isEmpty(userdata.ib_metadata)) {

                            Status =  !_.isEmpty(userdata.ib_metadata.sales_status)?userdata.ib_metadata.sales_status : 'not_yet_review';
                            //Sales Status
                            let salesStatus = {};
                            let salesStatusColor = {};
                            if((typeof basicSalesStatus != 'undefined') && row.hasOwnProperty('sales_status')  && !_.isEmpty(basicSalesStatus) ){
                                _.forEach(basicSalesStatus, function(value) {
                                    //Merge rules
                                    _.assign(salesStatus, {
                                        [value.code]: value.name,
                                    });
                                    _.assign(salesStatusColor, {
                                        [value.code]: value.color,
                                    });
                                });
                            }
                            IBSalesStatus       = salesStatus[Status]?      salesStatus[Status]      : salesStatus['not_yet_review'];
                            IBSaleStatusColor  = salesStatusColor[Status]? salesStatusColor[Status] : salesStatusColor['not_yet_review'];
                        }
                    }    
               
                    IBSalesStatus        = !_.isEmpty(IBSalesStatus)?IBSalesStatus: "Not yet Review";
                    IBSaleStatusColor   = !_.isEmpty(IBSaleStatusColor)?IBSaleStatusColor: "red";
                    // Return
                    return (
                        <Label as='a' size='tiny' basic color={IBSaleStatusColor}>
                            {IBSalesStatus}
                        </Label>
                    )
                }},
                { name: 'created_at', title:i18n.t('nav.header.links.submissiondate.title')},
            ],
            tableColumnExtensions: [
                { columnName: 'current_node_id', width: 110 },
                { columnName: 'full_name', sortingEnabled: false },
                { columnName: 'email', sortingEnabled: false },
                { columnName: 'user_parent_code', sortingEnabled: false },
                { columnName: 'user_level', sortingEnabled: false },
                { columnName: 'city', sortingEnabled: false },
                { columnName: 'state', sortingEnabled: false },
                { columnName: 'country_name', sortingEnabled: false },
                { columnName: 'status', sortingEnabled: false },
                { columnName: 'sales_status', sortingEnabled: false },
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
                        { columnName: 'email' },
                        { columnName: 'user_parent_code' },
                        { columnName: 'user_level' },
                    ],
                },
                {
                    title: 'Region',
                    children: [
                        { columnName: 'city' },
                        { columnName: 'state' },
                        { columnName: 'country_name' },
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
            rightColumns: ['actions_column'],

            //Defaults
            defaultSorting: [{
                columnName: "current_node_id",
                direction: "desc"
            }],
            defaultHiddenColumnNames: ['city', 'state'],

            apiUrl: 'admin/user/address',
            rowSelectorID: 'current_node_id',
            parentSelectorID: 'parent_node_id',
            tableTreeColumn: '',

            showActionColumns: false,
        };

        return (
            <ElementContainer
                content={[
                    // <ExportDateAdvancedFilterButton
                    //     tableProps={tableProps}
                    //     apiUrl={'admin/user/address/export'}
                    // />,
                    <DateRangePickerWrapper
                        onInputChange={onDateFilter}
                    />,
                    <ElementTableRemote
                        tableProps={tableProps}
                        userID={userID}
                    />,
                    <Divider hidden />,
                    <Note/>
                ]}
                // hasExportButton
                title={i18n.t('nav.header.links.pendinganddeclinedapplications.title')}               
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userID: state.auth.user.id,
    }
};

export default connect(mapStateToProps)(withDateRangeFilter(Page));
