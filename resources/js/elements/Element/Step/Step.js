import React from 'react';
import { Step, Grid } from 'semantic-ui-react';
import i18n from '../../../i18n';
import { translate } from 'react-i18next';

class ElementStep extends React.Component {

    render() {
        const { step} = this.props;

        return (
            <Grid
                textAlign='center'
                verticalAlign='middle'
                className="on-boarding-steps"
            >
                <Grid.Column mobile={16} tablet={16} computer={16}>
                    <Step.Group widths={4}>
                        <Step active={step === '1'}>
                            <Step.Content>
                                <Step.Title>1</Step.Title>
                                <Step.Description>{ i18n.t('onBoarding:register.steps.personalInformation.title') }</Step.Description>
                            </Step.Content>
                        </Step>
                        <Step active={step === '2'}>
                            <Step.Content>
                                <Step.Title>2</Step.Title>
                                <Step.Description>{ i18n.t('onBoarding:register.steps.moreAboutYou.title') }</Step.Description>
                            </Step.Content>
                        </Step>
                        <Step active={step === '3'}>
                            <Step.Content>
                                <Step.Title>3</Step.Title>
                                <Step.Description>{ i18n.t('onBoarding:register.steps.questionnaire.title') }</Step.Description>
                            </Step.Content>
                        </Step>
                        <Step active={step === '4'}>
                            <Step.Content>
                                <Step.Title>4</Step.Title>
                                <Step.Description>{ i18n.t('onBoarding:register.steps.documentation.title') }</Step.Description>
                            </Step.Content>
                        </Step>
                    </Step.Group>
                </Grid.Column>
                {/*<Grid.Column mobile={16} tablet={12} computer={12}>*/}
                {/*<Segment>{ i18n.t('onBoarding:register.steps.estimatedTime.title') }</Segment>*/}
                {/*</Grid.Column>*/}
            </Grid>
        );
    }
};

export default translate()(ElementStep);