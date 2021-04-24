import * as ActionTypes from '../action-types/data';

export function dataReset(){
    return {
        type:ActionTypes.DATA_RESET,
    }
}

export function dataPrerequisitesUpdate(payload){
    return {
        type:ActionTypes.DATA_PREREQUISITES_UPDATE,
        payload
    }
}

export function dataSupportingDocumentUpdate(payload){
    return {
        type:ActionTypes.DATA_SUPPORTING_DOCUMENT_UPDATE,
        payload
    }
}

export function dataGetUserProfile(payload){
    return {
        type:ActionTypes.DATA_GET_USER_PROFILE,
        payload
    }
}

export function dataGetUserAddresses(payload){
    return {
        type:ActionTypes.DATA_GET_USER_ADDRESSES,
        payload
    }
}

export function dataGetUserDocuments(payload){
    return {
        type:ActionTypes.DATA_GET_USER_DOCUMENTS,
        payload
    }
}

export function dataGetReferralLinks(payload){
    return {
        type:ActionTypes.DATA_GET_REFERRAL_LINKS,
        payload
    }
}

export function dataGetNominatedBankAccounts(payload){
    return {
        type:ActionTypes.DATA_GET_NOMINATED_BANK_ACCOUNTS,
        payload
    }
}

export function dataGetLinkedTradingAccounts(payload){
    return {
        type:ActionTypes.DATA_GET_LINKED_TRADING_ACCOUNTS,
        payload
    }
}

export function dataGetRebateAccounts(payload){
    return {
        type:ActionTypes.DATA_GET_REBATE_ACCOUNTS,
        payload
    }
}

export function dataGetRebateAccountsUnassigned(payload){
    return {
        type:ActionTypes.DATA_GET_REBATE_ACCOUNTS_UNASSIGNED,
        payload
    }
}

export function dataGetRebateAccountRateTable(payload, accountCode){

    // Adding account_code in payload
    payload['account_code'] = accountCode;

    return {
        type:ActionTypes.DATA_GET_REBATE_ACCOUNT_RATE_TABLE,
        payload
    }
}
