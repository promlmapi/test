import React from 'react'
import { connect } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import { getTranslation } from '../../../../custom/Libraries/Utility.js';
import { reduxForm, formValueSelector } from 'redux-form';
import { validateSpecificForm } from '../../../../custom/Libraries/Form.js';
import CollectionMessage from '../../../../elements/Collection/Message/Message.jsx'
import { dataQuestionnaireList } from '../../../../custom/Libraries/Data.js';
import { ConfigAppPage } from '../../../../custom/Configs/Page';
import {
    concat,
    find,
    forEach,
    get,
    size
} from 'lodash';

const validate = (data, props) => {
    return validateSpecificForm(data, props, 'onBoardingStepThree');
};

class StepThreeForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hasInitialized: false
        }
        this.initializeForm = this.initializeForm.bind(this);
    }

    componentDidMount() {
        this.initializeForm();
    }

    componentDidUpdate(prevProps) {
        const { prerequisites } = this.props;
        const { hasInitialized } = this.state;

        // Remove hidden fields value from redux store
        if (prevProps.questionFirst !== this.props.questionFirst && this.props.questionFirst !== 7) {
            this.props.dispatch(this.props.change('question_7', ''));
            this.props.dispatch(this.props.change('question_8', ''));
            this.props.dispatch(this.props.change('question_9', ''));
            this.props.dispatch(this.props.change('question_10', ''));
        }

        // If form has not initialized
        if (prevProps.prerequisites !== prerequisites && !hasInitialized && prerequisites) {
            this.initializeForm();
        }
    }

    initializeForm() {
        const {
            dispatch,
            initialize,
            prerequisites
        } = this.props;

        // Get questions
        const questionData = get(prerequisites, 'questionnaire_question.data');

        // If questions are present
        if (size(questionData) > 0) {

            // Find platform question (question no. 5)
            const platformQuestion = find(questionData, { id: 5 });
            if (platformQuestion) {

                // Prepare checkboxes
                let preSelectedValues = [];
                forEach(get(platformQuestion, 'questionnaire_question_options'), (checkRow) => {

                    const value = checkRow.id;

                    // Option's properties
                    const optionProperty = get(checkRow, 'properties', {})
                    const isSelected = get(optionProperty, 'is_selected', false);

                    // If value is to be selected
                    if (isSelected) {
                        preSelectedValues = concat(preSelectedValues, [value]);
                    }
                });

                // If pre-selected values are present
                if (size(preSelectedValues) > 0) {

                    // Initializing form
                    dispatch(initialize({
                        [`question_${platformQuestion.id}`]: preSelectedValues
                    }));

                    // Setting state to true
                    this.setState({
                        hasInitialized: true
                    })
                }
            }
        }
    }

    render() {
        const { error, handleSubmit, submitting, submitSucceeded, pristine, change, prerequisites, questionFirst, questionThree, questionSeven } = this.props;

        if (submitSucceeded) {
            return (
                <Redirect to={ ConfigAppPage.onBoardingStepFour.route } replace/>
            )
        }

        //Get country list
        let questionList = dataQuestionnaireList(this.props, prerequisites);

        return(
            <Form onSubmit={handleSubmit } noValidate>
                {error && CollectionMessage(error)}
                {questionList}
                <Button fluid color='blue' type='submit' disabled={pristine} loading={submitting}>
                    { getTranslation('next.title', 1) }
                </Button>
            </Form>
        );
    }
}

StepThreeForm = reduxForm({
    form: 'onBoardingStepThree',
    touchOnBlur: false,
    validate
})(StepThreeForm);

const selector = formValueSelector('onBoardingStepThree');
StepThreeForm = connect(state => {

    const questionFirst = selector(state, 'question_1');
    const questionThree = selector(state, 'question_3');
    const questionSeven = selector(state, 'question_7');
    return {
        questionFirst,
        questionThree,
        questionSeven,
    };
})(StepThreeForm);

export default StepThreeForm;
