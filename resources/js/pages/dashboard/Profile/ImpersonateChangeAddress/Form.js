import React from 'react'
import {connect} from 'react-redux'
import {Button, Form, Header} from 'semantic-ui-react'
import BasicField from '../../../../custom/Basics/Field';
import { getTranslation } from '../../../../custom/Libraries/Utility';
import { Field, reduxForm, reset } from 'redux-form';
import { InputField, SelectField } from 'react-semantic-redux-form';
import { validateSpecificForm } from '../../../../custom/Libraries/Form';
import CollectionMessage from '../../../../elements/Collection/Message/Message.jsx'
import { dataGetCountryIbList } from '../../../../custom/Libraries/Data';
import _ from 'lodash';
import * as dataService from '../../../../services/dataService.js'
import i18n from '../../../../i18n'

const validate = (data, props) => {
    return validateSpecificForm(data, props, 'changeAddress');
};

class ChangeAddressForm extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps){
        const { latestAddress, submitSucceeded, userID, dispatch } = this.props;

        //If form submitted then getting user address again
        if (submitSucceeded) {
            dispatch(dataService.dataGetImpersonateUserAddresses(userID));
        }

        //If current address has been updated
        if(prevProps.latestAddress !== latestAddress && !_.isEmpty(latestAddress)) {

            //Default values
            this.props.initialize({
                [BasicField.country.name]: latestAddress['country']['id'],
                [BasicField.unitNumber.name]: latestAddress['unit_number'],
                [BasicField.streetName.name]: latestAddress['street_address'],
                [BasicField.town.name]: latestAddress['town'],
                [BasicField.city.name]: latestAddress['city'],
                [BasicField.state.name]: latestAddress['state'],
                [BasicField.postalCode.name]: latestAddress['postal_code'],
            });
        }
    }

    render() {

        const { error, handleSubmit, submitting, pristine, prerequisites } = this.props;

        //Get country list
        let countryList = dataGetCountryIbList(BasicField.country.lang.defaultOption, prerequisites);

        return(
            <Form onSubmit={handleSubmit } noValidate>
                <Header as='h3' className="page-heading">
                {i18n.t('nav.header.links.updateaddress.title')}
                </Header>
                {error && CollectionMessage(error)}
                <Field
                    component={SelectField}
                    name={ BasicField.country.name }
                    label={ BasicField.country.lang.title }
                    options={countryList}
                    placeholder={ BasicField.country.lang.defaultOption }
                    required
                />
                <Field component={ InputField }
                       name={ BasicField.unitNumber.name }
                       label={ BasicField.unitNumber.lang.title }
                       placeholder={ BasicField.unitNumber.lang.placeHolder }
                       type={ BasicField.unitNumber.type }
                       required
                />
                <Field component={ InputField }
                       name={ BasicField.streetName.name }
                       label={ BasicField.streetName.lang.title }
                       placeholder={ BasicField.streetName.lang.placeHolder }
                       type={ BasicField.streetName.type }
                       required
                />
                <Field component={ InputField }
                       name={ BasicField.town.name }
                       label={ BasicField.town.lang.title }
                       placeholder={ BasicField.town.lang.placeHolder }
                       type={ BasicField.town.type }
                       required
                />
                <Field component={ InputField }
                       name={ BasicField.city.name }
                       label={ BasicField.city.lang.title }
                       placeholder={ BasicField.city.lang.placeHolder }
                       type={ BasicField.city.type }
                       required
                />
                <Field component={ InputField }
                       name={ BasicField.state.name }
                       label={ BasicField.state.lang.title }
                       placeholder={ BasicField.state.lang.placeHolder }
                       type={ BasicField.state.type }
                       required
                />
                <Field component={ InputField }
                       name={ BasicField.postalCode.name }
                       label={ BasicField.postalCode.lang.title }
                       placeholder={ BasicField.postalCode.lang.placeHolder }
                       type={ BasicField.postalCode.type }
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
        prerequisites: state.data.prerequisites,
    }
};

export default reduxForm({
    form: 'changeAddress',
    touchOnBlur: false,
    validate,
})(connect(mapStateToProps)(ChangeAddressForm))
