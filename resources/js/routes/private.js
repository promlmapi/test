import React from 'react'
import {Route, Redirect} from 'react-router'
import {connect} from 'react-redux'
import Main from '../Main'
import Container from '../common/container/Page'
import _ from 'lodash'
import { ConfigAppPage } from '../custom/Configs/Page';

const route = ({component: Component, isAuthenticated, ...rest}) => {

    return(
        <Route {...rest} render={props => (
            isAuthenticated ? (
                <Main {...props}>
                    {
                        (_.includes([
                            ConfigAppPage.onBoardingStepTwo.route,
                            ConfigAppPage.onBoardingStepThree.route,
                            ConfigAppPage.onBoardingStepFour.route,
                            ConfigAppPage.resetPassword.route,
                        ], rest.path))
                        ? <Component {...props}/>
                        : <Container {...rest}>
                              <Component {...props}/>
                          </Container>
                    }
                </Main>
            ) : (
                <Redirect to={{
                    pathname: ConfigAppPage.login.route,
                    state: {from: props.location}
                }}/>
            )
        )}/>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated : state.auth.isAuthenticated,
    }
};

export default connect(mapStateToProps)(route);