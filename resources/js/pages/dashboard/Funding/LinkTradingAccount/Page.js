import React from 'react'
import {connect} from 'react-redux'
import {Grid, Header, Table, Icon} from 'semantic-ui-react'
import {firstRun} from '../../../../custom/Libraries/Page';
import LinkTradingForm from './Form'
import { httpCallMake } from '../../../../custom/Libraries/httpCall'
import {responseValidate} from '../../../../custom/Libraries/Form';
import * as dataService from '../../../../services/dataService'
import _ from 'lodash';
import i18n from '../../../../i18n';

const PageComponent = allProps => {

    const { userID, linkedTradingAccounts, rebateAccounts, props } = allProps;

    const submitFormHandler = (values, dispatch) => {

        return httpCallMake('user/' + userID + '/funding/link-trading-account', 'post', values)
            .then(data => {
                return responseValidate(data);
            }).then(data => {

                //Get rebate accounts
                props.dispatch(dataService.dataGetRebateAccounts(userID));

                //Get linked accounts
                props.dispatch(dataService.dataGetLinkedTradingAccounts(userID));
            });
    };

    const handleClick = (linkID) => {

        //Delete document file
        return httpCallMake('user/' + userID + '/funding/link-trading-account/' + linkID, 'delete')
            .then(data => {
                return responseValidate(data);
            }).then(data => {

                //Get rebate accounts
                props.dispatch(dataService.dataGetRebateAccounts(userID));

                //Get linked accounts
                props.dispatch(dataService.dataGetLinkedTradingAccounts(userID));
            });
    };

    //Prepare submitted documents table
    let linkedAccounts = '';
    if (!_.isEmpty(linkedTradingAccounts)) {

        let rows = _.map(linkedTradingAccounts.data, function (row, key) {
            return(
                <Table.Row className="table-row-custom" key={key}>
                    <Table.Cell>{ row['rebate_account']['account_number'] }</Table.Cell>
                    <Table.Cell>{ row['trading_client_account']['fpm_account_id'] }</Table.Cell>
                    <Table.Cell>{ row['rebate_account']['basics_trading_platform']['pretty_name'] }</Table.Cell>
                    <Table.Cell>{ row['rebate_account']['basics_currency']['pretty_code'] }</Table.Cell>
                    <Table.Cell className="table-cell-action-custom" selectable textAlign='center'>
                        <a onClick={ () => handleClick(row.id) }><Icon className="brown" name='close' /></a>
                    </Table.Cell>
                </Table.Row>
            );
        });

        linkedAccounts = (
            <Grid.Column mobile={16} tablet={16} computer={16}>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Rebate Account Number</Table.HeaderCell>
                            <Table.HeaderCell>Trading Account Number</Table.HeaderCell>
                            <Table.HeaderCell>Platform</Table.HeaderCell>
                            <Table.HeaderCell>Currency</Table.HeaderCell>
                            <Table.HeaderCell>Actions</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        { rows }
                    </Table.Body>
                </Table>
            </Grid.Column>
        );
    }

    return (
        <Grid divided='vertically' className="page-body">
            <Grid.Row columns={1} className="top-heading-row">
                <Grid.Column>
                    <Header as='h2' className="top-heading">
                    {i18n.t('nav.header.links.linktradingaccount.title')}
                    </Header>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
                <Grid.Column mobile={16} tablet={16} computer={16}>
                { linkedAccounts }
                <Grid.Column>
                    <LinkTradingForm userID={userID} linkedTradingAccounts={linkedTradingAccounts} rebateAccounts={rebateAccounts} onSubmit={submitFormHandler}/>
                </Grid.Column>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

class Page extends React.Component {

    constructor(props) {

        super(props);

        //First run
        firstRun(props);
    }

    componentDidMount() {

        //Get rebate accounts
        this.props.dispatch(dataService.dataGetRebateAccountsUnassigned(this.props.userID));

        //Get linked accounts
        this.props.dispatch(dataService.dataGetLinkedTradingAccounts(this.props.userID));
    }

    render() {
        const {userID, linkedTradingAccounts, rebateAccounts} = this.props;

        return (
            <PageComponent userID={userID} linkedTradingAccounts={linkedTradingAccounts} rebateAccounts={rebateAccounts} props={this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userID : state.auth.user.id,
        linkedTradingAccounts : state.data.linkedTradingAccounts,
        rebateAccounts : state.data.rebateAccountsUnassigned,
    }
};

export default connect(mapStateToProps)(Page);
