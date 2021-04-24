// Actions
import * as ActionTypes from '../action-types';

// Libraries
import Http from '../../Http';

// Utilities
import {get, isEmpty, pick, size} from 'lodash';

// Constants
import {ConfigAppBasic} from '../../custom/Configs/App';

// Default user object
const user = {
    id: null,
    first_name: null,
    registration_status: {
        is_complete: false,
        steps: {
            current: null,
        },
    },
};

// Default permissions object
const permissionsDefault = {
    data: null,
};

// Initial state
const initialState = {
    isAuthenticated: false,
    permissions: permissionsDefault,
    user: user,
};

/**
 * All auth actions.
 *
 * @param state
 * @param type
 * @param payload
 * @return {*}
 */
const auth = (state = initialState, {type, payload = null}) => {
    switch (type) {
        case ActionTypes.AUTH_LOGIN:
            return authLogin(state, payload);
        case ActionTypes.AUTH_CHECK:
            return checkAuth(state);
        case ActionTypes.AUTH_LOGOUT:
            return logout(state);
        case ActionTypes.AUTH_UPDATE_ONBOARDING_STEP:
            return authUpdateOnBoardingStep(state, payload);
        default:
            return state;
    }
};

/**
 * Login action.
 *
 * @param state
 * @param payload
 * @return {*}
 */
const authLogin = (state, payload) => {

    // If payload is empty
    if (isEmpty(payload)) {
        return state;
    }

    // Defaults
    const user = get(payload, 'resource', null);
    let isAuthenticated = false;

    // If auth key is present
    const payloadAuth = get(payload, 'auth');
    if (payloadAuth) {

        // Auth token
        const authToken = get(payloadAuth, 'token');

        // If auth token is present
        if (authToken) {
            localStorage.setItem('token', authToken);
            Http.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
            isAuthenticated = true;
        }
    }

    // Store user
    if (user) {
        const userData = pick(user, ['id', 'first_name', 'registration_status']);
        localStorage.setItem('user', JSON.stringify(userData));
    }

    // User permissions
    const permissions = get(user, 'permissions', permissionsDefault);
    if (size(permissions) > 0) {
        localStorage.setItem('permissions', JSON.stringify(permissions));
    }

    state = Object.assign({}, state, {
        isAuthenticated: isAuthenticated,
        permissions: permissions,
        user: user,
    });

    return state;
};

/**
 * Check auth on page load by checking local storage data.
 *
 * @param state
 * @return {*}
 */
const checkAuth = (state) => {

    // Get user from storage
    let userData = localStorage.getItem('user');

    // Get user permissions from storage
    let permissions = localStorage.getItem('permissions');

    // Updating state
    state = Object.assign({}, state, {
        isAuthenticated: !!localStorage.getItem('token'),
        permissions: !isEmpty(permissions) ? JSON.parse(permissions) : permissionsDefault,
        user: !isEmpty(userData) ? JSON.parse(userData) : user,
    });

    // If authenticated
    if (state.isAuthenticated) {
        Http.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    }

    // Return
    return state;
};

/**
 * Logout action.
 *
 * @param state
 * @return {*}
 */
const logout = (state) => {
    localStorage.removeItem('token');
    localStorage.removeItem('permissions');
    localStorage.removeItem('user');
    state = Object.assign(
        {},
        state,
        initialState
    );
    return state;
};

/**
 * Update "auth" state when on-boarding step changes.
 *
 * @param state
 * @param payload
 * @return {*}
 */
const authUpdateOnBoardingStep = (state, payload) => {

    // Default object
    let steps = {
        is_complete: false,
        steps: {
            current: 1,
        }
    };

    // If user has completed all steps
    if (ConfigAppBasic.registration.steps.totalCount == payload) {
        steps.is_complete = true;
    }

    // Updating current step
    steps.steps.current = payload;

    // User object
    let user = Object.assign(
        {},
        state.user,
        {
            registration_status: steps,
        }
    );

    // Setting in local storage
    localStorage.setItem('user', JSON.stringify(user));

    // Updating
    state = Object.assign(
        {},
        state,
        {
            user: user,
        }
    );

    // Return
    return state;
};

export default auth;
