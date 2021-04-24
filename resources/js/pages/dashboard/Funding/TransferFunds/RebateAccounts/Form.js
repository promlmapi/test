import React from 'react'
import {connect} from 'react-redux'
import {Button, Form, Header} from 'semantic-ui-react'
import BasicField from '../../../../../custom/Basics/Field';
import { getTranslation } from '../../../../../custom/Libraries/Utility';
import { Field, reduxForm, reset, formValueSelector } from 'redux-form';
import { InputField, SelectField } from 'react-semantic-redux-form';
import { validateSpecificForm } from '../../../../../custom/Libraries/Form';
import CollectionMessage from '../../../../../elements/Collection/Message/Message.jsx'
import _ from 'lodash';
import { dataGetRebateAccountsList } from '../../../../../custom/Libraries/Data';
import * as dataService from '../../../../../services/dataService.js'
import { ConfigAppPage } from '../../../../../custom/Configs/Page';
import i18n from '../../../../../i18n';

//Form name
const formName = 'transferFundsRebateAccounts';

//Validate form
const validate = (data, props) => {
    return validateSpecificForm(data, props, formName);
};

//Getting all fields
const { fromRebateAccount, toRebateAccount, amount, currency } = BasicField;

//If user don't have more than one account added
const noMoreRebateAccountError =
    <span>
        {i18n.t('nav.header.links.torebatemsg1.title')}
    </span>;

//If user don't have more than one account added
const noSelectedRebateAccountError =
    <span>
        {i18n.t('nav.header.links.torebatemsg2.title')}      
    </span>;

class TransferFundsRebateAccountsForm extends React.Component {

    constructor(props) {
        super(props);

        //To account list
        this.state = {
            toRebateAccountList: [],
        }
    }

    componentDidMount(){

        //Default values
        this.props.initialize({
            [currency.name]: 'Base currency',
        });
    }

    componentDidUpdate(prevProps){
        const { fromAccount, change, rebateAccounts, submitSucceeded, userID, dispatch } = this.props;

        //Assigning this object
        const thisObject = this;

        //If form submitted then getting accounts again
        if (prevProps.submitSucceeded !== submitSucceeded && submitSucceeded) {
            dispatch(dataService.dataGetRebateAccounts(userID));
        }

        //If fromAccount has been updated
        if (prevProps.fromAccount !== fromAccount) {

            if (typeof fromAccount === 'undefined') {

                //Update values
                change([currency.name], 'Base currency');

                //Updating to account list in state
                if (this.state.toRebateAccountList !== []) {
                    thisObject.setState({
                        toRebateAccountList: [],
                    });
                }

            } else {

                //If user has selected from account and rebate accounts list is not empty
                if (!_.isEmpty(rebateAccounts)) {

                    //Iterate all accounts
                    _.forEach(rebateAccounts, function(row, key) {

                        //If selected account ID matches
                        if (row.hasOwnProperty('id') && row.id === fromAccount) {

                            //Update values
                            change([currency.name], row['basics_currency']['pretty_code']);

                            //Updating to account list in state
                            thisObject.setState({
                                toRebateAccountList: row['transferrable_rebate_accounts'],
                            });

                            //Stop looping
                            return false;
                        }
                    });
                }
            }
        }
    }

    render() {
        const { error, handleSubmit, submitting, pristine, rebateAccounts, isMoreRebateAccountAdded, fromAccount } = this.props;
        const { toRebateAccountList } = this.state;

        //Get rebate accounts list
        let rebateAccountsList = dataGetRebateAccountsList(fromRebateAccount.lang.defaultOption, rebateAccounts);

        //To rebate accounts list
        let toRebateAccountsList = dataGetRebateAccountsList(toRebateAccount.lang.defaultOption, toRebateAccountList);

        return(
            <Form onSubmit={handleSubmit } noValidate>
                <Header as='h3' className="page-heading">
                {i18n.t('nav.header.links.torebatemsg4.title')}
                </Header>
                {!isMoreRebateAccountAdded && CollectionMessage(noMoreRebateAccountError)}
                {error && CollectionMessage(error)}
                <Field
                    component={SelectField}
                    name={ fromRebateAccount.name }
                    label={ fromRebateAccount.lang.title }
                    options={ rebateAccountsList }
                    placeholder={ fromRebateAccount.lang.defaultOption }
                    required
                />
                {typeof fromAccount !== 'undefined' && _.isEmpty(toRebateAccountList) && CollectionMessage(noSelectedRebateAccountError)}
                <Field component={ InputField }
                    name={ amount.name }
                    label={ amount.lang.title }
                    placeholder={ amount.lang.placeHolder }
                    type={ amount.type }
                    required
                />
                <Field component={ InputField }
                    name={ currency.name }
                    label={ currency.lang.title }
                    placeholder={ currency.lang.placeHolder }
                    type={ currency.type }
                    readOnly
                    required
                />
                <Field
                    component={SelectField}
                    name={ toRebateAccount.name }
                    label={ toRebateAccount.lang.title }
                    options={ toRebateAccountsList }
                    placeholder={ toRebateAccount.lang.defaultOption }
                    required
                />
                <Button fluid color='blue' type='submit' disabled={pristine} loading={submitting}>
                    { getTranslation('submit.title', 1) }
                </Button>
            </Form>
        );
    }
}

//Reset form after submission
const afterSubmit = (result, dispatch) =>
    dispatch(reset(formName));

TransferFundsRebateAccountsForm = reduxForm({
    form: formName,
    touchOnBlur: false,
    validate,
    onSubmitSuccess: afterSubmit,
})(TransferFundsRebateAccountsForm);

const selector = formValueSelector(formName);
TransferFundsRebateAccountsForm = connect(state => {

    //From account
    const fromAccount = selector(state, 'from_account_id');

    //Return
    return {
        fromAccount,
    };
})(TransferFundsRebateAccountsForm);

const mapStateToProps = (state) => {
    return {
        isMoreRebateAccountAdded : state.data.showMessages.isMoreRebateAccountAdded,
    }
};

export default connect(mapStateToProps)(TransferFundsRebateAccountsForm);
