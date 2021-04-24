import React from 'react'
import { firstRun } from '../../../custom/Libraries/Page.js';
import OnBoardingMainSection from '../../../components/OnBoarding/Sections/MainSection.js';
import * as dataService from '../../../services/dataService'
import {connect} from 'react-redux'

class OnBoardingStepFour extends React.Component {
    constructor(props) {

        super(props);

        //First run
        firstRun(this.props);
    }

    componentDidMount() {
        const {userID, dispatch} = this.props;
        dispatch(dataService.dataGetUserProfile(userID));
    }

    render() {

        return (
            <OnBoardingMainSection step="4" {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userID: state.auth.user.id,
    };
};

export default connect(mapStateToProps)(OnBoardingStepFour);
