import React from 'react'
import { firstRun } from '../../../custom/Libraries/Page.js';
import OnBoardingMainSection from '../../../components/OnBoarding/Sections/MainSection.js';

class OnBoardingStepTwo extends React.Component {
    constructor(props) {

        super(props);

        //First run
        firstRun(this.props);
    }

    render() {

        return (
            <OnBoardingMainSection step="2" {...this.props}/>
        );
    }
}

export default OnBoardingStepTwo;
