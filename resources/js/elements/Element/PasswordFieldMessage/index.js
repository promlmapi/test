import React from 'react';
import {Message} from 'semantic-ui-react';
import i18n from '../../../i18n';

class ElementPasswordFieldMessage extends React.Component {

    render() {
        const {fromAuthPage = false} = this.props;

        return (
            <Message
                header={i18n.t('nav.header.links.passwordfieldrequirements.title')}
                list={[
                    i18n.t('nav.header.links.pwdconstraint1.title'),
                    i18n.t('nav.header.links.pwdconstraint2.title'),
                    i18n.t('nav.header.links.pwdconstraint3.title'),
                    i18n.t('nav.header.links.pwdconstraint4.title')                   
                ]}
                size={fromAuthPage ? 'small' : null}
            />
        );
    }
};

export default ElementPasswordFieldMessage;