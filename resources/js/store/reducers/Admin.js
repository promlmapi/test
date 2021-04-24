import * as ActionTypes from '../action-types/admin';
import { get, slice, filter, forEach, merge, extend, clone, concat, toNumber } from 'lodash';

const initialState = {
    prerequisites: {},

    // User
    userAddressDetail: [],
    userNbaDetail: [],

    // IB
    ibDetail: null,
    tradingClient: null,

    // Rebate account
    rebateAccountAddForm: null,

    // Rebate account commission level
    rebateAccountCommissionLevelForm: null,

    // User hierarchy
    userHierarchy: {
        'three': [],
        'four': [],
        'five': [],
        'six': [],
        'seven': [],
        'eight': [],
    },

    // Group
    groupDetail: [],

    // Transactions
    transactionDetail: [],
    transactionStatus: {
        approve: [],
        reject: [],
    },
    transactionForm: null
};

const data = (state= initialState,{type, payload = null}) => {

    switch(type){

        //Prerequisites
        case ActionTypes.ADMIN_PREREQUISITES_UPDATE:
            return adminPrerequisitesUpdate(state,payload);

        /*
         * Pending
         */
        //Pending user address
        case ActionTypes.ADMIN_GET_ADDRESS_DETAIL:
            return adminGetAddressDetail(state, payload);

        //Pending user nominated bank account
        case ActionTypes.ADMIN_GET_NBA_DETAIL:
            return adminGetNbaDetail(state, payload);

        /*
         * Group management
         */
        //User hierarchy
        case ActionTypes.ADMIN_GET_USER_HIERARCHY:
            return adminGetUserHierarchy(state, payload);
        case ActionTypes.ADMIN_RESET_USER_HIERARCHY:
            return adminResetUserHierarchy(state, payload);

        //Group
        case ActionTypes.ADMIN_GET_GROUP_DETAIL:
            return adminGetGroupDetail(state, payload);

        //IB
        case ActionTypes.ADMIN_GET_IB_DETAIL:
            return adminGetIbDetail(state, payload);
        case ActionTypes.ADMIN_IB_DETAIL_REBATE_ACCOUNT_REMOVE:
            return adminIbDetailRebateAccountRemove(state, payload);

        /**
         * Rebate account management
         */
        //Add form details
        case ActionTypes.ADMIN_GET_REBATE_ACCOUNT_ADD_FORM_DETAIL:
            return adminGetRebateAccountAddFormDetail(state, payload);

        //Add form reset
        case ActionTypes.ADMIN_RESET_REBATE_ACCOUNT_ADD_FORM_DETAIL:
            return adminResetRebateAccountAddFormDetail(state, payload);

        //Commission level form details
        case ActionTypes.ADMIN_GET_REBATE_ACCOUNT_COMMISSION_LEVEL_FORM_DETAIL:
            return adminGetRebateAccountCommissionLevelFormDetail(state, payload);

        //Commission level form reset
        case ActionTypes.ADMIN_RESET_REBATE_ACCOUNT_COMMISSION_LEVEL_FORM_DETAIL:
            return adminResetRebateAccountCommissionLevelFormDetail(state, payload);

        //Trading client
        case ActionTypes.ADMIN_GET_TRADING_CLIENT_DETAIL:
            return adminGetTradingClientDetail(state, payload);
        case ActionTypes.ADMIN_RESET_TRADING_CLIENT_DETAIL:
            return adminResetTradingClientDetail(state, payload);
            
        /**
         * Transaction management
         */
        //Transaction
        case ActionTypes.ADMIN_GET_TRANSACTION_DETAIL:
            return adminGetTransactionDetail(state, payload);

        //Transaction status update
        case ActionTypes.ADMIN_UPDATE_TRANSACTION_STATUS:
            return adminUpdateTransactionStatus(state, payload);

        //Transaction form details
        case ActionTypes.ADMIN_GET_TRANSACTION_FORM_DETAIL:
            return adminGetTransactionFormDetail(state, payload);

        //Transaction form reset
        case ActionTypes.ADMIN_RESET_TRANSACTION_FORM_DETAIL:
            return adminResetTransactionFormDetail(state, payload);

        //Reset data
        case ActionTypes.ADMIN_RESET:
            return adminReset(state, initialState);

        //Get Sales Status
        case ActionTypes.ADMIN_GET_BASIC_SALES_STATUS_DETAIL:
            return adminGetBasicSalesStatusDetail(state, payload);
        
        //Default
        default:
            return state;
    }
};

const adminReset = (state, payload) => {

    //Clone prerequisites
    const prerequisites = clone(state.prerequisites);

    state = Object.assign(
        {},
        state,
        merge(
            payload,
            {
                prerequisites: prerequisites,
            }
        ),
    );
    return state;
};

const adminPrerequisitesUpdate = (state, payload) => {

    state = Object.assign(
        {},
        state,
        {
            prerequisites: payload,
        }
    );
    return state;
};

const adminGetAddressDetail = (state, payload) => {

    state = Object.assign(
        {},
        state,
        {
            userAddressDetail: {
                ...state.userAddressDetail,
                [payload.resource_id] : payload.resource,
            },
        }
    );
    return state;
};

const adminGetNbaDetail = (state, payload) => {

    state = Object.assign(
        {},
        state,
        {
            userNbaDetail: {
                ...state.userNbaDetail,
                [payload.resource_id] : payload.resource,
            },
        }
    );
    return state;
};

const adminGetUserHierarchy = (state, payload) => {

    state = Object.assign(
        {},
        state,
        {
            userHierarchy: {
                ...state.userHierarchy,
                [payload.level]: payload.resource,
            }
        }
    );
    return state;
};

const adminResetUserHierarchy = (state, payload) => {

    //All levels
    const levels = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'
    ];
    const levelsObject = {
        'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8
    };

    //Levels to reset
    let resetLevels = slice(levels, levelsObject[payload.level]);

    let resetLevelState = {};
    forEach(resetLevels, function(value) {
        resetLevelState[value] = [];
    });

    state = Object.assign(
        {},
        state,
        {
            userHierarchy: extend(
                state.userHierarchy,
                resetLevelState
            )
        }
    );
    return state;
};

const adminGetGroupDetail = (state, payload) => {

    state = Object.assign(
        {},
        state,
        {
            groupDetail: {
            ...state.groupDetail,
                    [payload.group_id] : payload.resource,
            },
        }
    );
    return state;
};

const adminGetTransactionDetail = (state, payload) => {

    state = Object.assign(
        {},
        state,
        {
            transactionDetail: {
                ...state.transactionDetail,
                [payload.resource_id] : payload.resource,
            },
        }
    );
    return state;
};

const adminGetTransactionFormDetail = (state, payload) => {

    state = Object.assign(
        {},
        state,
        {
            transactionForm: get(payload, 'resource', null),
        }
    );
    return state;
};

const adminResetTransactionFormDetail = (state) => {

    state = Object.assign(
        {},
        state,
        {
            transactionForm: null,
        }
    );
    return state;
};

const adminUpdateTransactionStatus = (state, payload) => {

    state = Object.assign(
        {},
        state,
        {
            transactionStatus: {
                ...state.transactionStatus,
                [payload.type]: concat(
                    state.transactionStatus[payload.type],
                    [payload.resource_id]
                ),
            }
        }
    );
    return state;
};

const adminGetIbDetail = (state, payload) => {

    state = Object.assign(
        {},
        state,
        {
            ibDetail: {
            ...state.ibDetail,
                    [payload.resource_id] : payload.resource,
            },
        }
    );
    return state;
};

const adminIbDetailRebateAccountRemove = (state, payload) => {

    const ibID = toNumber(payload.ib_id);
    const rebateID = payload.rebate_id;

    // Filter rebate accounts after removal
    const rebateAccounts = filter(state.ibDetail[ibID].user_rebate_accounts.data, function(row) {
        return row.id !== rebateID;
    });

    // Filter referral links after rebate account removal
    const referralLinks = filter(state.ibDetail[ibID].user_referral_links.data, function(row) {
        return row.id !== rebateID;
    });

    state = Object.assign(
        {},
        state,
        {
            ibDetail: {
                ...state.ibDetail,
                [ibID] : {
                    ...state.ibDetail[ibID],
                    user_rebate_accounts: {
                        ...state.ibDetail[ibID].user_rebate_accounts,
                        data: rebateAccounts
                    },
                    user_referral_links: {
                        ...state.ibDetail[ibID].user_referral_links,
                        data: referralLinks
                    }
                },
            },
        }
    );
    return state;
};

const adminGetTradingClientDetail = (state, payload) => {

    state = Object.assign(
        {},
        state,
        {
            tradingClient: {
            ...state.tradingClient,
                    [payload.resource_id] : payload.resource,
            },
        }
    );
    return state;
};

const adminResetTradingClientDetail = (state) => {

    state = Object.assign(
        {},
        state,
        {
            tradingClient: null,
        }
    );
    return state;
};

const adminGetRebateAccountAddFormDetail = (state, payload) => {

    state = Object.assign(
        {},
        state,
        {
            rebateAccountAddForm: get(payload, 'resource', null),
        }
    );
    return state;
};

const adminResetRebateAccountAddFormDetail = (state) => {

    state = Object.assign(
        {},
        state,
        {
            rebateAccountAddForm: null,
        }
    );
    return state;
};

const adminGetRebateAccountCommissionLevelFormDetail = (state, payload) => {

    state = Object.assign(
        {},
        state,
        {
            rebateAccountCommissionLevelForm: get(payload, 'resource', null),
        }
    );
    return state;
};

const adminResetRebateAccountCommissionLevelFormDetail = (state) => {

    state = Object.assign(
        {},
        state,
        {
            rebateAccountCommissionLevelForm: null,
        }
    );
    return state;
};

const adminGetBasicSalesStatusDetail = (state, payload) => {

    state = Object.assign(
        {},
        state,
        {
            basicSalesStatus: get(payload, 'resource', null),
        }
    );
    return state;
};

export default data;
