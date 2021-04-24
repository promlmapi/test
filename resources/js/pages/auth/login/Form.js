import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import BasicField from '../../../custom/Basics/Field.js';
import { getTranslation } from '../../../custom/Libraries/Utility.js';
import { Field, reduxForm, reset } from 'redux-form';
import { InputField } from 'react-semantic-redux-form';
import { validateSpecificForm } from '../../../custom/Libraries/Form.js';
import CollectionMessage from '../../../elements/Collection/Message/Message.jsx'
import { ConfigAppPage } from '../../../custom/Configs/Page';
import i18n from '../../../i18n';

const validate = (data, props) => {
    return validateSpecificForm(data, props, 'login');
};

class PageLoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showOTPField: false,
        };
    }

    componentDidMount() {

        //Reset form on load
        this.props.dispatch(reset('login'));
    }

    componentDidUpdate(prevProps, prevState) {

        //If form has submitted and OTP field is hidden
        if(this.props.submitSucceeded && !this.state.showOTPField) {

            //Showing OTP field
            this.setState({
                showOTPField: true,
            });
        }
    }

    render() {

        const { error, handleSubmit, submitting } = this.props;
        const { showOTPField } = this.state;

        return(
            <Form onSubmit={handleSubmit} noValidate className='fluid segment auth-form'>
                {error && CollectionMessage(error)}
                <Field component={ InputField }
                       name={ BasicField.email.name }
                       label={ BasicField.email.lang.title }
                       placeholder={ BasicField.email.lang.placeHolder }
                       type={ BasicField.email.type }
                       required
                />
                <Field component={ InputField }
                       name={ BasicField.password.name }
                       label={ BasicField.password.lang.title }
                       placeholder={ BasicField.password.lang.placeHolder }
                       type={ BasicField.password.type }
                       required
                />
                {showOTPField && <Field component={ InputField }
                       name={ BasicField.otp.name }
                       label={ BasicField.otp.lang.title }
                       placeholder={ BasicField.otp.lang.placeHolder }
                       type={ BasicField.otp.type }
                       required
                />}
                <div  className="text-center">
                <Button fluid color='blue' type='submit' loading={submitting}>
                    { getTranslation('submit.title', 1) }
                </Button>
                </div>
                 <div className="auth-link">
                    <Link to={ConfigAppPage.forgotPassword.route}>{i18n.t('nav.header.links.forgotpassword.title')}
</Link>
                </div>
            </Form>
        );
    }
}

export default reduxForm({
    form: 'login',
    touchOnBlur: false,
    validate
})(PageLoginForm)