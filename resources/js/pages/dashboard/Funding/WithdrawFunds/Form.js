import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Button, Form, Header} from 'semantic-ui-react'
import BasicField from '../../../../custom/Basics/Field';
import { getTranslation } from '../../../../custom/Libraries/Utility';
import { Field, reduxForm, reset, formValueSelector } from 'redux-form';
import { InputField, SelectField } from 'react-semantic-redux-form';
import { validateSpecificForm } from '../../../../custom/Libraries/Form';
import CollectionMessage from '../../../../elements/Collection/Message/Message.jsx'
import _ from 'lodash';
import { dataGetRebateAccountsList, dataNominatedBankAccountsList } from '../../../../custom/Libraries/Data';
import * as dataService from '../../../../services/dataService.js'
import { ConfigAppPage } from '../../../../custom/Configs/Page';
import i18n from '../../../../i18n';
//Form name
const formName = 'withdrawFunds';

//Validate form
const validate = (data, props) => {
    return validateSpecificForm(data, props, formName);
};

//Getting all fields
const { fromRebateAccount, toNominatedBankAccount, amount, currency } = BasicField;

//If user don't have any verified account
const noBankAccountError =
    <span>
        {i18n.t('nav.header.links.withdrawfundmsg1.title')}      
        {i18n.t('nav.header.links.withdrawfundmsg2.title')} <Link to={ ConfigAppPage.nominatedBankAccount.route }>{i18n.t('nav.header.links.withdrawfundmsg3.title')}</Link> {i18n.t('nav.header.links.withdrawfundmsg4.title')}.
    </span>;

class WithdrawFundsForm extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){

        //Default values
        this.props.initialize({
            [currency.name]: 'Base currency',
        });
    }

    componentDidUpdate(prevProps, prevState){
        const { fromAccount, change, rebateAccounts, submitSucceeded, userID, dispatch } = this.props;

        //If form submitted then getting accounts again
        if (prevProps.submitSucceeded !== submitSucceeded && submitSucceeded) {
            dispatch(dataService.dataGetRebateAccounts(userID));
        }

        //If fromAccount has been updated
        if (prevProps.fromAccount !== fromAccount) {

            if (typeof fromAccount === 'undefined') {

                //Update values
                change([currency.name], 'Base currency');

            } else {

                //If user has selected from account and rebate accounts list is not empty
                if (!_.isEmpty(rebateAccounts)) {

                    //Iterate all accounts
                    _.forEach(rebateAccounts, function(row, key) {

                        //If selected account ID matches
                        if (row.hasOwnProperty('id') && row.id === fromAccount) {

                            //Update values
                            change([currency.name], row['basics_currency']['pretty_code']);

                            //Stop looping
                            return false;
                        }
                    });
                }
            }
        }
    }

    render() {

        const { error, handleSubmit, submitting, pristine, rebateAccounts, bankAccount, isNominatedBankAccountAdded } = this.props;

        //Get rebate accounts list
        let rebateAccountsList = dataGetRebateAccountsList(fromRebateAccount.lang.defaultOption, rebateAccounts);

        //To nominated bank accounts list
        let toNominatedBankAccountList = dataNominatedBankAccountsList(toNominatedBankAccount.lang.defaultOption, !_.isEmpty(bankAccount) ? [bankAccount] : []);

        return(
            <Form onSubmit={handleSubmit } noValidate>
                <Header as='h3' className="page-heading">
                {i18n.t('nav.header.links.withdrawfunds.title')}
                </Header>
                {!isNominatedBankAccountAdded && CollectionMessage(noBankAccountError)}
                {error && CollectionMessage(error)}
                <Field
                    component={SelectField}
                    name={ fromRebateAccount.name }
                    label={ fromRebateAccount.lang.title }
                    options={ rebateAccountsList }
                    placeholder={ fromRebateAccount.lang.defaultOption }
                    required
                />
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
                    name={ toNominatedBankAccount.name }
                    label={ toNominatedBankAccount.lang.title }
                    options={ toNominatedBankAccountList }
                    placeholder={ toNominatedBankAccount.lang.defaultOption }
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

WithdrawFundsForm = reduxForm({
    form: formName,
    touchOnBlur: false,
    validate,
    onSubmitSuccess: afterSubmit,
})(WithdrawFundsForm);

const selector = formValueSelector(formName);
WithdrawFundsForm = connect(state => {

    //From account
    const fromAccount = selector(state, 'from_account_id');

    //Return
    return {
        fromAccount,
    };
})(WithdrawFundsForm);

const mapStateToProps = (state) => {
    return {
        isNominatedBankAccountAdded : state.data.showMessages.isNominatedBankAccountAdded,
    }
};

export default connect(mapStateToProps)(WithdrawFundsForm);
