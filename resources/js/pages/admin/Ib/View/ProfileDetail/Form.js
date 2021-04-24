import React from 'react'
import {connect} from 'react-redux'

//library
import { Field, reduxForm, reset } from 'redux-form';
import { SelectField, InputField, TextAreaField } from 'react-semantic-redux-form';
import { Form, Header, Flag, Label, Segment, Divider, Button, Popup, Icon, Message } from 'semantic-ui-react';

//Custom
import BasicField from '../../../../../custom/Basics/Field.js';
import { getTranslation } from '../../../../../custom/Libraries/Utility';
import CollectionMessage from '../../../../../elements/Collection/Message/Message.jsx';

// Services
import * as adminService from '../../../../../services/adminService';

import { getFormattedDate } from '../../../../../custom/Libraries/Utility';
import _ from 'lodash';
import { find, get, size } from 'lodash';
import { dataGetCountryIbList, dataGetContinentIbList, dataGetPhoneCodeList } from '../../../../../custom/Libraries/Data';
import { validateSpecificForm } from '../../../../../custom/Libraries/Form';
import AtomPageHeading from '../../../../../elements/Element/PageHeading';
import { httpCallMake } from '../../../../../custom/Libraries/httpCall';

import ElementDatePicker from '../../../../../elements/Element/DatePicker/DatePicker';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const validate = (data, props) => {
    return validateSpecificForm(data, props, 'impersonateUserProfileForm');
};

class ImpersonateUserProfileEditForm extends React.Component {
 
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {

        const { error, handleSubmit, pristine, submitting, prerequisites, countryList, regionList, phoneCodeList } = this.props;
        //Get sales status list

        return(
            <Form onSubmit={handleSubmit } noValidate>
                {error && CollectionMessage(error)}
                <Message
                    size='tiny'
                    icon='info'
                    header='Important Note:'
                    content="( Please note changing IB's last name and email will have impact linking TC in future and might create mismatch with existing linked TC details.)."
                />
                <Field component={ InputField }
                    name={ BasicField.firstName.name }
                    label={ BasicField.firstName.lang.title }
                    placeholder={ BasicField.firstName.lang.placeHolder }
                    type={ BasicField.firstName.type }
                />
                <Field component={ InputField }
                    name={ BasicField.lastName.name }
                    label={ BasicField.lastName.lang.title }
                    placeholder={ BasicField.lastName.lang.placeHolder }
                    type={ BasicField.lastName.type }
                />
                {/* <Field
                    component={ElementDatePicker}
                    name={BasicField.dob.name}
                    label={BasicField.dob.lang.title}
                    placeholder={BasicField.dob.lang.placeHolder}
                    type={BasicField.dob.type}
                /> */}
                <Field
                    component={SelectField}
                    name={BasicField.selectedCountry.name}
                    label={BasicField.selectedCountry.lang.title}
                    options={countryList}
                    placeholder={BasicField.selectedCountry.lang.defaultOption}
                />
                <AtomPageHeading title="Contact details"  withDivider/>
                <Field component={ InputField }
                    name={ BasicField.email.name }
                    label={ BasicField.email.lang.title }
                    placeholder={ BasicField.email.lang.placeHolder }
                    type={ BasicField.email.type }
                />
                <Form.Group>
                    <Field
                        component={SelectField}
                        name={BasicField.selectedPhoneCode.name}
                        label={BasicField.selectedPhoneCode.lang.title}
                        options={phoneCodeList}
                        placeholder={BasicField.selectedPhoneCode.lang.defaultOption}
                        width={8}
                    />
                    <Field component={InputField}
                        name={BasicField.phone.name}
                        label={BasicField.phone.lang.title}
                        placeholder={BasicField.phone.lang.placeHolder}
                        type={BasicField.phone.type}
                        width={8}
                    />
                </Form.Group>
                <Button content='Save' icon='edit' fluid type='submit' disabled={pristine} loading={submitting} />
            </Form>
        );
    }
}

const mapStateToProps = (state, props) => {
    //Prerequisites
    const prerequisites = get(state, 'data.prerequisites');
    //Return
    return {
        countryList: dataGetCountryIbList(BasicField.country.lang.defaultOption, prerequisites),
        phoneCodeList: dataGetPhoneCodeList(BasicField.phoneCode.lang.defaultOption, prerequisites),
        regionList: dataGetContinentIbList(BasicField.regionRefer.lang.defaultOption, prerequisites),
        initialValues: state.impersonateUserDetails, // retrieve name from redux store 
    };
};

//Reset form after submission
const afterSubmit = (result, dispatch) =>
    dispatch(reset('impersonateUserProfileForm'));

export default reduxForm({
    form: 'impersonateUserProfileForm',
    touchOnBlur: false,
    enableReinitialize: true,
    validate,
    onSubmitSuccess: afterSubmit,
})(connect(mapStateToProps)(ImpersonateUserProfileEditForm))
