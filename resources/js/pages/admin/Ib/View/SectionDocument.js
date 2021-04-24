// Basics
import React from 'react';

// Views
import TableElement from '../../../../elements/Element/Table/Table';
import { TableLinkViewFormatter } from '../../../../elements/Element/TableRemote/Helper';
import AtomPageHeading from '../../../../elements/Element/PageHeading';

// Configs
import { ConfigAppPageAdmin } from '../../../../custom/Configs/PageAdmin';

// Libraries
import { formatAttachmentCell } from '../../../../custom/Libraries/Data';

// Utilities
import { get } from 'lodash';

class SectionDocument extends React.Component {

    render() {
        const { fromPage, dataList } = this.props;

        //Table props
        const tableProps = {
            loading: false,
            columns: [
                {
                    name: 'document_type',
                    title: 'Document Type',
                    getCellValue: row => row.document.name
                },
                {
                    name: 'attachments',
                    title: 'View',
                    getCellValue: row => formatAttachmentCell(get(row, 'attachments.data')),
                },
                {
                    name: 'upload_reason',
                    title: 'Upload Reason',
                    getCellValue: row => row.upload_reason.name
                },
                {
                    name: 'verification_status',
                    title: 'Verification Status',
                    getCellValue: row => row.verification_status.name
                }
            ],
            tableColumnExtensions: [
                { columnName: 'document_type', width: 160 },
                { columnName: 'attachments' },
                { columnName: 'upload_reason' },
                { columnName: 'verification_status'}
            ],

            rowSelectorID: 'current_node_id',
            parentSelectorID: 'parent_node_id',
            tableTreeColumn: 'id',
            minimalView: true
        };

        return (
            <div>
                <AtomPageHeading
                    title="Documents"
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

export default SectionDocument;
