import React from 'react'
import { Button, Form, Message } from 'semantic-ui-react'
import BasicField from '../../../custom/Basics/Field.js';
import { getTranslation } from '../../../custom/Libraries/Utility.js';
import { Field, reduxForm, reset } from 'redux-form';
import { InputField } from 'react-semantic-redux-form';
import { validateSpecificForm } from '../../../custom/Libraries/Form.js';
import CollectionMessage from '../../../elements/Collection/Message/Message.jsx'

import i18n from '../../../i18n';

//Form name
const formName = 'forgotPassword';

const validate = (data, props) => {
    return validateSpecificForm(data, props, formName);
};

class PageForgotPasswordForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showResetRequestMessage: false,
        };

    }

    componentDidMount() {

        //Reset form on load
        this.props.dispatch(reset(formName));
    }

    componentDidUpdate(prevProps, prevState) {

        if(this.props.submitSucceeded) {
            if(!this.state.showResetRequestMessage) {
                this.setState({
                    showResetRequestMessage: true,
                });
            }
        }
    }

    render() {

        const { error, handleSubmit, pristine, submitting, submitSucceeded } = this.props;

        return(
            <Form onSubmit={handleSubmit} noValidate className='fluid segment auth-form'>
                {error && CollectionMessage(error)}
                {!this.state.showResetRequestMessage && 
                <Field component={ InputField }
                       name={ BasicField.email.name }
                       label={ BasicField.email.lang.title }
                       placeholder={ BasicField.email.lang.placeHolder }
                       required
                />
                }
                {this.state.showResetRequestMessage &&  
                <Message
                    icon='inbox'
                    header={i18n.t('nav.header.links.welcomeback.title')}
                    content={i18n.t('nav.header.links.forgotpwdcontent.title')}
                />
                }
                {!this.state.showResetRequestMessage && 
                <Button fluid id='reset' color='blue' type='submit' disabled={pristine} loading={submitting}>
                    { getTranslation('submit.title', 1) }
                </Button>
                }
            </Form>
        );
    }
}

export default reduxForm({
    form: formName,
    touchOnBlur: false,
    validate,
})(PageForgotPasswordForm)