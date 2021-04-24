import React from 'react';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {Card, Form, Grid, Header} from 'semantic-ui-react';
import {firstRun} from '../../../../custom/Libraries/Page';
import {dataGetRebateAccountRateTable} from '../../../../services/dataService';
import {find, get, isEmpty, map, toNumber, toUpper} from 'lodash';
import CommissionLevelTab from '../../../../elements/Element/CommissionLevelTab/CommissionLevelTab';
import {dataGetTradingCurrencyList, dataGetTradingProductList, dataGetRebateRateTableInitializeFields} from '../../../../custom/Libraries/Data';
import {BasicConstant} from '../../../../custom/Basics/Constant';

// Trading user levels
const {tradingUserLevels} = BasicConstant;

class PageRebateAccountDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hasFormInitialized: false,
            rebateID: get(props, 'match.params.rebateId'),
        };

        // First run
        firstRun(props);

        // Binding
        this.initializeFormFields = this.initializeFormFields.bind(this);
    }

    componentDidMount() {
        const {dispatch, userID, location} = this.props;
        const {rebateID} = this.state;

        // User resource
        const userResourceId = get(location, 'state.ibResourceId', userID);

        // Get user documents
        dispatch(dataGetRebateAccountRateTable(userResourceId, rebateID));
    }

    componentDidUpdate() {
        const {rebateAccountRateTables} = this.props;
        const {hasFormInitialized, rebateID} = this.state;

        if (
            !hasFormInitialized
            && get(rebateAccountRateTables, rebateID)
        ) {
            this.initializeFormFields();
        }
    }

    initializeFormFields() {
        const {rebateAccountRateTables, initialize} = this.props;
        const {rebateID} = this.state;

        // Rebate rate table
        const rebateRateTable = get(rebateAccountRateTables, rebateID);

        // Initialize
        initialize(dataGetRebateRateTableInitializeFields(rebateRateTable));

        // Updating state
        this.setState({
            hasFormInitialized: true,
        })
    }

    render() {
        const {rebateAccountRateTables} = this.props;
        const {rebateID} = this.state;

        // Rebate rate table
        const rebateRateTable = get(rebateAccountRateTables, rebateID);

        // If RRT is empty
        if (isEmpty(rebateRateTable)) {
            return null;
        }

        // Currency list
        const selectedCurrencyList = map(
                get(rebateRateTable, 'user_level_configurations.data.0.ib_rebate_rate_table_currencies'), function (currency) {
                return currency['basics_currency'];
            }
        );

        //Updating to selectable currency list in state
        const selectedCurrencyListFormatted = dataGetTradingCurrencyList(null, selectedCurrencyList, null);

        // RRT product list
        const selectedProductList = map(
            get(rebateRateTable, 'user_level_configurations.data.0.ib_rebate_rate_table_currencies.0.ib_rebate_rate_table_products'),
            function (product) {
                return product['basics_trading_product'];
            }
        );

        //Updating to selectable products list in state
        const selectedProductListFormatted = dataGetTradingProductList(null, selectedProductList, null);

        // Getting user levels
        let userLevels = null;
        if (rebateRateTable) {
            const userLevelConfigurations = get(rebateRateTable, 'user_level_configurations.data');
            userLevels = map(userLevelConfigurations, function (row) {
                return find(tradingUserLevels, {key: toNumber(row['basics_user_level_id'])});
            });
        }

        return (
            <Grid divided='vertically' className="page-body">
                <Grid.Row columns={1} className="top-heading-row">
                    <Grid.Column>
                        <Header as='h2' className="top-heading">
                            Rebate account - {toUpper(rebateID)}
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                    {
                        rebateRateTable &&
                        <Card fluid>
                            <Card.Content header='Rebate structure'/>
                            <Card.Content>
                                <Card.Description>
                                    <Form noValidate>
                                        <CommissionLevelTab
                                            isViewPage
                                            isRebateRatePage
                                            // userHierarchy={userHierarchy}
                                            fieldValueTradingCurrencyMulti={selectedCurrencyListFormatted}
                                            fieldValueRebateCalculationType={get(rebateRateTable, 'rebate_calculation_type_id')}
                                            fieldValueRebateRateType={get(rebateRateTable, 'rebate_rate_table_type_id')}
                                            fieldValueTradingPlatform={get(rebateRateTable, 'trading_platform_id')}
                                            fieldValueTradingProduct={selectedProductListFormatted}
                                            userLevels={userLevels}
                                        />
                                    </Form>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    }
                </Grid.Row>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        rebateAccountRateTables: state.data.rebateAccountRateTables,
        userID: state.auth.user.id,
    }
};

export default reduxForm({
    form: 'rebateAccountDetail',
    touchOnBlur: false,
})(connect(mapStateToProps)(PageRebateAccountDetail));
