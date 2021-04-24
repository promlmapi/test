// Basics
import _ from 'lodash';
import Validator from 'validatorjs';
import { SubmissionError } from 'redux-form';
import moment from 'moment';

// Configs
import { ConfigAppPage } from '../Configs/Page'
import { ConfigAppPageAdmin } from '../Configs/PageAdmin'

// Libraries
import { nestedObjectExpand } from '../Libraries/Utility';

//Get field rules specifically for a page
export function getPageFieldRules(pageName, formKey = 0, isAdminForm = false) {

    //If form belongs to an admin page
    if (isAdminForm) {
        //Get page fields
        return ConfigAppPageAdmin[pageName].forms[formKey].fields;
    }

    //Get page fields
    return ConfigAppPage[pageName].forms[formKey].fields;
}

//Get field rules
export function getFieldRules(formFields) {

    //Defaults
    let rules = {};

    _.forEach(formFields, function (value, key) {

        //Merge rules
        _.assign(rules, {
            [value.name]: value.rules,
        });
    });

    return rules;
}

//Validate redux form
export const validateForm = (data, props, formFields) => {

    //Validator
    const validator = new Validator(
        data,
        getFieldRules(formFields)
    );
    validator.passes();

    // All errors
    const allErrors = validator.errors.all();

    // Default
    let errorsToReturn = nestedObjectExpand(allErrors);

    //All errors
    return errorsToReturn;
};

//Validate a specific redux form
export const validateSpecificForm = (data, props, pageName, formKey = 0, isAdminForm = false) => {

    //Rules
    const formFields = getPageFieldRules(pageName, formKey, isAdminForm);

    //Validate form
    return validateForm(data, props, formFields);
};

//Prepare select options
export const formPrepareSelectOptions = (data, keyMap, placeHolder, isFlagNeeded = false, isPhoneCode = false) => {

    //Default
    let defaultOption = {
        key: 'select',
        text: placeHolder,
        value: '',
    };

    //Prepare list
    let list = [];
    if (!_.isEmpty(data)) {
        list = _.map(data, function (row) {
            let rowData = {
                key: _.get(row, keyMap[0]),
                value: _.get(row, keyMap[1]),
                text: !isPhoneCode ? _.get(row, keyMap[2]) : (_.get(row, keyMap[2]) + ' (' + _.get(row, keyMap[3]) + ')'),
            };

            //If data has disabled key
            if (row.hasOwnProperty('disabled')) {
                rowData = Object.assign(rowData, {
                    disabled: row['disabled'],
                    // isDisabled: row['disabled'],
                });
            }

            //If data has isFixed key
            if (row.hasOwnProperty('isFixed')) {
                rowData = Object.assign(rowData, {
                    fixed: row['isFixed'],
                    // isFixed: row['isFixed'],
                });
            }

            //If country is required
            if (isFlagNeeded) {
                rowData = Object.assign(rowData, {
                    flag: _.lowerCase(_.get(row, keyMap[0])),
                });
            }

            //If phone code is required
            if (isPhoneCode) {
                rowData = Object.assign(rowData, {
                    phone_code: _.lowerCase(_.get(row, keyMap[3])),
                });
            }

            //Return row data
            return rowData;
        });
    }

    //Return merged list
    return placeHolder === null ? list : [defaultOption, ...list];
};

//Validate response and throw field errors
export const responseValidate = (response) => {

    //If form errors are present
    if (!_.isEmpty(response) && response.hasOwnProperty('error') && !_.isEmpty(response.error)) {

        if (response.error.hasOwnProperty('fields') && !_.isEmpty(response.error.fields)) {
            throw new SubmissionError(
                response.error.fields
            );
        }
    }

    return !_.isEmpty(response) && response.hasOwnProperty('data') ? response.data : [];
};

//Get form values from redux-form
export const getFormValues = (values) => {

    //Defaults
    let formData = new FormData();

    //Iterate all form values
    _.map(values, function (row, key) {

        //Append field value in form
        formData.append(key, row);
    });

    //Return form data
    return formData;
};

//Validate response and throw field errors
export const stopEvent = (e) => {
    e.preventDefault();
};

//Get formatted date
export const getDateFormatted = (date = null) => {

    //Format date
    let dateFormat = 'YYYY-MM-DD';
    return _.isEmpty(date) ? date : moment(date.toDate()).format(dateFormat);
};

//Get date filter (monthly)
export const getDateFilter = (startDate = null, endDate = null, returnObject = false) => {

    //If default
    if (startDate === 'default') {
        startDate = getDateFormatted(moment().startOf('month'));
    }

    //If default
    if (endDate === 'default') {
        endDate = getDateFormatted(moment());
    }

    // If to return object
    if (returnObject) {
        return {
            startDate,
            endDate
        };
    }

    //Return form data
    return '?'
        + (startDate ? 'start_date=' + startDate : '')
        + (endDate ? '&end_date=' + endDate : '');
};
