import React from 'react'
import {Button, Form} from 'semantic-ui-react'
import BasicField from '../../../custom/Basics/Field.js';
import { getTranslation } from '../../../custom/Libraries/Utility.js';
import { Field, reduxForm } from 'redux-form';
import { InputField } from 'react-semantic-redux-form';
import { validateSpecificForm } from '../../../custom/Libraries/Form.js';
import CollectionMessage from '../../../elements/Collection/Message/Message.jsx'

const validate = (data, props) => {
    return validateSpecificForm(data, props, 'resetPassword');
};

class PageResetPasswordForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { error, handleSubmit, pristine, submitting } = this.props;

        return(
            <Form onSubmit={handleSubmit} noValidate className='fluid segment auth-form'>
                {error && CollectionMessage(error)}
                <Field component={ InputField }
                       name={ BasicField.passwordNew.name }
                       label={ BasicField.passwordNew.lang.title }
                       placeholder={ BasicField.passwordNew.lang.placeHolder }
                       type="password"
                       required
                />
                <Field component={ InputField }
                       name={ BasicField.passwordConfirm.name }
                       label={ BasicField.passwordConfirm.lang.title }
                       placeholder={ BasicField.passwordConfirm.lang.placeHolder }
                       type="password"
                       required
                />
                <Button fluid color='blue' type='submit' disabled={pristine} loading={submitting}>
                    { getTranslation('submit.title', 1) }
                </Button>
            </Form>
        );
    }

}

export default reduxForm({
    form: 'resetPassword',
    touchOnBlur: false,
    validate,
})(PageResetPasswordForm)