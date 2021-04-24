import React from 'react'
import { connect } from 'react-redux'
import { Button, Form, Header } from 'semantic-ui-react'
import BasicField from '../../../../custom/Basics/Field';
import { getTranslation } from '../../../../custom/Libraries/Utility';
import { Field, reduxForm, reset } from 'redux-form';
import { SelectField } from 'react-semantic-redux-form';
import { validateSpecificForm } from '../../../../custom/Libraries/Form';
import CollectionMessage from '../../../../elements/Collection/Message/Message.jsx'
import FileInput from '../../../../elements/Element/FileInput/FileInput'
import { dataGetSupportingDocumentList, dataGetUploadReasonList } from '../../../../custom/Libraries/Data';
import * as dataService from '../../../../services/dataService.js'

const validate = (data, props) => {
    return validateSpecificForm(data, props, 'manageDocument');
};

//This key will be needing in resetting file input
let fileInputKey = 1;

class SaveDocumentForm extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps){
        const { submitSucceeded, userID, dispatch } = this.props;

        //If form submitted then getting user documents again
        if (submitSucceeded) {

            //Get user documents
            this.props.dispatch(dataService.dataGetUserDocuments(userID));
        }
    }

    render() {

        const { error, handleSubmit, submitting, pristine, supportingDocuments, submitSucceeded, prerequisites } = this.props;

        //Get document type list
        let documentTypeList = dataGetSupportingDocumentList(BasicField.documentType.lang.defaultOption, supportingDocuments);

        //Get upload reason list
        let uploadReasonList = dataGetUploadReasonList(BasicField.uploadReason.lang.defaultOption, prerequisites);

        //If form has been submitted then updating file input key
        if (submitSucceeded) {
            fileInputKey = fileInputKey + 1;
        }

        return(
            <Form onSubmit={handleSubmit } noValidate>
                <Header as='h3' className="page-heading">
                    Upload document
                </Header>
                {error && CollectionMessage(error)}
                <Field
                    component={SelectField}
                    name={ BasicField.documentType.name }
                    label={ BasicField.documentType.lang.title }
                    options={documentTypeList}
                    placeholder={ BasicField.documentType.lang.defaultOption }
                    required
                />
                <Field
                    key={fileInputKey}
                    component={FileInput}
                    name={ BasicField.document.name }
                    label={ BasicField.document.lang.title }
                    placeholder={ BasicField.document.lang.placeHolder }
                    value={null}
                    required
                />
                <Field
                    component={SelectField}
                    name={ BasicField.uploadReason.name }
                    label={ BasicField.uploadReason.lang.title }
                    options={uploadReasonList}
                    placeholder={ BasicField.uploadReason.lang.placeHolder }
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
        prerequisites: state.data.prerequisites,
        supportingDocuments: state.data.supportingDocuments,
    }
};

//Reset form after submission
const afterSubmit = (result, dispatch) =>
    dispatch(reset('manageDocument'));

export default reduxForm({
    form: 'manageDocument',
    touchOnBlur: false,
    validate,
    onSubmitSuccess: afterSubmit,
})(connect(mapStateToProps)(SaveDocumentForm))
