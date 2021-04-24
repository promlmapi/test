import React from 'react'
import {Route} from 'react-router'
import Main from '../Main'

const route = ({component: Component, ...rest}) => (

    <Route {...rest} render={props => (
            <Main>
                <Component {...props}/>
            </Main>
    )}/>
);

export default route;