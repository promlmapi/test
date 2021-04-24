// Basics
import React from 'react';
import { connect } from 'react-redux';
import { Grid, Button, Form, Card } from 'semantic-ui-react';
import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form';
import { SelectField } from 'react-semantic-redux-form';

// Utilities
import { concat, find, forEach, get, isEmpty, isNull, map, size, upperFirst } from 'lodash';

// Constants
import { BasicField } from '../../../../custom/Basics/Field';
import { ConfigAppPageAdmin } from '../../../../custom/Configs/PageAdmin';
import { BasicPermissionApiAdminRrtStore, BasicPermissionApiAdminRrtUpdate } from '../../../../custom/Basics/Permission';

// Libraries
import {
    dataGetRebateRateTypeList,
    dataGetRebateCalculationTypeList,
    dataGetTradingCurrencyList,
    dataGetTradingCurrencyListMulti,
    dataGetTradingPlatformList,
    dataGetTradingProductList,
    dataGetRebateRateTableInitializeFields,
} from '../../../../custom/Libraries/Data';
import { validateSpecificForm } from '../../../../custom/Libraries/Form';
import { hasPermissionToAction } from '../../../../custom/Libraries/Permission';
import { getTranslation } from '../../../../custom/Libraries/Utility';

// Views
import SelectInput from '../../../../elements/Element/SelectInput/SelectInput';
import CollectionMessage from '../../../../elements/Collection/Message/Message.jsx';
import BrowserBackButton from '../../../../elements/Element/BrowserBackButton/BrowserBackButton';
import CommissionLevelTab from '../../../../elements/Element/CommissionLevelTab/CommissionLevelTab';

// Services
import * as adminService from '../../../../services/adminService';

// Form name
const formName = 'adminGroupAdd';

// Form validation
const validate = (data, props) => {
    return validateSpecificForm(data, props, formName, 0, true);
};

// Form fields
const {
    tradingCurrency, tradingCurrencyMulti, tradingPlatform, tradingProduct, tradingProductMulti, rebateCalculationType, rebateRateTableType,
    userLevelThreeSelection, userLevelFourSelection, userLevelFiveSelection, userLevelSixSelection, userLevelSevenSelection, userLevelEightSelection
} = BasicField;

// Defaults
const userLevels = [
    'three', 'four', 'five', 'six', 'seven', 'eight',
];

// Default trading product input object
const tradingProductInputDefault = {
    [rebateCalculationType.name]: null,
    [tradingProduct.name]: null,
};

// Check if trading product field filled completely
const isTradingProductSelected = (product) => {
    return !isNull(product[rebateCalculationType.name]) && !isNull(product[tradingProduct.name]);
}

// Field rendered for trading products
const renderTradingProducts = ({
    disableAllInputs,
    fields,
    fieldValueTradingProduct,
    meta: { error, submitFailed },
    rebateCalculationTypeList,
    tradingProductList
}) => {

    // Desktop column width
    const desktopColumnWidth = disableAllInputs ? 8 : 7;

    return (
        <>
            {fields.map((fieldRow, index) => {

                // Default
                let tradingProductListToUse = [];

                // Iterating all trading products
                forEach(tradingProductList, (productRow) => {

                    // Check if the product value is present in the field value
                    const findProductInFieldValue = find(fieldValueTradingProduct, {
                        [tradingProduct.name]: productRow.value
                    });

                    // If product value is not in the field value or if not the selected one
                    if (
                        !findProductInFieldValue
                        || (productRow.value == fieldValueTradingProduct[index][tradingProduct.name])
                    ) {

                        // Adding to the list of available options
                        tradingProductListToUse = concat(tradingProductListToUse, [productRow]);
                    }
                });

                return (
                    <Grid.Row key={index} className="field-array">
                        <Grid.Column mobile={16} tablet={desktopColumnWidth} computer={desktopColumnWidth}>
                            <Field
                                component={SelectField}
                                name={`${fieldRow}.${rebateCalculationType.name}`}
                                label={rebateCalculationType.lang.title}
                                options={rebateCalculationTypeList}
                                placeholder={rebateCalculationType.lang.defaultOption}
                                disabled={disableAllInputs}
                                required
                            />
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={desktopColumnWidth} computer={desktopColumnWidth}>
                            <Field
                                component={SelectField}
                                name={`${fieldRow}.${tradingProduct.name}`}
                                label={tradingProduct.lang.title}
                                options={tradingProductListToUse}
                                placeholder={tradingProduct.lang.defaultOption}
                                disabled={disableAllInputs}
                                required
                            />
                        </Grid.Column>
                        {!disableAllInputs && (
                            <Grid.Column mobile={16} tablet={2} computer={2} className="field-array__remove-button">
                                <div className="field">
                                    <Button
                                        color='red'
                                        icon='close'
                                        inverted
                                        onClick={() => fields.remove(index)}
                                        type='button'
                                    />
                                </div>
                            </Grid.Column>
                        )}
                    </Grid.Row>
                )
            })}
            {(!disableAllInputs && (size(fieldValueTradingProduct) < (size(tradingProductList) - 1))) && (
                <Grid.Row>
                    <Grid.Column mobile={16} tablet={16} computer={16}>
                        <Button
                            fluid
                            color='blue'
                            content='Add more'
                            onClick={() => fields.push(tradingProductInputDefault)}
                            type='button'
                        />
                    </Grid.Column>
                </Grid.Row>
            )}
        </>
    );
}

class AdminGroupAddForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hasFormInitialized: false,
            selectableProducts: []
        };

        // Bindings
        this.initializeFormFields = this.initializeFormFields.bind(this);
    }

    componentDidMount() {
        const {
            dispatch,
            prerequisites,
            userHierarchyThree,
            isViewPage
        } = this.props;

        this.setState({
            hasFormInitialized: false,
        });

        //If prerequisites is empty then get
        if (isEmpty(prerequisites)) {
            dispatch(adminService.adminPrerequisitesUpdate());
        }

        //If user hierarchy - level 3 is empty then get
        if (!isViewPage && isEmpty(userHierarchyThree)) {
            dispatch(adminService.adminGetUserHierarchy('three'));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const {
            dispatch,
            change,
            cloneDetail,
            groupDetail,
            submitSucceeded,
            groupID,
            isViewPage,
            fieldValueTradingCurrency,
            fieldValueTradingPlatform,
            prerequisites
        } = this.props;
        const { hasFormInitialized } = this.state;

        //If trading platform has been updated
        if (
            get(prerequisites, 'trading_platform')
            && (
                (
                    prevProps.fieldValueTradingPlatform !== fieldValueTradingPlatform
                    && typeof fieldValueTradingPlatform !== 'undefined'
                ) || (
                    isViewPage
                    && typeof groupDetail[groupID] !== 'undefined'
                    && prevState.hasFormInitialized !== hasFormInitialized
                    && hasFormInitialized
                )
            )
        ) {

            //If platform is not selected
            if (typeof fieldValueTradingPlatform === 'undefined') {

                //Resetting selectable product list in state
                this.setState({
                    selectableProducts: [],
                });

            } else {

                const tradingPlatforms = get(prerequisites, 'trading_platform.data');
                const thisObject = this;

                //Iterate all platforms
                forEach(tradingPlatforms, function (row) {

                    //If selected platform ID matches
                    if (get(row, 'id') === fieldValueTradingPlatform) {

                        //Iterate all selectable products and format
                        const selectableProductList = row['basics_trading_platform_products_details'];
                        const selectableProductListFormatted = map(selectableProductList, function (product) {
                            return product['basics_trading_product'];
                        });

                        //Updating to selectable products list in state
                        thisObject.setState({
                            selectableProducts: selectableProductListFormatted,
                        });

                        //Stop looping
                        return false;
                    }
                });
            }
        }

        //If trading currency has been updated
        if (
            get(prerequisites, 'currency')
            && (
                (
                    prevProps.fieldValueTradingCurrency !== fieldValueTradingCurrency
                    && typeof fieldValueTradingCurrency !== 'undefined'
                    && !isViewPage
                    && !cloneDetail
                )
                // || (
                //     isViewPage
                //     && typeof groupDetail[groupID] !== 'undefined'
                //     && prevState.hasFormInitialized !== hasFormInitialized
                //     && hasFormInitialized
                // )
            )
        ) {
            //If currency is not selected
            if (typeof fieldValueTradingCurrency === 'undefined') {
                change(tradingCurrencyMulti.name, []);
            } else {

                //Get trading currency list
                let tradingCurrencyList = dataGetTradingCurrencyList(null, prerequisites);

                //Get trading currency list
                const currencyObject = find(tradingCurrencyList, { value: fieldValueTradingCurrency });

                // Update input
                change(tradingCurrencyMulti.name, [{
                    key: fieldValueTradingCurrency,
                    text: get(currencyObject, 'text'),
                    value: fieldValueTradingCurrency,
                    isFixed: true,
                }]);
            }
        }

        //If view page and form submitted then getting group details again
        if (prevProps.submitSucceeded !== submitSucceeded && submitSucceeded) {

            //If view page
            if (isViewPage) {

                //Getting details again
                dispatch(adminService.adminGetGroupDetail(groupID));
            }
        }

        //If group detail has been updated
        if (!isEmpty(prerequisites) && !hasFormInitialized && isViewPage && typeof groupDetail[groupID] !== 'undefined') {
            this.initializeFormFields();
        }

        //If group detail has been updated
        if (
            cloneDetail
            && !isEmpty(prerequisites)
            && !hasFormInitialized
            && !isViewPage
        ) {
            this.initializeFormFields();
        }

        //This object
        const selfObject = this;

        //Iterating all user levels
        forEach(userLevels, function (value, key) {

            //Level to check
            let levelCheck = 'userLevel' + upperFirst(value) + 'Value';

            //Next level
            let nextLevel = value !== 'eight' ? userLevels[key + 1] : null;

            //If level value has been updated
            if (!isViewPage && prevProps[levelCheck] !== selfObject.props[levelCheck]) {

                //If level is updated
                if (selfObject.props[levelCheck]) {

                    //If not last level
                    if (nextLevel) {

                        //Updating next user hierarchy
                        dispatch(adminService.adminGetUserHierarchy(nextLevel, selfObject.props[levelCheck]));

                        //Resetting all further user hierarchy
                        if (nextLevel) {
                            dispatch(adminService.adminResetUserHierarchy(nextLevel));
                            dispatch(change(BasicField['userLevel' + upperFirst(nextLevel) + 'Selection']['name'], ''));
                        }
                    }
                } else {

                    //Resetting all further user hierarchy
                    if (nextLevel) {
                        dispatch(adminService.adminResetUserHierarchy(nextLevel));
                        dispatch(change(BasicField['userLevel' + upperFirst(nextLevel) + 'Selection']['name'], ''));
                    }
                }
            }
        });
    }

    initializeFormFields() {
        const { cloneDetail, groupDetail, groupID, initialize } = this.props;

        //Getting specific group detail
        let groupInfo = groupDetail[groupID];

        //Initialize
        initialize(dataGetRebateRateTableInitializeFields(
            cloneDetail ? cloneDetail : groupInfo
        ));

        //Set state as form initialized
        this.setState({
            hasFormInitialized: true,
        });
    }

    render() {
        const {
            error,
            handleSubmit,
            submitting,
            pristine,
            prerequisites,
            hasPermissionToStore,
            hasPermissionToUpdate,
            fieldValueTradingCurrency,
            fieldValueTradingCurrencyMulti,
            fieldValueTradingPlatform,
            fieldValueTradingProduct,
            fieldValueRebateRateType,
            isAnyTradingProductSelected,
            isViewPage,
            groupDetail,
            groupID,
            userHierarchy
        } = this.props;
        const { selectableProducts } = this.state;

        //Get trading currency list
        const tradingCurrencyList = dataGetTradingCurrencyList(tradingCurrency.lang.defaultOption, prerequisites);

        //Get trading currency profile list
        const tradingCurrencyMultiList = dataGetTradingCurrencyListMulti(tradingCurrencyList, fieldValueTradingCurrency);

        //Get trading platform list
        const tradingPlatformList = dataGetTradingPlatformList(tradingPlatform.lang.defaultOption, prerequisites);

        //Get trading product list
        const tradingProductList = dataGetTradingProductList(tradingProduct.lang.defaultOption, selectableProducts, null);

        //Get rebate rate type list
        const rebateRateTableTypeList = dataGetRebateRateTypeList(rebateRateTableType.lang.defaultOption, prerequisites);

        //Get rebate calculation type list
        const rebateCalculationTypeList = dataGetRebateCalculationTypeList(rebateCalculationType.lang.defaultOption, prerequisites);

        //Error messages
        let errorMessages = '';
        if (error) {
            errorMessages = map(error, function (row, index) {
                return (
                    <Grid.Column className="form-error-container" key={index}>
                        {CollectionMessage(row)}
                    </Grid.Column>
                );
            });
        }

        // If to disable all inputs
        const disableAllInputs = isViewPage && !hasPermissionToUpdate;

        return (
            <Grid.Row columns={1} className="admin-group-form">
                <Grid.Column>
                    <Form onSubmit={handleSubmit} noValidate>
                        <Grid padded="horizontally">
                            <Grid.Row columns={1}>
                                {
                                    error && errorMessages
                                }
                                <Grid.Column>
                                    <Card.Group>
                                        <Card fluid>
                                            <Card.Content header='Prerequisites' />
                                            <Card.Content>
                                                <Card.Description>
                                                    <Grid padded="horizontally">
                                                        <Grid.Row>
                                                            <Grid.Column mobile={16} tablet={8} computer={5}>
                                                                <Field
                                                                    component={SelectField}
                                                                    name={tradingCurrency.name}
                                                                    label={tradingCurrency.lang.title}
                                                                    options={tradingCurrencyList}
                                                                    placeholder={tradingCurrency.lang.defaultOption}
                                                                    disabled={isViewPage}
                                                                    required
                                                                />
                                                            </Grid.Column>
                                                            <Grid.Column mobile={16} tablet={8} computer={6}>
                                                                <Field
                                                                    component={SelectField}
                                                                    name={tradingPlatform.name}
                                                                    label={tradingPlatform.lang.title}
                                                                    options={tradingPlatformList}
                                                                    placeholder={tradingPlatform.lang.defaultOption}
                                                                    disabled={isViewPage}
                                                                    required
                                                                />
                                                            </Grid.Column>
                                                            <Grid.Column mobile={16} tablet={8} computer={5}>
                                                                <Field
                                                                    component={SelectField}
                                                                    name={rebateRateTableType.name}
                                                                    label={rebateRateTableType.lang.title}
                                                                    options={rebateRateTableTypeList}
                                                                    placeholder={rebateRateTableType.lang.defaultOption}
                                                                    disabled={isViewPage}
                                                                    required
                                                                />
                                                            </Grid.Column>
                                                        </Grid.Row>
                                                    </Grid>
                                                </Card.Description>
                                            </Card.Content>
                                        </Card>
                                    </Card.Group>
                                </Grid.Column>
                                {
                                    fieldValueTradingCurrency
                                    && fieldValueTradingPlatform
                                    && fieldValueRebateRateType && (
                                        <Grid.Column>
                                            <Card.Group className="card-margin-top">
                                                <Card fluid>
                                                    <Card.Content header='Currency profiles' />
                                                    <Card.Content>
                                                        <Card.Description>
                                                            <Field
                                                                component={SelectInput}
                                                                name={tradingCurrencyMulti.name}
                                                                label={tradingCurrencyMulti.lang.title}
                                                                isClearable={false}
                                                                options={tradingCurrencyMultiList}
                                                                placeholder={tradingCurrencyMulti.lang.defaultOption}
                                                                getOptionLabel='text'
                                                                getOptionValue='value'
                                                                isDisabled={disableAllInputs}
                                                                required
                                                            />
                                                        </Card.Description>
                                                    </Card.Content>
                                                </Card>
                                                <Card fluid>
                                                    <Card.Content header='Trading products' />
                                                    <Card.Content>
                                                        <Card.Description>
                                                            <Grid>
                                                                <FieldArray
                                                                    component={renderTradingProducts}
                                                                    disableAllInputs={disableAllInputs}
                                                                    name={tradingProductMulti.name}
                                                                    fieldValueTradingProduct={fieldValueTradingProduct}
                                                                    rebateCalculationTypeList={rebateCalculationTypeList}
                                                                    tradingProductList={tradingProductList}
                                                                />
                                                            </Grid>
                                                        </Card.Description>
                                                    </Card.Content>
                                                </Card>
                                                {
                                                    size(fieldValueTradingCurrencyMulti) > 0 &&
                                                    isAnyTradingProductSelected && (
                                                        <Card fluid>
                                                            <Card.Content header='Commission levels' />
                                                            <Card.Content>
                                                                <Card.Description>
                                                                    <CommissionLevelTab
                                                                        fieldValueTradingCurrencyMulti={fieldValueTradingCurrencyMulti}
                                                                        fieldValueTradingPlatform={fieldValueTradingPlatform}
                                                                        fieldValueTradingProduct={fieldValueTradingProduct}
                                                                        tradingProductList={tradingProductList}
                                                                        fieldValueRebateRateType={fieldValueRebateRateType}
                                                                        disableAllInputs={disableAllInputs}
                                                                        isViewPage={isViewPage}
                                                                        userHierarchy={userHierarchy}
                                                                    />
                                                                    {
                                                                        ((!isViewPage && hasPermissionToStore)
                                                                            || (isViewPage && hasPermissionToUpdate)) &&
                                                                        <Button
                                                                            fluid
                                                                            color='blue'
                                                                            content={getTranslation(
                                                                                (isViewPage ? 'update' : 'submit') + '.title', 1
                                                                            )}
                                                                            type='submit'
                                                                            disabled={pristine}
                                                                            loading={submitting}
                                                                        />
                                                                    }
                                                                </Card.Description>
                                                            </Card.Content>
                                                        </Card>
                                                    )
                                                }
                                            </Card.Group>
                                        </Grid.Column>
                                    )
                                }
                            </Grid.Row>
                        </Grid>
                    </Form>
                </Grid.Column>
                {isViewPage && !isEmpty(groupDetail[groupID]) && <Grid.Column>
                    <BrowserBackButton linkTo={ConfigAppPageAdmin.adminGroupList.route} />
                </Grid.Column>}
            </Grid.Row>
        );
    }
}

const mapStateToProps = (state) => {

    // All permissions
    const allPermissions = state.auth.permissions.data;

    // Return
    return {
        hasPermissionToStore: hasPermissionToAction(allPermissions, BasicPermissionApiAdminRrtStore),
        hasPermissionToUpdate: hasPermissionToAction(allPermissions, BasicPermissionApiAdminRrtUpdate),
        groupDetail: state.admin.groupDetail,
        prerequisites: state.admin.prerequisites,
        userHierarchy: state.admin.userHierarchy,
        userHierarchyThree: state.admin.userHierarchy.three.data,
        userHierarchyFour: state.admin.userHierarchy.four.data,
        userHierarchyFive: state.admin.userHierarchy.five.data,
        userHierarchySix: state.admin.userHierarchy.six.data,
        userHierarchySeven: state.admin.userHierarchy.seven.data,
        userHierarchyEight: state.admin.userHierarchy.eight.data,
    }
};

AdminGroupAddForm = reduxForm({
    form: formName,
    touchOnBlur: false,
    validate,
})(AdminGroupAddForm);

const selector = formValueSelector(formName);
AdminGroupAddForm = connect(state => {

    const fieldValueTradingCurrency = selector(state, tradingCurrency.name);
    const fieldValueTradingCurrencyMulti = selector(state, tradingCurrencyMulti.name);
    const fieldValueTradingPlatform = selector(state, tradingPlatform.name);
    const fieldValueTradingProduct = selector(state, tradingProductMulti.name);
    const fieldValueRebateRateType = selector(state, rebateRateTableType.name);

    //Selected user levels
    const userLevelThreeValue = selector(state, userLevelThreeSelection.name);
    const userLevelFourValue = selector(state, userLevelFourSelection.name);
    const userLevelFiveValue = selector(state, userLevelFiveSelection.name);
    const userLevelSixValue = selector(state, userLevelSixSelection.name);
    const userLevelSevenValue = selector(state, userLevelSevenSelection.name);
    const userLevelEightValue = selector(state, userLevelEightSelection.name);

    // Check if any trading product field filled completely
    const isAnyTradingProductSelected = find(fieldValueTradingProduct, function (row) {
        return isTradingProductSelected(row);
    })

    //Return
    return {
        fieldValueTradingCurrency,
        fieldValueTradingCurrencyMulti,
        fieldValueTradingPlatform,
        fieldValueTradingProduct,
        fieldValueRebateRateType,
        isAnyTradingProductSelected,
        userLevelThreeValue,
        userLevelFourValue,
        userLevelFiveValue,
        userLevelSixValue,
        userLevelSevenValue,
        userLevelEightValue
    };
})(AdminGroupAddForm);

export default connect(mapStateToProps)(AdminGroupAddForm);
