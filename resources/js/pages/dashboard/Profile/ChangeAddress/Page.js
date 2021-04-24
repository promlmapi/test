import React from 'react';
import {connect} from 'react-redux';
import { Grid, Header, Divider } from 'semantic-ui-react';
import { firstRun } from '../../../../custom/Libraries/Page';
import ChangeAddressForm from './Form';
import { httpCallMake } from '../../../../custom/Libraries/httpCall';
import { responseValidate } from '../../../../custom/Libraries/Form';
import * as dataService from '../../../../services/dataService.js';
import _ from 'lodash';
import AtomCard from '../../../../elements/Element/Card';
import i18n from '../../../../i18n';

const PageComponent = props => {

    const { userID, currentAddress, latestAddress, history } = props;

    const submitFormHandler = (values, dispatch) => {

        return httpCallMake('user/' + userID + '/address/' + latestAddress.id, 'put', values)
            .then(data => {
                return responseValidate(data);
            }).then(data => {
                return data;
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
                    {i18n.t('nav.header.links.changeaddress.title')}
                    </Header>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
                <Grid.Column mobile={16} tablet={16} computer={16}>
                { addressCards }
                <Divider hidden/>
                <Grid.Column>
                    <ChangeAddressForm latestAddress={latestAddress} history={history} currentAddress={currentAddress} onSubmit={submitFormHandler}/>
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

        //Get user address
        this.props.dispatch(dataService.dataGetUserAddresses(this.props.userID));
    }

    render() {
        const {userID, currentAddress, latestAddress, history} = this.props;

        return (
            <PageComponent userID={userID} currentAddress={currentAddress} history={history} latestAddress={latestAddress}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userID : state.auth.user.id,
        currentAddress : state.data.userAddresses.resource,
        latestAddress : state.data.userAddresses.latest_address,
    }
};

export default connect(mapStateToProps)(Page);
