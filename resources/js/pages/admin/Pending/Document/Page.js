// Basics
import React from 'react';
import { connect } from 'react-redux';
import { Grid, Header } from 'semantic-ui-react';
import { isEmpty } from 'lodash';

// Libraries
import { firstRun } from '../../../../custom/Libraries/Page';

// Views
import ElementTableRemote from '../../../../elements/Element/TableRemote/TableRemote';
import DateRangePickerWrapper from '../../../../elements/Element/DateRangePickerWrapper/DateRangePickerWrapper';
import withDateRangeFilter from '../../../../elements/Element/DateRangePickerWrapper/WithDateRangeFilter';
import { AttachmentLinkFormatter } from '../../../../elements/Element/TableRemote/Helper';

class Page extends React.Component {

    constructor(props) {
        super(props);

        //First run
        firstRun(props, null, true);
    }

    render() {
        const {
            dateRangeFilters,
            onDateFilter,
            userID
        } = this.props;

        //Table props
        const tableProps = {
            columns: [
                { name: 'current_node_id', title: '#ID' },
                { name: 'full_name', title: 'User Name', getCellValue: row => (row.user ? row.user.full_name : '') },
                { name: 'document_name', title: 'Document Type', getCellValue: row => (row.document ? row.document.name : '') },
                {
                    name: 'attachment_link', title: 'Attachment',
                    getCellValue: row => (
                        row.attachments
                            ? (
                                !isEmpty(row.attachments.data[0])
                                    ? AttachmentLinkFormatter(row.attachments.data[0]['attachment'])
                                    : ''
                            )
                            : ''
                    )
                },
                { name: 'created_at', title: 'Submission Date' },
            ],
            tableColumnExtensions: [
                { columnName: 'current_node_id', width: 100 },
                { columnName: 'full_name', sortingEnabled: false },
                { columnName: 'document_name', sortingEnabled: false },
                { columnName: 'attachment_link', sortingEnabled: false, filteringEnabled: false },
                { columnName: 'created_at', filteringEnabled: false },
            ],
            columnBands: [
                {
                    title: '',
                    children: [
                        { columnName: 'current_node_id' },
                    ],
                },
                {
                    title: 'User',
                    children: [
                        { columnName: 'full_name' },
                    ],
                },
                {
                    title: 'Document',
                    children: [
                        { columnName: 'document_name' },
                        { columnName: 'attachment_link' },
                    ],
                },
                {
                    title: 'Submission',
                    children: [
                        { columnName: 'created_at' },
                    ],
                },
            ],

            //Filters
            dateRangeFilters,

            //Fixed columns
            leftColumns: ['current_node_id'],
            rightColumns: ['actions_column'],

            //Defaults
            defaultSorting: [{
                columnName: "current_node_id",
                direction: "desc"
            }],
            // defaultHiddenColumnNames: ['description'],

            apiUrl: 'admin/pending/document',
            rowSelectorID: 'current_node_id',
            parentSelectorID: 'parent_node_id',
            tableTreeColumn: '',

            showActionColumns: true,
        };

        return (
            <Grid divided='vertically' className="page-body">
                <Grid.Row columns={1} className="top-heading-row">
                    <Grid.Column>
                        <Header as='h2' className="top-heading">
                            Pending documents
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                    <Grid.Column mobile={16} tablet={16} computer={16}>
                        <DateRangePickerWrapper onInputChange={onDateFilter} />
                        <ElementTableRemote tableProps={tableProps} userID={userID} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userID: state.auth.user.id,
    }
};

export default connect(mapStateToProps)(withDateRangeFilter(Page));
