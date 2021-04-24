// Basics
import React from 'react';
import {Redirect} from 'react-router';
import {Grid} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {withCookies} from 'react-cookie';

// Utilities
import _ from 'lodash';

// Libraries
import {httpCallMake} from '../../../custom/Libraries/httpCall';
import {responseValidate} from '../../../custom/Libraries/Form';
import {checkPageOnBoarding} from '../../../custom/Libraries/Page';
import {getFormattedDateValue} from '../../../custom/Libraries/Utility';

// Constants
import {ConfigAppPage} from '../../../custom/Configs/Page';
import BasicField from '../../../custom/Basics/Field';
import {ConfigAppBasic} from '../../../custom/Configs/App';

// Views
import OnBoardingLeftSection from './LeftSection';
import ElementStep from '../../../elements/Element/Step/Step';

// Actions
import * as action from '../../../store/actions/index';

//Fields
const {
    dob,
} = BasicField;

const OnBoardingMainSection = props => {
    const {step, user, userID, prerequisites, cookies} = props;

    const submitFormHandler = (values, dispatch) => {

        //If Cookie key
        const referCookieKey        = ConfigAppBasic['registration']['refer']['key'];
        const referLinkCookieKey    = ConfigAppBasic['registration']['referAccountLink']['key'];

        //API call URLs
        let apiCallUrls = {
            1: {
                url: 'user',
                method: 'post',
            },
            2: {
                url: 'user/' + userID + '/address',
                method: 'post',
            },
            3: {
                url: 'user/' + userID + '/questionnaire',
                method: 'post',
            },
            4: {
                url: 'user/' + userID + '/supporting-documents',
                method: 'post',
            },

            //Skip button in 4th step
            skipSupportingDocuments: {
                url: 'user/' + userID + '/supporting-documents/skip',
                method: 'post',
            },
        };

        //Api to call
        let apiToCall = apiCallUrls[step];

        //If step is 4th, then using formData
        let formData = new FormData();
        if (step === '4') {

            //Document field name
            const fileDocumentName = BasicField.document.name;

            //If form values are empty then will call skip documents api
            if (_.isEmpty(values[fileDocumentName]) && !values[BasicField.documentType.name]) {

                //Update calling api
                apiToCall = apiCallUrls['skipSupportingDocuments'];
            } else {

                //If files have been uploaded
                if (!_.isEmpty(values[fileDocumentName])) {
                    _.forEach(values[fileDocumentName], function (row, index) {
                        formData.append(fileDocumentName + '[' + index + ']', row);
                    })
                }

                formData.append(BasicField.documentType.name, values[BasicField.documentType.name]);
                formData.append(BasicField.uploadReason.name, 1);
                formData.append('from_registration', 1);
            }

            // Append terms acceptance field
            formData.append(BasicField.termsAcceptance.name, values[BasicField.termsAcceptance.name]);

        } else if (step === '1') {

            //Get "referred_by" cookie
            const referredCookie = cookies.get(referCookieKey);
            //Get "referred_by" cookie
            const referLinkCookie = cookies.get(referLinkCookieKey);

            //If referral code cookie is not empty
            if (!_.isEmpty(referredCookie)) {
                values['referred_by'] = referredCookie;
            }

            //If referral Link cookie is not empty
            if (!_.isEmpty(referLinkCookie)) {
                values['referrer_rebate_link'] = referLinkCookie;
            }

        } else if (step === '2') {

            // Formatted dob
            values[dob.name] = getFormattedDateValue(values[dob.name]);
        }

        return httpCallMake(apiToCall['url'], apiToCall['method'], (step === '4' ? formData : values))
            .then(data => {
                return responseValidate(data);
            }).then(data => {

                //If first step
                if (step === '1') {

                    //If submitted values had "otp" key
                    if (!_.isEmpty(values['otp'])) {

                        //Remove "referred_by" cookie
                        cookies.remove(referCookieKey);
                        cookies.remove(referLinkCookieKey);
                    }

                    //Dispatch login only on first step
                    dispatch(action.authLogin(data));
                }

                //Updating step
                dispatch(action.authUpdateOnBoardingStep(step));
            });
    };

    //If the page routes are on-boarding steps
    if (!_.isEmpty(user) && (user.hasOwnProperty('registration_status') && user['registration_status'].hasOwnProperty('is_complete') && user['registration_status']['is_complete']) && checkPageOnBoarding(props.location.pathname)) {

        return (
            <Redirect push to={ ConfigAppPage.profile.route }/>
        );
    }

    return (
        <div>
            <ElementStep step={step}/>
            <Grid
                className='on-boarding-form'
                centered
            >
                <Grid.Row>
                    <OnBoardingLeftSection step={step} prerequisites={prerequisites} handleSubmit={submitFormHandler}/>
                </Grid.Row>
            </Grid>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        prerequisites: state.data.prerequisites,
        user: state.auth.user,
        userID: state.auth.user.id,
        cookies: ownProps.cookies,
    }
};

export default withCookies(connect(mapStateToProps)(OnBoardingMainSection));
