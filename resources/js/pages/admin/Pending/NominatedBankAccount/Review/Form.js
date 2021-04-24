import React from 'react'
import {connect} from 'react-redux'
import {Button, Form, Header} from 'semantic-ui-react'
import BasicField from '../../../../../custom/Basics/Field';
import { getTranslation } from '../../../../../custom/Libraries/Utility';
import { Field, reduxForm, reset, formValueSelector } from 'redux-form';
import { InputField, SelectField } from 'react-semantic-redux-form';
import { validateSpecificForm } from '../../../../../custom/Libraries/Form';
import CollectionMessage from '../../../../../elements/Collection/Message/Message.jsx'
import { dataGetCountryIbList } from '../../../../../custom/Libraries/Data';
import { isEmpty } from 'lodash';
import * as dataService from '../../../../../services/dataService.js'

//Form name
const formName = 'adminPendingNbaReview';

//Getting all fields
const { fullName, email, country, bankName, bankAddress, swift, bsbCode, beneficiaryAccountNumber, beneficiaryAccountName, accountHolderAddress } = BasicField;

class ResourceDetailForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hasFormInitialized: false,
        };
    }

    componentDidMount() {
        this.setState({
            hasFormInitialized: false,
        });
    }

    componentDidUpdate(prevProps){
        const { resourceDetail } = this.props;
        const { hasFormInitialized } = this.state;

        //If current resource has been updated
        if(!hasFormInitialized && !isEmpty(resourceDetail)) {

            //Default values
            this.props.initialize({
                [fullName.name]:                 resourceDetail['user']['full_name'],
                [email.name]:                    resourceDetail['user']['email'],
                [country.name]:                  resourceDetail['country_name'],
                [bankName.name]:                 resourceDetail['bank_name'],
                [bankAddress.name]:              resourceDetail['bank_address'],
                [swift.name]:                    resourceDetail['swift'],
                [bsbCode.name]:                  resourceDetail['bsb_code'],
                [beneficiaryAccountNumber.name]: resourceDetail['beneficiary_account_number'],
                [beneficiaryAccountName.name]:   resourceDetail['beneficiary_account_name'],
                [accountHolderAddress.name]:     resourceDetail['account_holder_address'],
            });

            //Set state as form initialized
            this.setState({
                hasFormInitialized: true,
            });
        }
    }

    render() {
        const { error, handleSubmit, submitting, pristine, prerequisites, resourceDetail, isOverseas } = this.props;

        return(
            <Form noValidate>
                <Header as='h3' className="page-heading">
                    User detail
                </Header>
                <Field
                    component={InputField}
                    name={ BasicField.fullName.name }
                    label={ BasicField.fullName.lang.title }
                    placeholder={ BasicField.fullName.lang.placeHolder }
                    readOnly
                    required
                />
                <Field
                    component={InputField}
                    name={ BasicField.email.name }
                    label={ BasicField.email.lang.title }
                    placeholder={ BasicField.email.lang.placeHolder }
                    readOnly
                    required
                />
                <Header as='h3' className="page-heading">
                    Nominated bank account detail
                </Header>
                <Field
                    component={InputField}
                    name={ country.name }
                    label={ country.lang.title }
                    placeholder={ country.lang.defaultOption }
                    readOnly
                    required
                />
                <Field component={ InputField }
                       name={ bankName.name }
                       label={ bankName.lang.title }
                       placeholder={ bankName.lang.placeHolder }
                       type={ bankName.type }
                       readOnly
                       required
                />
                { isOverseas &&
                    <Field component={ InputField }
                        name={ bankAddress.name }
                        label={ bankAddress.lang.title }
                        placeholder={ bankAddress.lang.placeHolder }
                        type={ bankAddress.type }
                        readOnly
                        required
                    /> }
                { isOverseas &&
                    <Field component={ InputField }
                        name={ swift.name }
                        label={ swift.lang.title }
                        placeholder={ swift.lang.placeHolder }
                        type={ swift.type }
                        readOnly
                        required
                    /> }
                { !isOverseas &&
                    <Field component={ InputField }
                        name={ bsbCode.name }
                        label={ bsbCode.lang.title }
                        placeholder={ bsbCode.lang.placeHolder }
                        type={ bsbCode.type }
                        readOnly
                        required
                    /> }
                <Field component={ InputField }
                    name={ beneficiaryAccountNumber.name }
                    label={ beneficiaryAccountNumber.lang.title }
                    placeholder={ beneficiaryAccountNumber.lang.placeHolder }
                    type={ beneficiaryAccountNumber.type }
                    readOnly
                    required
                />
                <Field component={ InputField }
                    name={ beneficiaryAccountName.name }
                    label={ beneficiaryAccountName.lang.title }
                    placeholder={ beneficiaryAccountName.lang.placeHolder }
                    type={ beneficiaryAccountName.type }
                    readOnly
                    required
                />
                { isOverseas &&
                    <Field component={ InputField }
                        name={ accountHolderAddress.name }
                        label={ accountHolderAddress.lang.title }
                        placeholder={ accountHolderAddress.lang.placeHolder }
                        type={ accountHolderAddress.type }
                        readOnly
                        required
                    /> }
            </Form>
        );
    }
}

ResourceDetailForm = reduxForm({
    form: formName,
    touchOnBlur: false,
})(ResourceDetailForm);

const selector = formValueSelector(formName);
ResourceDetailForm = connect(state => {

    //Selected country value
    const countrySelected = selector(state, 'country');

    //Checking if overseas
    const isOverseas = countrySelected === 'Overseas';

    //Return
    return {
        isOverseas,
    };
})(ResourceDetailForm);

export default ResourceDetailForm;
