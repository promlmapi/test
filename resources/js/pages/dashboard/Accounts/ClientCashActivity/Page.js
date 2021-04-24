// Basics
import React from 'react';
import { connect } from 'react-redux';

// Libraries
import { firstRun } from '../../../../custom/Libraries/Page';
import i18n from '../../../../i18n';
// Views
import ElementContainer from '../../../../elements/Element/Container';
import ElementTableRemote from '../../../../elements/Element/TableRemote/TableRemote';
import ExportDateFilterButton from '../../../../elements/Element/ExportButton/ExportDateFilterButton';
import { TableLinkViewFormatter } from '../../../../elements/Element/TableRemote/Helper';
import { ConfigAppPage } from '../../../../custom/Configs/Page';
import DateRangePickerWrapper from '../../../../elements/Element/DateRangePickerWrapper/DateRangePickerWrapper';
import withDateRangeFilter from '../../../../elements/Element/DateRangePickerWrapper/WithDateRangeFilter';
import withTableRemote from '../../../../elements/Element/TableRemote/WithTableRemote';

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
                { name: 'total_cash_activity', title: i18n.t('nav.header.links.cashactivity.title')},
                { name: 'total_transactions', title: i18n.t('nav.header.links.transactions.title')},
            ],
            tableColumnExtensions: [
                { columnName: 'account_number', width: 230 },
                { columnName: 'account_name' },
                { columnName: 'agent_code' },
                { columnName: 'agent_name' },
                { columnName: 'platform' },
                { columnName: 'total_cash_activity', sortingEnabled: false, filteringEnabled: false },
                { columnName: 'total_transactions', sortingEnabled: false, filteringEnabled: false },
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
                        { columnName: 'total_cash_activity' },
                        { columnName: 'total_transactions' },
                    ],
                },
            ],
            dateRangeFilters,
            rowSelectorID: 'current_node_id',
            parentSelectorID: 'parent_node_id',
            tableTreeColumn: 'account_number',
            apiUrl: `user/${userID}/clients/cash-activity${location.search}`,
        };

        return (
            <ElementContainer
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
                        apiUrl={'user/' + userID + '/clients/cash-activity/export'}
                    />
                ] : null}
                hasExportButton={showExportButton}
                title={i18n.t('nav.header.links.clientscashactivity.title')}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userID: state.auth.user.id,
        useDefaultDateRange: true
    };
};

export default connect(mapStateToProps)(withDateRangeFilter(withTableRemote(Page)));
