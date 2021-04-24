import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
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
const { fromRebateAccount, toTradingAccount, amount, currency } = BasicField;

//If user don't have any trading account added
const noTradingAccountError =
    <span>
        {i18n.t('nav.header.links.totradingmsg1.title')}
        Click <Link to={ ConfigAppPage.linkTradingAccount.route }>here</Link> to add one.
    </span>;

//If selected rebate account doesn't have any trading account linked
let noTradingAccountRebateError =
    <span>
        {i18n.t('nav.header.links.totradingmsg2.title')}
        Click <Link to={ ConfigAppPage.linkTradingAccount.route }>here</Link> to add one.
    </span>;


class TransferFundsRebateAccountsForm extends React.Component {

    constructor(props) {
        super(props);

        //To account list
        this.state = {
            toTradingAccountList: [],
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
        const { toTradingAccountList } = this.state;

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
                if (toTradingAccountList !== []) {
                    thisObject.setState({
                        toTradingAccountList: [],
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
                                toTradingAccountList: row['transferrable_trading_accounts'],
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

        const { error, handleSubmit, submitting, pristine, rebateAccounts, isTradingAccountAdded, fromAccount } = this.props;
        const { toTradingAccountList } = this.state;

        //Get rebate accounts list
        let rebateAccountsList = dataGetRebateAccountsList(fromRebateAccount.lang.defaultOption, rebateAccounts);

        //To trading accounts list
        let toTradingAccountsList = dataGetRebateAccountsList(toTradingAccount.lang.defaultOption, toTradingAccountList);

        return(
            <Form onSubmit={handleSubmit } noValidate>
                <Header as='h3' className="page-heading">
                {i18n.t('nav.header.links.totradingmsg4.title')}                  
                </Header>
                {!isTradingAccountAdded && CollectionMessage(noTradingAccountError)}
                {error && CollectionMessage(error)}
                <Field
                    component={SelectField}
                    name={ fromRebateAccount.name }
                    label={ fromRebateAccount.lang.title }
                    options={ rebateAccountsList }
                    placeholder={ fromRebateAccount.lang.defaultOption }
                    required
                />
                {typeof fromAccount !== 'undefined' && _.isEmpty(toTradingAccountList) && CollectionMessage(noTradingAccountRebateError)}
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
                    name={ toTradingAccount.name }
                    label={ toTradingAccount.lang.title }
                    options={ toTradingAccountsList }
                    placeholder={ toTradingAccount.lang.defaultOption }
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
        isTradingAccountAdded : state.data.showMessages.isTradingAccountAdded,
    }
};

export default connect(mapStateToProps)(TransferFundsRebateAccountsForm);
