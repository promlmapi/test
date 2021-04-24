// Basics
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Views
import TableElement from '../../../../elements/Element/Table/Table';
import AtomPageHeading from '../../../../elements/Element/PageHeading';

// Libraries
import {dataGetReferralLinksListingTable} from '../../../../custom/Libraries/Data';

class SectionRebateAccount extends React.Component {

    render() {
        const {
            fromPage,
            dataList
        } = this.props;

        // Table configurations
        const tableProps = {
            loading: false,
            columns: [
                {
                    name: 'rebate_account',
                    title: 'Rebate Account',
                },
                {
                    name: 'currency',
                    title: 'Currency',
                },
                {
                    name: 'platform',
                    title: 'Platform',
                },
                {
                    name: 'ib_link',
                    title: 'Sub IB Referral Link',
                },
                {
                    name: 'tc_link',
                    title: 'Client Referral Link',
                },
                {
                    name: 'tc_demo_link',
                    title: 'Demo Referral Link'
                }
            ],
            tableColumnExtensions: [
                { columnName: 'rebate_account', width: 160 },
                { columnName: 'currency', sortingEnabled: false },
                { columnName: 'platform', sortingEnabled: false },
                { columnName: 'ib_link', sortingEnabled: false, filteringEnabled: false },
                { columnName: 'tc_link', sortingEnabled: false, filteringEnabled: false },
                { columnName: 'tc_demo_link', sortingEnabled: false, filteringEnabled: false },
            ],

            rowSelectorID: 'current_node_id',
            parentSelectorID: 'parent_node_id',
            tableTreeColumn: 'id',
            minimalView: true
        };

        return (
            <div>
                <AtomPageHeading
                    title="Referral links"
                    withDivider
                    dividerClassName=""
                />
                <TableElement
                    tableProps={tableProps}
                    rows={dataGetReferralLinksListingTable(dataList, [], {fromPage}, true, true)}
                />
            </div>
        );
    }
}

export default connect(null)(withRouter(SectionRebateAccount));
