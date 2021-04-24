// Basics
import React from 'react';
import { connect } from 'react-redux';

// Utilities
import { get } from 'lodash';

// Libraries
import { firstRun } from '../../../../../custom/Libraries/Page';

// Views
import ElementContainer from '../../../../../elements/Element/Container';
import RebateAccountCommissionLevelForm from './Form'

// Actions
import { adminResetRebateAccountCommissionLevelFormDetail } from '../../../../../store/actions/admin';

// Services
import * as adminService from '../../../../../services/adminService';

class PageRebateAccountCommissionLevel extends React.Component {

    constructor(props) {
        super(props);

        //First run
        firstRun(props, null, true);
    }

    componentDidMount() {
        const {
            dispatch,
            rebateAccountId
        } = this.props;

        // Get resource details
        dispatch(adminService.adminGetRebateAccountCommissionLevelFormDetail(rebateAccountId));
    }

    componentWillUnmount() {
        const { dispatch } = this.props;
        dispatch(adminResetRebateAccountCommissionLevelFormDetail());
    }

    render() {
        const {
            rebateAccountId,
            resourceId
        } = this.props;

        return (
            <ElementContainer
                content={[
                    <RebateAccountCommissionLevelForm
                        resourceId={resourceId}
                        rebateAccountId={rebateAccountId}
                    />
                ]}
                title='Update commission level'
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    // Params
    const params = get(ownProps, 'match.params');

    // Accessing params
    const resourceId = get(params, 'resourceId');
    const rebateAccountId = get(params, 'rebateAccountId');

    // Return
    return {
        resourceId,
        rebateAccountId
    };
};

export default connect(mapStateToProps)(PageRebateAccountCommissionLevel);
