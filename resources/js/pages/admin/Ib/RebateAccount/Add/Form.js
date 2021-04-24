// Basics
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    formValueSelector,
    Field,
    reduxForm
} from 'redux-form';
import { SelectField } from 'react-semantic-redux-form';
import {
    Button,
    Form
} from 'semantic-ui-react';
import { push } from 'connected-react-router';

// Libraries
import { getTranslation } from '../../../../../custom/Libraries/Utility';
import { validateSpecificForm } from '../../../../../custom/Libraries/Form';
import {
    dataGetTradingCurrencyList,
    dataGetTradingPlatformListForRebateAccountAdd,
    dataGetTableDynamic
} from '../../../../../custom/Libraries/Data';

// Utilities
import {
    clone,
    find,
    get,
    isEmpty,
    size
} from 'lodash';

// Services
import { adminPostRebateAccountFormDetail } from '../../../../../services/adminService';

// Constants
import BasicField from '../../../../../custom/Basics/Field';

// Views
import CheckBoxGroup from '../../../../../elements/Element/CheckBoxGroup/CheckBoxGroup';
import AtomPageHeading from '../../../../../elements/Element/PageHeading';
import CollectionMessage from '../../../../../elements/Collection/Message/Message.jsx';

// Constants
import { ConfigAppPageAdmin } from '../../../../../custom/Configs/PageAdmin';

// Page configs
const { adminIbList } = ConfigAppPageAdmin;

// Redux form
const formName = 'adminIbRebateAccountAdd';
const validate = (data, props) => {
    return validateSpecificForm(data, props, formName, 0, true);
};

// Fields
const {
    basicCurrency,
    rebateAccountAddDeclaration,
    basicTradingPlatform,
    userIdNumber
} = BasicField;

class RebateAccountAddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectableCurrencyList: [],
        }

        // Bindings
        this.submitFormHandler = this.submitFormHandler.bind(this);
    }

    componentDidUpdate(prevProps) {
        const {
            change,
            tradingPlatformListSource,
            tradingPlatformValue
        } = this.props;
        const { selectableCurrencyList } = this.state;

        // If trading platform has been updated
        if (prevProps.tradingPlatformValue !== tradingPlatformValue) {

            if (typeof tradingPlatformValue === 'undefined') {

                // Updating in state
                if (selectableCurrencyList !== []) {
                    this.setState({
                        selectableCurrencyList: [],
                    });
                }

            } else {

                // If source has trading platform list
                if (!isEmpty(tradingPlatformListSource)) {

                    // Select trading platform object
                    const selectedTradingPlatform = find(tradingPlatformListSource, (row) => {
                        return row.basics_trading_platform.id === tradingPlatformValue
                    });

                    // If object found
                    if (selectedTradingPlatform) {

                        //Updating in state
                        this.setState({
                            selectableCurrencyList: selectedTradingPlatform,
                        });
                    }
                }
            }

            // Update values
            change([basicCurrency.name], null);
        }
    }

    submitFormHandler(values, dispatch) {
        const {
            location,
            resourceId
        } = this.props;

        // Adding additional fields
        const submitValues = clone(values);
        submitValues[userIdNumber.name] = resourceId;

        // Submit
        return adminPostRebateAccountFormDetail(submitValues, function (data) {

            // Location to redirect
            let locationToRedirect = get(location, 'state.from.pathname');

            // If previous page link not present then redirecting to default
            if (!locationToRedirect) {
                locationToRedirect = `${adminIbList.route}/${resourceId}`;
            }

            // Redirect to location
            dispatch(push(locationToRedirect));

            // Return
            return data;
        });
    }

    render() {
        const {
            error,
            handleSubmit,
            location,
            pristine,
            submitting,
            formDetail,
            formDetailAuditTable,
            formDetailSourceMetadata,
            formDetailSourceRows,
            tradingPlatformListSource
        } = this.props;
        const { selectableCurrencyList } = this.state;

        // If form details are not present
        if (!formDetail) {
            return null;
        }

        // Get trading platform list
        const tradingPlatformList = dataGetTradingPlatformListForRebateAccountAdd(
            basicTradingPlatform.lang.defaultOption,
            tradingPlatformListSource
        )

        // Get currency list
        let currencyList = dataGetTradingCurrencyList(
            basicCurrency.lang.defaultOption,
            selectableCurrencyList,
            'basics_currencies'
        );

        return (
            <Form onSubmit={handleSubmit(this.submitFormHandler)} noValidate>
                <AtomPageHeading
                    title={get(formDetailSourceMetadata, 'label', null)}
                />
                {error && CollectionMessage(error)}
                <Field
                    component={SelectField}
                    name={basicTradingPlatform.name}
                    label={basicTradingPlatform.lang.title}
                    options={tradingPlatformList}
                    placeholder={basicTradingPlatform.lang.defaultOption}
                    required
                />
                {size(selectableCurrencyList) > 0 && (
                    <Field
                        component={SelectField}
                        name={basicCurrency.name}
                        label={basicCurrency.lang.title}
                        options={currencyList}
                        placeholder={basicCurrency.lang.placeHolder}
                        required
                    />
                )}
                {dataGetTableDynamic(formDetailAuditTable, location, true)}
                <CheckBoxGroup
                    name={rebateAccountAddDeclaration.name}
                    options={[{
                        label: get(formDetailSourceRows, 'creationDeclaration.value', null),
                        value: '1',
                        name: rebateAccountAddDeclaration.name,
                    }]}
                    singleOption
                />
                <Button fluid color='blue' type='submit' disabled={pristine} loading={submitting}>
                    {getTranslation('submit.title', 1)}
                </Button>
            </Form>
        );
    }
}

RebateAccountAddForm.propTypes = {
    resourceId: PropTypes.string.isRequired
};

RebateAccountAddForm = reduxForm({
    form: formName,
    touchOnBlur: false,
    validate,
})(RebateAccountAddForm);

const selector = formValueSelector(formName);
RebateAccountAddForm = connect(state => {

    //From account
    const tradingPlatformValue = selector(state, basicTradingPlatform.name);

    //Return
    return { tradingPlatformValue };
})(RebateAccountAddForm);

const mapStateToProps = (state) => {

    // Form details
    const formDetail = get(state, 'admin.rebateAccountAddForm');
    const formDetailSourceRows = get(formDetail, 'tables.source.rows');

    return {
        formDetail,
        formDetailAuditTable: get(formDetail, 'tables.audit_table'),
        formDetailSourceMetadata: get(formDetail, 'tables.source.metadata'),
        formDetailSourceRows,
        tradingPlatformListSource: get(formDetailSourceRows, 'basicsTradingPlatforms.value')
    };
};

export default connect(mapStateToProps)(RebateAccountAddForm);
