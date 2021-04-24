import React from 'react'
import {connect} from 'react-redux'

//library
import { Field, reduxForm, reset } from 'redux-form';
import { SelectField, InputField, TextAreaField } from 'react-semantic-redux-form';
import { Form, Header, Flag, Label, Segment,Divider, Button, Popup, Icon } from 'semantic-ui-react';

//Custom
import BasicField from '../../../../../../custom/Basics/Field.js';
import { getTranslation } from '../../../../../../custom/Libraries/Utility';
import CollectionMessage from '../../../../../../elements/Collection/Message/Message.jsx';

// Services
import * as adminService from '../../../../../../services/adminService';

import { getFormattedDate } from '../../../../../../custom/Libraries/Utility';
import _ from 'lodash';
import { find, get, size } from 'lodash';
import { dataGetCountryIbList, dataGetContinentIbList, dataGetPhoneCodeList } from '../../../../../../custom/Libraries/Data';
import { validateSpecificForm } from '../../../../../../custom/Libraries/Form';
import AtomPageHeading from '../../../../../../elements/Element/PageHeading';
import { httpCallMake } from '../../../../../../custom/Libraries/httpCall';

import ElementDatePicker from '../../../../../../elements/Element/DatePicker/DatePicker';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const validate = (data, props) => {
    return validateSpecificForm(data, props, 'impersonatePendingProfileForm');
};

class ImpersonatePendingProfileEditForm extends React.Component {
 
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
                <AtomPageHeading title="Impersonate Profile details Edit" />
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
                <Field component={ InputField }
                    name={ BasicField.email.name }
                    label={ BasicField.email.lang.title }
                    placeholder={ BasicField.email.lang.placeHolder }
                    type={ BasicField.email.type }
                />
                <AtomPageHeading title="Address details"  withDivider/>
                <Field
                    component={SelectField}
                    name={BasicField.selectedCountry.name}
                    label={BasicField.selectedCountry.lang.title}
                    options={countryList}
                    placeholder={BasicField.selectedCountry.lang.defaultOption}
                />
                <Field
                    component={InputField}
                    name={BasicField.unitNumber.name}
                    label={BasicField.unitNumber.lang.title}
                    placeholder={BasicField.unitNumber.lang.placeHolder}
                    type={BasicField.unitNumber.type}
                />
                <Field
                    component={InputField}
                    name={BasicField.streetName.name}
                    label={BasicField.streetName.lang.title}
                    placeholder={BasicField.streetName.lang.placeHolder}
                    type={BasicField.streetName.type}
                />
                <Field
                    component={InputField}
                    name={BasicField.town.name}
                    label={BasicField.town.lang.title}
                    placeholder={BasicField.town.lang.placeHolder}
                    type={BasicField.town.type}
                />
                <Field
                    component={InputField}
                    name={BasicField.city.name}
                    label={BasicField.city.lang.title}
                    placeholder={BasicField.city.lang.placeHolder}
                    type={BasicField.city.type}
                />
                <Field
                    component={InputField}
                    name={BasicField.state.name}
                    label={BasicField.state.lang.title}
                    placeholder={BasicField.state.lang.placeHolder}
                    type={BasicField.state.type}
                />
                <Field
                    component={InputField}
                    name={BasicField.postalCode.name}
                    label={BasicField.postalCode.lang.title}
                    placeholder={BasicField.postalCode.lang.placeHolder}
                    type={BasicField.postalCode.type}
                />
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
        // phoneCodeList: dataGetPhoneCodeList(BasicField.phoneCode.lang.defaultOption, prerequisites),
        // regionList: dataGetContinentIbList(BasicField.regionRefer.lang.defaultOption, prerequisites),
        initialValues: state.impersonateUserDetails, // retrieve name from redux store 
    };
};

//Reset form after submission
const afterSubmit = (result, dispatch) =>
    dispatch(reset('impersonatePendingProfileForm'));

export default reduxForm({
    form: 'impersonatePendingProfileForm',
    touchOnBlur: false,
    enableReinitialize: true,
    validate,
    onSubmitSuccess: afterSubmit,
})(connect(mapStateToProps)(ImpersonatePendingProfileEditForm))
