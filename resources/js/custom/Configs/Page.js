import {BasicField} from '../Basics/Field.js'
import {getTranslation} from '../Libraries/Utility.js';

//Page namespace
let i18nPageNameSpace = 5;

//Fields
const {amount, accountHolderAddress, bankAddress, bankName, beneficiaryAccountNumber, beneficiaryAccountName, bsbCode, city, confirmEmail, country, currency, document, documentType, dob, email, firstName, fromRebateAccount, lastName, password, passwordConfirm, passwordNew, passwordOld, photoIdentification, postalCode, phone, phoneCode, rebateAccount, region, state, streetName, swift, termsAcceptance, toNominatedBankAccount, toRebateAccount, toTradingAccount, town, tradingAccountNumber, tradingCurrency, tradingPlatform, tradingProduct, tradingProductMulti, unitNumber, uploadReason, salesStatus, userComment, } = BasicField;

export const ConfigAppPage = {

    //First step in on-boarding
    onBoardingStepOne: {
        pageTitle: getTranslation('onBoarding.stepFirst.title', i18nPageNameSpace),
        route: '/register',
        forms: [
            {
                name: 'onBoardingStepOne',
                fields: [
                    country,
                    region,
                    firstName,
                    lastName,
                    email,
                    confirmEmail,
                    password,
                    phoneCode,
                    phone,
                ],
            },
        ],
    },

    //Second step in on-boarding
    onBoardingStepTwo: {
        pageTitle: getTranslation('onBoarding.stepTwo.title', i18nPageNameSpace),
        route: '/register/address',
        forms: [
            {
                name: 'onBoardingStepTwo',
                fields: [
                    dob,
                    unitNumber,
                    streetName,
                    town,
                    city,
                    state,
                    postalCode,
                ],
            },
        ],
    },

    //Third step in on-boarding
    onBoardingStepThree: {
        pageTitle: getTranslation('onBoarding.stepThree.title', i18nPageNameSpace),
        route: '/register/questionnaire',
        forms: [
            {
                name: 'onBoardingStepThree',
                fields: [],
            },
        ],
    },

    //Fourth step in on-boarding
    onBoardingStepFour: {
        pageTitle: getTranslation('onBoarding.stepFour.title', i18nPageNameSpace),
        route: '/register/documents',
        forms: [
            {
                name: 'onBoardingStepFour',
                fields: [
                    termsAcceptance,
                ],
            },
        ],
    },

    //Index page
    index: {
        pageTitle: getTranslation('auth.login.title', i18nPageNameSpace),
        route: '/',
        forms: [
            {
                name: 'login',
                fields: [
                    email,
                    password,
                ],
            },
        ],
    },

    //Login page
    login: {
        pageTitle: getTranslation('auth.login.title', i18nPageNameSpace),
        route: '/login',
        forms: [
            {
                name: 'login',
                fields: [
                    email,
                    password,
                ],
            },
        ],
    },

    //Forgot password page
    forgotPassword: {
        pageTitle: getTranslation('auth.forgotPassword.title', i18nPageNameSpace),
        route: '/forgot-password',
        forms: [
            {
                name: 'forgotPassword',
                fields: [
                    email,
                ],
            },
        ],
    },

    //Reset password page
    resetPassword: {
        pageTitle: getTranslation('auth.resetPassword.title', i18nPageNameSpace),
        route: '/reset-password',
        forms: [
            {
                name: 'resetPassword',
                fields: [
                    password,
                    passwordConfirm,
                ],
            },
        ],
    },

    //Profile page
    profile: {
        pageTitle: getTranslation('dashboard.profile.title', i18nPageNameSpace),
        route: '/profile/details',
        forms: [
            {
                name: 'profile',
                fields: [
                    firstName,
                    lastName,
                    country,
                    phone,
                    phoneCode,
                ],
            },
        ],
    },

    //Change password page
    changePassword: {
        pageTitle: getTranslation('dashboard.changePassword.title', i18nPageNameSpace),
        route: '/profile/change-password',
        forms: [
            {
                name: 'changePassword',
                fields: [
                    passwordOld,
                    passwordNew,
                    passwordConfirm,
                ],
            },
        ],
    },

    //Change address page
    changeAddress: {
        pageTitle: getTranslation('dashboard.changeAddress.title', i18nPageNameSpace),
        route: '/profile/change-address',
        forms: [
            {
                name: 'changeAddress',
                fields: [
                    city,
                    country,
                    postalCode,
                    state,
                    streetName,
                    town,
                    unitNumber,
                ],
            },
        ],
    },

    //User comment page
    userCommentForm: {
        pageTitle: getTranslation('dashboard.changeAddress.title', i18nPageNameSpace),
        route: '/comment/',
        forms: [
            {
                name: 'userCommentForm',
                fields: [
                    salesStatus,
                    userComment,
                ],
            },
        ],
    },

    //IB impersonate [Profile] edit page
    impersonateUserProfileForm: {
        pageTitle: getTranslation('dashboard.impersonateUserProfileForm.title', i18nPageNameSpace),
        route: '/user/impersonate-profile/edit',
        forms: [
            {
                name: 'impersonateUserProfileForm',
                fields: [
                    firstName,
                    lastName,
                    country,
                    email,
                    phoneCode,
                    phone,
                ],
            },
        ],
    },

    //IB impersonate Pending [Profile] edit page
    impersonatePendingProfileForm: {
        pageTitle: getTranslation('dashboard.impersonatePendingProfileForm.title', i18nPageNameSpace),
        route: '/user/impersonate-profile/edit',
        forms: [
            {
                name: 'impersonatePendingProfileForm',
                fields: [
                    firstName,
                    lastName,
                    email,
                    country,
                    unitNumber,
                    streetName,
                    town,
                    city,
                    state,
                    postalCode,
                ],
            },
        ],
    },


    //Manage documents page
    manageDocument: {
        pageTitle: getTranslation('dashboard.manageDocument.title', i18nPageNameSpace),
        route: '/profile/manage-documents',
        forms: [
            {
                name: 'manageDocument',
                fields: [
                    documentType,
                    document,
                    uploadReason,
                ],
            },
        ],
    },

    //Referral links page
    referralLinks: {
        pageTitle: getTranslation('dashboard.referralLinks.title', i18nPageNameSpace),
        route: '/profile/referral-links',
        forms: [],
    },

    //Rebate account detail page
    rebateAccountDetail: {
        pageTitle: getTranslation('dashboard.rebateAccountDetail.title', i18nPageNameSpace),
        route: '/accounts/rebate-account/:rebateId',
        routeWithoutParam: '/accounts/rebate-account',
        forms: [],
    },

    //Client list page
    clientList: {
        pageTitle: getTranslation('dashboard.clientList.title', i18nPageNameSpace),
        route: '/accounts/clients',
        forms: [],
    },

    //Client detail page
    clientDetail: {
        pageTitle: getTranslation('dashboard.clientDetail.title', i18nPageNameSpace),
        route: '/accounts/clients/trading-client/:clientId',
        routeWithoutParam: '/accounts/clients/trading-client',
        forms: [],
    },

    //Client trading activity page
    clientTradingActivity: {
        pageTitle: getTranslation('dashboard.clientTradingActivity.title', i18nPageNameSpace),
        route: '/accounts/clients/trading-activity',
        forms: [],
    },

    //Client cash activity page
    clientCashActivity: {
        pageTitle: getTranslation('dashboard.clientCashActivity.title', i18nPageNameSpace),
        route: '/accounts/clients/cash-activity',
        forms: [],
    },

    //Client lead direct
    clientLeadDirect: {
        pageTitle: getTranslation('dashboard.clientLead.direct.title', i18nPageNameSpace),
        route: '/accounts/clients/leads/direct',
        forms: [],
    },

    //Client lead indirect
    clientLeadIndirect: {
        pageTitle: getTranslation('dashboard.clientLead.indirect.title', i18nPageNameSpace),
        route: '/accounts/clients/leads/indirect',
        forms: [],
    },

    //Nominated bank account page
    nominatedBankAccount: {
        pageTitle: getTranslation('dashboard.funding.nominatedBankAccount.title', i18nPageNameSpace),
        route: '/funding/nominated-bank-account',
        forms: [
            {
                name: 'nominatedBankAccount',
                fields: [
                    country,
                    bankName,
                    bankAddress,
                    swift,
                    bsbCode,
                    beneficiaryAccountNumber,
                    beneficiaryAccountName,
                    accountHolderAddress,
                    photoIdentification,
                ],
            },
        ],
    },

    //Link trading account page
    linkTradingAccount: {
        pageTitle: getTranslation('dashboard.funding.linkTradingAccount.title', i18nPageNameSpace),
        route: '/funding/link-trading-account',
        forms: [
            {
                name: 'linkTradingAccount',
                fields: [
                    rebateAccount,
                    tradingAccountNumber,
                ],
            },
        ],
    },

    //Funds history page
    fundsHistory: {
        pageTitle: getTranslation('dashboard.funding.fundsHistory.title', i18nPageNameSpace),
        route: '/funding/funds-history',
        forms: [],
    },

    //Withdraw funds page
    withdrawFunds: {
        pageTitle: getTranslation('dashboard.funding.withdrawFunds.title', i18nPageNameSpace),
        route: '/funding/withdraw-funds',
        forms: [
            {
                name: 'withdrawFunds',
                fields: [
                    amount,
                    currency,
                    fromRebateAccount,
                    toNominatedBankAccount,
                ],
            },
        ],
    },

    //Transfer funds to rebate accounts page
    transferFundsRebateAccounts: {
        pageTitle: getTranslation('dashboard.funding.transferFunds.rebateAccounts.title', i18nPageNameSpace),
        route: '/funding/transfer-funds/rebate-accounts',
        forms: [
            {
                name: 'transferFundsRebateAccounts',
                fields: [
                    amount,
                    currency,
                    fromRebateAccount,
                    toRebateAccount,
                ],
            },
        ],
    },

    //Transfer funds to trading accounts page
    transferFundsTradingAccounts: {
        pageTitle: getTranslation('dashboard.funding.transferFunds.tradingAccounts.title', i18nPageNameSpace),
        route: '/funding/transfer-funds/trading-accounts',
        forms: [
            {
                name: 'transferFundsTradingAccounts',
                fields: [
                    amount,
                    currency,
                    fromRebateAccount,
                    toTradingAccount,
                ],
            },
        ],
    },

};

export const ConfigAppPageReducer = () => {
    return ConfigAppPage;
};
