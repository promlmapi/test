import * as ActionTypes from '../action-types'

export function authLogin(payload){
    return {
        type: ActionTypes.AUTH_LOGIN,
        payload
    }
}

export function authLogout(payload){
    return {
        type: ActionTypes.AUTH_LOGOUT,
        payload
    }
}

export function authCheck(){
    return {
        type:ActionTypes.AUTH_CHECK
    }
}

export function authUpdateOnBoardingStep(payload){
    return {
        type:ActionTypes.AUTH_UPDATE_ONBOARDING_STEP,
        payload
    }
}
