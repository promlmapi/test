import React from 'react'
import { connect } from 'react-redux'
import { Form, Header, Flag, Label, Grid } from 'semantic-ui-react'
import BasicField from '../../../../custom/Basics/Field';
import { getFormattedDate } from '../../../../custom/Libraries/Utility';
import { Field, reduxForm } from 'redux-form';
import { InputField } from 'react-semantic-redux-form';
import _ from 'lodash';

//libraries
import i18n from '../../../../i18n';

class ProfileForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            phoneCodeIcon: '',
            countryNameIcon: '',
        };
        this.initializeForm = this.initializeForm.bind(this);
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

            //Default values
            initialize({
                [BasicField.firstName.name]: userData.first_name,
                [BasicField.lastName.name]: userData.last_name,
                [BasicField.email.name]: userData.email,
                [BasicField.dob.name]: dobDate,
                [BasicField.country.name]: countryName,
                [BasicField.phoneCode.name]: phoneCode,
                [BasicField.phone.name]: userData.phone,
            });
        }
    }

    render() {
        const { phoneCodeIcon, countryNameIcon } = this.state;

        return(
            <Grid>
                <Grid.Column mobile={16} tablet={16} computer={16}>
                <Form noValidate>
                    <Header as='h3' className="page-heading">
                        {i18n.t('nav.header.links.profileDetails.title')}
                    </Header>
                    <Field component={ InputField }
                        name={ BasicField.firstName.name }
                        label={ BasicField.firstName.lang.title }
                        placeholder={ BasicField.firstName.lang.placeHolder }
                        type={ BasicField.firstName.type }
                        readOnly
                    />
                    <Field component={ InputField }
                        name={ BasicField.lastName.name }
                        label={ BasicField.lastName.lang.title }
                        placeholder={ BasicField.lastName.lang.placeHolder }
                        type={ BasicField.lastName.type }
                        readOnly
                    />
                    <Field component={ InputField }
                        name={ BasicField.dob.name }
                        label={ BasicField.dob.lang.title }
                        placeholder={ BasicField.dob.lang.placeHolder }
                        type={ BasicField.dob.type }
                        readOnly
                    />
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
                    </Field>
                    <hr className="mt-5"/>
                    <Header as='h3' className="page-heading">
                        {i18n.t('nav.header.links.contactDetails.title')}
                    </Header>
                    <Field component={ InputField }
                        name={ BasicField.email.name }
                        label={ BasicField.email.lang.title }
                        placeholder={ BasicField.email.lang.placeHolder }
                        type={ BasicField.email.type }
                        readOnly
                    />
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
                    </Form.Group>
                </Form>
                </Grid.Column>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated : state.auth.isAuthenticated,
        userData : state.data.user,
    }
};

export default reduxForm({
    form: 'profile',
})(connect(mapStateToProps)(ProfileForm));
