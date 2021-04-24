// Configs
import {ConfigAppBasic} from '../Configs/App';
import {isEmpty} from 'lodash';

/**
 * Get app env
 */
export const getAppEnv = () => {

    // Return config
    return ConfigAppBasic.env.app;
};

/**
 * Get app env 
 */
export const getIBLeadVisibleUsers = () => {

    // Return config
    return !isEmpty(ConfigAppBasic.env.ibLeadVisible)? ConfigAppBasic.env.ibLeadVisible.split(","): [1];
};