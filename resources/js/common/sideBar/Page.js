// Basics
import React from 'react';
import {Link} from 'react-router-dom';
import {Accordion, Menu, Icon, Image} from 'semantic-ui-react';
import {connect} from 'react-redux';


// Constants
import {ConfigAppPage} from '../../custom/Configs/Page';
import {ConfigAppPageAdmin} from '../../custom/Configs/PageAdmin';
import {
    BasicPermissionApiUserManage, BasicPermissionApiUserPasswordManage, BasicPermissionApiUserAddressManage,
    BasicPermissionApiUserClientsManage, BasicPermissionApiUserFundingManage, BasicPermissionApiUserRebateAccountManage,
    BasicPermissionApiUserQuestionnaireManage, BasicPermissionApiUserSupportingDocumentsManage,
    BasicPermissionApiAdminUserAddressManage, BasicPermissionApiAdminUserNbaManage, BasicPermissionApiAdminUserDocumentManage,
    BasicPermissionApiAdminTransactionManage,
    BasicPermissionApiAdminIbListManage, BasicPermissionApiAdminRrtManage, BasicPermissionApiAdminRrtIndex,
    BasicPermissionApiAdminRrtStore,
    BasicPermissionApiAdminReportManage, BasicPermissionApiAdminIbAccountLeadManage,
    BasicPermissionApiAdminIbRebateAccountManagementRebateAccountIndex,
    BasicPermissionApiAdminIbTradingClientManagementTradingClientManage,
    BasicPermissionApiUserTradingClientManagementTradingClientLeadManage,
    BasicPermissionApiAdminIbTradingClientManagementTradingClientLeadManage,

    BasicPermissionSectionProfile, BasicPermissionSectionClient, BasicPermissionSectionFunding,
    BasicPermissionSectionPending, BasicPermissionSectionIb, BasicPermissionSectionGroup, BasicPermissionSectionTransaction,
    BasicPermissionSectionReport,
} from '../../custom/Basics/Permission';

// Libraries
import {hasPermissionToSection} from '../../custom/Libraries/Permission';
import {assetPath, generateRandomNumber} from '../../custom/Libraries/Utility';
import i18n from '../../i18n';

// Utilities
import {concat, findIndex, forEach, get, includes, kebabCase, size} from 'lodash';

// Assets
const ProfileIcon = assetPath('icons/ProfileIcon.png');
const ClientsIcon = assetPath('icons/ClientsIcon.png');
const FundingIcon = assetPath('icons/FundingIcon.png');
const PendingIcon = assetPath('icons/PendingIcon.png');
const IBsIcon = assetPath('icons/IBsIcon.png');
const GroupsIcon = assetPath('icons/GroupsIcon.png');

// Page configs
const {
    profile,
    changePassword,
    changeAddress,
    manageDocument,
    referralLinks,
    rebateAccountDetail,
    clientList,
    clientDetail,
    clientTradingActivity,
    clientCashActivity,
    clientLeadDirect,
    clientLeadIndirect,
    nominatedBankAccount,
    linkTradingAccount,
    fundsHistory,
    withdrawFunds,
    transferFundsRebateAccounts,
    transferFundsTradingAccounts
} = ConfigAppPage;

// Admin routes
const {
    adminPendingAddressList,
    adminPendingAddressReview,
    adminPendingNbaList,
    adminPendingNbaReview,
    adminPendingDocumentList,
    adminIbList,
    adminIbSearch,
    adminIbTradingClientIndex,
    adminIbTradingClientView,
    adminIbView,
    adminGroupList,
    adminGroupAdd,
    adminGroupView,
    adminTransactionTransferList,
    adminTransactionTransferReview,
    adminTransactionWithdrawalList,
    adminTransactionWithdrawalReview,
    adminTransactionCashAdjustmentList,
    adminTransactionCashAdjustmentReview,
    adminTransactionCashAdjustmentAdd,
    adminReportIbLead,
    adminReportIbClientLead,
    adminImpersonateAddressChange
} = ConfigAppPageAdmin;

/**
 * Render menu item.
 *
 * @param title string
 * @param to string
 * @param active boolean
 * @return {XML}
 */
const renderMenuItem = (title, to, active) => {

    // Return
    return (
        <Menu.Item
            active={active}
            as={Link}
            key={kebabCase(title) + generateRandomNumber()}
            to={to}
        >
            {title}
        </Menu.Item>
    );
};

/**
 * Render menu title.
 *
 * @param title string
 * @param icon string
 * @return {XML}
 */
const renderMenuTitle = (title, icon) => {

    // Return
    return (
        <div key={kebabCase(title)}>
            {
                icon &&
                <small><Image src={icon} alt={title + ' menu'}/></small>
            }
            {title}
            <span className="arrow">
                <Icon name='angle down'/>
                <Icon name='angle left'/>
            </span>
        </div>
    );
};

/**
 * Render menu content.
 *
 * @param content element
 * @return {XML}
 */
const renderMenuContent = (content) => {

    // Return
    return (
        <div>
            <Menu fluid vertical>
                {content}
            </Menu>
        </div>
    );
};

/**
 * Render root panel menu.
 *
 * @param title string
 * @param icon string
 * @param content element
 * @return {XML}
 */
const renderRootPanelMenu = (title, icon, content) => {

    // Return
    return {
        key: kebabCase(title) + generateRandomNumber(),
        title: {
            content: renderMenuTitle(title, icon)
        },
        content: {
            content: renderMenuContent(content)
        },
    };
};

class PageSideBar extends React.Component {

    constructor(props) {
        super(props);
        const {match} = props;

        // Transfer accordion active index
        const transferTabActiveIndex = (includes([
            transferFundsRebateAccounts.route,
            transferFundsTradingAccounts.route,
        ], match.path) ? 0 : -1);

        // Client lead accordion active index
        const clientLeadTabActiveIndex = (includes([
            clientLeadDirect.route,
            clientLeadIndirect.route,
        ], match.path) ? 0 : -1);

        // Prepare root panels
        const rootPanels = this.prepareRootPanels(transferTabActiveIndex, clientLeadTabActiveIndex);

        // State
        this.state = {
            activeIndex: this.handleActiveIndex(rootPanels.sections),
            transferTabActiveIndex: transferTabActiveIndex,
            rootPanels: rootPanels.panels,
        };

        // Bindings
        this.activeRoute = this.activeRoute.bind(this);
        this.handleActiveIndex = this.handleActiveIndex.bind(this);
        this.handleSliderChange = this.handleSliderChange.bind(this);
        this.prepareRootPanels = this.prepareRootPanels.bind(this);
        this.updateRootPanels = this.updateRootPanels.bind(this);
    }

    handleActiveIndex(rootSections = []) {
        const {match} = this.props;

        // Active index in side-menu
        let activeSection = null;

        // Profile sections
        if (includes([
                profile.route,
                changePassword.route,
                changeAddress.route,
                adminImpersonateAddressChange.route,
                manageDocument.route,
                referralLinks.route,
                rebateAccountDetail.route,
            ], match.path)
        ) {
            activeSection = BasicPermissionSectionProfile;

            // Client management sections
        } else if (includes([
                clientList.route,
                clientTradingActivity.route,
                clientCashActivity.route,
                clientDetail.route,
                    
                // Client lead
                clientLeadDirect.route,
                clientLeadIndirect.route,

            ], match.path)
        ) {
            activeSection = BasicPermissionSectionClient;

            // Fund management sections
        } else if (includes([
                nominatedBankAccount.route,
                linkTradingAccount.route,
                fundsHistory.route,
                withdrawFunds.route,

                // Transfer funds
                transferFundsRebateAccounts.route,
                transferFundsTradingAccounts.route,
            ], match.path)
        ) {
            activeSection = BasicPermissionSectionFunding;

            // Pending sections
        } else if (includes([
                adminPendingAddressList.route,
                adminPendingAddressReview.route,
                adminPendingNbaList.route,
                adminPendingNbaReview.route,
                adminPendingDocumentList.route,
            ], match.path)
        ) {
            activeSection = BasicPermissionSectionPending;

            // IBs sections
        } else if (includes([
                adminIbList.route,
                adminIbSearch.route,
                adminIbTradingClientIndex.route,
                adminIbTradingClientView.route,
                adminIbView.route
            ], match.path)
        ) {
            activeSection = BasicPermissionSectionIb;

            // Groups sections
        } else if (includes([
                adminGroupList.route,
                adminGroupAdd.route,
                adminGroupView.route,
            ], match.path)
        ) {
            activeSection = BasicPermissionSectionGroup;

            // Transaction sections
        } else if (includes([
                adminTransactionTransferList.route,
                adminTransactionTransferReview.route,
                adminTransactionWithdrawalList.route,
                adminTransactionWithdrawalReview.route,
                adminTransactionCashAdjustmentList.route,
                adminTransactionCashAdjustmentReview.route,
                adminTransactionCashAdjustmentAdd.route
            ], match.path)
        ) {
            activeSection = BasicPermissionSectionTransaction;

            // Report sections
        } else if (includes([
                adminReportIbLead.route,
                adminReportIbClientLead.route
            ], match.path)
        ) {
            activeSection = BasicPermissionSectionReport;
        }

        // Active index
        return findIndex(rootSections, function(row) {
            return row === activeSection;
        });
    }

    handleSliderChange() {
        const {transferTabActiveIndex} = this.state;
        this.setState({
            transferTabActiveIndex: (transferTabActiveIndex === 0 ? -1 : 0)
        });
    }

    activeRoute(routes) {

        // Default
        let returnBool = false;
        let self = this;

        // Iterating given routes
        forEach(routes, function (value) {

            // Checking if path is current
            if (self.props.match.path === value) {

                // Setting return to true and breaking iteration
                returnBool = true;
                return false;
            }
        });

        // Returning
        return returnBool;
    }

    updateRootPanels(rootPanels) {
        this.setState({
            rootPanels
        });
    }

    prepareRootPanels(transferTabActiveIndex, clientLeadTabActiveIndex) {
        const {permissions} = this.props;
        const selfObject = this;

        // If permissions are empty
        if (size(permissions) < 1) {
            return;
        }

        // Defaults
        let rootPanels = [];
        let rootSections = [];
        let profileMenu, clientMenu, fundingMenu, pendingMenu, ibMenu, groupMenu, transactionMenu, reportMenu = profileMenu = [];

        // Iterate all user permissions
        forEach(permissions, function (row) {

            // Permission name
            const permissionName = get(row, 'name');

            // If user has access to profile section
            if (hasPermissionToSection(row, BasicPermissionSectionProfile)) {

                // If profile details
                if (permissionName === BasicPermissionApiUserManage) {
                    profileMenu = concat(
                        profileMenu,
                        [renderMenuItem(i18n.t('nav.header.links.profileDetails.title'), profile.route, selfObject.activeRoute([profile.route]))]
                    );
                }

                // If change password
                if (permissionName === BasicPermissionApiUserPasswordManage) {
                    profileMenu = concat(
                        profileMenu,
                        [renderMenuItem(i18n.t('nav.header.links.changepassword.title'), changePassword.route, selfObject.activeRoute([changePassword.route]))]
                    );
                }

                // If change address
                if (permissionName === BasicPermissionApiUserAddressManage) {
                    profileMenu = concat(
                        profileMenu,
                        [renderMenuItem(i18n.t('nav.header.links.changeaddress.title'), changeAddress.route, selfObject.activeRoute([changeAddress.route, adminImpersonateAddressChange.route]))]
                    );
                }

                // If manage documents
                if (permissionName === BasicPermissionApiUserSupportingDocumentsManage) {
                    profileMenu = concat(
                        profileMenu,
                        [renderMenuItem(i18n.t('nav.header.links.managedocuments.title'), manageDocument.route, selfObject.activeRoute([manageDocument.route]))]
                    );
                }

                // If referral links
                if (permissionName === BasicPermissionApiUserRebateAccountManage) {
                    profileMenu = concat(
                        profileMenu,
                        [renderMenuItem(
                            i18n.t('nav.header.links.referrallinks.title'),
                            referralLinks.route,
                            selfObject.activeRoute([referralLinks.route, rebateAccountDetail.route])
                        )]
                    );
                }
            }

            // If user has access to client section
            if (hasPermissionToSection(row, BasicPermissionSectionClient)) {

                // If client manage
                if (permissionName === BasicPermissionApiUserClientsManage) {
                    clientMenu = concat(
                        clientMenu,
                        [
                            renderMenuItem(
                                i18n.t('nav.header.links.clientlist.title'),
                                clientList.route,
                                selfObject.activeRoute([clientList.route, clientDetail.route])
                            ),
                            renderMenuItem(
                                i18n.t('nav.header.links.clientstradingactivity.title'),
                                clientTradingActivity.route,
                                selfObject.activeRoute([clientTradingActivity.route])
                            ),
                            renderMenuItem(
                                i18n.t('nav.header.links.clientscashactivity.title'),
                                clientCashActivity.route,
                                selfObject.activeRoute([clientCashActivity.route])
                            ),
                        ]
                    );
                }

                // If client leads
                if (permissionName === BasicPermissionApiUserTradingClientManagementTradingClientLeadManage) {

                    // Client lead menu
                    const clientLeadMenu = renderMenuContent([
                        renderMenuItem(
                            i18n.t('nav.header.links.direct.title'),
                            clientLeadDirect.route,
                            selfObject.activeRoute([clientLeadDirect.route])
                        ),
                        renderMenuItem(
                            i18n.t('nav.header.links.indirect.title'),
                            clientLeadIndirect.route,
                            selfObject.activeRoute([clientLeadIndirect.route])
                        ),
                    ]);

                    // The client lead sub menu
                    const clientLeadPanels = [renderRootPanelMenu(i18n.t('nav.header.links.myleads.title'), null, clientLeadMenu)];

                    clientMenu = concat(
                        clientMenu,
                        [<Accordion
                            className="left-side-menu sub-menu"
                            defaultActiveIndex={clientLeadTabActiveIndex}
                            key="client-lead-panel"
                            onClick={() => selfObject.handleSliderChange()}
                            panels={clientLeadPanels}
                            styled
                        />]
                    );
                }

            }

            // If user has access to funding section
            if (hasPermissionToSection(row, BasicPermissionSectionFunding)) {

                // Transfer funds menu
                const transferFundsMenu = renderMenuContent([
                    renderMenuItem(
                        i18n.t('nav.header.links.torebateaccounts.title'),
                        transferFundsRebateAccounts.route,
                        selfObject.activeRoute([transferFundsRebateAccounts.route])
                    ),
                    renderMenuItem(
                        i18n.t('nav.header.links.totradingaccounts.title'),
                        transferFundsTradingAccounts.route,
                        selfObject.activeRoute([transferFundsTradingAccounts.route])
                    ),
                ]);

                // The transfer sub menu
                const transferFundsPanels = [renderRootPanelMenu(i18n.t('nav.header.links.transfer.title'), null, transferFundsMenu)];

                // Funding menu
                fundingMenu = concat(
                    fundingMenu,
                    [
                        <Accordion
                            className="left-side-menu sub-menu"
                            defaultActiveIndex={transferTabActiveIndex}
                            key="transfer-panel"
                            onClick={() => selfObject.handleSliderChange()}
                            panels={transferFundsPanels}
                            styled
                        />,
                        renderMenuItem(i18n.t('nav.header.links.withdrawfunds.title'), withdrawFunds.route, selfObject.activeRoute([withdrawFunds.route])),
                        renderMenuItem(
                            i18n.t('nav.header.links.linktradingaccount.title'),
                            linkTradingAccount.route,
                            selfObject.activeRoute([linkTradingAccount.route])
                        ),
                        renderMenuItem(
                            i18n.t('nav.header.links.managenominatedbankaccount.title'),
                            nominatedBankAccount.route,
                            selfObject.activeRoute([nominatedBankAccount.route])
                        ),
                        renderMenuItem(i18n.t('nav.header.links.fundshistory.title'), fundsHistory.route, selfObject.activeRoute([fundsHistory.route])),
                    ]
                );
            }

            // If user has access to pending section
            if (hasPermissionToSection(row, BasicPermissionSectionPending)) {

                // If address
                if (permissionName === BasicPermissionApiAdminUserAddressManage) {
                    pendingMenu = concat(
                        pendingMenu,
                        [renderMenuItem(
                            i18n.t('nav.header.links.application.title'),
                            adminPendingAddressList.route,
                            selfObject.activeRoute([adminPendingAddressList.route, adminPendingAddressReview.route])
                        )]
                    );
                }

                // If NBA
                if (permissionName === BasicPermissionApiAdminUserNbaManage) {
                    pendingMenu = concat(
                        pendingMenu,
                        [renderMenuItem(i18n.t('nav.header.links.nominatedbankaccounts.title'), adminPendingNbaList.route, selfObject.activeRoute([adminPendingNbaList.route, adminPendingNbaReview.route]))]
                    );
                }

                // // If documents
                // if (permissionName === BasicPermissionApiAdminUserDocumentManage) {
                //     pendingMenu = concat(
                //         pendingMenu,
                //         [renderMenuItem('Documents', adminPendingDocumentList.route, selfObject.activeRoute([adminPendingDocumentList.route]))]
                //     );
                // }
            }

            // If user has access to IB section
            if (hasPermissionToSection(row, BasicPermissionSectionIb)) {

                // If IB list
                if (permissionName === BasicPermissionApiAdminIbListManage) {                    
                    ibMenu = concat(
                        ibMenu,
                        [renderMenuItem(i18n.t('nav.header.links.iblists.title'), adminIbList.route, selfObject.activeRoute([adminIbList.route, adminIbView.route]))]
                    );
                }

                // If index
                if (permissionName === BasicPermissionApiAdminIbRebateAccountManagementRebateAccountIndex) {
                    ibMenu = concat(
                        ibMenu,
                        [renderMenuItem(
                            i18n.t('nav.header.links.searchrebateaccounts.title'),
                            adminIbSearch.route,
                            selfObject.activeRoute([adminIbSearch.route])
                        )]
                    );
                }

                // If trading client search
                if (permissionName === BasicPermissionApiAdminIbTradingClientManagementTradingClientManage) {
                    ibMenu = concat(
                        ibMenu,
                        [renderMenuItem(
                            i18n.t('nav.header.links.searchtradingclients.title'),
                            adminIbTradingClientIndex.route,
                            selfObject.activeRoute([adminIbTradingClientIndex.route, adminIbTradingClientView.route])
                        )]
                    );
                }
            }

            // If user has access to group section
            if (hasPermissionToSection(row, BasicPermissionSectionGroup)) {

                // If index
                if (permissionName === BasicPermissionApiAdminRrtIndex) {
                    groupMenu = concat(
                        groupMenu,
                        [renderMenuItem(
                            i18n.t('nav.header.links.list.title'),
                            adminGroupList.route,
                            selfObject.activeRoute([adminGroupList.route, adminGroupView.route])
                        )]
                    );
                }

                // If store
                if (permissionName === BasicPermissionApiAdminRrtStore) {
                    groupMenu = concat(
                        groupMenu,
                        [renderMenuItem(
                            i18n.t('nav.header.links.add.title'),
                            adminGroupAdd.route,
                            selfObject.activeRoute([adminGroupAdd.route])
                        )]
                    );
                }
            }

            // If user has access to transaction section
            if (hasPermissionToSection(row, BasicPermissionSectionTransaction)) {

                // transaction menu
                transactionMenu = renderMenuContent([
                    renderMenuItem(
                        i18n.t('nav.header.links.transfer.title'),
                        adminTransactionTransferList.route,
                        selfObject.activeRoute([adminTransactionTransferList.route, adminTransactionTransferReview.route])
                    ),
                    renderMenuItem(
                        i18n.t('nav.header.links.withdrawals.title'),
                        adminTransactionWithdrawalList.route,
                        selfObject.activeRoute([adminTransactionWithdrawalList.route, adminTransactionWithdrawalReview.route])
                    ),
                    renderMenuItem(
                        i18n.t('nav.header.links.cashadjustment.title'),
                        adminTransactionCashAdjustmentList.route,
                        selfObject.activeRoute([adminTransactionCashAdjustmentList.route, adminTransactionCashAdjustmentReview.route, adminTransactionCashAdjustmentAdd.route])
                    ),
                ]);
            }

            // If user has access to report section
            if (hasPermissionToSection(row, BasicPermissionSectionReport)) {

                // If index
                if (permissionName === BasicPermissionApiAdminIbAccountLeadManage) {
                    reportMenu = concat(
                        reportMenu,
                        [renderMenuItem(
                            i18n.t('nav.header.links.incompleteibregistrants.title'),
                            adminReportIbLead.route,
                            selfObject.activeRoute([adminReportIbLead.route])
                        )]
                    );
                }

                // If client lead
                if (permissionName === BasicPermissionApiAdminIbTradingClientManagementTradingClientLeadManage) {
                    reportMenu = concat(
                        reportMenu,
                        [renderMenuItem(
                            i18n.t('nav.header.links.ibleads.title'),
                            adminReportIbClientLead.route,
                            selfObject.activeRoute([adminReportIbClientLead.route])
                        )]
                    );
                }
            }
            
        });

        // If to show profile section
        if (size(profileMenu) > 0) {          
            rootPanels = concat(rootPanels, renderRootPanelMenu(i18n.t('nav.header.links.profile.title'), ProfileIcon, profileMenu));
            rootSections = concat(rootSections, BasicPermissionSectionProfile);
        }

        // If to show client section
        if (size(clientMenu) > 0) {
            rootPanels = concat(rootPanels, renderRootPanelMenu(i18n.t('nav.header.links.clients.title'), ClientsIcon, clientMenu));
            rootSections = concat(rootSections, BasicPermissionSectionClient);
        }

        // If to show funding section
        if (size(fundingMenu) > 0) {
            rootPanels = concat(rootPanels, renderRootPanelMenu(i18n.t('nav.header.links.funding.title'), FundingIcon, fundingMenu));
            rootSections = concat(rootSections, BasicPermissionSectionFunding);
        }

        // If to show pending section
        if (size(pendingMenu) > 0) {
            rootPanels = concat(rootPanels, renderRootPanelMenu(i18n.t('nav.header.links.pending.title'), PendingIcon, pendingMenu));
            rootSections = concat(rootSections, BasicPermissionSectionPending);
        }

        // If to show ib section
        if (size(ibMenu) > 0) {
            rootPanels = concat(rootPanels, renderRootPanelMenu(i18n.t('nav.header.links.ibs.title'), IBsIcon, ibMenu));
            rootSections = concat(rootSections, BasicPermissionSectionIb);
        }

        // If to show group section
        if (size(groupMenu) > 0) {
            rootPanels = concat(rootPanels, renderRootPanelMenu(i18n.t('nav.header.links.groups.title'), GroupsIcon, groupMenu));
            rootSections = concat(rootSections, BasicPermissionSectionGroup);
        }

        // If to show group section
        if (size(transactionMenu) > 0) {
            rootPanels = concat(rootPanels, renderRootPanelMenu(i18n.t('nav.header.links.transactions.title'), GroupsIcon, transactionMenu));
            rootSections = concat(rootSections, BasicPermissionSectionTransaction);
        }

        // If to show report section
        if (size(reportMenu) > 0) {
            rootPanels = concat(rootPanels, renderRootPanelMenu(i18n.t('nav.header.links.reports.title'), GroupsIcon, reportMenu));
            rootSections = concat(rootSections, BasicPermissionSectionReport);
        }

        // Return
        return {
            panels: rootPanels,
            sections: rootSections,
        };
    }

    render() {
        const {activeIndex, rootPanels} = this.state;

        return (
            <Accordion
                className="left-side-menu"
                defaultActiveIndex={activeIndex}
                panels={rootPanels}
                styled
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        permissions: state.auth.permissions.data,
    };
};

export default connect(mapStateToProps)(PageSideBar);
