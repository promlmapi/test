import React from 'react';
import { connect } from 'react-redux';
import { find, get, isNull, map, slice, upperFirst } from 'lodash';
import { Tab, Table } from 'semantic-ui-react';
import BasicField from '../../../custom/Basics/Field';
import { Field } from 'redux-form';
import { SelectField, InputField, TextAreaField } from 'react-semantic-redux-form';
import SelectInput from '../SelectInput/SelectInput';
import { dataGetUserHierarchyList } from '../../../custom/Libraries/Data';
import BasicConstant from '../../../custom/Basics/Constant';

// Form fields
const {
    rebateCalculationType,
    tradingProduct
} = BasicField;

//Commission Levels
const { tradingCommissionLevels, tradingUserLevels } = BasicConstant;

//Rebate calculation type icons
const rebateCalculationTypeIcons = {
    undefined: {
        icon: '',
        iconPosition: '',
    },
    1: {
        icon: 'dollar',
        iconPosition: 'left',
    },
    2: {
        icon: 'percent',
        iconPosition: 'left',
    },
    3: {
        icon: 'circle',
        iconPosition: 'left',
    },
    point: {
        icon: 'circle',
        iconPosition: 'left',
    }
};

class ElementCommissionLevelTab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTabCommissionLevel: 0,
            activeTabCurrency: 0,
            activeTabProduct: 0,
            selectedProducts: [],
        };

        //Bindings
        this.prepareTabContentProduct = this.prepareTabContentProduct.bind(this);
        this.prepareTabContentCommissionLevel = this.prepareTabContentCommissionLevel.bind(this);
        this.prepareRebateTableContent = this.prepareRebateTableContent.bind(this);
        this.handleTabChangeTradingProduct = this.handleTabChangeTradingProduct.bind(this);
        this.handleTabChangeTradingCurrency = this.handleTabChangeTradingCurrency.bind(this);
        this.handleTabChangeCommissionLevel = this.handleTabChangeCommissionLevel.bind(this);
        this.handleTabChangeUserLevel = this.handleTabChangeUserLevel.bind(this);
        this.prepareTabContentCurrency = this.prepareTabContentCurrency.bind(this);
        this.getTradingProductRebateCalculationType = this.getTradingProductRebateCalculationType.bind(this);
    }

    handleTabChangeUserLevel(e, data) {
        this.setState({
            activeTabCommissionLevel: 0,
            activeTabCurrency: 0,
            activeTabProduct: 0,
        });
    }

    handleTabChangeTradingCurrency(e, data) {
        this.setState({
            activeTabCurrency: data.activeIndex,
            activeTabProduct: 0,
            activeTabCommissionLevel: 0,
        });
    }

    handleTabChangeTradingProduct(e, data) {
        this.setState({
            activeTabProduct: data.activeIndex,
            activeTabCommissionLevel: 0,
        });
    }

    handleTabChangeCommissionLevel(e, data) {
        this.setState({
            activeTabCommissionLevel: data.activeIndex,
        });
    }

    getTradingProductRebateCalculationType(product) {
        return !isNull(get(product, rebateCalculationType.name))
            ? product[rebateCalculationType.name]
            : 'undefined';
    }

    //Prepare rebate table content inside tabs
    prepareRebateTableContent(userLevel, currency, product, commissionLevel) {
        const {
            disableAllInputs,
            isRebateRatePage,
            isViewPage
        } = this.props;
        const currencyID = currency.value;
        const productID = product.value;
        const productRebateCalculationTypeID = this.getTradingProductRebateCalculationType(product);

        //All levels
        const levels = [
            'three', 'four', 'five', 'six', 'seven', 'eight'
        ];

        //Levels to show
        let showLevels = slice(levels, 0, userLevel['key'] - 2);

        //Table rows
        return map(showLevels, function (row, key) {

            //Current level key
            let currentLevelKey = key + 3;

            // Input field name
            const inputFieldName = 'user_level_' + userLevel['key'] + '_configuration' +
                '[trading_currency_' + currencyID + '_configuration]' +
                '[trading_product_' + productID + '_configuration]' +
                '[commission_level_' + commissionLevel + '_configuration]' +
                '[user_level_' + currentLevelKey;

            // If the field are read only
            const isReadOnly = isRebateRatePage || (isViewPage && disableAllInputs);

            return (
                <Table.Row className="table-row-custom" key={key}>
                    <Table.Cell>{tradingUserLevels[key]['title']}</Table.Cell>
                    <Table.Cell>
                        <Field
                            component={InputField}
                            icon={rebateCalculationTypeIcons[productRebateCalculationTypeID]['icon']}
                            iconPosition={rebateCalculationTypeIcons[productRebateCalculationTypeID]['iconPosition']}
                            name={inputFieldName + '_default_distribution]'}
                            type='number'
                            required
                            readOnly={isReadOnly}
                            width={16}
                        />
                    </Table.Cell>
                    <Table.Cell>
                        <Field
                            component={InputField}
                            icon={rebateCalculationTypeIcons[productRebateCalculationTypeID]['icon']}
                            iconPosition={rebateCalculationTypeIcons[productRebateCalculationTypeID]['iconPosition']}
                            name={inputFieldName + '_marked_up_distribution]'}
                            type='number'
                            required
                            readOnly={isReadOnly}
                            width={16}
                        />
                    </Table.Cell>
                </Table.Row>
            );
        });
    }

    //Prepare product tab
    prepareTabContentProduct(userLevel, currency, product) {
        const { activeTabCommissionLevel } = this.state;

        //Tab panes
        const tabPanes = [
            {
                menuItem: tradingCommissionLevels[0]['title'],
                render: () => this.prepareTabContentCommissionLevel(userLevel, currency, product, tradingCommissionLevels[0]['key'])
            },
            {
                menuItem: tradingCommissionLevels[1]['title'],
                render: () => this.prepareTabContentCommissionLevel(userLevel, currency, product, tradingCommissionLevels[1]['key'])
            },
            {
                menuItem: tradingCommissionLevels[2]['title'],
                render: () => this.prepareTabContentCommissionLevel(userLevel, currency, product, tradingCommissionLevels[2]['key'])
            },
        ];

        return (
            <Tab.Pane>
                <Tab
                    menu={{ secondary: true, pointing: true }}
                    panes={tabPanes}
                    activeIndex={activeTabCommissionLevel}
                    onTabChange={this.handleTabChangeCommissionLevel}
                />
            </Tab.Pane>
        );
    }

    //Prepare currency tab
    prepareTabContentCurrency(userLevel, currency) {
        const {
            fieldValueTradingProduct,
            tradingProductList
        } = this.props;
        const { activeTabProduct } = this.state;

        //If any product has been selected
        const selfObject = this;
        let tabPanes = [];
        if (fieldValueTradingProduct && fieldValueTradingProduct.length > 0) {
            tabPanes = map(fieldValueTradingProduct, function (row) {

                // Preparing trading product
                const tradingProductId = row[tradingProduct.name];
                const tradingProductText = get(find(tradingProductList, { value: tradingProductId }), 'text');
                const tradingProductRow = {
                    key: tradingProductId,
                    [rebateCalculationType.name]: row[rebateCalculationType.name],
                    text: tradingProductText,
                    value: tradingProductId,
                }

                return {
                    menuItem: tradingProductText,
                    render: () => selfObject.prepareTabContentProduct(userLevel, currency, tradingProductRow),
                };
            });
        }

        return (
            <Tab.Pane>
                <Tab
                    menu={{ tabular: true, className: "wrapped" }}
                    panes={tabPanes}
                    activeIndex={activeTabProduct}
                    onTabChange={this.handleTabChangeTradingProduct}
                />
            </Tab.Pane>
        );
    }

    //Prepare user level tab
    prepareTabContentUserLevel(userLevel) {
        const { fieldValueRebateRateType, fieldValueTradingCurrencyMulti, isViewPage, userHierarchy } = this.props;
        const { activeTabCurrency } = this.state;

        //If any product has been selected
        const selfObject = this;
        let tabPanes = [];
        if (fieldValueTradingCurrencyMulti && fieldValueTradingCurrencyMulti.length > 0) {
            tabPanes = map(fieldValueTradingCurrencyMulti, function (row) {
                const { text } = row;

                return {
                    menuItem: text,
                    render: () => selfObject.prepareTabContentCurrency(userLevel, row),
                };
            });
        }

        //If view page then ony show text
        const renderViewUserField = isViewPage
            ? TextAreaField
            : (userLevel['key'] === 3 ? SelectField : SelectInput);

        //User level field
        const userLevelField = BasicField['userLevel' + upperFirst(userLevel['text']) + 'Selection' + (isViewPage ? 'View' : '')];

        //Get user hierarchy list
        let userHierarchyMultiList = dataGetUserHierarchyList(
            (userLevel['key'] === 3 ? userLevelField.lang.defaultOption : null),
            userHierarchy,
            userLevel['text']
        );

        return (
            <Tab.Pane>
                {
                    fieldValueRebateRateType === 2 &&
                    <Field
                        component={renderViewUserField}
                        name={userLevelField.name}
                        label={userLevelField.lang.title}
                        options={isViewPage ? [] : userHierarchyMultiList}
                        placeholder={isViewPage ? '' : userLevelField.lang.defaultOption}
                        disabled={isViewPage}
                    />
                }
                <Tab
                    menu={{ tabular: true, className: "wrapped" }}
                    panes={tabPanes}
                    activeIndex={activeTabCurrency}
                    onTabChange={this.handleTabChangeTradingCurrency}
                />
            </Tab.Pane>
        );
    }

    //Prepare commission level tab inside product tab
    prepareTabContentCommissionLevel(userLevel, currency, product, commissionLevel) {
        const { disableAllInputs, isRebateRatePage, isViewPage } = this.props;
        const currencyID = currency.value;
        const productID = product.value;
        const productRebateCalculationTypeID = this.getTradingProductRebateCalculationType(product);
        const isRebateCalculationTypePoint = productRebateCalculationTypeID === 3;

        // If the field are read only
        const isReadOnly = isRebateRatePage || (isViewPage && disableAllInputs);

        // Icon object
        const iconObject = rebateCalculationTypeIcons[isRebateCalculationTypePoint ? 3 : 1];

        return (
            <div className="custom-tab-pane">
                <Field
                    component={InputField}
                    name={
                        'user_level_' + userLevel['key'] + '_configuration' +
                        '[trading_currency_' + currencyID + '_configuration]' +
                        '[trading_product_' + productID + '_configuration]' +
                        '[commission_level_' + commissionLevel + '_configuration]' +
                        '[total_available_rebate]'
                    }
                    icon={iconObject['icon']}
                    iconPosition={iconObject['iconPosition']}
                    label={isRebateCalculationTypePoint ? 'Points to Allocate' : 'Rebate Rate'}
                    placeholder={isRebateCalculationTypePoint ? 'Points to Allocate' : 'Rebate Rate'}
                    type='number'
                    readOnly={isReadOnly}
                />
                <Table size='small'>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>User Level</Table.HeaderCell>
                            <Table.HeaderCell>Standard {isRebateCalculationTypePoint ? 'Points' : 'Rebate'}</Table.HeaderCell>
                            <Table.HeaderCell>Marked Up {isRebateCalculationTypePoint ? 'Points' : 'Rebate'}</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.prepareRebateTableContent(userLevel, currency, product, commissionLevel)}
                    </Table.Body>
                </Table>
            </div>
        );
    }

    render() {
        const { userLevels } = this.props;

        //Iterate all user levels
        const selfObject = this;
        let tabPanes = map(userLevels ? userLevels : tradingUserLevels, function (row) {
            const { title } = row;

            return {
                menuItem: title,
                render: () => selfObject.prepareTabContentUserLevel(row),
            };
        });

        return (
            <Tab
                menu={{ tabular: true, className: "wrapped" }}
                panes={tabPanes}
                onTabChange={this.handleTabChangeUserLevel}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        prerequisites: state.data.prerequisites,
    }
};

export default connect(mapStateToProps)(ElementCommissionLevelTab);
