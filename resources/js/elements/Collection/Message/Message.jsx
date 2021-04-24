import React from 'react';
import { Message, Icon } from 'semantic-ui-react';
import _ from 'lodash';
import Constants from '../../../custom/Basics/Constant.js';

function CollectionMessage (content = '', type = '2', header = '') {

    if (!_.isEmpty(content)) {
        return <Message
            positive={Constants.messages[type] === 'success'}
            negative={Constants.messages[type] === 'error'}
            warning={Constants.messages[type] === 'warning'}
            info={Constants.messages[type] === 'info'}
            header={ !_.isEmpty(header) ? header : '' }
            content={
                <div>
                    {
                        type === '2' &&
                        <Icon name='warning sign' />
                    }
                    { content }
                </div>                
            }
        />
    }
}

export default CollectionMessage;
