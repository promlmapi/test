// Basics
import React from 'react';
import { connect } from 'react-redux';
import { Grid, Header } from 'semantic-ui-react';
import { push } from 'connected-react-router';

// Utilities
import {
    get,
    isEmpty,
    size
} from 'lodash';

// Libraries
import { firstRun } from '../../../../custom/Libraries/Page';

// Views
import ElementContainer from '../../../../elements/Element/Container';
import ElementDropdown from '../../../../elements/Element/Dropdown';
import BrowserBackButton from '../../../../elements/Element/BrowserBackButton/BrowserBackButton';
import SectionProfile from './SectionProfile';
import SectionAddress from './SectionAddress';
import SectionDocument from './SectionDocument';
import SectionSalesDetail from './SectionSalesDetail';
import SectionReferralDetail from './SectionReferralDetail';
import SectionRebateAccount from './SectionRebateAccount';
import SectionRebateEarning from './SectionRebateEarning';
import SectionReferralLink from './SectionReferralLink';
import SectionNominatedBank from './SectionNominatedBank';
import SectionTradingAccount from './SectionTradingAccount';
import SectionQuestionnaire from './SectionQuestionnaire';

// Services
import * as adminService from '../../../../services/adminService';

// Constants
import { ConfigAppPageAdmin } from '../../../../custom/Configs/PageAdmin';
import { ConfigAppPage } from '../../../../custom/Configs/Page';

// Page configs
const { adminIbList } = ConfigAppPageAdmin;
const {
    clientCashActivity,
    clientList,
    clientTradingActivity
} = ConfigAppPage;

// Render columns
const RenderColumn = ({ className = 'page-body client right-column-chooser pt-4', content }) => {

    return (
        <Grid.Column>
            <div className={className}>
                {content}
            </div>
        </Grid.Column>
    );
};

class Page extends React.Component {

    constructor(props) {
        super(props);

        //First run
        firstRun(props, null, true);

        // Binding
        this.handleHierarchyButtonClick = this.handleHierarchyButtonClick.bind(this);
    }

    componentDidMount() {
        const { dispatch, resourceId } = this.props;

        // Get resource details
        dispatch(adminService.adminGetIbDetail(resourceId));
    }

    handleHierarchyButtonClick({ route }) {
        const {
            currentPage,
            dispatch,
            resourceId
        } = this.props;

        dispatch(push({
            pathname: route.route,
            search: `?impersonated_user_id=${resourceId}`,
            state: {
                fromPage: currentPage
            }
        }))
    }

    render() {
        const {
            currentPage,
            resourceDetail,
            resourceId
        } = this.props;

        // If resource detail is empty
        if (isEmpty(resourceDetail)) {
            return null;
        }

        return (
            <ElementContainer
                browserBackButtonLink={adminIbList.route}
                content={[
                    RenderColumn({
                        className: '',
                        content: (
                            <SectionProfile
                                userData={resourceDetail}
                            />
                        )
                    }),
                    RenderColumn({
                        content: (
                            <SectionQuestionnaire
                                dataList={get(resourceDetail, 'user_questionnaire.data', [])}
                                fromPage={currentPage}
                            />
                        )
                    }),
                    RenderColumn({
                        content: (
                            <SectionReferralDetail
                                metaData={get(resourceDetail, 'ib_metadata', [])}
                            />
                        )
                    }),
                    RenderColumn({
                        content: (
                            <SectionSalesDetail
                                metaData={get(resourceDetail, 'ib_metadata', [])}
                            />
                        )
                    }),
                    RenderColumn({
                        content: (
                            <SectionAddress
                                dataList={size(resourceDetail.user_addresses) > 0 ? [resourceDetail.user_addresses] : []}
                                fromPage={currentPage}
                            />
                        )
                    }),
                    RenderColumn({
                        content: (
                            <SectionNominatedBank
                                dataList={ get(resourceDetail, 'user_nominated_bank.data', []) }
                                fromPage={currentPage}
                            />
                        )
                    }),
                    RenderColumn({
                        content: (
                            <SectionDocument
                                dataList={get(resourceDetail, 'user_documents.data', [])}
                                fromPage={currentPage}
                            />
                        )
                    }),
                    RenderColumn({
                        content: (
                            <SectionRebateAccount
                                dataList={get(resourceDetail, 'user_rebate_accounts.data', [])}
                                fromPage={currentPage}
                                ibId={resourceId}
                                hasPermissionToStore={get(resourceDetail, 'available_resource_actions.can_create_rebate_account', false)}
                            />
                        )
                    }),
                    RenderColumn({
                        content: (
                            <SectionRebateEarning
                                dataList={get(resourceDetail, 'user_rebate_earnings.data', [])}
                                fromPage={currentPage}
                                ibId={resourceId}
                            />
                        )
                    }),
                    RenderColumn({
                        content: (
                            <SectionReferralLink
                                dataList={get(resourceDetail, 'user_referral_links', null)}
                                fromPage={currentPage}
                            />
                        )
                    }),
                    RenderColumn({
                        content: (
                            <SectionTradingAccount
                                dataList={get(resourceDetail, 'user_trading_accounts.data', [])}
                            />
                        )
                    })
                ]}
                headerActionContent={
                    <ElementDropdown
                        headerTitle='Choose page'
                        icon='list'
                        items={[
                            {
                                content: 'Clients list',
                                onClick: this.handleHierarchyButtonClick,
                                param: {
                                    route: clientList
                                }
                            },
                            {
                                content: 'Clients trading activity',
                                onClick: this.handleHierarchyButtonClick,
                                param: {
                                    route: clientTradingActivity
                                }
                            },
                            {
                                content: 'Clients cash activity',
                                onClick: this.handleHierarchyButtonClick,
                                param: {
                                    route: clientCashActivity
                                }
                            },
                        ]}
                        loading={false}
                        title="IB Hierarchy"
                    />
                }
                title={`IB #${resourceId}`}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    // Resource ID
    const resourceId = get(ownProps, 'match.params.resourceId');

    // Return
    return {
        currentPage: ConfigAppPageAdmin.adminIbView.routeWithoutParam + '/' + resourceId,
        resourceDetail: get(state, 'admin.ibDetail.' + resourceId),
        resourceId
    };
};

export default connect(mapStateToProps)(Page);
