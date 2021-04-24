// Basics
import React from 'react';
import { connect } from 'react-redux';

// Libraries
import { firstRun } from '../../../../custom/Libraries/Page';
import i18n from '../../../../i18n';

// Views
import ElementContainer from '../../../../elements/Element/Container';
import LeadComponent from '../../../dashboard/Accounts/ClientLead/Component';

class Page extends React.Component {

    constructor(props) {
        super(props);

        //First run
        firstRun(props, null, true);
    }

    render() {
        const {
            userID
        } = this.props;

        return (
            <ElementContainer
                content={[
                    <LeadComponent
                        userID={userID}
                        apiUrl='admin/ib/trading-client-management/trading-client-lead'
                    />
                ]}
                title={i18n.t('nav.header.links.ibtradingclientlead.title')}
                
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userID: state.auth.user.id,
    }
};

export default connect(mapStateToProps)(Page);
