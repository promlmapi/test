import React from 'react'
import {connect} from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
import BasicField from '../../../../custom/Basics/Field.js';
import { getTranslation } from '../../../../custom/Libraries/Utility.js';
import { Field, reduxForm, reset } from 'redux-form';
import { InputField } from 'react-semantic-redux-form';
import { validateSpecificForm } from '../../../../custom/Libraries/Form.js';
import CollectionMessage from '../../../../elements/Collection/Message/Message.jsx'

const validate = (data, props) => {
    return validateSpecificForm(data, props, 'changePassword');
};

class ChangePasswordForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { error, handleSubmit, submitting, pristine } = this.props;

        return(
            <Form onSubmit={handleSubmit } noValidate>
                {error && CollectionMessage(error)}
                <Field component={ InputField }
                       name={ BasicField.passwordOld.name }
                       label={ BasicField.passwordOld.lang.title }
                       placeholder={ BasicField.passwordOld.lang.placeHolder }
                       type={ BasicField.passwordOld.type }
                       required
                />
                <Field component={ InputField }
                       name={ BasicField.passwordNew.name }
                       label={ BasicField.passwordNew.lang.title }
                       placeholder={ BasicField.passwordNew.lang.placeHolder }
                       type={ BasicField.passwordNew.type }
                       required
                />
                <Field component={ InputField }
                       name={ BasicField.passwordConfirm.name }
                       label={ BasicField.passwordConfirm.lang.title }
                       placeholder={ BasicField.passwordConfirm.lang.placeHolder }
                       type={ BasicField.passwordConfirm.type }
                       required
                />
                <Button fluid color='blue' type='submit' disabled={pristine} loading={submitting}>
                    { getTranslation('submit.title', 1) }
                </Button>
            </Form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userID : state.auth.user.id,
    }
};

//Reset form after submission
const afterSubmit = (result, dispatch) =>
    dispatch(reset('changePassword'));

export default reduxForm({
    form: 'changePassword',
    touchOnBlur: false,
    validate,
    onSubmitSuccess: afterSubmit,
})(connect(mapStateToProps)(ChangePasswordForm))
