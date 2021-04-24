// Utilities
import {
    forEach,
    get,
    isArray
} from 'lodash';

// Actions
import * as action from '../store/actions/admin';

// Constants
import BasicField from '../custom/Basics/Field';

// Libraries
import { httpCallMake } from '../custom/Libraries/httpCall';
import { responseValidate } from '../custom/Libraries/Form';

// Fields
const { userIdNumber } = BasicField;

export function adminPrerequisitesUpdate() {

    return dispatch => (
        new Promise((resolve, reject) => {

            return httpCallMake('admin/ib/list/prerequisites', 'get')
                .then(data => {
                    return responseValidate(data);
                })
                .then(data => {
                    dispatch(action.adminPrerequisitesUpdate(data));
                });
        })
    )
}

export function adminGetAddressDetail(resourceID) {

    return dispatch => (
        new Promise((resolve, reject) => {

            return httpCallMake('admin/user/address/' + resourceID, 'get')
                .then(data => {
                    return responseValidate(data);
                })
                .then(data => {
                    dispatch(action.adminGetAddressDetail(data));
                });
        })
    )
}

export function adminGetNbaDetail(resourceID) {

    return dispatch => (
        new Promise((resolve, reject) => {

            return httpCallMake('admin/user/nominated-bank-account/' + resourceID, 'get')
                .then(data => {
                    return responseValidate(data);
                })
                .then(data => {
                    dispatch(action.adminGetNbaDetail(data));
                });
        })
    )
}

export function adminGetTransactionDetail(resourceID) {

    return dispatch => (
        new Promise((resolve, reject) => {

            return httpCallMake('admin/ib/fund-management/transaction/' + resourceID, 'get')
                .then(data => {
                    return responseValidate(data);
                })
                .then(data => {
                    dispatch(action.adminGetTransactionDetail(data));
                });
        })
    )
}

export function adminGetTransactionFormDetail(transactionType, rebateAccountId) {

    return dispatch => (
        new Promise((resolve, reject) => {

            return httpCallMake('admin/ib/fund-management/transaction/create?ib_rebate_account_id=' + rebateAccountId + '&basics_reference_class_id=' + transactionType, 'get')
                .then(data => {
                    return responseValidate(data);
                })
                .then(data => {
                    dispatch(action.adminGetTransactionFormDetail(data));
                });
        })
    )
}

export function adminPostTransactionFormDetail(values, callback) {

    return httpCallMake('admin/ib/fund-management/transaction', 'post', values)
        .then(data => {
            return callback(responseValidate(data));
        });
}

export function adminGetUserHierarchy(level, node = null) {

    //Defaults
    let nodeQuery = '';

    //If nodes are present
    if (node) {

        //If node is array
        if (isArray(node)) {

            //Iterate all nodes
            forEach(node, function (row, index) {
                nodeQuery = nodeQuery + (index === 0 ? '?' : '&') + 'node_ids[]=' + row['value'];
            })
        } else {

            //Assign single view as node
            nodeQuery = '?node_ids[]=' + node;
        }
    }

    //Check if node is present
    const uriSuffix = nodeQuery;

    return dispatch => (
        new Promise((resolve, reject) => {

            return httpCallMake('admin/ib/list/user-hierarchy' + uriSuffix, 'get')
                .then(data => {
                    return responseValidate(data);
                })
                .then(data => {
                    dispatch(action.adminGetUserHierarchy(data, level));
                });
        })
    )
}

export function adminResetUserHierarchy(level) {

    return dispatch => (
        new Promise((resolve, reject) => {
            dispatch(action.adminResetUserHierarchy(level));
        })
    )
}

export function adminGetGroupDetail(groupID) {

    return dispatch => (
        new Promise((resolve, reject) => {

            return httpCallMake('admin/rebate-rate-table/' + groupID, 'get')
                .then(data => {
                    return responseValidate(data);
                })
                .then(data => {
                    dispatch(action.adminGetGroupDetail(data, groupID));
                });
        })
    )
}

export function adminGetIbDetail(resourceID) {

    return dispatch => (
        new Promise((resolve, reject) => {

            return httpCallMake('admin/ib/list/' + resourceID, 'get')
                .then(data => {
                    return responseValidate(data);
                })
                .then(data => {
                    dispatch(action.adminGetIbDetail(data, resourceID));
                });
        })
    )
}

export function adminGetTradingClientDetail(tradingClientId) {

    return dispatch => (
        new Promise((resolve, reject) => {

            return httpCallMake('admin/ib/trading-client-management/trading-client/' + tradingClientId + '/edit', 'get')
                .then(data => {
                    return responseValidate(data);
                })
                .then(data => {
                    dispatch(action.adminGetTradingClientDetail(data, tradingClientId));
                });
        })
    )
}

export function adminUpdateTradingClientDetail(tradingClientId, values, callback) {

    return httpCallMake('admin/ib/trading-client-management/trading-client/' + tradingClientId, 'patch', values)
        .then(data => {
            return callback(responseValidate(data));
        });
}

export function adminSearchIbRebateAccount(keyword, callback, tradingClientId) {

    new Promise(resolve => {
        httpCallMake('admin/ib/rebate-account-management/rebate-account?advanced_search=0&ib_rebate_account_code=' + keyword + '&fpm_trading_client_account_id=' + tradingClientId, 'get')
            .then(data => {
                resolve(callback(get(responseValidate(data), 'resource.data')));
            });
    })
}

export function adminGetRebateAccountAddFormDetail(rebateAccountId) {

    return dispatch => (
        new Promise((resolve, reject) => {

            return httpCallMake(
                `admin/ib/rebate-account-management/rebate-account/create?${userIdNumber.name}=${rebateAccountId}`,
                'get'
            )
                .then(data => {
                    return responseValidate(data);
                })
                .then(data => {
                    dispatch(action.adminGetRebateAccountAddFormDetail(data));
                    return resolve();
                });
        })
    )
}

export function adminPostRebateAccountFormDetail(values, callback) {

    return httpCallMake('admin/ib/rebate-account-management/rebate-account', 'post', values)
        .then(data => {
            return callback(responseValidate(data));
        });
}

export function adminGetAllSalesStatus(resourceID) {

    return dispatch => (
        new Promise((resolve, reject) => {

            return httpCallMake('admin/comment/basic-sales-status', 'get')
                .then(data => {
                    return responseValidate(data);
                })
                .then(data => {
                    dispatch(action.adminGetBasicSalesStatusDetail(data));
                });
        })
    )
}

export function adminGetRebateAccountCommissionLevelFormDetail(rebateAccountId) {

    return dispatch => (
        new Promise((resolve, reject) => {

            return httpCallMake(
                `admin/ib/rebate-account-management/${rebateAccountId}/commission-level/create`,
                'get'
            )
                .then(data => {
                    return responseValidate(data);
                })
                .then(data => {
                    dispatch(action.adminGetRebateAccountCommissionLevelFormDetail(data));
                    return resolve();
                });
        })
    )
}

export function adminPostRebateAccountCommissionLevelFormDetail(rebateAccountId, values, callback) {

    return httpCallMake(`admin/ib/rebate-account-management/${rebateAccountId}/commission-level`, 'post', values)
        .then(data => {
            return callback(responseValidate(data));
        });
}
