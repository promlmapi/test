import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { firstRun, logoutAndReset } from '../../../custom/Libraries/Page';
import OnBoardingMainSection from '../../../components/OnBoarding/Sections/MainSection';
import { ConfigAppPage } from '../../../custom/Configs/Page';
import { ConfigAppBasic } from '../../../custom/Configs/App';
import { withCookies } from 'react-cookie';
import queryString from 'query-string';
import { isEmpty } from 'lodash';
import moment from 'moment';

class OnBoardingStepOne extends React.Component {
    constructor(props) {

        super(props);

        //First run
        firstRun(this.props);
    }

    componentDidMount() {
        const { cookies, location } = this.props;

        //Get query string
        const queryParams = queryString.parse(location.search);

        //If query string has param
        const referCookieKey        = ConfigAppBasic['registration']['refer']['key'];
        const referLinkCookieKey    = ConfigAppBasic['registration']['referAccountLink']['key'];

        if (!isEmpty(queryParams[referCookieKey])) {

            const fully_qualified_url  = !isEmpty(window.location)? window.location.href : '';

            //Save cookie
            cookies.set(referCookieKey, queryParams[referCookieKey], { path: '/', expires: moment().add(30, "days").toDate() });
            cookies.set(referLinkCookieKey, fully_qualified_url, { path: '/', expires: moment().add(30, "days").toDate() });
        }

        //Logout and reset on mount
        logoutAndReset();
    }

    render() {

        const { isAuthenticated } = this.props;
        if (isAuthenticated) {
            return (
                <Redirect to={ ConfigAppPage.onBoardingStepTwo.route }/>
            )
        }

        return (
            <OnBoardingMainSection step="1" {...this.props}/>
        );
    }
}

OnBoardingStepOne.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated : state.auth.isAuthenticated,
    }
};

export default withCookies(connect(mapStateToProps)(OnBoardingStepOne));
