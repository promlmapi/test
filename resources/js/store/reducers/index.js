import {combineReducers} from 'redux';
import auth from './Auth';
import data from './Data';
import admin from './Admin';
import persistStore from './persistStore';
import { reducer as reduxFormReducer } from 'redux-form';
import {reducer as notifications} from 'react-notification-system-redux';

const RootReducer = combineReducers({
    auth,
    data,
    admin,
    form: reduxFormReducer,
    notifications,
    persistStore,
});

export default RootReducer;