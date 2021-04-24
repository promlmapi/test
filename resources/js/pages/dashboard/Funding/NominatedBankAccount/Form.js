import React from 'react'
import {connect} from 'react-redux'
import {Button, Form, Header, Label} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'
import BasicField from '../../../../custom/Basics/Field';
import { getTranslation } from '../../../../custom/Libraries/Utility';
import { Field, reduxForm, formValueSelector, reset } from 'redux-form';
import { InputField, SelectField } from 'react-semantic-redux-form';
import { validateSpecificForm, responseValidate } from '../../../../custom/Libraries/Form';
import { ConfigAppPage } from '../../../../custom/Configs/Page';
import CollectionMessage from '../../../../elements/Collection/Message/Message.jsx'
import { dataGetNominatedBankCountryList } from '../../../../custom/Libraries/Data';
import _ from 'lodash';
import * as dataService from '../../../../services/dataService.js'
import { httpCallMake } from '../../../../custom/Libraries/httpCall'
import i18n from '../../../../i18n';

//Form name
const formName = 'nominatedBankAccount';

//Validate form
const validate = (data, props) => {
    return validateSpecificForm(data, props, formName);
};

class NominatedBankAccountForm extends React.Component {

    constructor(props) {
        super(props);
        this.initializeForm = this.initializeForm.bind(this);
    }

    componentDidMount() {
        this.initializeForm();
    }

    initializeForm() {
        const { currentAccount, initialize } = this.props;

        //Default values
        initialize({
            [BasicField.country.name]:      !_.isEmpty(currentAccount['country_name']) ? currentAccount['country_name'] : '',
            [BasicField.bankName.name]:     !_.isEmpty(currentAccount['bank_name']) ? currentAccount['bank_name'] : '',
            [BasicField.bankAddress.name]:  !_.isEmpty(currentAccount['bank_address']) ? currentAccount['bank_address'] : '',
            [BasicField.swift.name]:        !_.isEmpty(currentAccount['swift']) ? currentAccount['swift'] : '',
            [BasicField.bsbCode.name]:      !_.isEmpty(currentAccount['bsb_code']) ? currentAccount['bsb_code'] : '',
            [BasicField.beneficiaryAccountNumber.name]: !_.isEmpty(currentAccount['beneficiary_account_number']) ? currentAccount['beneficiary_account_number'] : '',
            [BasicField.beneficiaryAccountName.name]: !_.isEmpty(currentAccount['beneficiary_account_name']) ? currentAccount['beneficiary_account_name'] : '',
            [BasicField.accountHolderAddress.name]: !_.isEmpty(currentAccount['account_holder_address']) ? currentAccount['account_holder_address'] : '',
        });
    }

    componentDidUpdate(prevProps){
        const { currentAccount, submitSucceeded, userID, dispatch } = this.props;

        //If form submitted then getting account again
        if (prevProps.submitSucceeded !== submitSucceeded && submitSucceeded) {
            dispatch(dataService.dataGetNominatedBankAccounts(userID));
        }

        //If current account has been updated
        if(prevProps.currentAccount !== currentAccount) {
            this.initializeForm();
        }
    }

    render() {
        const { error, handleSubmit, submitting, pristine, prerequisites, currentAccount, isOverseas, isVerified } = this.props;

        //Get country list
        let countryList = dataGetNominatedBankCountryList(BasicField.country.lang.defaultOption);

        //Getting all fields
        const { country, bankName, bankAddress, swift, bsbCode, beneficiaryAccountNumber, beneficiaryAccountName, accountHolderAddress } = BasicField;

        //Having a variable on account addition
        let isAccountAdded = !_.isEmpty(currentAccount);

        return(
            <Form onSubmit={ handleSubmit } noValidate>
                { !_.isEmpty(isVerified) &&
                <Label
                    // color={isVerified === 'Verified' ? 'green' : 'yellow'}
                    ribbon="right"
                >
                    { isVerified }
                </Label>}
                <Header as='h3' className={'page-heading' + (!_.isEmpty(isVerified) ? ' show-form-ribbon' : '') }>
                {i18n.t('nav.header.links.nominatedbankaccountmsg2.title')}
                </Header>
                {error && CollectionMessage(error)}
                <Field
                    component={SelectField}
                    name={ country.name }
                    label={ country.lang.title }
                    options={ countryList }
                    placeholder={ country.lang.defaultOption }
                    disabled={ isAccountAdded }
                    required
                />
                <Field component={ InputField }
                       name={ bankName.name }
                       label={ bankName.lang.title }
                       placeholder={ bankName.lang.placeHolder }
                       type={ bankName.type }
                       readOnly={ isAccountAdded }
                       required
                />
                { isOverseas && <Field component={ InputField }
                       name={ bankAddress.name }
                       label={ bankAddress.lang.title }
                       placeholder={ bankAddress.lang.placeHolder }
                       type={ bankAddress.type }
                       readOnly={ isAccountAdded }
                       required
                /> }
                { isOverseas && <Field component={ InputField }
                       name={ swift.name }
                       label={ swift.lang.title }
                       placeholder={ swift.lang.placeHolder }
                       type={ swift.type }
                       readOnly={ isAccountAdded }
                       required
                /> }
                { !isOverseas && <Field component={ InputField }
                       name={ bsbCode.name }
                       label={ bsbCode.lang.title }
                       placeholder={ bsbCode.lang.placeHolder }
                       type={ bsbCode.type }
                       readOnly={ isAccountAdded }
                       required
                /> }
                <Field component={ InputField }
                       name={ beneficiaryAccountNumber.name }
                       label={ beneficiaryAccountNumber.lang.title }
                       placeholder={ beneficiaryAccountNumber.lang.placeHolder }
                       type={ beneficiaryAccountNumber.type }
                       readOnly={ isAccountAdded }
                       required
                />
                <Field component={ InputField }
                       name={ beneficiaryAccountName.name }
                       label={ beneficiaryAccountName.lang.title }
                       placeholder={ beneficiaryAccountName.lang.placeHolder }
                       type={ beneficiaryAccountName.type }
                       readOnly={ isAccountAdded }
                       required
                />
                { isOverseas && <Field component={ InputField }
                       name={ accountHolderAddress.name }
                       label={ accountHolderAddress.lang.title }
                       placeholder={ accountHolderAddress.lang.placeHolder }
                       type={ accountHolderAddress.type }
                       readOnly={ isAccountAdded }
                       required
                /> }
                {!isAccountAdded && <Button fluid color='blue' type='submit' disabled={pristine} loading={submitting}>
                { getTranslation('submit.title', 1) }
                </Button> }
            </Form>
        );
    }
}

NominatedBankAccountForm = reduxForm({
    form: formName,
    touchOnBlur: false,
    validate
})(NominatedBankAccountForm);

const selector = formValueSelector(formName);
NominatedBankAccountForm = connect(state => {

    //Selected country value
    const countrySelected = selector(state, 'country');

    //Checking if overseas
    const isOverseas = countrySelected === 'Overseas';

    //Return
    return {
        isOverseas,
    };
})(NominatedBankAccountForm);

export default NominatedBankAccountForm;
