import { concat } from 'lodash';
import { ConfigAppPage } from '../custom/Configs/Page';

//On-boarding pages
import onBoardingStepOne from '../pages/auth/onBoarding/StepOne'
import onBoardingStepTwo from '../pages/auth/onBoarding/StepTwo'
import onBoardingStepThree from '../pages/auth/onBoarding/StepThree'
import onBoardingStepFour from '../pages/auth/onBoarding/StepFour'

//Auth pages
import Login from '../pages/auth/login'
import ForgotPassword from '../pages/auth/forgotPassword'
import ResetPassword from '../pages/auth/resetPassword'

//User account
import ProfileDetail from '../pages/dashboard/Profile/ProfileDetail/Page'
import ChangePassword from '../pages/dashboard/Profile/ChangePassword/Page'
import ChangeAddress from '../pages/dashboard/Profile/ChangeAddress/Page'
import ManageDocument from '../pages/dashboard/Profile/ManageDocument/Page'
import ReferralLinks from '../pages/dashboard/Profile/ReferralLinks/Page'
import RebateAccountDetail from '../pages/dashboard/Profile/RebateAccountDetail/Page'

//Client management
import ClientList from '../pages/dashboard/Accounts/ClientList/Page'
import ClientDetail from '../pages/dashboard/Accounts/ClientDetail/Page'
import ClientTradingActivity from '../pages/dashboard/Accounts/ClientTradingActivity/Page'
import ClientCashActivity from '../pages/dashboard/Accounts/ClientCashActivity/Page'
import ClientLeadDirect from '../pages/dashboard/Accounts/ClientLead/Direct/Page';
import ClientLeadIndirect from '../pages/dashboard/Accounts/ClientLead/Indirect/Page';

//Fund management
import NominatedBankAccount from '../pages/dashboard/Funding/NominatedBankAccount/Page'
import LinkTradingAccount from '../pages/dashboard/Funding/LinkTradingAccount/Page'
import WithdrawFunds from '../pages/dashboard/Funding/WithdrawFunds/Page'
import FundsHistory from '../pages/dashboard/Funding/FundsHistory/Page'

//Transfer funds
import TransferFundsRebateAccounts from '../pages/dashboard/Funding/TransferFunds/RebateAccounts/Page'
import TransferFundsTradingAccounts from '../pages/dashboard/Funding/TransferFunds/TradingAccounts/Page'

/*
 * Admin roues
 */
import routesAdmin from './routesAdmin'

//404 (not found) page
import NoMatch from '../pages/noMatch'

const routes = [
    {
        path: ConfigAppPage.index.route,
        exact: true,
        auth: false,
        component: Login,
        name: 'index',
    },
    {
        path: ConfigAppPage.login.route,
        exact: true,
        auth: false,
        component: Login,
        name: 'login',
    },
    {
        path: ConfigAppPage.onBoardingStepOne.route,
        exact: true,
        auth: false,
        component: onBoardingStepOne,
        name: 'onBoardingStepOne',
    },
    {
        path: ConfigAppPage.onBoardingStepTwo.route,
        exact: true,
        auth: true,
        component: onBoardingStepTwo,
        name: 'onBoardingStepTwo',
    },
    {
        path: ConfigAppPage.onBoardingStepThree.route,
        exact: true,
        auth: true,
        component: onBoardingStepThree,
        name: 'onBoardingStepThree',
    },
    {
        path: ConfigAppPage.onBoardingStepFour.route,
        exact: true,
        auth: true,
        component: onBoardingStepFour,
        name: 'onBoardingStepFour',
    },
    {
        path: ConfigAppPage.forgotPassword.route,
        exact: true,
        auth: false,
        component: ForgotPassword,
        name: 'forgotPassword',
    },
    {
        path: ConfigAppPage.resetPassword.route,
        exact: true,
        auth: false,
        component: ResetPassword,
        name: 'resetPassword',
    },
    {
        path: ConfigAppPage.profile.route,
        exact: true,
        auth: true,
        component: ProfileDetail,
        name: 'profile',
    },
    {
        path: ConfigAppPage.changePassword.route,
        exact: true,
        auth: true,
        component: ChangePassword,
        name: 'changePassword',
    },
    {
        path: ConfigAppPage.changeAddress.route,
        exact: true,
        auth: true,
        component: ChangeAddress,
        name: 'changeAddress',
    },
    {
        path: ConfigAppPage.manageDocument.route,
        exact: true,
        auth: true,
        component: ManageDocument,
        name: 'manageDocument',
    },
    {
        path: ConfigAppPage.referralLinks.route,
        exact: true,
        auth: true,
        component: ReferralLinks,
        name: 'referralLinks',
    },
    {
        path: ConfigAppPage.rebateAccountDetail.route,
        exact: true,
        auth: true,
        component: RebateAccountDetail,
        name: 'rebateAccountDetail',
    },
    {
        path: ConfigAppPage.clientList.route,
        exact: true,
        auth: true,
        component: ClientList,
        name: 'clientList',
    },
    {
        path: ConfigAppPage.clientDetail.route,
        exact: true,
        auth: true,
        component: ClientDetail,
        name: 'clientDetail',
    },
    {
        path: ConfigAppPage.clientTradingActivity.route,
        exact: true,
        auth: true,
        component: ClientTradingActivity,
        name: 'clientTradingActivity',
    },
    {
        path: ConfigAppPage.clientCashActivity.route,
        exact: true,
        auth: true,
        component: ClientCashActivity,
        name: 'clientCashActivity',
    },
    {
        path: ConfigAppPage.clientLeadDirect.route,
        exact: true,
        auth: true,
        component: ClientLeadDirect,
        name: 'clientLeadDirect',
    },
    {
        path: ConfigAppPage.clientLeadIndirect.route,
        exact: true,
        auth: true,
        component: ClientLeadIndirect,
        name: 'clientLeadIndirect',
    },
    {
        path: ConfigAppPage.nominatedBankAccount.route,
        exact: true,
        auth: true,
        component: NominatedBankAccount,
        name: 'nominatedBankAccount',
    },
    {
        path: ConfigAppPage.linkTradingAccount.route,
        exact: true,
        auth: true,
        component: LinkTradingAccount,
        name: 'linkTradingAccount',
    },
    {
        path: ConfigAppPage.withdrawFunds.route,
        exact: true,
        auth: true,
        component: WithdrawFunds,
        name: 'withdrawFunds',
    },
    {
        path: ConfigAppPage.fundsHistory.route,
        exact: true,
        auth: true,
        component: FundsHistory,
        name: 'fundsHistory',
    },
    {
        path: ConfigAppPage.transferFundsRebateAccounts.route,
        exact: true,
        auth: true,
        component: TransferFundsRebateAccounts,
        name: 'transferFundsRebateAccounts',
    },
    {
        path: ConfigAppPage.transferFundsTradingAccounts.route,
        exact: true,
        auth: true,
        component: TransferFundsTradingAccounts,
        name: 'transferFundsTradingAccounts',
    },
];

//Merge user and admin routes
const allRoutes = concat(
    routes,
    routesAdmin,

    //Merge all routes with NoMatch route
    [{
        path: '',
        exact: true,
        auth: false,
        component: NoMatch,
        name: 'noMatch',
    }],
);

export default allRoutes;