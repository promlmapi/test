import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import { ConfigAppPage } from '../../../custom/Configs/Page';
import {
    isNumber,
    isString,
    size
} from 'lodash';

//Required in client list page
export const ClientFormatter = (
        accountNumber,
        clientID,
        params = {
            fromPage: ConfigAppPage.clientList.route,
        }
    ) => {

    return (
        <Button
            as={Link}
            to={{
                pathname: '/accounts/clients/trading-client/' + clientID,
                state: params
            }}
            fluid
            inverted
            color='blue'
            size='mini'
        >
            {accountNumber}
        </Button>
    );
};

//Can be used to show a view link in table
export const TableLinkViewFormatter = (rowID = '', uri, params = {}, visibleText = null, isFluid = true, queryParams = '') => {

    //Preparing link
    let link = uri + (
        ((isString(rowID) && (size(rowID) > 0)) || isNumber(rowID)) ? '/' + rowID : ''
    );

    return (
        <Button
            as={Link}
            fluid={isFluid}
            inverted
            color='blue'
            size='mini'
            to={{
                pathname: link,
                search: queryParams,
                state: params                
            }}
        >
            {visibleText ? visibleText : `#${rowID}`}
        </Button>
    );
};

//Required in admin pending document list page
export const AttachmentLinkFormatter = (url) => {

    return (
        <a target="_blank" href={ url }>View</a>
    );
};
