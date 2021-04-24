import _ from 'lodash';
import { BasicConstant } from '../../custom/Basics/Constant'
import Http from '../../Http'
import { getStore } from './State';
import { show, success, error, warning, info, hide, removeAll } from 'react-notification-system-redux';
import { ConfigAppBasic } from '../Configs/App';
import * as action from '../../store/actions/index'

//Show notification
export const httpInterceptors = (httpInstance) => {

    // Add a response interceptor
    httpInstance.interceptors.response.use(function (response) {

        // If error messages are present in response
        return showNotification(response);
    }, function (error) {

        // Do something with response error
        return showNotification(error.response);
    });

};

function responseHandler (type, response) {

    //Default
    let returnObject = {
        form: '',
        fields: {},
        others: [],
    };

    //If response is empty
    if (_.isEmpty(response)) {
        return returnObject;
    }

    //Parsing form messages
    if (response.hasOwnProperty('form') && !_.isEmpty(response.form)) {
        if (type === 2) {
            returnObject.fields._error = response.form;
        } else {
            returnObject.form = response.form;
        }
    }

    //Parsing field messages
    if (response.hasOwnProperty('fields') && !_.isEmpty(response.fields)) {
        _.forEach(response.fields, function(value, key) {
            returnObject.fields = _.assign(returnObject.fields, {
                [key]: value[0]
            });
        });
    }

    //Parsing other messages
    if (response.hasOwnProperty('others') && !_.isEmpty(response.others)) {
        _.forEach(response.others, function (value, key) {
            returnObject.others = value;
        });
    }

    return returnObject;

}

//Show notification
export const showNotification = (response) => {

    let responseData = response.data;
    let responseDataMessages = responseData.messages;
    let responseStatusCode = responseData.status.code;
    let responseHttpCode = responseData.http.code;

    //If user is unauthorized then logging out
    if (responseHttpCode === 401) {
        getStore().dispatch(action.authLogout());
    }

    //Defaults
    let returnObject = {
        data: responseData.data,
        error: responseHandler(responseStatusCode, responseDataMessages.error),
        success: responseHandler(responseStatusCode, responseDataMessages.success),
    };
    let notifications = [];

    //Iterate all messages for notifications
    _.forEach(returnObject, function (value, key) {

        if (_.includes(['error', 'success'], key) && !_.isEmpty(value)) {

            _.forEach(value, function (messageValue, messageKey) {

                if (_.includes(['form', 'others'], messageKey) && !_.isEmpty(messageValue)) {

                    //Add notification
                    notifications.push({
                        icon: BasicConstant.icons[key],
                        level: key,
                        message: messageValue,
                    });
                }
            });
        }
    });

    //Iterate all notifications
    if (!_.isEmpty(notifications)) {
        _.forEach(notifications, function (value, key) {

            let notification = {
                message: value['message'],
                level: value['level'],
                position: "tc",
                autoDismiss: 7,
            };

            //If HTTP response code is 401
            if (responseHttpCode === 401) {
                notification = _.merge(notification, {
                    uid: 'unauthenticated',
                });
            }

            if (value['level'] === 'success') {
                getStore().dispatch(
                    success(notification)
                );
            } else {
                getStore().dispatch(
                    error(notification)
                );
            }
        });
    }

    return returnObject;
};

//Call API
export function httpCallMake (uri, method, formData = {}) {

    // new Promise((resolve, reject) => {
    return Http({
            method: method,
            url: ConfigAppBasic.api.base + '/' + uri,
            data: formData
        })
            .then(res => {
                return res;
            })
            .catch(err => {
                return err;
            })
        // });
}

// //Prepare array for get URI
// export function prepareUriFromArray (data, primaryKey = 'node_ids') {
//
//     //Default
//     let url = '';
//
//     //Iterate all array inputs
//     for (let i=0; i<data.length; ++i) {
//         if (url.indexOf('?') === -1) {
//             url = url + '?' + primaryKey + '[]=' + data[i];
//         }else {
//             url = url + '&' + primaryKey + '[]=' + data[i];
//         }
//     }
//
//     //Return prepared URI
//     return url;
// }
