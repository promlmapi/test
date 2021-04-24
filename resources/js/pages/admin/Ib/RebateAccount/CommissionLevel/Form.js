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
    SelectField
} from 'react-semantic-redux-form';
import {
    Button,
    Form
} from 'semantic-ui-react';
import { push } from 'connected-react-router';

// Libraries
import { getTranslation } from '../../../../../custom/Libraries/Utility';
import { validateSpecificForm } from '../../../../../custom/Libraries/Form';
import {
    dataGetCommissionLevelList,
    dataGetTableDynamic
} from '../../../../../custom/Libraries/Data';

// Utilities
import { get } from 'lodash';

// Services
import { adminPostRebateAccountCommissionLevelFormDetail } from '../../../../../services/adminService';

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
const formName = 'adminIbRebateAccountCommissionLevel';
const validate = (data, props) => {
    return validateSpecificForm(data, props, formName, 0, true);
};

// Fields
const {
    basicCurrency,
    basicRebateCommissionLevel,
    basicRebateCommissionLevelCurrent,
    basicTradingPlatform,
    ibName,
    rebateAccountAddDeclaration,
    rebateAccountNumber
} = BasicField;

class RebateAccountCommissionLevelForm extends Component {

    constructor(props) {
        super(props);

        // Bindings
        this.submitFormHandler = this.submitFormHandler.bind(this);
    }

    componentDidUpdate(prevProps) {
        const {
            initialize,
            formDetailSourceRows,
        } = this.props;

        // If form details received
        if (
            prevProps.formDetailSourceRows !== formDetailSourceRows
            && formDetailSourceRows
        ) {

            //Default values
            initialize({
                [basicCurrency.name]: get(formDetailSourceRows, 'rebateAccountCurrency.value'),
                [basicTradingPlatform.name]: get(formDetailSourceRows, 'rebateAccountPlatform.value'),
                [basicRebateCommissionLevelCurrent.name]: get(formDetailSourceRows, 'rebateAccountCommissionLevel.value'),
                [ibName.name]: get(formDetailSourceRows, 'ibName.value'),
                [rebateAccountNumber.name]: get(formDetailSourceRows, 'rebateAccountNumber.value')
            });
        }
    }

    submitFormHandler(values, dispatch) {
        const {
            location,
            rebateAccountId,
            resourceId
        } = this.props;

        // Submit
        return adminPostRebateAccountCommissionLevelFormDetail(rebateAccountId, values, function (data) {

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
            commissionLevelListSource
        } = this.props;

        // If form details are not present
        if (!formDetail) {
            return null;
        }

        // Get rebate commission level list
        const rebateCommissionLevelList = dataGetCommissionLevelList(
            basicRebateCommissionLevel.lang.defaultOption,
            commissionLevelListSource
        )

        return (
            <Form onSubmit={handleSubmit(this.submitFormHandler)} noValidate>
                <AtomPageHeading
                    title={get(formDetailSourceMetadata, 'label', null)}
                />
                {error && CollectionMessage(error)}
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
                    name={basicTradingPlatform.name}
                    label={basicTradingPlatform.lang.title}
                    placeholder={basicTradingPlatform.lang.placeHolder}
                    type={basicTradingPlatform.type}
                    disabled
                />
                <Field
                    component={InputField}
                    name={basicCurrency.name}
                    label={basicCurrency.lang.title}
                    placeholder={basicCurrency.lang.placeHolder}
                    type={basicCurrency.type}
                    disabled
                />
                <Field
                    component={InputField}
                    name={basicRebateCommissionLevelCurrent.name}
                    label={basicRebateCommissionLevelCurrent.lang.title}
                    placeholder={basicRebateCommissionLevelCurrent.lang.placeHolder}
                    type={basicRebateCommissionLevelCurrent.type}
                    disabled
                />
                <Field
                    component={SelectField}
                    name={basicRebateCommissionLevel.name}
                    label={basicRebateCommissionLevel.lang.title}
                    options={rebateCommissionLevelList}
                    placeholder={basicRebateCommissionLevel.lang.defaultOption}
                    required
                />

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

RebateAccountCommissionLevelForm.propTypes = {
    rebateAccountId: PropTypes.string.isRequired,
    resourceId: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {

    // Form details
    const formDetail = get(state, 'admin.rebateAccountCommissionLevelForm');
    const formDetailSourceRows = get(formDetail, 'tables.source.rows');

    return {
        formDetail,
        formDetailAuditTable: get(formDetail, 'tables.audit_table'),
        formDetailSourceMetadata: get(formDetail, 'tables.source.metadata'),
        formDetailSourceRows,
        commissionLevelListSource: get(formDetailSourceRows, 'availableCommissionLevels.value.data')
    };
};

export default reduxForm({
    form: formName,
    touchOnBlur: false,
    validate,
})(connect(mapStateToProps)(RebateAccountCommissionLevelForm));
