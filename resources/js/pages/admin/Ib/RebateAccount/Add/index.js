// Basics
import React from 'react';
import { connect } from 'react-redux';

// Utilities
import { get } from 'lodash';

// Libraries
import { firstRun } from '../../../../../custom/Libraries/Page';

// Views
import ElementContainer from '../../../../../elements/Element/Container';
import RebateAccountAddForm from './Form'

// Actions
import { adminResetRebateAccountAddFormDetail } from '../../../../../store/actions/admin';

// Services
import * as adminService from '../../../../../services/adminService';

class PageRebateAccountAdd extends React.Component {

    constructor(props) {
        super(props);

        //First run
        firstRun(props, null, true);
    }

    componentDidMount() {
        const {
            dispatch,
            resourceId
        } = this.props;

        // Get resource details
        dispatch(adminService.adminGetRebateAccountAddFormDetail(resourceId));
    }

    componentWillUnmount() {
        const { dispatch } = this.props;
        dispatch(adminResetRebateAccountAddFormDetail());
    }

    render() {
        const { resourceId } = this.props;

        return (
            <ElementContainer
                content={[
                    <RebateAccountAddForm
                        resourceId={resourceId}
                    />
                ]}
                title='Add rebate account'
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    // Rebate account ID
    const resourceId = get(ownProps, 'match.params.resourceId');

    // Return
    return {
        resourceId,
    };
};

export default connect(mapStateToProps)(PageRebateAccountAdd);
