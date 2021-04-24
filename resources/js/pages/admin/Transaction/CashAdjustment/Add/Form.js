// Basics
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Field,
    reduxForm
} from 'redux-form';
import {
    InputField,
    SelectField,
    TextAreaField
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
    dataGetAdjustmentTypeList,
    dataGetTableDynamic
} from '../../../../../custom/Libraries/Data';

// Utilities
import {
    clone,
    get
} from 'lodash';

// Services
import { adminPostTransactionFormDetail } from '../../../../../services/adminService';

// Constants
import BasicField from '../../../../../custom/Basics/Field';

// Views
import CheckBoxGroup from '../../../../../elements/Element/CheckBoxGroup/CheckBoxGroup';
import AtomPageHeading from '../../../../../elements/Element/PageHeading';
import CollectionMessage from '../../../../../elements/Collection/Message/Message.jsx';

// Constants
import { ConfigAppPageAdmin } from '../../../../../custom/Configs/PageAdmin';

// Page configs
const { adminTransactionCashAdjustmentList } = ConfigAppPageAdmin;

// Redux form
const formName = 'adminTransactionCashAdjustmentAdd';
const validate = (data, props) => {
    return validateSpecificForm(data, props, formName, 0, true);
};

// Fields
const {
    adjustmentAmount,
    adjustmentCurrency,
    adjustmentDate,
    adjustmentDeclaration,
    adjustmentReason,
    adjustmentType,
    ibName,
    rebateAccountNumber
} = BasicField;

class TransactionForm extends Component {

    constructor(props) {
        super(props);
        this.submitFormHandler = this.submitFormHandler.bind(this);
    }

    componentDidUpdate(prevProps) {
        const {
            initialize,
            transactionFormDetailSourceRows,
        } = this.props;

        // If form details received
        if (
            prevProps.transactionFormDetailSourceRows !== transactionFormDetailSourceRows
            && transactionFormDetailSourceRows
        ) {

            //Default values
            initialize({
                [adjustmentCurrency.name]: get(transactionFormDetailSourceRows, 'adjustmentCurrency.value'),
                [adjustmentDate.name]: get(transactionFormDetailSourceRows, 'adjustmentDate.value'),
                [ibName.name]: get(transactionFormDetailSourceRows, 'ibName.value'),
                [rebateAccountNumber.name]: get(transactionFormDetailSourceRows, 'rebateAccountNumber.value')
            });
        }
    }

    submitFormHandler(values, dispatch) {
        const {
            location,
            rebateAccountId,
            transactionType
        } = this.props;

        // Adding additional fields
        const submitValues = clone(values);
        submitValues['basics_user_action_type_id'] = 2;
        submitValues[BasicField.transactionType.name] = transactionType;
        submitValues[rebateAccountNumber.name] = rebateAccountId;

        // Submit
        return adminPostTransactionFormDetail(submitValues, function (data) {

            // Location to redirect
            let locationToRedirect = get(location, 'state.from.pathname');

            // If previous page link not present then redirecting to default
            if (!locationToRedirect) {
                locationToRedirect = adminTransactionCashAdjustmentList.route;
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
            transactionFormDetail,
            transactionFormDetailAuditTable,
            transactionFormDetailSourceMetadata,
            transactionFormDetailSourceRows,
        } = this.props;

        // If form details are not present
        if (!transactionFormDetail) {
            return null;
        }

        //Get adjustment type list
        let adjustmentTypeList = dataGetAdjustmentTypeList(
            adjustmentType.lang.defaultOption,
            get(transactionFormDetailSourceRows, 'adjustmentType.value.data')
        );

        return (
            <Form onSubmit={handleSubmit(this.submitFormHandler)} noValidate>
                <AtomPageHeading
                    title={get(transactionFormDetailSourceMetadata, 'label', null)}
                />
                {error && CollectionMessage(error)}
                <Field
                    component={SelectField}
                    name={adjustmentType.name}
                    label={adjustmentType.lang.title}
                    options={adjustmentTypeList}
                    placeholder={adjustmentType.lang.defaultOption}
                    required
                />
                <Field
                    component={InputField}
                    name={adjustmentDate.name}
                    label={adjustmentDate.lang.title}
                    placeholder={adjustmentDate.lang.placeHolder}
                    type={adjustmentDate.type}
                    disabled
                />
                <Field
                    component={TextAreaField}
                    name={adjustmentReason.name}
                    label={adjustmentReason.lang.title}
                    placeholder={adjustmentReason.lang.placeHolder}
                    required
                    autoHeight
                />
                <Field
                    component={InputField}
                    name={ibName.name}
                    label={ibName.lang.title}
                    placeholder={ibName.lang.placeHolder}
                    type={ibName.type}
                    disabled
                />
                <Field
                    component={InputField}
                    name={rebateAccountNumber.name}
                    label={rebateAccountNumber.lang.title}
                    placeholder={rebateAccountNumber.lang.placeHolder}
                    type={rebateAccountNumber.type}
                    disabled
                />
                <Field
                    component={InputField}
                    name={adjustmentAmount.name}
                    label={adjustmentAmount.lang.title}
                    placeholder={adjustmentAmount.lang.placeHolder}
                    type={adjustmentAmount.type}
                    required
                />
                <Field
                    component={InputField}
                    name={adjustmentCurrency.name}
                    label={adjustmentCurrency.lang.title}
                    placeholder={adjustmentCurrency.lang.placeHolder}
                    type={adjustmentCurrency.type}
                    disabled
                />
                {dataGetTableDynamic(transactionFormDetailAuditTable, location, true)}
                <CheckBoxGroup
                    name={adjustmentDeclaration.name}
                    options={[{
                        label: get(transactionFormDetailSourceRows, 'adjustmentDeclaration.value', null),
                        value: '1',
                        name: adjustmentDeclaration.name,
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

const mapStateToProps = (state) => {

    // Form details
    const transactionFormDetail = get(state, 'admin.transactionForm');

    return {
        transactionFormDetail: transactionFormDetail,
        transactionFormDetailAuditTable: get(transactionFormDetail, 'tables.audit_table'),
        transactionFormDetailSourceMetadata: get(transactionFormDetail, 'tables.source.metadata'),
        transactionFormDetailSourceRows: get(transactionFormDetail, 'tables.source.rows')
    };
};

TransactionForm.propTypes = {
    rebateAccountId: PropTypes.string.isRequired,
    transactionType: PropTypes.number.isRequired
};

export default reduxForm({
    form: formName,
    touchOnBlur: false,
    validate,
})(connect(mapStateToProps)(withRouter(TransactionForm)));
