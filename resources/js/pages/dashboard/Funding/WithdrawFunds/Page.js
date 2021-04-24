import React from 'react'
import {connect} from 'react-redux'
import {Grid, Header, Table, Icon} from 'semantic-ui-react'
import {firstRun} from '../../../../custom/Libraries/Page';
import PageForm from './Form'
import { httpCallMake } from '../../../../custom/Libraries/httpCall'
import * as action from '../../../../store/actions/data'
import {responseValidate} from '../../../../custom/Libraries/Form';
import * as dataService from '../../../../services/dataService'
import _ from 'lodash';
import i18n from '../../../../i18n';
class Page extends React.Component {

    constructor(props) {

        super(props);

        //First run
        firstRun(props);

        //Binding
        this.submitFormHandler = this.submitFormHandler.bind(this);
    }

    componentDidMount() {

        //Get rebate accounts
        this.props.dispatch(dataService.dataGetRebateAccounts(this.props.userID));

        //Get nominated bank account
        this.props.dispatch(dataService.dataGetNominatedBankAccounts(this.props.userID));
    }

    submitFormHandler (values, dispatch) {
        const {userID} = this.props;

        return httpCallMake('user/' + userID + '/funding/withdraw-funds', 'post', values)
            .then(data => {
                return responseValidate(data);
            }).then(data => {

                //Get rebate accounts
                dispatch(dataService.dataGetRebateAccounts(userID));
            });
    }

    render() {
        const {userID, rebateAccounts, bankAccount} = this.props;

        return (
            <Grid divided='vertically' className="page-body">
                <Grid.Row columns={1} className="top-heading-row">
                    <Grid.Column>
                        <Header as='h2' className="top-heading">
                        {i18n.t('nav.header.links.withdrawfunds.title')}
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                    <Grid.Column mobile={16} tablet={16} computer={16}>
                    <Grid.Column>
                        <PageForm userID={userID} rebateAccounts={rebateAccounts} bankAccount={bankAccount} onSubmit={this.submitFormHandler}/>
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
        rebateAccounts : state.data.rebateAccounts,
        bankAccount : state.data.nominatedBankAccount.verified,
    }
};

export default connect(mapStateToProps)(Page);
