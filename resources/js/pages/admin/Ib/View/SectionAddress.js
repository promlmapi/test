// Basics
import React from 'react';

// Views
import TableElement from '../../../../elements/Element/Table/Table';
import { TableLinkViewFormatter } from '../../../../elements/Element/TableRemote/Helper';
import AtomPageHeading from '../../../../elements/Element/PageHeading';

// Configs
import { ConfigAppPageAdmin } from '../../../../custom/Configs/PageAdmin';

class SectionAddress extends React.Component {

    constructor(props) {
        super(props);   
    }    
    

    render() {
        const { fromPage, dataList } = this.props;

        //Table props
        const tableProps = {
            loading: false,
            columns: [
                {
                    name: 'id',
                    title: '#ID',
                    getCellValue: row => TableLinkViewFormatter(
                        row['current_node_id'],
                        ConfigAppPageAdmin.adminPendingAddressReview.routeWithoutParam,
                        { fromPage: fromPage },
                        row['current_node_id']
                    )
                },
                { name: 'country', title: 'Country', getCellValue: row => row.country.display_name },
                { name: 'macro_address', title: 'Full Address' },
                { name: 'verification_status', title: 'Verification Status', getCellValue: row => row.verification_status.name },
                { name: 'created_at', title: 'Created At', getCellValue: row => row.created_at_readable },
                {
                    name: 'actions',
                    title: 'Actions',
                    getCellValue: row => TableLinkViewFormatter(
                        row.user_id,
                        ConfigAppPageAdmin.adminImpersonateAddressChange.routeWithoutParam,
                        { fromPage: fromPage },
                        'Edit'
                    )
                }    
            ],
            tableColumnExtensions: [
                { columnName: 'id', width: 160 },
                { columnName: 'country' },
                { columnName: 'macro_address', width: 300 },
                { columnName: 'verification_status', width: 160 },
                { columnName: 'created_at' },
                { columnName: 'actions', sortingEnabled: false, filteringEnabled: false },
            ],

            rowSelectorID: 'current_node_id',
            parentSelectorID: 'parent_node_id',
            tableTreeColumn: 'id',
            minimalView: true
        };

        return (
            <div>
                <AtomPageHeading
                    title="Addresses"
                    withDivider
                    dividerClassName=""
                />
                <TableElement
                    tableProps={tableProps}
                    rows={dataList}
                />
            </div>
        );
    }
}

export default SectionAddress;
