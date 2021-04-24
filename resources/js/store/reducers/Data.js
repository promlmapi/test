// Action types
import * as ActionTypes from '../action-types/data';

// Utilities
import {
    clone,
    get,
    isEmpty,
    merge,
    size
} from 'lodash';

// Initial state
const initialState = {
    prerequisites: {},

    // User account management
    supportingDocuments: {},
    user: {},
    userAddresses: [],
    userDocuments: [],
    referralLinks: [],

    // Show messages
    showMessages: {
        isNominatedBankAccountAdded: true,
        isTradingAccountAdded: true,
        isMoreRebateAccountAdded: true,
        isRebateAccountUnassigned: true,
        isReferralLinksAvailable: true,
    },

    // Fund management
    nominatedBankAccount: {
        latest: [],
        verified: [],
    },
    linkedTradingAccounts: [],
    rebateAccounts: [],
    rebateAccountRateTables: [],
    rebateAccountsUnassigned: [],
    fundsHistory: [],
};

/**
 * All actions available for this reducer.
 *
 * @param state
 * @param type
 * @param payload
 * @return {*}
 */
const data = (state = initialState, {type, payload = null}) => {

    switch (type) {

        // Prerequisites
        case ActionTypes.DATA_PREREQUISITES_UPDATE:
            return dataPrerequisitesUpdate(state, payload);

        // User profile
        case ActionTypes.DATA_SUPPORTING_DOCUMENT_UPDATE:
            return dataSupportingDocumentUpdate(state, payload);
        case ActionTypes.DATA_GET_USER_PROFILE:
            return dataGetUserProfile(state, payload);
        case ActionTypes.DATA_GET_USER_ADDRESSES:
            return dataGetUserAddresses(state, payload);
        case ActionTypes.DATA_GET_USER_DOCUMENTS:
            return dataGetUserDocuments(state, payload);
        case ActionTypes.DATA_GET_REFERRAL_LINKS:
            return dataGetReferralLinks(state, payload);

        // Fund management
        case ActionTypes.DATA_GET_NOMINATED_BANK_ACCOUNTS:
            return dataGetNominatedBankAccounts(state, payload);
        case ActionTypes.DATA_GET_LINKED_TRADING_ACCOUNTS:
            return dataGetLinkedTradingAccounts(state, payload);
        case ActionTypes.DATA_GET_REBATE_ACCOUNTS:
            return dataGetRebateAccounts(state, payload);
        case ActionTypes.DATA_GET_REBATE_ACCOUNT_RATE_TABLE:
            return dataGetRebateAccountRateTable(state, payload);
        case ActionTypes.DATA_GET_REBATE_ACCOUNTS_UNASSIGNED:
            return dataGetRebateAccountsUnassigned(state, payload);

        // Reset data
        case ActionTypes.DATA_RESET: {
            return dataReset(state, initialState);
        }

        // Default
        default:
            return state;
    }
};

/**
 * Reset data object.
 *
 * @param state
 * @param payload
 * @return {*}
 */
const dataReset = (state, payload) => {

    // Clone prerequisites
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

/**
 * Get prerequisites.
 *
 * @param state
 * @param payload
 * @return {*}
 */
const dataPrerequisitesUpdate = (state, payload) => {

    state = Object.assign(
        {},
        state,
        {
            prerequisites: payload,
        }
    );
    return state;
};

/**
 * Get user supporting documents.
 *
 * @param state
 * @param payload
 * @return {*}
 */
const dataSupportingDocumentUpdate = (state, payload) => {

    state = Object.assign(
        {},
        state,
        {
            supportingDocuments: get(payload, 'supporting_document.data'),
        }
    );
    return state;
};

/**
 * Get user profile.
 *
 * @param state
 * @param payload
 * @return {*}
 */
const dataGetUserProfile = (state, payload) => {

    state = Object.assign(
        {},
        state,
        {
            user: get(payload, 'resource'),
        }
    );
    return state;
};

/**
 * Get user addresses.
 *
 * @param state
 * @param payload
 * @return {*}
 */
const dataGetUserAddresses = (state, payload) => {

    state = Object.assign(
        {},
        state,
        {
            userAddresses: payload,
        }
    );
    return state;
};

/**
 * Get user documents.
 *
 * @param state
 * @param payload
 * @return {*}
 */
const dataGetUserDocuments = (state, payload) => {

    state = Object.assign(
        {},
        state,
        {
            userDocuments: get(payload, 'document'),
        }
    );
    return state;
};

/**
 * Get referral links.
 *
 * @param state
 * @param payload
 * @return {*}
 */
const dataGetReferralLinks = (state, payload) => {

    state = Object.assign(
        {},
        state,
        {
            referralLinks: get(payload, 'resource'),
            showMessages: merge(
                state.showMessages,
                {
                    isReferralLinksAvailable: size(get(payload, 'resource.data')) > 0,
                }
            )
        }
    );
    return state;
};

/**
 * Get nominated bank account.
 *
 * @param state
 * @param payload
 * @return {*}
 */
const dataGetNominatedBankAccounts = (state, payload) => {

    state = Object.assign(
        {},
        state,
        {
            nominatedBankAccount: get(payload, 'resource'),
            showMessages: merge(
                state.showMessages,
                {
                    isNominatedBankAccountAdded: !isEmpty(get(payload, 'resource.verified')),
                }
            )
        }
    );
    return state;
};

/**
 * Get linked trading accounts.
 *
 * @param state
 * @param payload
 * @return {*}
 */
const dataGetLinkedTradingAccounts = (state, payload) => {

    state = Object.assign(
        {},
        state,
        {
            linkedTradingAccounts: get(payload, 'resource'),
        }
    );
    return state;
};

/**
 * Get rebate accounts.
 *
 * @param state
 * @param payload
 * @return {*}
 */
const dataGetRebateAccounts = (state, payload) => {

    //Payload data
    const payloadData = get(payload, 'resource');

    //Checking if any of rebate accounts have transferrable trading accounts
    const isTradingAccountAdded = payloadData.some(data => !isEmpty(data['transferrable_trading_accounts']));

    //Checking if any of rebate accounts have transferrable rebate accounts
    const isMoreRebateAccountAdded = payloadData.some(data => !isEmpty(data['transferrable_rebate_accounts']));

    state = Object.assign(
        {},
        state,
        {
            rebateAccounts: payloadData,
            showMessages: merge(
                state.showMessages,
                {
                    isTradingAccountAdded: isTradingAccountAdded,
                    isMoreRebateAccountAdded: isMoreRebateAccountAdded,
                }
            )
        }
    );
    return state;
};

/**
 * Get rebate accounts (which don't have any trading account linked).
 *
 * @param state
 * @param payload
 * @return {*}
 */
const dataGetRebateAccountsUnassigned = (state, payload) => {

    // Payload data
    const payloadData = get(payload, 'resource');

    state = Object.assign(
        {},
        state,
        {
            rebateAccountsUnassigned: payloadData,
            showMessages: merge(
                state.showMessages,
                {
                    isRebateAccountUnassigned: !isEmpty(payloadData),
                }
            )
        }
    );

    return state;
};

/**
 * Get rebate rate tables.
 *
 * @param state
 * @param payload
 * @return {*}
 */
const dataGetRebateAccountRateTable = (state, payload) => {

    state = Object.assign(
        {},
        state,
        {
            rebateAccountRateTables: {
                ...state.rebateAccountRateTables,
                [payload.account_code]: get(payload, 'resource'),
            },
        }
    );
    return state;
};

export default data;
