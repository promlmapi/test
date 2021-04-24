import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Grid, Header, Divider } from 'semantic-ui-react';
import { firstRun } from '../../../../custom/Libraries/Page';
import ChangeAddressForm from './Form';
import { httpCallMake } from '../../../../custom/Libraries/httpCall';
import { responseValidate } from '../../../../custom/Libraries/Form';
import * as dataService from '../../../../services/dataService.js';
import _ from 'lodash';
import AtomCard from '../../../../elements/Element/Card';

const PageComponent = props => {

    const { userID, currentAddress, latestAddress, history } = props;

    const submitFormHandler = (values, dispatch) => {

        values['impersonate'] = true;
        return httpCallMake('user/' + userID + '/address/impersonate/' + latestAddress.id, 'put', values)
            .then(data => {
                return responseValidate(data);
            }).then(data => {
                // return data;
                history.goBack();
            });
    };

    //If address list is not empty
    let addressCards = '';
    if (!_.isEmpty(currentAddress)) {

        //Preparing address card
        const row = currentAddress;
        addressCards = (
            <Grid.Column>
                <AtomCard
                    description={
                        Object.values({
                            "unit_number": row['unit_number'],
                            "street_address": row['street_address'],
                            "town": row['town'],
                            "city": row['city'],
                            "state": row['state'],
                            "postal_code": row['postal_code'],
                            "country": row['country']['display_name'],
                        }).join(', ')
                    }
                    title={row['verification_status']['name']}
                />
            </Grid.Column>
        );
    }

    return (
        <Grid divided='vertically' className="page-body">
            <Grid.Row columns={1} className="top-heading-row">
                <Grid.Column>
                    <Header as='h2' className="top-heading">
                       Impersonate User Change address
                    </Header>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
                <Grid.Column mobile={16} tablet={16} computer={16}>
                { addressCards }
                <Divider hidden/>
                <Grid.Column>
                    <ChangeAddressForm userID={userID} latestAddress={latestAddress} history={history} currentAddress={currentAddress} onSubmit={submitFormHandler}/>
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
        this.state = {
            impersonateUserId: '',
        } 
    }

    componentDidMount() {
        let pathname = window.location.pathname;
        let userID = pathname.split('/')[4];
        let impersonate= true;
        this.setState({ impersonateUserId: userID });
        //Get user address
        this.props.dispatch(dataService.dataGetImpersonateUserAddresses(userID, impersonate));
    }

    render() {
        const {userID, currentAddress, latestAddress, history} = this.props;
        const {impersonateUserId} = this.state;

        return (
            <PageComponent userID={impersonateUserId} currentAddress={currentAddress} history={history} latestAddress={latestAddress}/>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        currentAddress : state.data.userAddresses.resource,
        latestAddress : state.data.userAddresses.latest_address,
    }
};

export default connect(mapStateToProps)(withRouter(Page));

