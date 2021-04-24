import React from 'react'
import {connect} from 'react-redux'
import {Grid, Header, Card, Button, Label} from 'semantic-ui-react'
import {firstRun} from '../../../../custom/Libraries/Page';
import NominatedBankAccountForm from './Form'
import { httpCallMake } from '../../../../custom/Libraries/httpCall'
import * as action from '../../../../store/actions/data'
import {responseValidate, getFormValues} from '../../../../custom/Libraries/Form';
import * as dataService from '../../../../services/dataService.js'
import _ from 'lodash';
import i18n from '../../../../i18n';

class Page extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            deleteButtonLoading: false,
        };

        this.handleRemoveClick = this.handleRemoveClick.bind(this);
        this.submitFormHandler = this.submitFormHandler.bind(this);

        //First run
        firstRun(props);
    }

    componentDidMount() {

        //Get nominated bank account
        this.props.dispatch(dataService.dataGetNominatedBankAccounts(this.props.userID));
    }

    submitFormHandler(values, dispatch) {
        const { userID } = this.props;

        //Add new account
        return httpCallMake('user/' + userID + '/funding/nominated-bank-account', 'post', values)
            .then(data => {
                return responseValidate(data);
            }).then(data => {
                return data;
            });
    }

    handleRemoveClick(resourceID) {
        const { dispatch, userID } = this.props;

        //Set button to loading state
        this.setState({
            deleteButtonLoading: true,
        });

        //Delete account
        return httpCallMake('user/' + userID + '/funding/nominated-bank-account/' + resourceID, 'delete')
            .then(data => {

                return responseValidate(data);
            }).then(data => {

                //Set button to normal state
                this.setState({
                    deleteButtonLoading: false,
                });

                //Update user documents
                dispatch(dataService.dataGetNominatedBankAccounts(userID));
            });
    };

    render() {
        const {userID, currentAccount} = this.props;
        const {deleteButtonLoading}    = this.state;

        //Bank account data
        const bankAccountData = currentAccount.hasOwnProperty('latest') ? currentAccount.latest : {};

        //If bank account verified
        const isVerified = currentAccount.hasOwnProperty('verified') && !_.isEmpty(currentAccount['verified'])
            ? 'Verified'
            : currentAccount.hasOwnProperty('latest') && !_.isEmpty(currentAccount['latest'])
                ? 'Pending'
                : '';

        return (
            <Grid divided='vertically' className="page-body">
                <Grid.Row columns={1} className="top-heading-row">
                    <Grid.Column>
                        <Header as='h2' className="top-heading">
                        {i18n.t('nav.header.links.nominatedbankaccountmsg1.title')}
                        </Header>
                        { !_.isEmpty(bankAccountData) && <Button inverted color='blue' floated='right' loading={deleteButtonLoading} onClick={() => this.handleRemoveClick(bankAccountData.id)}>
                            Delete
                        </Button> }
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                    <Grid.Column mobile={16} tablet={16} computer={16}>
                    <Grid.Column >
                        <NominatedBankAccountForm userID={userID} currentAccount={bankAccountData} onSubmit={this.submitFormHandler} isVerified={isVerified}/>
                    </Grid.Column>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userID : state.auth.user.id,
        currentAccount : state.data.nominatedBankAccount,
    }
};

export default connect(mapStateToProps)(Page);
