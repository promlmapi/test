// Basics
import React from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

// Configs
import { ConfigAppPageAdmin } from '../../../../../custom/Configs/PageAdmin';

// Libraries
import { dataGetDocumentListingTable } from '../../../../../custom/Libraries/Data';
import { firstRun } from '../../../../../custom/Libraries/Page';

// Views
import AtomPageHeading from '../../../../../elements/Element/PageHeading';
import ElementContainer from '../../../../../elements/Element/Container';
import CollectionMessage from '../../../../../elements/Collection/Message/Message.jsx'
import VerifyActionButton from '../../../../../elements/Element/VerifyActionButton/VerifyActionButton';
import ResourceDetailForm from './Form'

// Services
import * as adminService from '../../../../../services/adminService'

// Routes
const { adminPendingNbaList } = ConfigAppPageAdmin;

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
            userAccountCode: '',
        };

        //First run
        firstRun(props, null, true);
    }

    componentDidMount() {
        const { resourceID } = this.state;

        //Get user address
        this.props.dispatch(adminService.adminGetNbaDetail(resourceID));
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
                browserBackButtonLink={adminPendingNbaList.route}
                columnWidth='half'
                content={[
                    <ResourceDetailForm
                        resourceDetail={resourceDetail[resourceID]}
                        resourceID={resourceID}
                    />,
                    <div>
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
                    </div>
                ]}
                headerActionContent={
                    <VerifyActionButton
                        apiUrl="admin/user/nominated-bank-account"
                        redirectTo="adminPendingNbaList"
                        resourceDetail={resourceDetail[resourceID]}
                        resourceID={resourceID}
                    />
                }
                title={`Review nominated bank account ${userAccountCode}`}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        resourceDetail : state.admin.userNbaDetail
    }
};

export default connect(mapStateToProps)(Page);
