import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import { getTranslation } from '../../../custom/Libraries/Utility';
import { translate } from 'react-i18next';
import StepOneForm from '../Steps/StepOne/Form';
import StepTwoForm from '../Steps/StepTwo/Form';
import StepThreeForm from '../Steps/StepThree/Form';
import StepFourForm from '../Steps/StepFour/Form';

const OnBoardingLeftSection = props => { const { step, handleSubmit, prerequisites } = props;

    let steps = {
        1: 'personalInformation',
        2: 'moreAboutYou',
        3: 'questionnaire',
        4: 'documentation',
    };

    return (
        <Grid.Column mobile={16} tablet={8} computer={8} className="on-boarding-left">
            <Header as='h1'>{ getTranslation('register.steps.' + steps[step] + '.title', 4) }</Header>
            <div className="step-form">
                {step === '1' && <StepOneForm prerequisites={prerequisites} onSubmit={handleSubmit}/>}
                {step === '2' && <StepTwoForm prerequisites={prerequisites} onSubmit={handleSubmit}/>}
                {step === '3' && <StepThreeForm prerequisites={prerequisites} onSubmit={handleSubmit}/>}
                {step === '4' && <StepFourForm prerequisites={prerequisites} onSubmit={handleSubmit}/>}
            </div>
        </Grid.Column>
    );
};

export default translate()(OnBoardingLeftSection)