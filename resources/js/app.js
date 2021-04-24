import React from 'react';
import ReactDOM from 'react-dom';

// Internationalize
import {I18nextProvider, translate} from 'react-i18next';
import i18n from './i18n';

import {Provider} from 'react-redux';
import store from './store';
import Routes from './routes';
import * as action from './store/actions';
import NotificationSystem from './components/Notification/System';
import MainContainer from './components/MainContainer/MainContainer';
import registerServiceWorker from './registerServiceWorker';
import FooterInfo from './common/footer/info';
import { CookiesProvider } from 'react-cookie';

// Check user authorization
store.store.dispatch(action.authCheck());

// Rendering component
ReactDOM.render((
    <CookiesProvider>
        <Provider store={store.store}>
            <div>
                <NotificationSystem/>
                <MainContainer>
                    <Routes history={store.history}/>
                </MainContainer>
                <FooterInfo />
            </div>
        </Provider>
    </CookiesProvider>
), document.getElementById('app'));

// Service worker
registerServiceWorker();