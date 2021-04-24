import * as ActionTypes from '../action-types/admin'

export function adminReset(){
    return {
        type:ActionTypes.ADMIN_RESET,
    }
}

export function adminPrerequisitesUpdate(payload){
    return {
        type:ActionTypes.ADMIN_PREREQUISITES_UPDATE,
        payload
    }
}

export function adminGetAddressDetail(payload){

    //Adding resourceID key in payload
    payload['resource_id'] = payload.resource.id;

    return {
        type:ActionTypes.ADMIN_GET_ADDRESS_DETAIL,
        payload
    }
}

export function adminGetNbaDetail(payload){

    //Adding resourceID key in payload
    payload['resource_id'] = payload.resource.id;

    return {
        type:ActionTypes.ADMIN_GET_NBA_DETAIL,
        payload
    }
}

export function adminGetUserHierarchy(payload, level){

    //Adding level key in payload
    payload['level'] = level;

    return {
        type:ActionTypes.ADMIN_GET_USER_HIERARCHY,
        payload
    }
}

export function adminResetUserHierarchy(level){

    //Adding level key in payload
    let payload = {
        level: level
    };

    return {
        type:ActionTypes.ADMIN_RESET_USER_HIERARCHY,
        payload
    }
}

export function adminGetGroupDetail(payload, groupID){

    //Adding groupID in payload
    payload['group_id'] = groupID;

    return {
        type:ActionTypes.ADMIN_GET_GROUP_DETAIL,
        payload
    }
}

export function adminGetIbDetail(payload, resourceID){

    //Adding userID in payload
    payload['resource_id'] = resourceID;

    return {
        type:ActionTypes.ADMIN_GET_IB_DETAIL,
        payload
    }
}

export function adminIbDetailRebateAccountRemove(ibID, rebateID){

    //Adding ids in payload
    const payload = {
        ib_id: ibID,
        rebate_id: rebateID,
    };

    return {
        type:ActionTypes.ADMIN_IB_DETAIL_REBATE_ACCOUNT_REMOVE,
        payload
    }
}

export function adminGetTransactionDetail(payload){

    //Adding resourceID key in payload
    payload['resource_id'] = payload.resource.id;

    return {
        type:ActionTypes.ADMIN_GET_TRANSACTION_DETAIL,
        payload
    }
}

export function adminUpdateTransactionStatus(payload, type){

    //Adding resourceID key in payload
    payload = {
        resource_id: payload,
        type: type,
    };

    return {
        type:ActionTypes.ADMIN_UPDATE_TRANSACTION_STATUS,
        payload
    }
}

export function adminGetTransactionFormDetail(payload){

    return {
        type:ActionTypes.ADMIN_GET_TRANSACTION_FORM_DETAIL,
        payload
    }
}

export function adminResetTransactionFormDetail(payload){

    return {
        type:ActionTypes.ADMIN_RESET_TRANSACTION_FORM_DETAIL,
        payload
    }
}

export function adminGetTradingClientDetail(payload, resourceID){

    //Adding userID in payload
    payload['resource_id'] = resourceID;

    return {
        type:ActionTypes.ADMIN_GET_TRADING_CLIENT_DETAIL,
        payload
    }
}

export function adminResetTradingClientDetail(payload){

    return {
        type:ActionTypes.ADMIN_RESET_TRADING_CLIENT_DETAIL,
        payload
    }
}

export function adminGetRebateAccountAddFormDetail(payload) {

    return {
        type: ActionTypes.ADMIN_GET_REBATE_ACCOUNT_ADD_FORM_DETAIL,
        payload
    }
}

export function adminResetRebateAccountAddFormDetail(payload) {

    return {
        type: ActionTypes.ADMIN_RESET_REBATE_ACCOUNT_ADD_FORM_DETAIL,
        payload
    }
}

export function adminGetRebateAccountCommissionLevelFormDetail(payload) {

    return {
        type: ActionTypes.ADMIN_GET_REBATE_ACCOUNT_COMMISSION_LEVEL_FORM_DETAIL,
        payload
    }
}

export function adminResetRebateAccountCommissionLevelFormDetail(payload) {

    return {
        type: ActionTypes.ADMIN_RESET_REBATE_ACCOUNT_COMMISSION_LEVEL_FORM_DETAIL,
        payload
    }
}

export function adminGetBasicSalesStatusDetail(payload){

    return {
        type:ActionTypes.ADMIN_GET_BASIC_SALES_STATUS_DETAIL,
        payload
    }
}
