import React from 'react'
import { Form, Header, Flag, Label, Segment,Divider, Button, Popup, Icon } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { InputField } from 'react-semantic-redux-form';
import {Link, Redirect} from 'react-router-dom';

//libraries
import BasicField from '../../../../custom/Basics/Field';
import { getFormattedDate } from '../../../../custom/Libraries/Utility';
import _ from 'lodash';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

// Custom Element
import { ConfigAppPageAdmin } from '../../../../custom/Configs/PageAdmin';
import AtomPageHeading from '../../../../elements/Element/PageHeading';
import { httpCallMake } from '../../../../custom/Libraries/httpCall';

//views
import ImpersonateUserProfileEditForm  from './ProfileDetail/Form';


class ProfileSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            phoneCodeIcon: '',
            countryNameIcon: '',
            IBStatus: '',
            IbStatusColor: "red",
            companyName:"",
            terminateButtonLoad: false,
            showEditableForm: false,
        };
        this.initializeForm = this.initializeForm.bind(this);
        this.userTerminationModelShow = this.userTerminationModelShow.bind(this);
        this.userTerminationActionAPI = this.userTerminationActionAPI.bind(this);
        this.editFormVisibility       = this.editFormVisibility.bind(this);
        this.submitFormHandler        = this.submitFormHandler.bind(this);

        this.textInput = React.createRef();

    }

    componentDidMount() {
        this.initializeForm();
    }

    componentDidUpdate(prevProps) {

        const { userData } = this.props;

        //If userData is present
        if(prevProps.userData !== userData && !_.isEmpty(userData)) {
            this.initializeForm();
        }
    }

    editFormVisibility(isHide=false){
        this.setState({ showEditableForm: isHide });
    }

    userTerminationModelShow(e) {
        confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <div className='custom-ui'>
                  <h1>You want to terminate this user?</h1>
                  <p>Please Enter the Reason</p>
                  <input type="text" className="form-control" name="terminate_reason" minLength="5" maxLength="25" ref={this.textInput}></input>
                  <button  id="terminate_no" onClick={onClose}>No</button>
                  <button
                    id="terminate_yes"
                    onClick={() => {
                      this.userTerminationActionAPI(this.textInput.current.value);
                      onClose();
                    }}
                  >
                    Yes, Delete it!
                  </button>
                </div>
              );
            }
        });
    }

    userTerminationActionAPI(terminateReason) {
        const { userData } = this.props;
        if (typeof terminateReason == 'undefined'  && _.isEmpty(terminateReason)) {
            alert("Please Enter the reason");
        }

        if (typeof userData !== 'undefined'  && !_.isEmpty(userData)) {
            let resourceID = userData.id;
            this.setState({
                terminateButtonLoad: true,
            });

            return httpCallMake('admin/ib/termination/' + resourceID+'?email='+userData.email+'&reason='+terminateReason, 'get')
                .then(data => {
                    this.setState({
                        terminateButtonLoad: false,
                    });
                    window.location.href = "/admin/ib/";
                });
        } 
    }

            
    submitFormHandler(values, dispatch){
        const { userData } = this.props;
        values['impersonate'] = true;
        let userID = userData.id? userData.id: null;
        if (typeof values !== 'undefined'  && !_.isEmpty(values)) {
            return httpCallMake('user/' + userID + '/impersonate-profile/edit', 'put', values)
                .then(data => {
                    this.editFormVisibility(false)
                    window.location.reload(true);
                })
        } 
    };

    initializeForm() {
        const { userData, initialize } = this.props;

        //If userData is present
        if(!_.isEmpty(userData)) {

            //Format dob
            let dobDate = '';
            if (userData.hasOwnProperty('dob') && !_.isEmpty(userData.dob)) {
                dobDate = getFormattedDate(userData.dob);
            }

            //Phone code
            let phoneCode = '';
            if(userData.hasOwnProperty('phone_code') && !_.isEmpty(userData.phone_code)) {
                phoneCode = userData.phone_code.display_name + ' (' + userData.phone_code.phone_code + ')';

                this.setState({
                    phoneCodeIcon: _.lowerCase(userData.phone_code.iso),
                });
            }

            //Country name
            let countryName = '';
            if (userData.hasOwnProperty('country') && !_.isEmpty(userData.country)) {
                countryName = userData.country.display_name;

                this.setState({
                    countryNameIcon: _.lowerCase(userData.country.iso),
                });
            }

            //entityType name
            let entityTypeName = '';
            let companyName = '';
            if (userData.hasOwnProperty('ib_metadata') && !_.isEmpty(userData.ib_metadata)) {
                entityTypeName = (userData.ib_metadata.entity_type_id==1)? 'Individual' : 'Company';
                companyName   = (userData.ib_metadata.entity_type_id==2)? userData.ib_metadata.company_name: null;
                this.setState({
                    companyName: !_.isEmpty(companyName )?companyName : null,
                });
            }

            //IB Status
            let IBStatus = '';
            let IbStatusColor = '';
            let basics_verification_statuses = ['Pending', 'Verified', 'Declined'];
            if (userData.hasOwnProperty('user_first_verified_address') && !_.isEmpty(userData.user_first_verified_address)) {
                
                IBStatus = basics_verification_statuses[userData.user_first_verified_address.verification_status_id-1];
                IbStatusColor = (userData.user_first_verified_address.verification_status_id==1)? "yellow" : (userData.user_first_verified_address.verification_status_id==2)? "green" :  "red";
            }else{
                if(userData.hasOwnProperty('user_addresses') && !_.isEmpty(userData.user_addresses)){

                    IBStatus = basics_verification_statuses[userData.user_addresses.verification_status_id-1];
                    IbStatusColor = (userData.user_addresses.verification_status_id==1)? "yellow" : (userData.user_addresses.verification_status_id==2)? "green" :  "red";
                }
            }

            this.setState({
                IBStatus: !_.isEmpty(IBStatus)?IBStatus: "Declined",
                IbStatusColor: !_.isEmpty(IbStatusColor)?IbStatusColor: "red",
            });

            //Default values
            initialize({
                [BasicField.firstName.name]: userData.first_name,
                [BasicField.lastName.name]: userData.last_name,
                [BasicField.email.name]: userData.email,
                [BasicField.dob.name]: dobDate,
                [BasicField.entityType.name]: entityTypeName,
                [BasicField.companyName.name]: companyName,
                [BasicField.country.name]: countryName,
                [BasicField.phoneCode.name]: phoneCode,
                [BasicField.phone.name]: userData.phone,
            });
        }
    }

    render() {

        let impersonateUserDetails = {};
        const { userData } = this.props;

        //Format dob
        let dobDate = '';
        if (userData.hasOwnProperty('dob') && !_.isEmpty(userData.dob)) {
            dobDate = getFormattedDate(userData.dob);
        }
        if (typeof userData !== 'undefined' && !_.isEmpty(userData)) {
            impersonateUserDetails  = { 
                'first_name': userData.first_name,
                'last_name': userData.last_name,
                'selected_country': userData.country.id,
                'email': userData.email,
                'selected_phone_code': userData.phone_code.id,
                'phone': userData.phone,
            };
        }
    
        const { phoneCodeIcon, countryNameIcon, IBStatus, IbStatusColor, companyName, terminateButtonLoad, showEditableForm } = this.state;

        return(
            <div>
            <Segment color={IbStatusColor}>
            <Form noValidate>
                <Label as='a' color={IbStatusColor} ribbon>
                    {IBStatus}
                </Label>                
                {_.get(userData, 'available_resource_actions.destroy') && !showEditableForm && (
                    <Button
                        content='Termination'
                        onClick={this.userTerminationModelShow}
                        loading={terminateButtonLoad}
                        className='ib-profile--termination-btn'
                        icon='bug'
                        color='red'
                        size='tiny'
                        labelPosition='right'
                    />
                )}
                <Divider hidden />
                    <AtomPageHeading title="Profile details" />
                    { !showEditableForm && <Button icon size='tiny' circular className="custom-ib-profile__edit-btn" onClick={()=>this.editFormVisibility(true)}> 
                        <Icon name='edit' />
                    </Button>}
                    {showEditableForm &&
                    <Button icon size='tiny' circular className="custom-ib-profile__edit-btn" onClick={()=>this.editFormVisibility(false)}> 
                        <Icon name='close' />
                    </Button>}
                    { !showEditableForm &&
                    <Field component={ InputField }
                        name={ BasicField.firstName.name }
                        label={ BasicField.firstName.lang.title }
                        placeholder={ BasicField.firstName.lang.placeHolder }
                        type={ BasicField.firstName.type }
                        readOnly
                    />}
                    { !showEditableForm &&
                    <Field component={ InputField }
                        name={ BasicField.lastName.name }
                        label={ BasicField.lastName.lang.title }
                        placeholder={ BasicField.lastName.lang.placeHolder }
                        type={ BasicField.lastName.type }
                        readOnly
                    />}
                    { !showEditableForm &&
                    <Field component={ InputField }
                        name={ BasicField.entityType.name }
                        label={ BasicField.entityType.lang.title }
                        placeholder={ BasicField.entityType.lang.placeHolder }
                        type={ BasicField.entityType.type }
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
                    <Field component={ InputField }
                        name={ BasicField.dob.name }
                        label={ BasicField.dob.lang.title }
                        placeholder={ BasicField.dob.lang.placeHolder }
                        type={ BasicField.dob.type }
                        readOnly
                    />}
                    { !showEditableForm &&
                    <Field
                        component={InputField}
                        name={ BasicField.countryProfile.name }
                        label={ BasicField.countryProfile.lang.title }
                        labelPosition='left'
                        readOnly
                    >
                        { !_.isEmpty(countryNameIcon) &&
                        <Label basic>
                            <Flag name={countryNameIcon} />
                        </Label> }
                        <input />
                    </Field>}
                    { !showEditableForm &&
                    <AtomPageHeading
                        title="Contact details"
                        withDivider
                    />}
                    { !showEditableForm &&
                    <Field component={ InputField }
                        name={ BasicField.email.name }
                        label={ BasicField.email.lang.title }
                        placeholder={ BasicField.email.lang.placeHolder }
                        type={ BasicField.email.type }
                        readOnly
                    />}
                    { !showEditableForm &&
                    <Form.Group>
                        <Field
                            component={InputField}
                            name={ BasicField.phoneCode.name }
                            label={ BasicField.phoneCode.lang.title }
                            labelPosition='left'
                            readOnly
                            width={8}
                        >
                            { !_.isEmpty(phoneCodeIcon) &&
                            <Label basic>
                                <Flag name={phoneCodeIcon} />
                            </Label> }
                            <input />
                        </Field>
                        <Field component={ InputField }
                            name={ BasicField.phone.name }
                            label={ BasicField.phone.lang.title }
                            placeholder={ BasicField.phone.lang.placeHolder }
                            readOnly
                            width={8}
                        />
                    </Form.Group>}
            </Form>
            <div>
                { showEditableForm &&
                    <ImpersonateUserProfileEditForm initialValues={impersonateUserDetails}  onSubmit={this.submitFormHandler}/>}
            </div>
                </Segment>
            </div>
        );
    }
}

export default reduxForm({
    form: 'adminIbViewProfile',
})(ProfileSection);
