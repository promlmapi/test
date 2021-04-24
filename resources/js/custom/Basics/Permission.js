// Sections
export const BasicPermissionSectionNone = 'none';
export const BasicPermissionSectionProfile = 'profile';
export const BasicPermissionSectionClient = 'client';
export const BasicPermissionSectionFunding = 'funding';
export const BasicPermissionSectionPending = 'pending';
export const BasicPermissionSectionTransaction = 'transaction';
export const BasicPermissionSectionIb = 'ib';
export const BasicPermissionSectionGroup = 'group';
export const BasicPermissionSectionReport = 'report';

// Permission names
export const BasicPermissionApiUserManage = 'api.user.manage';
export const BasicPermissionApiUserPasswordManage = 'api.user.password.manage';
export const BasicPermissionApiUserAddressManage = 'api.user.address.manage';
export const BasicPermissionApiUserClientsManage = 'api.user.clients.manage';
export const BasicPermissionApiUserFundingManage = 'api.user.funding.manage';
export const BasicPermissionApiUserRebateAccountManage = 'api.user.rebate-account.manage';
export const BasicPermissionApiUserQuestionnaireManage = 'api.user.questionnaire.manage';
export const BasicPermissionApiUserSupportingDocumentsManage = 'api.user.supporting-documents.manage';
export const BasicPermissionApiAdminUserAddressManage = 'api.admin.user.address.manage';
export const BasicPermissionApiAdminUserNbaManage = 'api.admin.user.nba.manage';
export const BasicPermissionApiAdminUserDocumentManage = 'api.admin.user.document.manage';
export const BasicPermissionApiAdminTransactionManage = 'api.admin.ib.fund-management.transaction.manage';
export const BasicPermissionApiAdminTransactionCashAdjustmentManage = 'api.admin.ib.fund-management.transaction.cash-adjustment.manage';
export const BasicPermissionApiAdminTransactionCashAdjustmentCreate = 'api.admin.ib.fund-management.transaction.cash-adjustment.create';
export const BasicPermissionApiAdminTransactionCashAdjustmentStore = 'api.admin.ib.fund-management.transaction.cash-adjustment.store';
export const BasicPermissionApiAdminIbListManage = 'api.admin.ib.list.manage';
export const BasicPermissionApiAdminIbAccountLeadManage = 'api.admin.ib.account-management.lead.manage';
export const BasicPermissionApiAdminRrtManage = 'api.admin.rrt.manage';
export const BasicPermissionApiAdminRrtIndex = 'api.admin.rrt.index';
export const BasicPermissionApiAdminRrtShow = 'api.admin.rrt.show';
export const BasicPermissionApiAdminRrtStore = 'api.admin.rrt.store';
export const BasicPermissionApiAdminRrtUpdate = 'api.admin.rrt.update';
export const BasicPermissionApiAdminRrtDestroy = 'api.admin.rrt.destroy';
export const BasicPermissionApiAdminReportManage = 'api.admin.reports.manage';
export const BasicPermissionApiAdminIbRebateAccountManagementRebateAccountManage = 'api.admin.ib.rebate-account-management.rebate-account.manage';
export const BasicPermissionApiAdminIbRebateAccountManagementRebateAccountIndex = 'api.admin.ib.rebate-account-management.rebate-account.index';
export const BasicPermissionApiAdminIbRebateAccountManagementRebateAccountDestroy = 'api.admin.ib.rebate-account-management.rebate-account.destroy';
export const BasicPermissionApiAdminIbTradingClientManagementTradingClientManage = 'api.admin.ib.trading-client-management.trading-client.manage';
export const BasicPermissionApiAdminIbTradingClientManagementTradingClientIndex = 'api.admin.ib.trading-client-management.trading-client.index';
export const BasicPermissionApiAdminIbTradingClientManagementTradingClientEdit = 'api.admin.ib.trading-client-management.trading-client.edit';
export const BasicPermissionApiAdminIbTradingClientManagementTradingClientUpdate = 'api.admin.ib.trading-client-management.trading-client.update';
export const BasicPermissionApiUserTradingClientManagementTradingClientLeadManage = 'api.user.trading-client-management.trading-client-lead.manage';
export const BasicPermissionApiAdminIbTradingClientManagementTradingClientLeadManage = 'api.admin.ib.trading-client-management.trading-client-lead.manage';

// All permissions
export const BasicPermission = {
    1: {
        id: 1,
        name: BasicPermissionApiUserManage,
        section: BasicPermissionSectionProfile,
    },
    2: {
        id: 2,
        name: BasicPermissionApiUserPasswordManage,
        section: BasicPermissionSectionProfile,
    },
    3: {
        id: 3,
        name: BasicPermissionApiUserAddressManage,
        section: BasicPermissionSectionProfile,
    },
    4: {
        id: 4,
        name: BasicPermissionApiUserClientsManage,
        section: BasicPermissionSectionClient,
    },
    5: {
        id: 5,
        name: BasicPermissionApiUserFundingManage,
        section: BasicPermissionSectionFunding,
    },
    6: {
        id: 6,
        name: BasicPermissionApiUserRebateAccountManage,
        section: BasicPermissionSectionProfile,
    },
    7: {
        id: 7,
        name: BasicPermissionApiUserQuestionnaireManage,
        section: BasicPermissionSectionProfile,
    },
    8: {
        id: 8,
        name: BasicPermissionApiUserSupportingDocumentsManage,
        section: BasicPermissionSectionProfile,
    },
    9: {
        id: 9,
        name: BasicPermissionApiAdminUserAddressManage,
        section: BasicPermissionSectionPending,
    },
    10: {
        id: 10,
        name: BasicPermissionApiAdminUserNbaManage,
        section: BasicPermissionSectionPending,
    },
    11: {
        id: 11,
        name: BasicPermissionApiAdminUserDocumentManage,
        section: BasicPermissionSectionPending,
    },
    12: {
        id: 12,
        name: BasicPermissionApiAdminIbListManage,
        section: BasicPermissionSectionIb,
    },
    13: {
        id: 13,
        name: BasicPermissionApiAdminRrtManage,
        section: BasicPermissionSectionGroup,
    },
    14: {
        id: 14,
        name: BasicPermissionApiAdminRrtIndex,
        section: BasicPermissionSectionGroup,
    },
    15: {
        id: 15,
        name: BasicPermissionApiAdminRrtShow,
        section: BasicPermissionSectionGroup,
    },
    16: {
        id: 16,
        name: BasicPermissionApiAdminRrtStore,
        section: BasicPermissionSectionGroup,
    },
    17: {
        id: 17,
        name: BasicPermissionApiAdminRrtUpdate,
        section: BasicPermissionSectionGroup,
    },
    18: {
        id: 18,
        name: BasicPermissionApiAdminRrtDestroy,
        section: BasicPermissionSectionGroup,
    },
    19: {
        id: 19,
        name: BasicPermissionApiAdminTransactionManage,
        section: BasicPermissionSectionTransaction,
    },
    20: {
        id: 20,
        name: BasicPermissionApiAdminIbAccountLeadManage,
        section: BasicPermissionSectionReport,
    },
    21: {
        id: 21,
        name: BasicPermissionApiAdminReportManage,
        section: BasicPermissionSectionReport,
    },
    22: {
        id: 22,
        name: BasicPermissionApiAdminTransactionCashAdjustmentManage,
        section: BasicPermissionSectionTransaction,
    },
    23: {
        id: 23,
        name: BasicPermissionApiAdminTransactionCashAdjustmentCreate,
        section: BasicPermissionSectionTransaction,
    },
    24: {
        id: 24,
        name: BasicPermissionApiAdminTransactionCashAdjustmentStore,
        section: BasicPermissionSectionTransaction,
    },
    25: {
        id: 25,
        name: BasicPermissionApiAdminIbRebateAccountManagementRebateAccountManage,
        section: BasicPermissionSectionNone,
    },
    26: {
        id: 26,
        name: BasicPermissionApiAdminIbRebateAccountManagementRebateAccountIndex,
        section: BasicPermissionSectionIb,
    },
    27: {
        id: 27,
        name: BasicPermissionApiAdminIbRebateAccountManagementRebateAccountDestroy,
        section: BasicPermissionSectionNone,
    },
    28: {
        id: 28,
        name: BasicPermissionApiAdminIbTradingClientManagementTradingClientManage,
        section: BasicPermissionSectionIb,
    },
    29: {
        id: 29,
        name: BasicPermissionApiAdminIbTradingClientManagementTradingClientIndex,
        section: BasicPermissionSectionNone,
    },
    30: {
        id: 30,
        name: BasicPermissionApiAdminIbTradingClientManagementTradingClientEdit,
        section: BasicPermissionSectionNone,
    },
    31: {
        id: 31,
        name: BasicPermissionApiAdminIbTradingClientManagementTradingClientUpdate,
        section: BasicPermissionSectionNone,
    },
    32: {
        id: 32,
        name: BasicPermissionApiUserTradingClientManagementTradingClientLeadManage,
        section: BasicPermissionSectionClient,
    },
    33: {
        id: 33,
        name: BasicPermissionApiAdminIbTradingClientManagementTradingClientLeadManage,
        section: BasicPermissionSectionReport,
    }
};

export default BasicPermission;
