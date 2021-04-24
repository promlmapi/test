// Utilities
import {get} from 'lodash';

// App env
const appEnv = process.env.MIX_APP_ENV;

//********************
// User based settings
//******************** 
//IB lead phone number visible based on the user
const appIBLeadPhoneVisibleUsers  = process.env.MIX_APP_IB_LEAD_VISIBLE;


// App URL
const appURL = process.env.MIX_APP_URL;
const apiURL = process.env.MIX_API_URL;

// Contacts
const contactEmail = process.env.MIX_APP_CONTACT_BACKOFFICE_EMAIL;
const contactPhone = process.env.MIX_APP_CONTACT_BACKOFFICE_PHONE;

export const ConfigAppAccounts = {

    //All accounts with email addresses and contact
    accounts: {
        global: {
            email: contactEmail,
            phone: {
                tel: contactPhone.split(' ').join(''),
                visible: contactPhone,
            },
        },
        support: {
            email: 'support@fpmarkets.com',
            phone: {
                tel: '+61282526800',
                visible: '+61 2 8252 6800',
            },
        },
    },
};

export const ConfigAppBasic = {

    //App URL
    appUrl: appURL,

    // Node env & User based settings
    env: {
        app: appEnv,
        ibLeadVisible: appIBLeadPhoneVisibleUsers,
    },

    //API calls
    api: {
        base: apiURL + '/api/ib/v1',
    },

    //Registration steps
    registration: {
        steps: {
            totalCount: 4,
        },
        refer: {
            key: 'fpm-partner-ref',
        },
        referAccountLink: {
            key: 'referrer_rebate_link',
        }
    },

};

