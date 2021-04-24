// Basics
import React from 'react';
import { Loader, Form, Header, List, Flag, Label, Segment, Divider, Button, Popup, Icon } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { InputField } from 'react-semantic-redux-form';
import { get, isEmpty } from 'lodash';

// Fields
import BasicField from '../../../../../custom/Basics/Field';

// Views
import AtomPageHeading from '../../../../../elements/Element/PageHeading';
import ImpersonatePendingProfileEditForm  from './pendingProfileDetails/Form';

//service
import { httpCallMake } from '../../../../../custom/Libraries/httpCall';

//Form name
const formName = 'adminPendingAddressReview';

class AddressDetailForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hasFormInitialized: false,
            showEditableForm: false,
        };

        this.editFormVisibility       = this.editFormVisibility.bind(this);
        this.submitFormHandler        = this.submitFormHandler.bind(this);
    }

    componentDidMount() {
        this.setState({
            hasFormInitialized: false,
        });
    }

    editFormVisibility(isHide=false){
        this.setState({ showEditableForm: isHide });
    }

    submitFormHandler(values, dispatch){
        const { resourceDetail } = this.props;
        values['impersonate'] = true;
        if (typeof values !== 'undefined'  && !_.isEmpty(values)) {
            let userID = resourceDetail.user_id;
            let addressID = resourceDetail.id;
            return httpCallMake('user/' + userID + '/address/edit-pending-address/' + addressID, 'put', values)
                .then(data => {
                    this.editFormVisibility(false)
                    window.location.reload(true);
            })
        } 
    };

    componentDidUpdate(prevProps) {
        const { resourceDetail } = this.props;
        const { hasFormInitialized } = this.state;

        //If current resource has been updated
        if (!hasFormInitialized && !isEmpty(resourceDetail)) {

            //Default values
            this.props.initialize({
                [BasicField.fullName.name]: get(resourceDetail, 'user.full_name', ''),
                [BasicField.email.name]: get(resourceDetail, 'user.email', ''),
                [BasicField.entityType.name]: get(resourceDetail, 'user.ib_metadata.entity_type.name', ''),
                [BasicField.companyName.name]: get(resourceDetail, 'user.ib_metadata.company_name', ''),
                [BasicField.countryProfile.name]: get(resourceDetail, 'country_name', ''),
                [BasicField.unitNumber.name]: get(resourceDetail, 'unit_number', ''),
                [BasicField.streetName.name]: get(resourceDetail, 'street_address', ''),
                [BasicField.town.name]: get(resourceDetail, 'town', ''),
                [BasicField.city.name]: get(resourceDetail, 'city', ''),
                [BasicField.state.name]: get(resourceDetail, 'state', ''),
                [BasicField.postalCode.name]: get(resourceDetail, 'postal_code', ''),
            });

            //Set state as form initialized
            this.setState({
                hasFormInitialized: true,
            });
        }
    }

    render() {
        let impersonatePendingUserDetails = {};
        const { resourceDetail } = this.props;
        const { showEditableForm } = this.state;

        if (typeof resourceDetail !== 'undefined' && !_.isEmpty(resourceDetail)) {
            impersonatePendingUserDetails  = { 
                'first_name': get(resourceDetail, 'user.first_name', ''),
                'last_name': get(resourceDetail, 'user.last_name', ''),
                'email': get(resourceDetail, 'user.email', ''),
                'selected_country':  get(resourceDetail, 'user.country_id', ''),
                'street_address': get(resourceDetail, 'street_address', ''),
                'unit_number':  get(resourceDetail, 'unit_number', ''),
                'town': get(resourceDetail, 'town', ''),
                'city': get(resourceDetail, 'city', ''),
                'state': get(resourceDetail, 'state', ''),
                'postal_code': get(resourceDetail, 'postal_code', ''),
            };
        }

        let companyName = "";
        if (typeof resourceDetail !== 'undefined' && resourceDetail.hasOwnProperty('user') && !_.isEmpty(resourceDetail.user.ib_metadata)) {
            companyName   = (resourceDetail.user.ib_metadata.entity_type_id==2)? resourceDetail.user.ib_metadata.company_name: null;
        }

        //IB Status
        let IBStatus = '';
        let IbStatusColor = '';
        if (typeof resourceDetail !== 'undefined' && resourceDetail.hasOwnProperty('verification_status') && !_.isEmpty(resourceDetail.verification_status)) {
            let basics_verification_statuses = ['Pending', 'Verified', 'Declined'];
            IBStatus = basics_verification_statuses[resourceDetail.verification_status.id-1];
            IbStatusColor = (resourceDetail.verification_status.id==1)? "blue" : (resourceDetail.verification_status.id==2)? "green" :  "orange";
        }

        IBStatus        = !_.isEmpty(IBStatus)?IBStatus: "Declined";
        IbStatusColor   = !_.isEmpty(IbStatusColor)?IbStatusColor: "orange";

        const preparedUserQuestionnaire = [];
        if(typeof resourceDetail !== 'undefined' && resourceDetail.hasOwnProperty('user_questionnaire') && !isEmpty(resourceDetail['user_questionnaire']['data'])){
                    
            _.forEach(resourceDetail.user_questionnaire.data, function(value, key) {
                let questionAnswer = '';
                // If it's text, textarea
                if(_.includes([1, 2], value.questionnaire_question.field_type_id)){
                    questionAnswer = value.answer;
                }
                // If it's select?
                if(_.includes([3], value.questionnaire_question.field_type_id)){
                    _.forEach(value.questionnaire_question.questionnaire_question_options, function(optionvalue, optionkey) {
                        // If the option id equals answer?
                        if (value.answer == optionvalue.id) {
                            questionAnswer = optionvalue.value;
                        }
                    })  
                }
                // If it's checkbox
                if(_.includes([4], value.questionnaire_question.field_type_id)){
                    // Decode json data.
                    let questionCheckedOptions = JSON.parse(value.answer);
                    _.forEach(value.questionnaire_question.questionnaire_question_options, function(checkoptionvalue, checkoptionkey) {
                        // If the option id in answer?
                        if (_.includes(questionCheckedOptions, checkoptionvalue.id)) {
                            questionAnswer += checkoptionvalue.value + ' ';
                        }
                    })
                }

                // Add the question and it's answer.
                if(!_.isEmpty(questionAnswer)){
                    preparedUserQuestionnaire[value.question_id] = {
                        'id': value.id,
                        'question_id':value.question_id,
                        'question': value.questionnaire_question.question,
                        'answer': questionAnswer
                    }
                }
            });
        }

        const listItems = preparedUserQuestionnaire.map((data) =>
            <List.Item key={data.id}>
            <List.Icon name='help' />
                <List.Content>
                    <List.Header as='a'>{data.question}</List.Header>
                    <List.Description>
                    {data.answer}
                    </List.Description>
                </List.Content>
            </List.Item>
        );

        return (
            <div>
            <Segment color={IbStatusColor}>
                <Label color={IbStatusColor} ribbon>
                    { IBStatus }
                </Label>
                <Form noValidate>
                    <Divider hidden />
                    <AtomPageHeading
                        title='User detail'
                    />
                    { !showEditableForm && <Button icon size='tiny' circular className="custom-pending-profile__edit-btn" onClick={()=>this.editFormVisibility(true)}> 
                        <Icon name='edit' />
                    </Button>}
                    {showEditableForm &&
                    <Button icon size='tiny' circular className="custom-pending-profile__edit-btn" onClick={()=>this.editFormVisibility(false)}> 
                        <Icon name='close' />
                    </Button>}
                    { !showEditableForm && 
                    <Field
                        component={InputField}
                        name={BasicField.fullName.name}
                        label={BasicField.fullName.lang.title}
                        placeholder={BasicField.fullName.lang.placeHolder}
                        readOnly
                    />}
                    { !showEditableForm && 
                    <Field
                        component={InputField}
                        name={BasicField.email.name}
                        label={BasicField.email.lang.title}
                        placeholder={BasicField.email.lang.placeHolder}
                        readOnly
                    />}
                    { !showEditableForm && 
                    <Field
                        component={InputField}
                        name={BasicField.entityType.name}
                        label={BasicField.entityType.lang.title}
                        placeholder={BasicField.entityType.lang.placeHolder}
                        readOnly
                    />}
                    { !_.isEmpty(companyName) && !showEditableForm &&
                    <Field component={ InputField }
                        name={ BasicField.companyName.name }
                        label={ BasicField.companyName.lang.title }
                        placeholder={ BasicField.companyName.lang.placeHolder }
                        type={ BasicField.companyName.type }
                        readOnly
                    />
                    }
                    { !showEditableForm && 
                    <AtomPageHeading
                        title='Address detail'
                        withDivider
                    />}
                    { !showEditableForm && 
                    <Field
                        component={InputField}
                        name={BasicField.countryProfile.name}
                        label={BasicField.countryProfile.lang.title}
                        placeholder={BasicField.countryProfile.lang.placeHolder}
                        readOnly
                    />}
                    { !showEditableForm && 
                    <Field
                        component={InputField}
                        name={BasicField.unitNumber.name}
                        label={BasicField.unitNumber.lang.title}
                        placeholder={BasicField.unitNumber.lang.placeHolder}
                        type={BasicField.unitNumber.type}
                        readOnly
                    />}
                    { !showEditableForm && 
                    <Field
                        component={InputField}
                        name={BasicField.streetName.name}
                        label={BasicField.streetName.lang.title}
                        placeholder={BasicField.streetName.lang.placeHolder}
                        type={BasicField.streetName.type}
                        readOnly
                    />}
                    { !showEditableForm && 
                    <Field
                        component={InputField}
                        name={BasicField.town.name}
                        label={BasicField.town.lang.title}
                        placeholder={BasicField.town.lang.placeHolder}
                        type={BasicField.town.type}
                        readOnly
                    />}
                    { !showEditableForm && 
                    <Field
                        component={InputField}
                        name={BasicField.city.name}
                        label={BasicField.city.lang.title}
                        placeholder={BasicField.city.lang.placeHolder}
                        type={BasicField.city.type}
                        readOnly
                    />}
                    { !showEditableForm && 
                    <Field
                        component={InputField}
                        name={BasicField.state.name}
                        label={BasicField.state.lang.title}
                        placeholder={BasicField.state.lang.placeHolder}
                        type={BasicField.state.type}
                        readOnly
                    />}
                    { !showEditableForm && 
                    <Field
                        component={InputField}
                        name={BasicField.postalCode.name}
                        label={BasicField.postalCode.lang.title}
                        placeholder={BasicField.postalCode.lang.placeHolder}
                        type={BasicField.postalCode.type}
                        readOnly
                    />}
                </Form>
                { showEditableForm && 
                <ImpersonatePendingProfileEditForm initialValues={impersonatePendingUserDetails}  onSubmit={this.submitFormHandler}/>}
            </Segment>
                <AtomPageHeading
                title="Questionnaire"
                withDivider
                dividerClassName=""
            />
            <List>
                { listItems }      
            </List>
        </div>  
        );
    }
}

export default reduxForm({
    form: formName,
    touchOnBlur: false,
})(AddressDetailForm);
