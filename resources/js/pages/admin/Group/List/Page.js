// Basics
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
    Button,
    Icon
} from 'semantic-ui-react';

// Libraries
import {firstRun} from '../../../../custom/Libraries/Page';
import {hasPermissionToAction} from '../../../../custom/Libraries/Permission';
import i18n from '../../../../i18n';

// View
import ElementContainer from '../../../../elements/Element/Container';
import ElementTableRemote from '../../../../elements/Element/TableRemote/TableRemote';
import {TableLinkViewFormatter} from '../../../../elements/Element/TableRemote/Helper';

// Constants
import {ConfigAppPageAdmin} from '../../../../custom/Configs/PageAdmin';
import {BasicPermissionApiAdminRrtStore} from '../../../../custom/Basics/Permission';

class Page extends React.Component {

    constructor(props) {
        super(props);

        //First run
        firstRun(props, null, true);
    }

    render() {
        const {
            hasPermissionToStore,
            location,
            userID
        } = this.props;

        //Table props
        const tableProps = {
            columns: [
                {
                    name: 'current_node_id',
                    title: '#ID',
                    getCellValue: row => TableLinkViewFormatter(row.id, ConfigAppPageAdmin.adminGroupList.route, {fromPage: location})
                },
                {name: 'currency', title:i18n.t('nav.header.links.currency.title'), getCellValue: row => (row.basics_currency.pretty_code)},
                {
                    name: 'trading_platform',
                    title:i18n.t('nav.header.links.platform.title'),
                    getCellValue: row => (row.basics_trading_platform.pretty_code)
                },
                {
                    name: 'rebate_rate_table_type',
                    title: i18n.t('nav.header.links.rrttype.title'),
                    getCellValue: row => (row.basics_rebate_rate_table_type.name)
                },
                {name: 'created_at', title:i18n.t('nav.header.links.creationdate.title')},
            ],
            tableColumnExtensions: [
                {columnName: 'current_node_id', width: 110},
                {columnName: 'currency', sortingEnabled: false},
                {columnName: 'trading_platform', sortingEnabled: false},
                {columnName: 'rebate_rate_table_type', sortingEnabled: false},
                {columnName: 'created_at', sortingEnabled: false, filteringEnabled: false},
            ],
            columnBands: [
                {
                    title: '',
                    children: [
                        {columnName: 'current_node_id'},
                    ],
                },
                {
                    title: 'Trading',
                    children: [
                        {columnName: 'currency'},
                        {columnName: 'trading_platform'},
                    ],
                },
                {
                    title: 'Rebate Rate Table',
                    children: [
                        {columnName: 'rebate_rate_table_type'},
                    ],
                },
            ],

            //Fixed columns
            leftColumns: ['current_node_id'],
            rightColumns: [],

            //Defaults
            defaultSorting: [{
                columnName: "current_node_id",
                direction: "desc"
            }],
            defaultHiddenColumnNames: [
                'created_at'
            ],

            apiUrl: 'admin/rebate-rate-table',
            rowSelectorID: 'current_node_id',
            parentSelectorID: 'parent_node_id',
            tableTreeColumn: '',

            showActionColumns: false,
        };

        return (
            <ElementContainer
                content={[
                    <ElementTableRemote
                        tableProps={tableProps}
                        userID={userID}
                    />
                ]}
                headerActionContent={
                    hasPermissionToStore && (
                        <Button as={Link} to={ConfigAppPageAdmin.adminGroupAdd.route} inverted color='blue'
                            floated='right'>
                            <Icon name='plus' /> {i18n.t('nav.header.links.addtradinggroup.title')}
                        </Button>
                    )
                }
                title={i18n.t('nav.header.links.tradinggrouplist.title')}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userID: state.auth.user.id,
        hasPermissionToStore: hasPermissionToAction(state.auth.permissions.data, BasicPermissionApiAdminRrtStore)
    }
};

export default connect(mapStateToProps)(Page);
