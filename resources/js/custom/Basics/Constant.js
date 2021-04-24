export const BasicConstant = {

    //Response messages type
    messages: {
        1: 'success',//Success
        2: 'error',//Error
        3: 'info',
        4: 'warning',//Warning
        5: 'default',
    },

    //Response icons
    icons: {
        success: 'check circle outline',
        error: 'close',
    },

    //i18n namespaces
    i18nNameSpaces: {
        1: 'common',
        2: 'field',
        3: 'layout',
        4: 'onBoarding',
        5: 'page',
        6: 'pageAdmin',
    },

    //Commission levels
    tradingCommissionLevels: [
        {
            key: 1,
            title: 'Silver',
        },
        {
            key: 2,
            title: 'Gold',
        },
        {
            key: 3,
            title: 'Platinum',
        },
    ],

    //User levels
    tradingUserLevels: [
        {
            key: 3,
            title: 'Master level',
            text: 'three',
        },
        {
            key: 4,
            title: 'Level 1',
            text: 'four',
        },
        {
            key: 5,
            title: 'Level 2',
            text: 'five',
        },
        {
            key: 6,
            title: 'Level 3',
            text: 'six',
        },
        {
            key: 7,
            title: 'Level 4',
            text: 'seven',
        },
        {
            key: 8,
            title: 'Level 5',
            text: 'eight',
        },
    ],
};

export default BasicConstant;
