import React from 'react'
import {connect} from 'react-redux'
import {Button, Form} from 'semantic-ui-react'
import BasicField from '../../../../custom/Basics/Field';
import {getTranslation} from '../../../../custom/Libraries/Utility';
import {Field, reduxForm} from 'redux-form';
import {SelectField} from 'react-semantic-redux-form';
import {validateSpecificForm} from '../../../../custom/Libraries/Form';
import {dataGetSupportingDocumentList} from '../../../../custom/Libraries/Data';
import CollectionMessage from '../../../../elements/Collection/Message/Message.jsx'
import FileInput from '../../../../elements/Element/FileInput/FileInput'
import * as dataService from '../../../../services/dataService'
import CheckBoxGroup from '../../../../elements/Element/CheckBoxGroup/CheckBoxGroup';
import {get} from 'lodash';
import i18n from '../../../../i18n';

const validate = (data, props) => {
    return validateSpecificForm(data, props, 'onBoardingStepFour');
};

class StepFourForm extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(prevProps) {

        //Get supporting documents
        this.props.dispatch(dataService.dataSupportingDocumentUpdate(this.props.userID));
    }

    render() {

        const {error, handleSubmit, pristine, submitting, supportingDocuments, prerequisites} = this.props;

        //Get document type list
        let documentTypeList = dataGetSupportingDocumentList(BasicField.documentType.lang.defaultOption, supportingDocuments);

        //Terms and conditions link
        const termsAcceptanceLink = get(
            prerequisites,
            'basics_fp_documents.terms_and_conditions.attachments.data.0.attachment_url',
            null
        );

        return (
            <Form onSubmit={handleSubmit} noValidate>
                {error && CollectionMessage(error)}
                <Field
                    component={SelectField}
                    name={ BasicField.documentType.name }
                    label={ BasicField.documentType.lang.title }
                    options={documentTypeList}
                    placeholder={ BasicField.documentType.lang.defaultOption }
                />
                <Field
                    component={FileInput}
                    name={ BasicField.document.name }
                    label={ BasicField.document.lang.title }
                    placeholder={ BasicField.document.lang.placeHolder }
                    value={null}
                />
                <CheckBoxGroup
                    name={ BasicField.termsAcceptance.name }
                    options={[{
                        label: (
                            <span>{ i18n.t('onBoarding:register.steps.onboardingagree.title') } <a className="text-underline" href={termsAcceptanceLink}
                            target="_blank">T&C's</a></span>
                        ),
                        value: '1',
                        name: BasicField.termsAcceptance.name,
                    }]}
                    singleOption={ true }
                />
                <Button fluid color='blue' type='submit' loading={submitting}>
                    { getTranslation('submit.title', 1) }
                </Button>
            </Form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        supportingDocuments: state.data.supportingDocuments,
        userID: state.auth.user.id,
    }
};


export default reduxForm({
    form: 'onBoardingStepFour',
    touchOnBlur: false,
    validate
})(connect(mapStateToProps)(StepFourForm))