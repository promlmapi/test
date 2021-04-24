// Basics
import React from 'react';
import {connect} from 'react-redux';

// Utilities
import {
    get,
    isEmpty
} from 'lodash';

// Libraries
import {firstRun} from '../../../../../custom/Libraries/Page';

// Views
import ElementContainer from '../../../../../elements/Element/Container';
import TradingClientForm from './Form'

// Actions
import {adminResetTradingClientDetail} from '../../../../../store/actions/admin';

// Services
import * as adminService from '../../../../../services/adminService';

// Constants
import {ConfigAppPageAdmin} from '../../../../../custom/Configs/PageAdmin';

// Page configs
const {
    adminIbTradingClientIndex
} = ConfigAppPageAdmin;

class Page extends React.Component {

    constructor(props) {
        super(props);

        //First run
        firstRun(props, null, true);
    }

    componentDidMount() {
        const {
            dispatch,
            tradingClientDetail,
            tradingClientId
        } = this.props;

        // Get resource details
        if (isEmpty(tradingClientDetail)) {
            dispatch(adminService.adminGetTradingClientDetail(tradingClientId));
        }
    }

    render() {
        const {tradingClientId} = this.props;

        return (
            <ElementContainer
                browserBackButtonLink={adminIbTradingClientIndex.route}
                content={[
                    <TradingClientForm
                        tradingClientId={tradingClientId}
                    />
                ]}
                title={`Trading client #${tradingClientId}`}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    // Trading client ID
    const tradingClientId = get(ownProps, 'match.params.tradingClientId');

    // Return
    return {
        tradingClientId: tradingClientId,
        tradingClientDetail: get(state, 'admin.tradingClient.' + tradingClientId + '.tables')
    };
};

export default connect(mapStateToProps)(Page);
