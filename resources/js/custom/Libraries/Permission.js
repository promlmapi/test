// Constants
import {BasicPermission} from '../Basics/Permission';

// Utilities
import {get, find, size} from 'lodash';

/**
 * Check if user has this permission.
 *
 * @param permission
 * @return boolean
 */
export const hasUserPermission = (permission) => {

    // Permission name
    const permissionName = get(permission, 'name');

    // If permission name not present
    if (!permissionName) {
        return false;
    }

    // Checking if permission exist
    return find(BasicPermission, {
        name: permissionName
    });
};

/**
 * Check if user has permission to section.
 *
 * @param permission string
 * @param section string
 * @return boolean
 */
export const hasPermissionToSection = (permission, section) => {

    // Checking if permission exist
    const permissionExist = hasUserPermission(permission);

    // If permission exists
    if (!permissionExist) {
        return false;
    }

    // Return
    return permissionExist['section'] === section;
};

/**
 * Check if user has permission to action.
 *
 * @param permissions array
 * @param action string
 * @return boolean
 */
export const hasPermissionToAction = (permissions, action) => {

    // If permission array is empty
    if (size(permissions) < 1) {
        return false;
    }

    // Checking if permission exist
    const permissionExist = find(permissions, {
        name: action
    });

    // Return
    return !!permissionExist;
};
