// Basics
import {push} from 'connected-react-router';

// Utilities
import {concat, find, forEach, get, size} from 'lodash';

/**
 * Get actions for table.
 * @param types array
 * @param resourceDetailRoute string
 * @param dispatch function
 */
export const getTableRowActions = (types = null, resourceDetailRoute = null, dispatch = null, additionalData = null) => {

    // Location state
    const locationState = get(resourceDetailRoute, 'state.fromPage');

    // Calculating back link
    const redirectTo = locationState ? locationState : resourceDetailRoute;
    
    // Defaults
    const allActions = [
        {
            icon: 'cancel',
            additionalData,
            action: id => alert('delete id: ' + id),
            color: 'red',
            info: {
                header: null,
                content: 'Reject'
            },
            label: 'reject',
        },
        {
            icon: 'check',
            additionalData,
            action: id => alert('edit id: ' + id),
            color: 'green',
            info: {
                header: null,
                content: 'Approve'
            },
            label: 'approve',
        },
        {
            icon: 'eye',
            additionalData,
            action: id => dispatch(push(get(redirectTo, 'view'))),
            color: 'blue',
            info: {
                header: null,
                content: 'View'
            },
            label: 'view',
        },
        {
            icon: 'trash',
            additionalData,
            action: get(resourceDetailRoute, 'destroy') ? get(resourceDetailRoute, 'destroy') : null,
            color: 'red',
            info: {
                header: null,
                content: 'Remove'
            },
            label: 'destroy',
        },
        {
            icon: 'dollar sign',
            additionalData,
            action: id => dispatch(push(get(resourceDetailRoute, 'do_cash_adjustment'))),
            color: 'blue',
            info: {
                header: null,
                content: 'Cash adjustment'
            },
            label: 'do_cash_adjustment',
        },
        {
            icon: 'pencil',
            additionalData,
            action: id => dispatch(push(get(resourceDetailRoute, 'update_rebate_account'))),
            color: 'blue',
            info: {
                header: null,
                content: 'Update rebate account'
            },
            label: 'update_rebate_account',
        },
        {
            icon: 'list',
            additionalData,
            action: id => dispatch(push(get(resourceDetailRoute, 'show_linked_rebate_rate_table'))),
            color: 'purple',
            info: {
                header: null,
                content: 'Associated trading group'
            },
            label: 'show_linked_rebate_rate_table',
        },
        {
            icon: 'level up',
            additionalData,
            action: id => dispatch(push(get(resourceDetailRoute, 'can_update_commission_level'))),
            color: 'brown',
            info: {
                header: null,
                content: 'Update commission level'
            },
            label: 'can_update_commission_level',
        }
    ];

    // Action types
    const actionTypes = {
        reject: {
            key: 0,
            value: 'reject'
        },
        approve: {
            key: 1,
            value: 'approve'
        },
        view: {
            key: 2,
            value: 'view'
        },
        destroy: {
            key: 3,
            value: 'destroy'
        },
        do_cash_adjustment: {
            key: 4,
            value: 'do_cash_adjustment'
        },
        update_rebate_account: {
            key: 5,
            value: 'update_rebate_account'
        },
        show_linked_rebate_rate_table: {
            key: 6,
            value: 'show_linked_rebate_rate_table'
        },
        can_update_commission_level: {
            key: 7,
            value: 'can_update_commission_level'
        }
    };

    // If type is not provided
    if (size(types) < 1) {
        return allActions;
    }

    // Default
    let returnableArray = [];

    // Iterate all provided types
    forEach(types, function (type) {

        // Find action
        const findAction = find(actionTypes, {value: type});
        if (findAction) {
            returnableArray = concat(returnableArray, allActions[findAction['key']]);
        }
    });

    // Return
    return returnableArray;
};
