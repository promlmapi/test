import React from 'react'
import { Grid, Header, Icon, Message } from 'semantic-ui-react'
import {Link, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import { firstRun, logoutAndReset } from '../../../custom/Libraries/Page';
import { responseValidate } from '../../../custom/Libraries/Form';
import PageForgotPasswordForm from './Form'
import { httpCallMake } from '../../../custom/Libraries/httpCall'
import * as action from '../../../store/actions/index'
import { ConfigAppPage } from '../../../custom/Configs/Page';
import LeftSection from '../../../components/OnBoarding/Sections/LeftSection';
import { get, isEmpty } from 'lodash';
import i18n from '../../../i18n';

class PageForgotPassword extends React.Component {

    constructor(props) {

        super(props);

        //First run
        firstRun(this.props);
    }

    componentDidMount() {

        //Logout and reset on mount
        logoutAndReset();
    }

    submitFormHandler(values, dispatch, props) {

        return httpCallMake('user/password/forgot', 'post', values)
            .then(data => {
                return responseValidate(data);
            }).then(data => {
                dispatch(action.authLogout());
            });
    }

    render() {
        const { isAuthenticated } = this.props;
        if (isAuthenticated) {
            return (
                <Redirect push to={ConfigAppPage.resetPassword.route}/>
            )
        }

        return (
            <div>
                <Grid
                    textAlign='center'
                    verticalAlign='middle'
                    centered
                >
                    <Grid.Column mobile={16} tablet={8} computer={6} className="auth-page">
                        <Header as='h2' textAlign='center'>
                        {i18n.t('nav.header.links.forgotpassword.title')}
                        </Header>
                        <PageForgotPasswordForm onSubmit={this.submitFormHandler}/>
                        <Message info>
                            <Icon name='help' />
                            {i18n.t('nav.header.links.newtous.title')} <Link to={ConfigAppPage.onBoardingStepOne.route}>{i18n.t('nav.header.links.registerhere.title')}</Link> {i18n.t('nav.header.links.instead.title')}.
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

PageForgotPassword.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default PageForgotPassword;
