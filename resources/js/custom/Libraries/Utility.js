import _ from 'lodash';
import i18n from '../../i18n';
import { BasicConstant } from '../../custom/Basics/Constant'
import { ConfigAppAccounts } from '../../custom/Configs/App'
import { ConfigAppBasic } from '../Configs/App';
import queryString from 'query-string';

//Get translations
export function getTranslation(key, nameSpace = 3) {

    //Get namespace
    let prefixLang = BasicConstant.i18nNameSpaces[nameSpace] + ':';

    //Return translation
    return i18n.t(prefixLang + key, { returnObjects: true });
}

//Get asset path
export function assetPath(filePath, nameSpace = 'images') {

    //Get namespace
    let prefix = nameSpace + '/';

    //Return translation
    return ConfigAppBasic.appUrl + '/' + prefix + filePath;
}

//Get accounts email
export function getAccountsInfo(key, type = [1, 2]) {

    //Get account
    let account = ConfigAppAccounts.accounts[key];
    let formatted = {};

    //If email
    if (_.includes(type, 1)) {

        //Formatting
        formatted.email = {
            link: 'mailto:' + account.email,
            visible: account.email,
        }

    }

    //If contact
    if (_.includes(type, 2)) {

        //Formatting
        formatted.phone = {
            link: 'tel:' + account.phone.tel,
            visible: account.phone.visible,
        }
    }

    //Return formatted key
    return formatted;
}

//Get formatted date
export function getFormattedDate(date) {
    let newDate = new Date(date),
        d = newDate.getDate(),
        m = newDate.getMonth() + 1,
        y = newDate.getFullYear();

    if (d < 10) {
        d = "0" + d;
    }
    if (m < 10) {
        m = "0" + m;
    }

    return y + "-" + m + "-" + d;
}

//Get keys from nested array
export function joinNestedArrayKeys(arr, key = 'display_name', joinKey = ', ') {
    let newArr = arr.map(function (row) {
        return row[key];
    });

    return _.join(newArr, joinKey);
}

// Generate random number
export const generateRandomNumber = () => {
    return parseInt(Math.random() * 1000000000, 10);
};

// Get query params
export const getQueryParams = (location) => {
    return queryString.parse(_.get(location, 'search', ''));
};

// Check query params
export const checkQueryParams = (location, key = 'q') => {
    return _.get(getQueryParams(location), key, null);
};

//Get formatted date (without using Date functions)
export function getFormattedDateValue(date, format = 'ymd', joinWith = '-') {

    //Get formatted date
    let newDate = new Date(date),
        d = newDate.getDate(),
        m = newDate.getMonth() + 1,
        y = newDate.getFullYear();

    if (d < 10) {
        d = "0" + d;
    }
    if (m < 10) {
        m = "0" + m;
    }

    // Default
    let formattedData = null;

    if (format === 'ymd') {
        formattedData = y + joinWith + m + joinWith + d;
    } else if (format === 'dmy') {
        formattedData = d + joinWith + m + joinWith + y;
    }
    return formattedData;
}

// Remove null or empty values from array
export function removeNilFromArray(arrayData) {

    return _.compact(_.map(arrayData, function (row) {
        return row;
    }));
}

// Sprintf function for replacing string in string
export const sprintf = (str, ...argv) => !argv.length ? str :
    sprintf(str = str.replace(sprintf.token || "$", argv.shift()), ...argv);

// Dot notation to object
export function dotNotationToObject(obj, i) {
    return _.get(obj, i) ? obj[i] : obj
}

// Dot notation to object
export function parseDotNotation(str, val, obj) {
    var currentObj = obj,
        keys = str.split("."),
        i, l = Math.max(1, keys.length - 1),
        key;

    for (i = 0; i < l; ++i) {
        key = keys[i];
        currentObj[key] = currentObj[key] || {};
        currentObj = currentObj[key];
    }

    currentObj[keys[i]] = val;
    delete obj[str];
}


export function nestedObjectExpand(obj) {
    for (var key in obj) {
        if (key.indexOf(".") !== -1) {
            parseDotNotation(key, obj[key], obj);
        }
    }
    return obj;
};

