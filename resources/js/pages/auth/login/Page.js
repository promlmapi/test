import React from 'react'
import { Grid, Header, Message, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { firstRun, logoutAndReset } from '../../../custom/Libraries/Page';
import { responseValidate } from '../../../custom/Libraries/Form';
import PageLoginForm from './Form'
import { httpCallMake } from '../../../custom/Libraries/httpCall'
import * as action from '../../../store/actions/index'
import { ConfigAppPage } from '../../../custom/Configs/Page';
import { ConfigAppPageAdmin } from '../../../custom/Configs/PageAdmin';
import i18n from '../../../i18n';

class Page extends React.Component {

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

        return httpCallMake('user/login', 'post', values)
            .then(data => {
                return responseValidate(data);
            }).then(data => {
                dispatch(action.authLogin(data));
            });
    };

    render() {
        const { isAuthenticated, user } = this.props;

        //If user is authenticated
        if (isAuthenticated && user) {

            //Redirecting user
            return (
                <Redirect push to={ConfigAppPage.profile.route}/>
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
                        {i18n.t('nav.header.links.loginaccount.title')}
                        </Header>
                        <PageLoginForm formSubmitted={isAuthenticated} onSubmit={this.submitFormHandler}/>
                        <Message info>
                            <Icon name='help' />
                            {i18n.t('nav.header.links.newtous.title')}
                            <Link to={ConfigAppPage.onBoardingStepOne.route}> {i18n.t('nav.header.links.registerhere.title')}</Link> {i18n.t('nav.header.links.instead.title')}.
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

Page.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated : state.auth.isAuthenticated,
        user : state.auth.user,
    }
};

export default connect(mapStateToProps)(Page);
