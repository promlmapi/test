// Basics
import React from 'react';
import { connect } from 'react-redux';

// Libraries
import { firstRun } from '../../../../custom/Libraries/Page';
import {getIBLeadVisibleUsers} from '../../../../custom/Libraries/App';
import i18n from '../../../../i18n';

// Utilities
import { get } from 'lodash';

// Constants
import { ConfigAppPageAdmin } from '../../../../custom/Configs/PageAdmin';

// Views
import ElementContainer from '../../../../elements/Element/Container';
import ElementTableRemote from '../../../../elements/Element/TableRemote/TableRemote';
import DateRangePickerWrapper from '../../../../elements/Element/DateRangePickerWrapper/DateRangePickerWrapper';
import withDateRangeFilter from '../../../../elements/Element/DateRangePickerWrapper/WithDateRangeFilter';
import { TableLinkViewFormatter } from '../../../../elements/Element/TableRemote/Helper';

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
                { name: 'current_node_id', title: '#ID' },
                { name: 'full_name', title: i18n.t('nav.header.links.fullname.title')},
                { name: 'email', title: i18n.t('nav.header.links.email.title')},
                { name: 'country_name', title: i18n.t('nav.header.links.country.title')},
                { name: 'completed_registration_steps', title: i18n.t('nav.header.links.registrationstepscompleted.title')},
                {
                    name: 'converted_lead',
                    title: i18n.t('nav.header.links.convertedlead.title'),
                    getCellValue: row => get(row, 'converted_lead.available_resource_actions.view')
                        ? TableLinkViewFormatter(
                            row['converted_lead']['id'],
                            ConfigAppPageAdmin.adminIbList.route,
                            { fromPage: location },
                            null,
                            false
                        )
                        : null
                },
                { name: 'created_at_readable', title: i18n.t('nav.header.links.registrationdate.title')},
            ],
            tableColumnExtensions: [
                { columnName: 'current_node_id', width: 100 },
                { columnName: 'full_name', sortingEnabled: false },
                { columnName: 'email', sortingEnabled: false },
                { columnName: 'country_name', sortingEnabled: false },
                { columnName: 'completed_registration_steps', sortingEnabled: false, filteringEnabled: false, width: 240 },
                { columnName: 'converted_lead', sortingEnabled: false, filteringEnabled: false },
                { columnName: 'created_at_readable', filteringEnabled: false },
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
            defaultHiddenColumnNames: [
                'completed_registration_steps'
            ],

            apiUrl: 'admin/ib/account-management/lead',
            rowSelectorID: 'current_node_id',
            parentSelectorID: 'parent_node_id',
            tableTreeColumn: '',

            showActionColumns: false,
        };

        let columnValue = { name: 'complete_phone_number', title: i18n.t('nav.header.links.phonenumber.title')};
        let columnExtensionValue= { columnName: 'complete_phone_number', sortingEnabled: false, filteringEnabled: false };
        let hiddenColumnValue = 'complete_phone_number'

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
                        tableProps={tableProps}
                        userID={userID}
                    />
                ]}
                title={i18n.t('nav.header.links.incompleteibregistrants1.title')}
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
