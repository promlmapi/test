// Basics
import React from 'react';
import { connect } from 'react-redux';

// Configs
import { ConfigAppPage } from '../../../../custom/Configs/Page';

// Libraries
import { firstRun } from '../../../../custom/Libraries/Page';

// Views
import ElementContainer from '../../../../elements/Element/Container';
import ElementTableRemote from '../../../../elements/Element/TableRemote/TableRemote';
import ExportDateFilterButton from '../../../../elements/Element/ExportButton/ExportDateFilterButton';
import ExportDateAdvancedOptionFilterButton from '../../../../elements/Element/ExportButton/ExportDateAdvancedOptionFilterButton';
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
            dateRangeFilters,
            handleApiResponseCallback,
            location,
            onDateFilter,
            showExportButton,
            userID,
            authUserLevel
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
                { name: 'total_deposits', title: i18n.t('nav.header.links.netdeposits.title')},
                { name: 'rebates_earned', title: i18n.t('nav.header.links.rebate.title')},
                { name: 'total_lots_traded', title: i18n.t('nav.header.links.lotstraded.title')},
                { name: 'total_commission', title: i18n.t('nav.header.links.commission.title')},
            ],
            tableColumnExtensions: [
                { columnName: 'account_number', width: 230 },
                { columnName: 'account_name' },
                { columnName: 'agent_code' },
                { columnName: 'agent_name' },
                { columnName: 'platform' },
                { columnName: 'total_deposits', sortingEnabled: false, filteringEnabled: false },
                { columnName: 'rebates_earned', sortingEnabled: false, filteringEnabled: false },
                { columnName: 'total_lots_traded', sortingEnabled: false, filteringEnabled: false },
                { columnName: 'total_commission', sortingEnabled: false, filteringEnabled: false },
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
                        { columnName: 'platform' },
                    ],
                },
                {
                    title: 'Summary (Total)',
                    children: [
                        { columnName: 'total_deposits' },
                        { columnName: 'rebates_earned' },
                        { columnName: 'total_lots_traded' },
                        { columnName: 'total_commission' },
                    ],
                },
            ],
            dateRangeFilters,
            rowSelectorID: 'current_node_id',
            parentSelectorID: 'parent_node_id',
            tableTreeColumn: 'account_number',
            apiUrl: `user/${userID}/clients/trading-activity${location.search}`,
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
                                <ExportDateAdvancedOptionFilterButton
                                    tableProps={tableProps}
                                    location={location.search}
                                    apiUrl={'user/' + userID + '/clients/trading-activity/export'}
                                />
                            ] : null}
                            hasExportButton={showExportButton}
                            title='Clients trading activity'
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
                                    location={location.search}
                                    apiUrl={'user/' + userID + '/clients/trading-activity/export'}
                                />
                            ] : null}
                            hasExportButton={showExportButton}
                            title= {i18n.t('nav.header.links.clientstradingactivity.title')}
                        />
            }
          }

        return (
            <div>
                { (authUserLevel < 3)? renderElementContainer('masterIb') :  renderElementContainer('subIb')}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userID : state.auth.user.id,
        authUserLevel : state.auth.user.user_level_id,
        useDefaultDateRange: true
    }
};

export default connect(mapStateToProps)(withDateRangeFilter(withTableRemote(Page)));
