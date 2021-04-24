// Basics
import React from 'react';
import { connect } from 'react-redux';

// Utilities
import { get } from 'lodash';

// Views
import ElementTableRemote from '../../../../../elements/Element/TableRemote/TableRemote';

// Libraries
import {getIBLeadVisibleUsers} from '../../../../../custom/Libraries/App';
import i18n from '../../../../../i18n';

class LeadComponent extends React.Component {

    render() {
        const {
            apiUrl,
            userID
        } = this.props;

        //Table props
        const tableProps = {
            columns: [
                {
                    name: 'current_node_id',
                    title: '#ID',
                },
                {
                    name: 'fpm_referred_rebate_account_code',
                    title: i18n.t('nav.header.links.agentcode.title'),
                    getCellValue: row => (get(row, 'referee_ib_rebate_account.account_code'))
                },
                {
                    name: 'fpm_referred_rebate_account_user_name',
                    title: i18n.t('nav.header.links.agentname.title'),
                    getCellValue: row => (get(row, 'referee_ib_rebate_account.user.full_name'))
                },
                {
                    name: 'trading_lead_name',
                    title: i18n.t('nav.header.links.leadname.title'),
                    getCellValue: row => (get(row, 'name'))
                },
                {
                    name: 'trading_lead_email',
                    title: i18n.t('nav.header.links.email.title'),
                    getCellValue: row => (get(row, 'email'))
                },
                {
                    name: 'client_stage',
                    title: i18n.t('nav.header.links.clientstage.title'),
                    getCellValue: row => (get(row, 'client_stage'))
                },
                {
                    name: 'application_status',
                    title: i18n.t('nav.header.links.applicationstatus.title'),
                    getCellValue: row => (get(row, 'application_status'))
                },
                {
                    name: 'notes',
                    title: i18n.t('nav.header.links.notes.title'),
                    getCellValue: row => (get(row, 'notes'))
                },
                {
                    name: 'trading_lead_country',
                    title: i18n.t('nav.header.links.country.title'),
                    getCellValue: row => (get(row, 'country'))
                },
                {
                    name: 'trading_lead_how_did_you_hear',
                    title: i18n.t('nav.header.links.howdidyouhear.title'),
                    getCellValue: row => (get(row, 'how_did_you_hear'))
                },
                {
                    name: 'trading_lead_grade',
                    title: i18n.t('nav.header.links.leadgrade.title'),
                    getCellValue: row => (get(row, 'lead_grade'))
                },
                {
                    name: 'trading_lead_priority_picklist',
                    title: i18n.t('nav.header.links.prioritypicklist.title'),
                    getCellValue: row => (get(row, 'priority_picklist'))
                },
                {
                    name: 'trading_lead_promo_code',
                    title: i18n.t('nav.header.links.promocode.title'),
                    getCellValue: row => (get(row, 'promo_code'))
                },
                {
                    name: 'trading_lead_status',
                    title: i18n.t('nav.header.links.leadstatus.title'),
                    getCellValue: row => (get(row, 'lead_status'))
                },
                {
                    name: 'created_at_readable',
                    title: i18n.t('nav.header.links.creationdate.title')
                }
            ],
            tableColumnExtensions: [
                { columnName: 'current_node_id', width: 100 },
                { columnName: 'fpm_referred_rebate_account_code', sortingEnabled: false },
                { columnName: 'fpm_referred_rebate_account_user_name', sortingEnabled: false },
                { columnName: 'trading_lead_name', sortingEnabled: false },
                { columnName: 'trading_lead_email', sortingEnabled: false, width: 240 },
                { columnName: 'trading_lead_country', sortingEnabled: false },
                { columnName: 'client_stage', sortingEnabled: false },
                { columnName: 'application_status', sortingEnabled: false },
                { columnName: 'notes', sortingEnabled: false },
                { columnName: 'trading_lead_how_did_you_hear', sortingEnabled: false, width: 170 },
                { columnName: 'trading_lead_grade', sortingEnabled: false },
                { columnName: 'trading_lead_priority_picklist', sortingEnabled: false },
                { columnName: 'trading_lead_promo_code', sortingEnabled: false },
                { columnName: 'trading_lead_status', sortingEnabled: false },
                { columnName: 'created_at_readable', filteringEnabled: false },
            ],

            //Fixed columns
            leftColumns: ['current_node_id'],
            rightColumns: [],

            //Defaults
            defaultSorting: [{
                columnName: "created_at_readable",
                direction: "desc"
            }],
            defaultHiddenColumnNames: [
                'trading_lead_how_did_you_hear',
                'trading_lead_grade',
                'trading_lead_priority_picklist',
                'trading_lead_promo_code'
            ],

            apiUrl,
            rowSelectorID: 'current_node_id',
            parentSelectorID: 'parent_node_id',
            tableTreeColumn: '',

            showActionColumns: false,
        };


        let columnValue = {
            name: 'phone',
            title: i18n.t('nav.header.links.phone.title'),
            getCellValue: row => (get(row, 'phone'))
        }
        let columnExtensionValue= { columnName: 'phone', sortingEnabled: false };
        let hiddenColumnValue = 'phone'

        let ibLeadVisibleUsers = getIBLeadVisibleUsers().map(i=>Number(i));      
        
        if(ibLeadVisibleUsers.includes(userID)){
            tableProps.columns.push(columnValue);
            tableProps.tableColumnExtensions.push(columnExtensionValue);
            tableProps.defaultHiddenColumnNames.push(hiddenColumnValue);
        }

        return (
            <ElementTableRemote
                tableProps={tableProps}
                userID={userID}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userID: state.auth.user.id,
    };
};

export default connect(mapStateToProps)(LeadComponent);
