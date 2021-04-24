import React from 'react'
import {connect} from 'react-redux'
import {Button, Form, Header} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'
import BasicField from '../../../../custom/Basics/Field';
import { getTranslation } from '../../../../custom/Libraries/Utility';
import { Field, reduxForm, reset } from 'redux-form';
import { InputField, SelectField } from 'react-semantic-redux-form';
import { validateSpecificForm } from '../../../../custom/Libraries/Form';
import CollectionMessage from '../../../../elements/Collection/Message/Message.jsx'
import _ from 'lodash';
import { dataGetRebateAccountsTradingList } from '../../../../custom/Libraries/Data';
import * as dataService from '../../../../services/dataService.js'
import i18n from '../../../../i18n';
//Form name
const formName = 'linkTradingAccount';

//Validate form
const validate = (data, props) => {
    return validateSpecificForm(data, props, formName);
};

//If user don't have any rebate account which isn't linked to any trading account added
const noRebateAccountUnassignedError =
    <span>
        {i18n.t('nav.header.links.linktradingaccountmsg1.title')}
    </span>;

class LinkTradingForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { error, handleSubmit, submitting, pristine, linkedTradingAccounts, rebateAccounts, submitSucceeded, isRebateAccountUnassigned } = this.props;

        //Getting all fields
        const { rebateAccount, tradingAccountNumber } = BasicField;

        //Get rebate accounts list
        let rebateAccountsList = dataGetRebateAccountsTradingList(rebateAccount.lang.defaultOption, rebateAccounts);

        return(
            <Form onSubmit={handleSubmit } noValidate>
                <Header as='h3' className="page-heading">
                {i18n.t('nav.header.links.linktradingaccountnew.title')}
                </Header>
                {!isRebateAccountUnassigned && CollectionMessage(noRebateAccountUnassignedError)}
                {error && CollectionMessage(error)}
                <Field
                    component={SelectField}
                    name={ rebateAccount.name }
                    label={ rebateAccount.lang.title }
                    options={ rebateAccountsList }
                    placeholder={ rebateAccount.lang.defaultOption }
                    required
                />
                <Field component={ InputField }
                       name={ tradingAccountNumber.name }
                       label={ tradingAccountNumber.lang.title }
                       placeholder={ tradingAccountNumber.lang.placeHolder }
                       type={ tradingAccountNumber.type }
                       required
                />
                <Button fluid color='blue' type='submit' disabled={pristine} loading={submitting}>
                    { getTranslation('submit.title', 1) }
                </Button>
            </Form>
        );
    }
}

//Reset form after submission
const afterSubmit = (result, dispatch) =>
    dispatch(reset(formName));

const mapStateToProps = (state) => {
    return {
        isRebateAccountUnassigned : state.data.showMessages.isRebateAccountUnassigned,
    }
};

export default reduxForm({
    form: formName,
    touchOnBlur: false,
    validate,
    onSubmitSuccess: afterSubmit,
})(connect(mapStateToProps)(LinkTradingForm));
