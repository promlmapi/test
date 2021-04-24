// Constants
import {ConfigAppPageAdmin} from '../custom/Configs/PageAdmin';

/*
 * Admin roues
 */

// Pending
import AdminPendingAddress from '../pages/admin/Pending/Address/List/Page';
import AdminPendingAddressReview from '../pages/admin/Pending/Address/Review/Page';
import AdminPendingNbaList from '../pages/admin/Pending/NominatedBankAccount/List/Page';
import AdminPendingNbaReview from '../pages/admin/Pending/NominatedBankAccount/Review/Page';
import AdminPendingDocument from '../pages/admin/Pending/Document/Page';

// IB
import AdminIBList from '../pages/admin/Ib/List/Page';
import AdminIBView from '../pages/admin/Ib/View/Page';
import AdminIbSearch from '../pages/admin/Ib/Search';
import AdminImpersonateChangeAddress from '../pages/dashboard/Profile/ImpersonateChangeAddress/Page'
import AdminIbRebateAccountAdd from '../pages/admin/Ib/RebateAccount/Add';
import AdminIbRebateAccountCommissionLevel from '../pages/admin/Ib/RebateAccount/CommissionLevel';
import AdminIbTradingClientList from '../pages/admin/Ib/TradingClient/List';
import AdminIbTradingClientView from '../pages/admin/Ib/TradingClient/View';

// Group Management
import AdminGroupList from '../pages/admin/Group/List/Page';
import AdminGroupAdd from '../pages/admin/Group/Add/Page';
import AdminGroupView from '../pages/admin/Group/View/Page';

// Transactions
import AdminTransactionList from '../pages/admin/Transaction/List/Page';
import AdminTransactionReview from '../pages/admin/Transaction/Review/Page';
import AdminTransactionCashAdjustmentAdd from '../pages/admin/Transaction/CashAdjustment/Add';

// Reports
import AdminReportIbLead from '../pages/admin/Report/IbLead/Page';
import AdminReportIbClientLead from '../pages/admin/Report/IbClientLead/Page';

// Page configs
const {
    adminPendingAddressList,
    adminPendingAddressReview,
    adminImpersonateAddressChange,
    adminPendingNbaList,
    adminPendingNbaReview,
    adminPendingDocumentList,
    adminIbList,
    adminIbSearch,
    adminIbRebateAccountAdd,
    adminIbRebateAccountCommissionLevel,
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
} = ConfigAppPageAdmin;

// All routes
const routes = [

    /*
     * Applications
     */
    {
        path: adminPendingAddressList.route,
        exact: true,
        auth: true,
        admin: true,
        component: AdminPendingAddress,
        name: 'adminPendingAddressList',
    },
    {
        path: adminPendingAddressReview.route,
        exact: true,
        auth: true,
        admin: true,
        component: AdminPendingAddressReview,
        name: 'adminPendingAddressReview',
    },
    {
        path: adminImpersonateAddressChange.route,
        exact: true,
        auth: true,
        admin: true,
        component: AdminImpersonateChangeAddress,
        name: 'changeAddress',
    },
    {
        path: adminPendingNbaList.route,
        exact: true,
        auth: true,
        admin: true,
        component: AdminPendingNbaList,
        name: 'adminPendingNbaList',
    },
    {
        path: adminPendingNbaReview.route,
        exact: true,
        auth: true,
        admin: true,
        component: AdminPendingNbaReview,
        name: 'adminPendingNbaReview',
    },
    {
        path: adminPendingDocumentList.route,
        exact: true,
        auth: true,
        admin: true,
        component: AdminPendingDocument,
        name: 'adminPendingDocumentList',
    },

    /*
     * IB list
     */
    {
        path: adminIbList.route,
        exact: true,
        auth: true,
        admin: true,
        component: AdminIBList,
        name: 'adminIbList',
    },
    {
        path: adminIbSearch.route,
        exact: true,
        auth: true,
        admin: true,
        component: AdminIbSearch,
        name: 'adminIbSearch',
    },
    {
        path: adminIbRebateAccountAdd.route,
        exact: true,
        auth: true,
        admin: true,
        component: AdminIbRebateAccountAdd,
        name: 'adminIbRebateAccountAdd',
    },
    {
        path: adminIbRebateAccountCommissionLevel.route,
        exact: true,
        auth: true,
        admin: true,
        component: AdminIbRebateAccountCommissionLevel,
        name: 'adminIbRebateAccountCommissionLevel',
    },
    {
        path: adminIbTradingClientIndex.route,
        exact: true,
        auth: true,
        admin: true,
        component: AdminIbTradingClientList,
        name: 'adminIbTradingClientIndex',
    },
    {
        path: adminIbTradingClientView.route,
        exact: true,
        auth: true,
        admin: true,
        component: AdminIbTradingClientView,
        name: 'adminIbTradingClientView',
    },
    {
        path: adminIbView.route,
        exact: true,
        auth: true,
        admin: true,
        component: AdminIBView,
        name: 'adminIbView',
    },

    /*
     * Group management
     */
    {
        path: adminGroupList.route,
        exact: true,
        auth: true,
        admin: true,
        component: AdminGroupList,
        name: 'adminGroupList',
    },
    {
        path: adminGroupAdd.route,
        exact: true,
        auth: true,
        admin: true,
        component: AdminGroupAdd,
        name: 'adminGroupAdd',
    },
    {
        path: adminGroupView.route,
        exact: true,
        auth: true,
        admin: true,
        component: AdminGroupView,
        name: 'adminGroupView',
    },

    /*
     * Transactions
     */
    {
        path: adminTransactionTransferList.route,
        exact: true,
        auth: true,
        admin: true,
        component: AdminTransactionList,
        name: 'adminTransactionTransferList',
    },
    {
        path: adminTransactionTransferReview.route,
        exact: true,
        auth: true,
        admin: true,
        component: AdminTransactionReview,
        name: 'adminTransactionTransferReview',
    },
    {
        path: adminTransactionWithdrawalList.route,
        exact: true,
        auth: true,
        admin: true,
        component: AdminTransactionList,
        name: 'adminTransactionWithdrawalList',
    },
    {
        path: adminTransactionWithdrawalReview.route,
        exact: true,
        auth: true,
        admin: true,
        component: AdminTransactionReview,
        name: 'adminTransactionWithdrawalReview',
    },
    {
        path: adminTransactionCashAdjustmentList.route,
        exact: true,
        auth: true,
        admin: true,
        component: AdminTransactionList,
        name: 'adminTransactionCashAdjustmentList',
    },
    {
        path: adminTransactionCashAdjustmentReview.route,
        exact: true,
        auth: true,
        admin: true,
        component: AdminTransactionReview,
        name: 'adminTransactionCashAdjustmentReview',
    },
    {
        path: adminTransactionCashAdjustmentAdd.route,
        exact: true,
        auth: true,
        admin: true,
        component: AdminTransactionCashAdjustmentAdd,
        name: 'adminTransactionCashAdjustmentAdd',
    },

    /*
     * Transactions
     */
    {
        path: adminReportIbLead.route,
        exact: true,
        auth: true,
        admin: true,
        component: AdminReportIbLead,
        name: 'adminReportIbLead',
    },
    {
        path: adminReportIbClientLead.route,
        exact: true,
        auth: true,
        admin: true,
        component: AdminReportIbClientLead,
        name: 'adminReportIbClientLead',
    },
    
];

export default routes;
