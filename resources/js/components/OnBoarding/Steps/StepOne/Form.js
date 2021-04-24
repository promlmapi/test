import React from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import BasicField from '../../../../custom/Basics/Field';
import { getTranslation } from '../../../../custom/Libraries/Utility';
import { Field, reduxForm, reset } from 'redux-form';
import { InputField, SelectField } from 'react-semantic-redux-form';
import { validateSpecificForm, stopEvent } from '../../../../custom/Libraries/Form';
import { dataGetCountryIbList, dataGetContinentIbList, dataGetPhoneCodeList } from '../../../../custom/Libraries/Data';
import CollectionMessage from '../../../../elements/Collection/Message/Message.jsx'
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';
import { find, get, size } from 'lodash';
import ElementPasswordFieldMessage from '../../../../elements/Element/PasswordFieldMessage';

//Form name
const formName = 'onBoardingStepOne';

const validate = (data, props) => {
    return validateSpecificForm(data, props, formName);
};

class StepOneForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showOTPField: false,
            hasCountryFieldInitialized: false,
            hasPhoneCodeFieldInitialized: false,
            queryParams: queryString.parse(get(props, 'location.search'))
        };

        //Bindings
        this.initializeForm = this.initializeForm.bind(this);
    }

    componentDidMount() {

        //Reset form on load
        this.props.dispatch(reset(formName));

        //Initialize form
        this.initializeForm();
    }

    componentDidUpdate(prevProps) {
        const {
            change,
            countryList,
            phoneCodeList
        } = this.props;
        const {
            hasCountryFieldInitialized,
            hasPhoneCodeFieldInitialized,
            queryParams
        } = this.state;

        //Show OTP field
        if (this.props.submitSucceeded && !this.state.showOTPField) {
            this.setState({
                showOTPField: true,
            });
        }

        //If country present in query params
        if (
            !hasCountryFieldInitialized
            && get(queryParams, BasicField.country.name)
            && (size(countryList) > 1)
        ) {

            // Finding country
            const countryObject = find(countryList, { text: get(queryParams, BasicField.country.name) });

            // If country found
            if (countryObject) {
                change(BasicField.country.name, countryObject.value);
            }

            //Update state
            this.setState({
                hasCountryFieldInitialized: true
            });
        }

        //If phone code field present in query params
        if (
            !hasPhoneCodeFieldInitialized
            && get(queryParams, BasicField.phoneCode.name)
            && (size(phoneCodeList) > 1)
        ) {

            // Finding phone code
            const phoneCodeObject = find(phoneCodeList, { phone_code: get(queryParams, BasicField.phoneCode.name) });

            // If phone code found
            if (phoneCodeObject) {
                change(BasicField.phoneCode.name, phoneCodeObject.value);
            }

            //Update state
            this.setState({
                hasPhoneCodeFieldInitialized: true
            });
        }
    }

    initializeForm() {
        const { initialize } = this.props;
        const { queryParams } = this.state;

        //If query params present
        if (queryParams) {

            //Default values
            initialize({
                [BasicField.firstName.name]: get(queryParams, BasicField.firstName.name, ''),
                [BasicField.lastName.name]: get(queryParams, BasicField.lastName.name, ''),
                [BasicField.email.name]: get(queryParams, BasicField.email.name, ''),
                [BasicField.phone.name]: get(queryParams, 'phone_number', '')
            });
        }
    }

    render() {
        const { error, handleSubmit, pristine, submitting, prerequisites, countryList, regionList, phoneCodeList } = this.props;

        return (
            <Form onSubmit={handleSubmit} noValidate>
                {error && CollectionMessage(error)}
                <Field
                    component={SelectField}
                    name={BasicField.country.name}
                    label={BasicField.country.lang.title}
                    options={countryList}
                    placeholder={BasicField.country.lang.defaultOption}
                    required
                />
                <Field
                    component={SelectField}
                    name={BasicField.regionRefer.name}
                    label={BasicField.regionRefer.lang.title}
                    options={regionList}
                    placeholder={BasicField.regionRefer.lang.defaultOption}
                    required
                />
                <Field component={InputField}
                    name={BasicField.firstName.name}
                    label={BasicField.firstName.lang.title}
                    placeholder={BasicField.firstName.lang.placeHolder}
                    type={BasicField.firstName.type}
                    required
                />
                <Field component={InputField}
                    name={BasicField.lastName.name}
                    label={BasicField.lastName.lang.title}
                    placeholder={BasicField.lastName.lang.placeHolder}
                    type={BasicField.lastName.type}
                    required
                />
                <Field component={InputField}
                    name={BasicField.email.name}
                    label={BasicField.email.lang.title}
                    placeholder={BasicField.email.lang.placeHolder}
                    type={BasicField.email.type}
                    required
                />
                <Field component={InputField}
                    name={BasicField.confirmEmail.name}
                    label={BasicField.confirmEmail.lang.title}
                    placeholder={BasicField.confirmEmail.lang.placeHolder}
                    type={BasicField.confirmEmail.type}
                    onCopy={stopEvent}
                    onDrag={stopEvent}
                    onDrop={stopEvent}
                    onPaste={stopEvent}
                    required
                />
                <Field component={InputField}
                    name={BasicField.password.name}
                    label={BasicField.password.lang.title}
                    placeholder={BasicField.password.lang.placeHolder}
                    type={BasicField.password.type}
                    required
                />
                <ElementPasswordFieldMessage fromAuthPage/>
                <Form.Group>
                    <Field
                        component={SelectField}
                        name={BasicField.phoneCode.name}
                        label={BasicField.phoneCode.lang.title}
                        options={phoneCodeList}
                        placeholder={BasicField.phoneCode.lang.defaultOption}
                        required
                        width={8}
                    />
                    <Field component={InputField}
                        name={BasicField.phone.name}
                        label={BasicField.phone.lang.title}
                        placeholder={BasicField.phone.lang.placeHolder}
                        type={BasicField.phone.type}
                        required
                        width={8}
                    />
                </Form.Group>
                {this.state.showOTPField && <Field component={InputField}
                    name={BasicField.otp.name}
                    label={BasicField.otp.lang.title}
                    placeholder={BasicField.otp.lang.placeHolder}
                    type={BasicField.otp.type}
                    required
                />}
                <Button fluid color='blue' type='submit' disabled={pristine} loading={submitting}>
                    {getTranslation('next.title', 1)}
                </Button>
                <small>{getTranslation('agreement.title', 1)}</small>
            </Form>
        );
    }
}

const mapStateToProps = (state) => {

    //Prerequisites
    const prerequisites = get(state, 'data.prerequisites');

    //Return
    return {
        countryList: dataGetCountryIbList(BasicField.country.lang.defaultOption, prerequisites),
        isAuthenticated: state.auth.isAuthenticated,
        phoneCodeList: dataGetPhoneCodeList(BasicField.phoneCode.lang.defaultOption, prerequisites),
        regionList: dataGetContinentIbList(BasicField.regionRefer.lang.defaultOption, prerequisites)
    };
};

export default reduxForm({
    form: formName,
    touchOnBlur: false,
    validate
})(connect(mapStateToProps)(withRouter(StepOneForm)));
