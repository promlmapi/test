import {combineReducers, applyMiddleware, createStore, compose} from 'redux';
import logger from 'redux-logger';
import RootReducer from './reducers';
import ReduxThunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router'

//Create browser history
const history = createBrowserHistory();

//Middlewares
let middleware = [
    ReduxThunk,
    routerMiddleware(history), // for dispatching history actions
];

//Log Redux only in development environment
if (process.env.NODE_ENV !== 'production') {
    middleware = [
        ...middleware,
        logger,
    ];
}

//Creating Redux store
const store = createStore(
    connectRouter(history)(RootReducer), // new root reducer with router state
    // RootReducer,
    compose(
        applyMiddleware(...middleware)
    )
);
persistStore(store);

//Exporting
export default {
    store,
    history
};
