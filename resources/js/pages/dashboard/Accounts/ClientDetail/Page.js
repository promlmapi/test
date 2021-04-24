// Basics
import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react'

// Configs
import { ConfigAppPage } from '../../../../custom/Configs/Page';

// Libraries
import { firstRun } from '../../../../custom/Libraries/Page';

// Views
import ElementContainer from '../../../../elements/Element/Container';
import ExportDateFilterButton from '../../../../elements/Element/ExportButton/ExportDateFilterButton';
import ElementTableRemote from '../../../../elements/Element/TableRemote/TableRemote';
import DateRangePickerWrapper from '../../../../elements/Element/DateRangePickerWrapper/DateRangePickerWrapper';
import withDateRangeFilter from '../../../../elements/Element/DateRangePickerWrapper/WithDateRangeFilter';
import withTableRemote from '../../../../elements/Element/TableRemote/WithTableRemote';

class Page extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            advancedExportOption: 'individual_tc',
        };

        //First run
        firstRun(props);

        //function
        this.handleAdvancedExportOptionChoose = this.handleAdvancedExportOptionChoose.bind(this);
    }

    handleAdvancedExportOptionChoose(event) {
        this.setState({
            advancedExportOption: event.currentTarget.firstChild.defaultValue
        })
    }

    render() {
        const {
            match,
            userID,
            onDateFilter,
            dateRangeFilters,
            handleApiResponseCallback,
            showExportButton,
            authUserLevel
        } = this.props;

        // Client ID
        const clientID = match.params['clientId'];

        // Table props
        const tableProps = {
            columns: [
                { name: 'account_number', title: 'Account Number' },
                { name: 'account_name', title: 'Account Name' },
                { name: 'agent_code', title: 'Agent Code' },
                { name: 'agent_name', title: 'Agent Name' },
                { name: 'platform', title: 'Platform' },
                { name: 'country', title: 'Country' },
                { name: 'account_opening_date', title: 'Account Opening Date' },
                { name: 'total_deposits', title: 'Total Deposits' },
                { name: 'rebates_earned', title: 'Rebates Earned' },
                { name: 'number_of_clients', title: 'Number of Clients' },
                { name: 'commission_level', title: 'Commission Level' },
                { name: 'account_balance', title: 'Account Balance' },
                // { name: 'margin_used', title: 'Margin Used' },
                { name: 'equity_balance', title: 'Equity Balance' },
                // { name: 'gross_liquidation_value', title: 'Gross Liquidation Value' },
                { name: 'total_commission', title: 'Commission' },
            ],
            tableColumnExtensions: [
                { columnName: 'account_number', width: 180 },
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
                { columnName: 'account_balance', sortingEnabled: false },
                // { columnName: 'margin_used', sortingEnabled: false },
                { columnName: 'equity_balance', sortingEnabled: false },
                // { columnName: 'gross_liquidation_value', sortingEnabled: false, width: 200 },
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
                {
                    title: 'Balance',
                    children: [
                        { columnName: 'account_balance' },
                        // { columnName: 'margin_used' },
                        { columnName: 'equity_balance' },
                        // { columnName: 'gross_liquidation_value' },
                    ],
                },
                {
                    title: 'Summary (Total)',
                    children: [
                        { columnName: 'total_commission' },
                    ],
                },
            ],

            //Defaults
            defaultSorting: [{
                columnName: "current_node_id",
                direction: "desc"
            }],

            dateRangeFilters,
            rowSelectorID: 'current_node_id',
            parentSelectorID: 'parent_node_id',
            tableTreeColumn: '',
            apiUrl: 'user/' + userID + '/clients/detail/' + clientID,
        };

        const renderElementContainer = (UserLevel) => {
            if (UserLevel === 'masterIb') {
                return <ElementContainer
                    browserBackButtonLink={ConfigAppPage.clientList.route}
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
                    contentPre={[
                        <Form>
                            <Form.Group inline>
                                <label>Advanced Export</label>
                                <Form.Radio
                                    label='Current TC only'
                                    value='individual_tc'
                                    checked={this.state.advancedExportOption === 'individual_tc'}
                                    onChange={this.handleAdvancedExportOptionChoose}
                                />
                                <Form.Radio
                                    label='All TCs under current IB'
                                    value='current_agent_tc'
                                    checked={this.state.advancedExportOption === 'current_agent_tc'}
                                    onChange={this.handleAdvancedExportOptionChoose}
                                />
                                {/* <Form.Radio
                                        label='All TCs under All IBs'
                                        value='over_all_tc'
                                        checked={this.state.advancedExportOption === 'over_all_tc'}
                                        onChange={this.handleAdvancedExportOptionChoose}
                                    /> */}
                            </Form.Group>
                        </Form>,
                        showExportButton
                            ? (
                                <ExportDateFilterButton
                                    advancedExportOption={this.state.advancedExportOption}
                                    tableProps={tableProps}
                                    apiUrl={'user/' + userID + '/clients/detail/' + clientID + '/export'}
                                />
                            )
                            : null
                    ]}
                    hasExportButton={showExportButton}
                    title='Trading client details'
                />
            } else {
                return <ElementContainer
                    browserBackButtonLink={ConfigAppPage.clientList.route}
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
                    contentPre={[
                        <Form>
                            <Form.Group inline>
                                <label>Advanced Export</label>
                                <Form.Radio
                                    label='Current TC only'
                                    value='individual_tc'
                                    checked={this.state.advancedExportOption === 'individual_tc'}
                                    onChange={this.handleAdvancedExportOptionChoose}
                                />
                                <Form.Radio
                                    label='All TCs under current IB'
                                    value='current_agent_tc'
                                    checked={this.state.advancedExportOption === 'current_agent_tc'}
                                    onChange={this.handleAdvancedExportOptionChoose}
                                />
                                {/* <Form.Radio
                                        label='All TCs under All IBs'
                                        value='over_all_tc'
                                        checked={this.state.advancedExportOption === 'over_all_tc'}
                                        onChange={this.handleAdvancedExportOptionChoose}
                                    /> */}
                            </Form.Group>
                        </Form>,
                        showExportButton
                            ? (
                                <ExportDateFilterButton
                                    advancedExportOption={this.state.advancedExportOption}
                                    tableProps={tableProps}
                                    apiUrl={'user/' + userID + '/clients/detail/' + clientID + '/export'}
                                />
                            )
                            : null
                    ]}
                    hasExportButton={showExportButton}
                    title='Trading client details'
                />
            }
        }

        return (
            <div>
                { (authUserLevel < 4) ? renderElementContainer('masterIb') : renderElementContainer('subIb')}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userID: state.auth.user.id,
        authUserLevel: state.auth.user.user_level_id,
        useDefaultDateRange: true
    };
};

export default connect(mapStateToProps)(withDateRangeFilter(withTableRemote(Page)));
