import React from 'react';
import { Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import routes from './routes';
import PublicRoute from './public';
import PrivateRoute from './private';
import ScrollToTop from '../elements/Element/ScrollToTop/ScrollToTop'

const Routes = (props) => (
    <ConnectedRouter history={props.history}>
        <ScrollToTop>
            <Switch>
                {routes.map((route,i) => {
                    if(route.auth){
                        return <PrivateRoute key={i} {...route}/>
                    }else{
                        return <PublicRoute key={i} {...route}/>
                    }
                })}
            </Switch>
        </ScrollToTop>
    </ConnectedRouter>
);

export default Routes;