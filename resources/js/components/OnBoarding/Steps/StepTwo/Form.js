import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import { BasicField } from '../../../../custom/Basics/Field';
import { getTranslation } from '../../../../custom/Libraries/Utility';
import { Field, reduxForm } from 'redux-form';
import { InputField } from 'react-semantic-redux-form';
import { validateSpecificForm } from '../../../../custom/Libraries/Form';
import CollectionMessage from '../../../../elements/Collection/Message/Message.jsx'
import { ConfigAppPage } from '../../../../custom/Configs/Page';
import ElementDatePicker from '../../../../elements/Element/DatePicker/DatePicker';

//Fields
const {
    city,
    dob,
    postalCode,
    state,
    streetName,
    town,
    unitNumber
} = BasicField;

//Form name
const formName = 'onBoardingStepTwo';

//Form Validation
const validate = (data, props) => {
    return validateSpecificForm(data, props, formName);
};

class StepTwoForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { error, handleSubmit, pristine, submitting, submitSucceeded } = this.props;

        if (submitSucceeded) {
            return (
                <Redirect to={ConfigAppPage.onBoardingStepThree.route} />
            )
        }

        return (
            <Form onSubmit={handleSubmit} noValidate>
                {error && CollectionMessage(error)}
                <Field
                    component={ElementDatePicker}
                    initialValue={null}
                    name={dob.name}
                    label={dob.lang.title}
                    placeholder={dob.lang.placeHolder}
                    type={dob.type}
                    required
                />
                {/* <Field
                    component={InputField}
                    name={dob.name}
                    label={dob.lang.title}
                    placeholder={dob.lang.placeHolder}
                    type={dob.type}
                    required
                /> */}
                <Field
                    component={InputField}
                    name={unitNumber.name}
                    label={unitNumber.lang.title}
                    placeholder={unitNumber.lang.placeHolder}
                    type={unitNumber.type}
                    required
                />
                <Field
                    component={InputField}
                    name={streetName.name}
                    label={streetName.lang.title}
                    placeholder={streetName.lang.placeHolder}
                    type={streetName.type}
                    required
                />
                <Field
                    component={InputField}
                    name={town.name}
                    label={town.lang.title}
                    placeholder={town.lang.placeHolder}
                    type={town.type}
                    required
                />
                <Field
                    component={InputField}
                    name={city.name}
                    label={city.lang.title}
                    placeholder={city.lang.placeHolder}
                    type={city.type}
                    required
                />
                <Field
                    component={InputField}
                    name={state.name}
                    label={state.lang.title}
                    placeholder={state.lang.placeHolder}
                    type={state.type}
                    required
                />
                <Field
                    component={InputField}
                    name={postalCode.name}
                    label={postalCode.lang.title}
                    placeholder={postalCode.lang.placeHolder}
                    type={postalCode.type}
                    required
                />
                <Button
                    color='blue'
                    content={getTranslation('next.title', 1)}
                    fluid
                    type='submit'
                    disabled={pristine}
                    loading={submitting}
                />
            </Form>
        );
    }
}

export default reduxForm({
    form: formName,
    touchOnBlur: false,
    validate
})(StepTwoForm)