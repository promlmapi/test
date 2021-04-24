// Basics
import React from 'react';
import {connect} from 'react-redux';

// Libraries
import {firstRun} from '../../../../../custom/Libraries/Page';

// Views
import ElementContainer from '../../../../../elements/Element/Container';
import CashAdjustmentForm from './Form'

// Actions
import {adminResetTransactionFormDetail} from '../../../../../store/actions/admin';

// Services
import * as adminService from '../../../../../services/adminService';

// Utilities
import {get} from 'lodash';

class Page extends React.Component {

    constructor(props) {
        super(props);

        //First run
        firstRun(props, null, true);
    }

    componentDidMount() {
        const {dispatch, rebateAccountId, transactionType} = this.props;

        // Get resource details
        dispatch(adminService.adminGetTransactionFormDetail(transactionType, rebateAccountId));
    }

    componentWillUnmount() {
        const {dispatch} = this.props;
        dispatch(adminResetTransactionFormDetail());
    }

    render() {
        const {transactionType, rebateAccountId} = this.props;

        return (
            <ElementContainer
                content={[
                    <CashAdjustmentForm
                        transactionType={transactionType}
                        rebateAccountId={rebateAccountId}
                    />
                ]}
                title='Add cash adjustment'
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    // Rebate account ID
    const rebateAccountId = get(ownProps, 'match.params.rebateAccountId');

    // Return
    return {
        transactionType: 8,
        rebateAccountId: rebateAccountId,
    };
};

export default connect(mapStateToProps)(Page);
