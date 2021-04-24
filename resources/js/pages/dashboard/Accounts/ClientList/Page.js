// Basics
import React from 'react';
import { connect } from 'react-redux';
import { firstRun } from '../../../../custom/Libraries/Page';

// Configs
import { ConfigAppPage } from '../../../../custom/Configs/Page';

// Views
import ElementContainer from '../../../../elements/Element/Container';
import ElementTableRemote from '../../../../elements/Element/TableRemote/TableRemote';
import ExportDateFilterButton from '../../../../elements/Element/ExportButton/ExportDateFilterButton';
import { TableLinkViewFormatter } from '../../../../elements/Element/TableRemote/Helper';
import DateRangePickerWrapper from '../../../../elements/Element/DateRangePickerWrapper/DateRangePickerWrapper';
import withDateRangeFilter from '../../../../elements/Element/DateRangePickerWrapper/WithDateRangeFilter';
import withTableRemote from '../../../../elements/Element/TableRemote/WithTableRemote';

//libraries
import i18n from '../../../../i18n';

class Page extends React.Component {

    constructor(props) {
        super(props);

        //First run
        firstRun(props);
    }

    render() {
        const {
            authUserLevel,
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
                    name: 'account_number',
                    title: i18n.t('nav.header.links.accountnumber.title'),
                    getCellValue: row => row['trading_client_account_id'] === 0
                        ? row['account_number']
                        : TableLinkViewFormatter(
                            row['trading_client_account_id'],
                            ConfigAppPage.clientDetail.routeWithoutParam,
                            { fromPage: location },
                            row['account_number']
                        )
                },
                { name: 'account_name', title: i18n.t('nav.header.links.accountname.title')},
                { name: 'agent_code', title: i18n.t('nav.header.links.agentcode.title')},
                { name: 'agent_name', title: i18n.t('nav.header.links.agentname.title')},
                { name: 'platform', title: i18n.t('nav.header.links.platform.title')},
                { name: 'country', title: i18n.t('nav.header.links.country.title')},
                { name: 'account_opening_date', title: i18n.t('nav.header.links.accountopeningdate.title')},
                { name: 'total_deposits', title: i18n.t('nav.header.links.totaldeposits.title')},
                { name: 'rebates_earned', title: i18n.t('nav.header.links.rebatesearned.title')},
                { name: 'number_of_clients', title: i18n.t('nav.header.links.numberofclients.title')},
                { name: 'commission_level', title: i18n.t('nav.header.links.commissionlevel.title')},
            ],
            tableColumnExtensions: [
                { columnName: 'account_number', width: 230 },
                { columnName: 'account_name' },
                { columnName: 'agent_code' },
                { columnName: 'agent_name' },
                { columnName: 'platform' },
                { columnName: 'country' },
                { columnName: 'account_opening_date', width: 190 },
                { columnName: 'total_deposits', sortingEnabled: false, filteringEnabled: false },
                { columnName: 'rebates_earned', sortingEnabled: false, filteringEnabled: false },
                { columnName: 'number_of_clients', sortingEnabled: false, filteringEnabled: false, width: 160 },
                { columnName: 'commission_level', width: 165 },
            ],
            columnBands: [
                {
                    title: 'Account',
                    children: [
                        { columnName: 'account_name' },
                        { columnName: 'account_number' },
                    ],
                },
                {
                    title: 'Agent',
                    children: [
                        { columnName: 'agent_code' },
                        { columnName: 'agent_name' },
                    ],
                },
                {
                    title: 'Account Details',
                    children: [
                        { columnName: 'platform' },
                        { columnName: 'country' },
                        { columnName: 'account_opening_date' },
                    ],
                },
                {
                    title: 'Summary',
                    children: [
                        { columnName: 'total_deposits' },
                        { columnName: 'rebates_earned' },
                        { columnName: 'number_of_clients' },
                        { columnName: 'commission_level' },
                    ],
                },
            ],
            dateRangeFilters,
            apiUrl: `user/${userID}/clients/list${location.search}`,
            rowSelectorID: 'current_node_id',
            parentSelectorID: 'parent_node_id',
            tableTreeColumn: 'account_number'
        };

        const renderElementContainer= ( UserLevel)=>{
            if(UserLevel === 'masterIb' ){
              return   <ElementContainer
                            content={[
                                <DateRangePickerWrapper
                                    initialStartDate="default"
                                    initialEndDate="default"
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
                                    apiUrl={`user/${userID}/clients/list/export`}
                                />
                            ] : null}
                            hasExportButton={showExportButton}
                            title='Clients list'
                        />
            } else{
                return   <ElementContainer
                            content={[
                                <DateRangePickerWrapper
                                    initialStartDate="default"
                                    initialEndDate="default"
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
                                    apiUrl={`user/${userID}/clients/list/export`}
                                />
                            ] : null}
                            hasExportButton={showExportButton}
                            title={i18n.t('nav.header.links.clientlist.title')}
                        />
            }
        }

        return (
            <div>
                { (authUserLevel < 4)? renderElementContainer('masterIb') :  renderElementContainer('subIb')}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userID: state.auth.user.id,
        authUserLevel : state.auth.user.user_level_id,
        useDefaultDateRange: true
    };
};

export default connect(mapStateToProps)(withDateRangeFilter(withTableRemote(Page)));
