import {authLogin} from '../store/actions';
import {httpCallMake} from '../custom/Libraries/httpCall';
import {SubmissionError} from 'redux-form';
import {get, isEmpty} from 'lodash';

/**
 * Login action.
 *
 * @param formData object
 * @return {function(*=): Promise}
 */
export function login(formData) {
    return dispatch => (
        new Promise((resolve) => {

            return httpCallMake('user/login', 'post', formData)
                .then(data => {

                    if (!isEmpty(get(data, 'error.fields'))) {
                        throw new SubmissionError(
                            data.error.fields
                        );
                    }
                    if (!isEmpty(get(data, 'data'))) {
                        dispatch(authLogin(data.data));
                    }
                    return resolve(data);
                });
        })
    )
}
