import React from 'react'
import {connect} from 'react-redux'
import {Grid, Header} from 'semantic-ui-react'
import {firstRun} from '../../../../custom/Libraries/Page';
import {dataGetReferralLinksListingTable} from '../../../../custom/Libraries/Data';
import * as dataService from '../../../../services/dataService'
import {isEmpty} from 'lodash';
import CollectionMessage from '../../../../elements/Collection/Message/Message.jsx';
import i18n from '../../../../i18n';

//If user don't have any referral links
const noReferralLinksError =
    <span>
        {i18n.t('nav.header.links.referrallinkerror.title')}        
    </span>;

class Page extends React.Component {

    constructor(props) {

        super(props);

        //First run
        firstRun(props);
    }

    componentDidMount() {
        const {dispatch, userID} = this.props;

        //Get user documents
        dispatch(dataService.dataGetReferralLinks(userID));
    }

    render() {
        const {referralLinks, isReferralLinksAvailable, authUser} = this.props;

        return (
            <Grid divided='vertically' className="page-body">
                <Grid.Row columns={1} className="top-heading-row">
                    <Grid.Column>
                        <Header as='h2' className="top-heading">
                        {i18n.t('nav.header.links.referrallinks.title')}
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                    <Grid.Column mobile={16} tablet={16} computer={16}>
                        <Grid.Column>
                            { !isReferralLinksAvailable && CollectionMessage(noReferralLinksError) }
                            { !isEmpty(referralLinks) && dataGetReferralLinksListingTable(referralLinks, [], {}, false, false, authUser) }
                        </Grid.Column>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userID: state.auth.user.id,
        authUser: state.auth.user,
        referralLinks: state.data.referralLinks,
        isReferralLinksAvailable: state.data.showMessages.isReferralLinksAvailable,
    }
};

export default connect(mapStateToProps)(Page);
