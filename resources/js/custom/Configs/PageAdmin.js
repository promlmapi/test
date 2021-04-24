import { BasicField } from '../Basics/Field'
import { getTranslation } from '../Libraries/Utility';

// Page namespace
const i18nPageNameSpace = 6;

// Admin route prefix
const adminRoutePrefix = 'admin';

// Basic routes
export const ConfigAppPageAdminBasic = {
    adminRoutePrefix: adminRoutePrefix,
    baseAdminUri: '/' + adminRoutePrefix,
};

// Fields
const {
    adjustmentAmount,
    adjustmentCurrency,
    adjustmentDate,
    adjustmentDeclaration,
    adjustmentReason,
    adjustmentType,
    basicCurrency,
    basicRebateCommissionLevel,
    basicTradingPlatform,
    currentRefereeIbName,
    currentRefereeRebateAccountNumber,
    ibName,
    rebateAccountAddDeclaration,
    rebateAccountChangeReason,
    rebateAccountNumber,
    rebateAccountSearch,
    rebateCalculationType,
    tradingCurrency,
    tradingPlatform,
    tradingProduct,
    tradingProductMulti,
    tradingProductMultiRebateCalculationType,
    tradingProductMultiTradingProduct,
    updateDate,
    updateDeclaration,
    userIdNumber
} = BasicField;

export const ConfigAppPageAdmin = {

    //Pending address list page
    adminPendingAddressList: {
        pageTitle: getTranslation('pending.address.list.title', i18nPageNameSpace),
        route: ConfigAppPageAdminBasic['baseAdminUri'] + '/pending/application',
        forms: [],
    },

    //Pending address review page
    adminPendingAddressReview: {
        pageTitle: getTranslation('pending.address.review.title', i18nPageNameSpace),
        route: ConfigAppPageAdminBasic['baseAdminUri'] + '/pending/application/:resourceId',
        routeWithoutParam: ConfigAppPageAdminBasic['baseAdminUri'] + '/pending/application',
        forms: [],
    },

    //Pending nominated bank account list page
    adminPendingNbaList: {
        pageTitle: getTranslation('pending.nba.list.title', i18nPageNameSpace),
        route: ConfigAppPageAdminBasic['baseAdminUri'] + '/pending/nominated-bank-account',
        forms: [],
    },

    //Pending nominated bank account review page
    adminPendingNbaReview: {
        pageTitle: getTranslation('pending.nba.review.title', i18nPageNameSpace),
        route: ConfigAppPageAdminBasic['baseAdminUri'] + '/pending/nominated-bank-account/:resourceId',
        forms: [],
    },

    //Pending document list page
    adminPendingDocumentList: {
        pageTitle: getTranslation('pending.document.list.title', i18nPageNameSpace),
        route: ConfigAppPageAdminBasic['baseAdminUri'] + '/pending/document',
        forms: [],
    },

    //Transactions - transfer list page
    adminTransactionTransferList: {
        pageTitle: getTranslation('transaction.transfer.list.title', i18nPageNameSpace),
        route: ConfigAppPageAdminBasic['baseAdminUri'] + '/transaction/transfer',
        forms: [],
    },

    //Transactions - transfer review page
    adminTransactionTransferReview: {
        pageTitle: getTranslation('transaction.transfer.review.title', i18nPageNameSpace),
        route: ConfigAppPageAdminBasic['baseAdminUri'] + '/transaction/transfer/:resourceId',
        forms: [],
    },

    //Transactions - withdrawal list page
    adminTransactionWithdrawalList: {
        pageTitle: getTranslation('transaction.withdrawal.list.title', i18nPageNameSpace),
        route: ConfigAppPageAdminBasic['baseAdminUri'] + '/transaction/withdrawal',
        forms: [],
    },

    //Transactions - withdrawal review page
    adminTransactionWithdrawalReview: {
        pageTitle: getTranslation('transaction.withdrawal.review.title', i18nPageNameSpace),
        route: ConfigAppPageAdminBasic['baseAdminUri'] + '/transaction/withdrawal/:resourceId',
        forms: [],
    },

    //Transactions - cash adjustment list page
    adminTransactionCashAdjustmentList: {
        pageTitle: getTranslation('transaction.cashAdjustment.list.title', i18nPageNameSpace),
        route: ConfigAppPageAdminBasic['baseAdminUri'] + '/transaction/cash-adjustment',
        forms: [],
    },

    //Transactions - cash adjustment review page
    adminTransactionCashAdjustmentReview: {
        pageTitle: getTranslation('transaction.cashAdjustment.review.title', i18nPageNameSpace),
        route: ConfigAppPageAdminBasic['baseAdminUri'] + '/transaction/cash-adjustment/:resourceId',
        forms: [],
    },

    //Transactions - cash adjustment add page
    adminTransactionCashAdjustmentAdd: {
        pageTitle: getTranslation('transaction.cashAdjustment.add.title', i18nPageNameSpace),
        route: ConfigAppPageAdminBasic['baseAdminUri'] + '/transaction/cash-adjustment/add/:rebateAccountId',
        routeWithoutParam: ConfigAppPageAdminBasic['baseAdminUri'] + '/transaction/cash-adjustment/add',
        forms: [
            {
                name: 'adminTransactionCashAdjustmentAdd',
                fields: [
                    adjustmentAmount,
                    adjustmentCurrency,
                    adjustmentDate,
                    adjustmentDeclaration,
                    adjustmentReason,
                    adjustmentType,
                    ibName,
                    rebateAccountNumber
                ],
            },
        ],
    },

    //IB list page
    adminIbList: {
        pageTitle: getTranslation('ib.ib.list.title', i18nPageNameSpace),
        route: ConfigAppPageAdminBasic['baseAdminUri'] + '/ib',
        forms: [],
    },

    //IB detail page
    adminIbView: {
        pageTitle: getTranslation('ib.ib.view.title', i18nPageNameSpace),
        route: ConfigAppPageAdminBasic['baseAdminUri'] + '/ib/:resourceId',
        routeWithoutParam: ConfigAppPageAdminBasic['baseAdminUri'] + '/ib',
        forms: [],
    },

    //IB search page
    adminIbSearch: {
        pageTitle: getTranslation('ib.ib.search.title', i18nPageNameSpace),
        route: ConfigAppPageAdminBasic['baseAdminUri'] + '/ib/search',
        forms: [],
    },

    //IB rebate account addition page
    adminIbRebateAccountAdd: {
        pageTitle: getTranslation('ib.ib.rebateAccount.add.title', i18nPageNameSpace),
        route: ConfigAppPageAdminBasic['baseAdminUri'] + '/ib/:resourceId/rebate-account-add',
        routeWithoutParam: ConfigAppPageAdminBasic['baseAdminUri'] + '/ib/$/rebate-account-add',
        forms: [
            {
                name: 'adminIbRebateAccountAdd',
                fields: [
                    basicCurrency,
                    basicTradingPlatform,
                    rebateAccountAddDeclaration,
                    userIdNumber
                ],
            },
        ],
    },

    //IB rebate account - commission level update page
    adminIbRebateAccountCommissionLevel: {
        pageTitle: getTranslation('ib.ib.rebateAccount.commissionLevel.title', i18nPageNameSpace),
        route: ConfigAppPageAdminBasic['baseAdminUri'] + '/ib/:resourceId/rebate-account/:rebateAccountId/commission-level',
        routeWithoutParam: ConfigAppPageAdminBasic['baseAdminUri'] + '/ib/$/rebate-account/$/commission-level',
        forms: [
            {
                name: 'adminIbRebateAccountCommissionLevel',
                fields: [
                    basicRebateCommissionLevel,
                    rebateAccountAddDeclaration
                ],
            },
        ],
    },

    //Trading client index page
    adminIbTradingClientIndex: {
        pageTitle: getTranslation('ib.ib.tradingClient.index.title', i18nPageNameSpace),
        route: ConfigAppPageAdminBasic['baseAdminUri'] + '/ib/trading-client',
        forms: [],
    },

    //Trading client search page
    adminIbTradingClientView: {
        pageTitle: getTranslation('ib.ib.tradingClient.view.title', i18nPageNameSpace),
        route: ConfigAppPageAdminBasic['baseAdminUri'] + '/ib/trading-client/:tradingClientId',
        routeWithoutParam: ConfigAppPageAdminBasic['baseAdminUri'] + '/ib/trading-client',
        forms: [
            {
                name: 'adminIbTradingClientView',
                fields: [
                    currentRefereeRebateAccountNumber,
                    currentRefereeIbName,
                    rebateAccountChangeReason,
                    rebateAccountSearch,
                    updateDate,
                    updateDeclaration
                ],
            },
        ],
    },

    /*
     * Group management
     */
    //Group list page
    adminGroupList: {
        pageTitle: getTranslation('group.group.list.title', i18nPageNameSpace),
        route: ConfigAppPageAdminBasic['baseAdminUri'] + '/group',
        forms: [],
    },

    //Group add page
    adminGroupAdd: {
        pageTitle: getTranslation('group.group.add.title', i18nPageNameSpace),
        route: ConfigAppPageAdminBasic['baseAdminUri'] + '/group/add',
        forms: [
            {
                name: 'adminGroupAdd',
                fields: [
                    tradingCurrency,
                    tradingPlatform,
                    tradingProductMulti,
                    tradingProductMultiRebateCalculationType,
                    tradingProductMultiTradingProduct,
                ],
            },
        ],
    },

    //Impersonate address change page
    adminImpersonateAddressChange: {
        pageTitle: getTranslation('dashboard.changeAddress.title', i18nPageNameSpace),
        route: '/profile/impersonate/change-address/:id',
        routeWithoutParam: '/profile/impersonate/change-address',
        forms: [],
    },
    //Group update page
    adminGroupView: {
        pageTitle: getTranslation('group.group.view.title', i18nPageNameSpace),
        route: ConfigAppPageAdminBasic['baseAdminUri'] + '/group/:groupId',
        routeWithoutParam: ConfigAppPageAdminBasic['baseAdminUri'] + '/group',
        forms: [],
    },

    /*
     * Reports
     */
    //Incomplete IB registrations
    adminReportIbLead: {
        pageTitle: getTranslation('report.ib.lead.title', i18nPageNameSpace),
        route: ConfigAppPageAdminBasic['baseAdminUri'] + '/reports/incomplete-ib-registrations',
        forms: [],
    },

    //IB client lead
    adminReportIbClientLead: {
        pageTitle: getTranslation('report.ib.clientLead.title', i18nPageNameSpace),
        route: ConfigAppPageAdminBasic['baseAdminUri'] + '/reports/ib-leads',
        forms: [],
    },

};
