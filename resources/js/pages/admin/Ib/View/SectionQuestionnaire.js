// Basics
import React from 'react';
import { List } from 'semantic-ui-react';

// Views
import TableElement from '../../../../elements/Element/Table/Table';
import { TableLinkViewFormatter } from '../../../../elements/Element/TableRemote/Helper';
import AtomPageHeading from '../../../../elements/Element/PageHeading';

// Configs
import { ConfigAppPageAdmin } from '../../../../custom/Configs/PageAdmin';

// Utilities
import { get, forEach, includes, isEmpty} from 'lodash';

class SectionQuestionnaire extends React.Component {

    render() {
        const { fromPage, dataList } = this.props;

        const preparedUserQuestionnaire = [];
        _.forEach(dataList, function(value, key) {
            let questionAnswer = '';
            // If it's text, textarea
            if(_.includes([1, 2], value.questionnaire_question.field_type_id)){
                questionAnswer = value.answer;
            }
            // If it's select?
            if(_.includes([3], value.questionnaire_question.field_type_id)){
                _.forEach(value.questionnaire_question.questionnaire_question_options, function(optionvalue, optionkey) {
                    // If the option id equals answer?
                    if (value.answer == optionvalue.id) {
                        questionAnswer = optionvalue.value;
                    }
                })  
            }
            // If it's checkbox
            if(_.includes([4], value.questionnaire_question.field_type_id)){
                // Decode json data.
                let questionCheckedOptions = JSON.parse(value.answer);
                _.forEach(value.questionnaire_question.questionnaire_question_options, function(checkoptionvalue, checkoptionkey) {
                    // If the option id in answer?
                    if (_.includes(questionCheckedOptions, checkoptionvalue.id)) {
                        questionAnswer += checkoptionvalue.value + ' ';
                    }
                })
            }

            // Add the question and it's answer.
            if(!_.isEmpty(questionAnswer)){
                preparedUserQuestionnaire[value.question_id] = {
                    'id': value.id,
                    'question_id':value.question_id,
                    'question': value.questionnaire_question.question,
                    'answer': questionAnswer
                }
            }
        });

        const listItems = preparedUserQuestionnaire.map((data) =>
            <List.Item key={data.id}>
            <List.Icon name='help' />
                <List.Content>
                    <List.Header as='a'>{data.question}</List.Header>
                    <List.Description>
                    {data.answer}
                    </List.Description>
                </List.Content>
            </List.Item>
        );

        return (
            <div>
                <AtomPageHeading
                    title="Questionnaire"
                    withDivider
                    dividerClassName=""
                />
                <List>
                    { listItems }      
                </List>  
            </div>
        );
    }
}

export default SectionQuestionnaire;
