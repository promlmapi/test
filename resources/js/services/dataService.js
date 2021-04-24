// Actions
import * as action from '../store/actions/data'

// Libraries
import { httpCallMake } from '../custom/Libraries/httpCall'
import {responseValidate} from '../custom/Libraries/Form';

export function dataPrerequisitesUpdate() {

    return dispatch => (
        new Promise((resolve, reject) => {

            return httpCallMake('user/create', 'get')
                .then(data => {
                    return responseValidate(data);
                })
                .then(data => {
                    dispatch(action.dataPrerequisitesUpdate(data));
                });
        })
    )
}

export function dataSupportingDocumentUpdate(userID) {

    return dispatch => (
        new Promise((resolve, reject) => {

            return httpCallMake(`user/${userID}/supporting-documents/rules`, 'get')
                .then(data => {
                    return responseValidate(data);
                })
                .then(data => {
                    dispatch(action.dataSupportingDocumentUpdate(data));
                });
        })
    )
}

export function dataGetUserProfile(userID) {

    return dispatch => (
        new Promise((resolve, reject) => {

            return httpCallMake(`user/${userID}`, 'get')
                .then(data => {
                    return responseValidate(data);
                })
                .then(data => {
                    dispatch(action.dataGetUserProfile(data));
                });
        })
    )
}

export function dataGetImpersonateUserAddresses(userID) {

    return dispatch => (
        new Promise((resolve, reject) => {

            return httpCallMake(`user/${userID}/address/?impersonate=true`, 'get')
                .then(data => {
                    return responseValidate(data);
                })
                .then(data => {
                    dispatch(action.dataGetUserAddresses(data));
                });
        })
    )
}

export function dataGetUserAddresses(userID) {

    return dispatch => (
        new Promise((resolve, reject) => {

            return httpCallMake(`user/${userID}/address`, 'get')
                .then(data => {
                    return responseValidate(data);
                })
                .then(data => {
                    dispatch(action.dataGetUserAddresses(data));
                });
        })
    )
}

export function dataGetUserDocuments(userID) {

    return dispatch => (
        new Promise((resolve, reject) => {

            return httpCallMake(`user/${userID}/supporting-documents`, 'get')
                .then(data => {
                    return responseValidate(data);
                })
                .then(data => {
                    dispatch(action.dataGetUserDocuments(data));
                });
        })
    )
}

export function dataGetReferralLinks(userID) {

    return dispatch => (
        new Promise((resolve, reject) => {

            return httpCallMake(`user/${userID}/rebate-account/referral-links`, 'get')
                .then(data => {
                    return responseValidate(data);
                })
                .then(data => {
                    dispatch(action.dataGetReferralLinks(data));
                });
        })
    )
}

export function dataGetNominatedBankAccounts(userID) {

    return dispatch => (
        new Promise((resolve, reject) => {

            return httpCallMake(`user/${userID}/funding/nominated-bank-account`, 'get')
                .then(data => {
                    return responseValidate(data);
                })
                .then(data => {
                    dispatch(action.dataGetNominatedBankAccounts(data));
                });
        })
    )
}

export function dataGetLinkedTradingAccounts(userID) {

    return dispatch => (
        new Promise((resolve, reject) => {

            return httpCallMake(`user/${userID}/funding/link-trading-account`, 'get')
                .then(data => {
                    return responseValidate(data);
                })
                .then(data => {
                    dispatch(action.dataGetLinkedTradingAccounts(data));
                });
        })
    )
}

export function dataGetRebateAccounts(userID) {

    return dispatch => (
        new Promise((resolve, reject) => {

            return httpCallMake(`user/${userID}/rebate-account`, 'get')
                .then(data => {
                    return responseValidate(data);
                })
                .then(data => {
                    dispatch(action.dataGetRebateAccounts(data));
                });
        })
    )
}

export function dataGetRebateAccountsUnassigned(userID) {

    return dispatch => (
        new Promise((resolve, reject) => {

            return httpCallMake(`user/${userID}/rebate-account/unassigned-trading-account`, 'get')
                .then(data => {
                    return responseValidate(data);
                })
                .then(data => {
                    dispatch(action.dataGetRebateAccountsUnassigned(data));
                });
        })
    )
}

export function dataGetRebateAccountRateTable(userID, rebateID) {

    return dispatch => (
        new Promise((resolve, reject) => {

            return httpCallMake(`user/${userID}/rebate-account/${rebateID}/rebate-rate-table`, 'get')
                .then(data => {
                    return responseValidate(data);
                })
                .then(data => {
                    dispatch(action.dataGetRebateAccountRateTable(data, rebateID));
                });
        })
    )
}
