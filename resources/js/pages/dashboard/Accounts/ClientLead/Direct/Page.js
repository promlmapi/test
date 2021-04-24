// Basics
import React from 'react';
import { connect } from 'react-redux';

// Libraries
import { firstRun } from '../../../../../custom/Libraries/Page';
import i18n from '../../../../../i18n';

// Views
import ElementContainer from '../../../../../elements/Element/Container';
import LeadComponent from '../Component';

class Page extends React.Component {

    constructor(props) {
        super(props);

        //First run
        firstRun(props);
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
                        apiUrl={`user/${userID}/trading-client-management/trading-client-lead?basics_trading_client_lead_type_id=1`}
                    />
                ]}
                title={i18n.t('nav.header.links.mydirectleads.title')}
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
