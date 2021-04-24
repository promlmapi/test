// Basics
import React from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

// Libraries
import { firstRun } from '../../../../../custom/Libraries/Page';
import { dataGetDocumentListingTable } from '../../../../../custom/Libraries/Data';

// Services
import * as adminService from '../../../../../services/adminService'

// Configs
import { ConfigAppPageAdmin } from '../../../../../custom/Configs/PageAdmin';

// Views
import AtomPageHeading from '../../../../../elements/Element/PageHeading';
import ElementContainer from '../../../../../elements/Element/Container';
import VerifyActionButton from '../../../../../elements/Element/VerifyActionButton/VerifyActionButton';
import CollectionMessage from '../../../../../elements/Collection/Message/Message.jsx'
import AddressDetailForm from './Form';
import ReferralDetail from './ReferralDetail';
import CommentPage from '../Comment/Page';

// Routes
const { adminPendingAddressList } = ConfigAppPageAdmin;

//If user hasn't uploaded any documents
const noDocumentsAddedError =
    <span>
        User has not added any relevant documents yet.
    </span>;

class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            resourceID: props.match.params['resourceId'],
            userAccountCode: ''
        };

        //First run
        firstRun(props, null, true);
    }

    componentDidMount() {
        const { resourceID } = this.state;

        //Get user address
        this.props.dispatch(adminService.adminGetAddressDetail(resourceID));
    }

    componentDidUpdate(prevProps) {
        const { resourceDetail } = this.props;
        const { resourceID } = this.state;

        //If document has been updated
        if (prevProps.resourceDetail !== resourceDetail && typeof resourceDetail !== 'undefined' && resourceDetail.hasOwnProperty(resourceID) && resourceDetail[resourceID].hasOwnProperty('user') && !isEmpty(resourceDetail[resourceID]['user']['ib_metadata'])) {
            this.setState({
                userAccountCode: '#' + resourceDetail[resourceID]['user']['ib_metadata']['account_code'],
            });
        }
    }

    render() {
        const { resourceDetail } = this.props;
        const {
            resourceID,
            userAccountCode
        } = this.state;

        return (
            <ElementContainer
                browserBackButtonLink={adminPendingAddressList.route}
                columnWidth='half'
                content={[
                    <AddressDetailForm
                        resourceDetail={resourceDetail[resourceID]}
                        resourceID={resourceID}
                    />,
                    <div>
                        <AtomPageHeading
                            title='Referral IB'
                            withDivider
                        />
                        <ReferralDetail
                            resourceDetail={resourceDetail[resourceID]}
                            resourceID={resourceID}
                        />
                        <AtomPageHeading
                            title='Documents detail'
                            withDivider
                        />
                        {
                            typeof resourceDetail[resourceID] !== 'undefined'
                                && resourceDetail[resourceID].hasOwnProperty('address_verification_documents')
                                && !isEmpty(resourceDetail[resourceID]['address_verification_documents']['data'])
                                ? dataGetDocumentListingTable(resourceDetail[resourceID]['address_verification_documents'], ['upload_reason', 'actions'])
                                : CollectionMessage(noDocumentsAddedError, 4)
                        }
                        <CommentPage resourceDetail={resourceDetail[resourceID]}
                        resourceID={resourceID} />
                    </div>
                ]}
                headerActionContent={
                    <VerifyActionButton
                        apiUrl="admin/user/address"
                        redirectTo="adminPendingAddressList"
                        resourceDetail={resourceDetail[resourceID]}
                        resourceID={resourceID}
                    />
                }
                title={`Review application ${userAccountCode}`}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        resourceDetail : state.admin.userAddressDetail
    }
};

export default connect(mapStateToProps)(Page);
