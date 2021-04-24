// Basics
import React from 'react';
import {connect} from 'react-redux';

// Libraries
import {firstRun} from '../../../../custom/Libraries/Page';
import {dataGetTableDynamic} from '../../../../custom/Libraries/Data';

// Views
import ElementContainer from '../../../../elements/Element/Container';
import VerifyActionButton from '../../../../elements/Element/VerifyActionButton/VerifyActionButton';

// Services
import * as adminService from '../../../../services/adminService';

// Utilities
import {get, isEmpty, map, size} from 'lodash';

// Constants
import {ConfigAppPageAdmin} from '../../../../custom/Configs/PageAdmin';

// Page configs
const {
    adminTransactionTransferList,
    adminTransactionWithdrawalList,
    adminTransactionWithdrawalReview,
    adminTransactionCashAdjustmentList,
    adminTransactionCashAdjustmentReview
} = ConfigAppPageAdmin;

class Page extends React.Component {

    constructor(props) {
        super(props);

        //First run
        firstRun(props, null, true);
    }

    componentDidMount() {
        const {dispatch, resourceId} = this.props;

        // Get resource details
        dispatch(adminService.adminGetTransactionDetail(resourceId));
    }

    render() {
        const {location, pageConfig, resourceDetail, resourceId} = this.props;

        // If resource detail is empty
        if (isEmpty(resourceDetail)) {
            return null;
        }

        // Tables
        const tableData = get(resourceDetail, 'tables');

        return (
            <ElementContainer
                browserBackButtonLink={pageConfig.list.page.route}
                content={
                    size(tableData) > 0 && (
                        map(tableData, function (row, index) {
                            return dataGetTableDynamic(row, location, (index === 'source' ? false : true));
                        })
                    )
                }
                headerActionContent={
                    <VerifyActionButton
                        apiUrl="admin/ib/fund-management/transaction"
                        redirectTo={pageConfig.list.key}
                        resourceDetail={resourceDetail}
                        resourceID={resourceId}
                    />
                }
                title={`Review transaction #${resourceId}`}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    // Page type (transfers or withdrawals)
    let pageType = {
        list: {
            page: adminTransactionTransferList,
            key: 'adminTransactionTransferList'
        },
    };

    // If withdrawal page
    if (get(ownProps, 'match.path') === adminTransactionWithdrawalReview.route) {
        pageType = {
            list: {
                page: adminTransactionWithdrawalList,
                key: 'adminTransactionWithdrawalList'
            },
        };
    }

    // If cash adjustment page
    if (get(ownProps, 'match.path') === adminTransactionCashAdjustmentReview.route) {
        pageType = {
            list: {
                page: adminTransactionCashAdjustmentList,
                key: 'adminTransactionCashAdjustmentList'
            },
        };
    }

    // Resource ID
    const resourceId = get(ownProps, 'match.params.resourceId');

    // Return
    return {
        resourceDetail: get(state, 'admin.transactionDetail.' + resourceId),
        resourceId: resourceId,
        pageConfig: pageType
    };
};

export default connect(mapStateToProps)(Page);
