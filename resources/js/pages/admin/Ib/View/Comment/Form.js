import React from 'react'
import {connect} from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
import BasicField from '../../../../../custom/Basics/Field.js';
import { getTranslation } from '../../../../../custom/Libraries/Utility.js';
import { Field, reduxForm, reset } from 'redux-form';
import { SelectField, TextAreaField } from 'react-semantic-redux-form';
import { validateSpecificForm } from '../../../../../custom/Libraries/Form.js';
import CollectionMessage from '../../../../../elements/Collection/Message/Message.jsx';

// Services
import * as adminService from '../../../../../services/adminService';

const validate = (data, props) => {
    return validateSpecificForm(data, props, 'userCommentForm');
};

class CommentSectionForm extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //Get Get sales Status
        this.props.dispatch(adminService.adminGetAllSalesStatus());
    }

    render() {

        const { error, handleSubmit, submitting, pristine } = this.props;
        //Get sales status list

        return(
            <Form onSubmit={handleSubmit } noValidate>
                {error && CollectionMessage(error)}
                <Field component={ TextAreaField }
                    name={ BasicField.userComment.name }
                    label={ BasicField.userComment.lang.title }
                    placeholder={ BasicField.userComment.lang.placeHolder }
                    type={ BasicField.userComment.type }
                    required
                />
                <Button content='Save' icon='edit' fluid type='submit' disabled={pristine} loading={submitting} />
            </Form>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        salesStatusDetail : state.admin.basicSalesStatus,
        initialValues: state.IBSalesDetails, // retrieve name from redux store 
    }
};

//Reset form after submission
const afterSubmit = (result, dispatch) =>
    dispatch(reset('userCommentForm'));

export default reduxForm({
    form: 'userCommentForm',
    touchOnBlur: false,
    enableReinitialize: true,
    validate,
    onSubmitSuccess: afterSubmit,
})(connect(mapStateToProps)(CommentSectionForm))
