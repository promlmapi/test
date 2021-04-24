// Basics
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {
    InputField,
    SelectField
} from 'react-semantic-redux-form';
import {
    Button,
    Form
} from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { push } from 'connected-react-router';

// Libraries
import { getTranslation } from '../../../../../custom/Libraries/Utility';
import { validateSpecificForm } from '../../../../../custom/Libraries/Form';
import {
    dataGetRebateAccountChangeReasonList,
    dataGetTableDynamic
} from '../../../../../custom/Libraries/Data';

// Utilities
import {
    clone,
    get
} from 'lodash';

// Services
import {
    adminGetTradingClientDetail,
    adminSearchIbRebateAccount,
    adminUpdateTradingClientDetail
} from '../../../../../services/adminService';

// Constants
import BasicField from '../../../../../custom/Basics/Field';

// Views
import CheckBoxGroup from '../../../../../elements/Element/CheckBoxGroup/CheckBoxGroup';
import AtomPageHeading from '../../../../../elements/Element/PageHeading';
import CollectionMessage from '../../../../../elements/Collection/Message/Message.jsx';
import SelectInput from '../../../../../elements/Element/SelectInput/SelectInput';

// Constants
import { ConfigAppPageAdmin } from '../../../../../custom/Configs/PageAdmin';

// Page configs
const { adminIbTradingClientIndex } = ConfigAppPageAdmin;

// Redux form
const formName = 'adminIbTradingClientView';
const validate = (data, props) => {
    return validateSpecificForm(data, props, formName, 0, true);
};

// Fields
const {
    currentRefereeRebateAccountNumber,
    currentRefereeIbName,
    rebateAccountChangeReason,
    rebateAccountNumber,
    rebateAccountSearch,
    updateDate,
    updateDeclaration
} = BasicField;

class TradingClientForm extends Component {

    constructor(props) {
        super(props);

        // Bindings
        this.initializeForm = this.initializeForm.bind(this);
        this.submitFormHandler = this.submitFormHandler.bind(this);
        this.searchRebateAccount = this.searchRebateAccount.bind(this);
    }

    componentDidMount() {
        this.initializeForm();
    }

    componentDidUpdate(prevProps) {
        const {
            initialize,
            tradingClientDetailDestinationRows,
        } = this.props;

        // If trading client details received
        if (
            prevProps.tradingClientDetailDestinationRows !== tradingClientDetailDestinationRows
            && tradingClientDetailDestinationRows
        ) {
            this.initializeForm();
        }
    }

    initializeForm() {
        const {
            initialize,
            tradingClientDetailDestinationRows,
        } = this.props;

        // If trading client details received
        if (tradingClientDetailDestinationRows) {

            //Default values
            initialize({
                [currentRefereeRebateAccountNumber.name]: get(tradingClientDetailDestinationRows, 'currentRefereeRebateAccountNumber.value'),
                [currentRefereeIbName.name]: get(tradingClientDetailDestinationRows, 'currentRefereeIbName.value'),
                [updateDate.name]: get(tradingClientDetailDestinationRows, 'updateDate.value'),
            });
        }
    }

    searchRebateAccount(keyword, callback) {
        const { tradingClientId } = this.props;

        // Return
        return adminSearchIbRebateAccount(keyword, callback, tradingClientId);
    }

    submitFormHandler(values, dispatch) {
        const {
            location,
            tradingClientId
        } = this.props;

        // Adding additional fields
        const submitValues = clone(values);
        submitValues[rebateAccountNumber.name] = get(values, [rebateAccountSearch.name, 'id']);
        // submitValues[BasicField.transactionType.name] = transactionType;
        // submitValues[rebateAccountNumber.name] = tradingClientId;

        // Submit
        return adminUpdateTradingClientDetail(tradingClientId, submitValues, function (data) {

            // Location to redirect
            let locationToRedirect = get(location, 'state.from.pathname');

            // If previous page link not present then redirecting to default
            if (!locationToRedirect) {
                locationToRedirect = adminIbTradingClientIndex.route;
            }

            // Update data again
            dispatch(adminGetTradingClientDetail(tradingClientId));

            // Redirect to location
            dispatch(push(locationToRedirect));

            // Return
            return data;
        });
    }

    render() {
        const {
            dispatch,
            error,
            handleSubmit,
            location,
            pristine,
            submitting,
            tradingClientDetail,
            tradingClientDetailAuditTable,
            tradingClientDetailDestination,
            tradingClientDetailDestinationMetadata,
            tradingClientDetailDestinationRows,
            tradingClientDetailSource,
            tradingClientDetailSourceMetadata,
            tradingClientDetailSourceRows,
        } = this.props;

        // If form details are not present
        if (!tradingClientDetail) {
            return null;
        }

        //Get update reason type list
        let rebateAccountChangeReasonList = dataGetRebateAccountChangeReasonList(
            rebateAccountChangeReason.lang.defaultOption,
            get(tradingClientDetailDestinationRows, 'updateReason.value.data')
        );

        return (
            <Form onSubmit={handleSubmit(this.submitFormHandler)} noValidate>
                {error && CollectionMessage(error)}
                {dataGetTableDynamic(tradingClientDetailSource, location)}
                <AtomPageHeading
                    title={get(tradingClientDetailDestinationMetadata, 'label', null)}
                    withDivider
                />
                <Field
                    component={InputField}
                    name={currentRefereeRebateAccountNumber.name}
                    label={currentRefereeRebateAccountNumber.lang.title}
                    placeholder={currentRefereeRebateAccountNumber.lang.placeHolder}
                    type={currentRefereeRebateAccountNumber.type}
                    disabled
                />
                <Field
                    component={InputField}
                    name={currentRefereeIbName.name}
                    label={currentRefereeIbName.lang.title}
                    placeholder={currentRefereeIbName.lang.placeHolder}
                    type={currentRefereeIbName.type}
                    disabled
                />
                <Field
                    component={InputField}
                    name={updateDate.name}
                    label={updateDate.lang.title}
                    placeholder={updateDate.lang.placeHolder}
                    type={updateDate.type}
                    disabled
                />
                <Field
                    component={SelectField}
                    name={rebateAccountChangeReason.name}
                    label={rebateAccountChangeReason.lang.title}
                    options={rebateAccountChangeReasonList}
                    placeholder={rebateAccountChangeReason.lang.defaultOption}
                    required
                />
                <Field
                    component={SelectInput}
                    defaultOptions
                    getOptionLabel='display_name'
                    getOptionValue='id'
                    label={rebateAccountSearch.lang.title}
                    loadOptions={this.searchRebateAccount}
                    isMulti={false}
                    name={rebateAccountSearch.name}
                    placeholder={rebateAccountSearch.lang.placeHolder}
                    required
                />

                {dataGetTableDynamic(tradingClientDetailAuditTable, location, true)}
                <CheckBoxGroup
                    name={updateDeclaration.name}
                    options={[{
                        label: get(tradingClientDetailDestinationRows, 'updateDeclaration.value', null),
                        value: '1',
                        name: updateDeclaration.name,
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

const mapStateToProps = (state, ownProps) => {

    // Trading client
    const tradingClientId = get(ownProps, 'tradingClientId');

    // Form details
    const tradingClientDetail = get(state, 'admin.tradingClient.' + tradingClientId + '.tables');

    // Tables
    const tradingClientDetailSource = get(tradingClientDetail, 'source');
    const tradingClientDetailDestination = get(tradingClientDetail, 'destination');

    // Return
    return {
        tradingClientDetail: tradingClientDetail,
        tradingClientDetailAuditTable: get(tradingClientDetail, 'audit_table'),
        tradingClientDetailDestination: tradingClientDetailDestination,
        tradingClientDetailDestinationMetadata: get(tradingClientDetailDestination, 'metadata'),
        tradingClientDetailDestinationRows: get(tradingClientDetailDestination, 'rows'),
        tradingClientDetailSource: tradingClientDetailSource,
        tradingClientDetailSourceMetadata: get(tradingClientDetailSource, 'metadata'),
        tradingClientDetailSourceRows: get(tradingClientDetailSource, 'rows')
    };
};

TradingClientForm.propTypes = {
    tradingClientId: PropTypes.string.isRequired
};

export default reduxForm({
    form: formName,
    touchOnBlur: false,
    validate,
})(connect(mapStateToProps)(withRouter(TradingClientForm)));
