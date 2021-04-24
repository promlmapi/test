// Basics
import React from 'react';
import { connect } from 'react-redux';

// Libraries
import { firstRun } from '../../../../../custom/Libraries/Page';
import { dataGetTableAvailableResourceActions } from '../../../../../custom/Libraries/Data';
import { getTableRowActions } from '../../../../../elements/Element/TableRemote/ActionButton/Library';
import i18n from '../../../../../i18n';
// Configs
import { ConfigAppPageAdmin } from '../../../../../custom/Configs/PageAdmin';
import BasicField from '../../../../../custom/Basics/Field';

// Utilities
import {
    assignIn,
    get,
    size
} from 'lodash';

// Views
import ElementContainer from '../../../../../elements/Element/Container';
import ElementTableRemote from '../../../../../elements/Element/TableRemote/TableRemote';
import ActionButton from '../../../../../elements/Element/TableRemote/ActionButton/ActionButton';
import AtomSearchInput from '../../../../../elements/Element/SearchInput';

// Page configs
const {
    adminIbTradingClientView
} = ConfigAppPageAdmin;

// Fields
const {
    tradingClientSearch
} = BasicField;

// Search input form
const searchInputForm = 'searchTradingClient';

class Page extends React.Component {

    constructor(props) {
        super(props);

        //First run
        firstRun(props, null, true);

        //State
        this.state = {
            shouldTableRefresh: false
        };

        // Bindings
        this.forceRefreshTable = this.forceRefreshTable.bind(this);
    }

    componentDidMount() {
        this.forceRefreshTable(true);
    }

    componentDidUpdate(prevProps) {
        const {searchInputValue} = this.props;

        // If search value updated
        if (prevProps.searchInputValue !== searchInputValue) {
            
            //Clear timeout
            clearTimeout(this.delayedInputTimer);

            //Setting timer to setting state after a delay so that the filters will be in sync
            this.delayedInputTimer = setTimeout(() => {
                this.forceRefreshTable(true);
            }, 500)
        }
    }

    componentWillMount() {
        this.delayedInputTimer = null;
    }

    forceRefreshTable(shouldRefresh = false) {
        this.setState({
            shouldTableRefresh: shouldRefresh,
        });
    }

    render() {
        const {
            dispatch,
            location,
            searchInputValue,
            userID
        } = this.props;
        const {shouldTableRefresh} = this.state;

        //Table props
        const tableProps = {
            columns: [
                {
                    name: 'fpm_trading_client_account_code',
                    title: i18n.t('nav.header.links.accountcode.title'),
                    // getCellValue: row => TableLinkViewFormatter(row.id, adminIbTradingClientIndex.route, {fromPage: location}, row.fpm_account_id)
                    getCellValue: row => row.fpm_account_id
                },
                {
                    name: 'trading_client_full_name',
                    title: i18n.t('nav.header.links.fullname.title'),
                    getCellValue: row => row.name
                },
                {
                    name: 'trading_client_full_email',
                    title: i18n.t('nav.header.links.email.title'),
                    getCellValue: row => row.email
                },
                {
                    name: 'trading_client_country',
                    title: i18n.t('nav.header.links.country.title'),
                    getCellValue: row => row.country
                },
                {
                    name: 'trading_client_agent_code',
                    title: i18n.t('nav.header.links.agentcode.title'),
                    getCellValue: row => row.agent_code
                },
                {
                    name: 'trading_client_address',
                    title: i18n.t('nav.header.links.address.title'),
                    getCellValue: row => row.address
                },
                {
                    name: 'basics_trading_platform_name',
                    title: i18n.t('nav.header.links.platform.title'),
                    getCellValue: row => row.basics_trading_platform.pretty_code
                },
                {
                    name: 'basics_currency_name',
                    title: i18n.t('nav.header.links.currency.title'),
                    getCellValue: row => row.basics_currency.pretty_code
                },
                {
                    name: 'fpm_referred_rebate_account_code',
                    title: i18n.t('nav.header.links.referredrebateaccount.title'),
                    getCellValue: row => get(row, 'referee_ib_rebate_account.ib_rebate_account.account_code'),
                },
                {
                    name: 'fpm_referred_rebate_account_user_name',
                    title:i18n.t('nav.header.links.referredrebateaccountuser.title'),
                    getCellValue: row => get(row, 'referee_ib_rebate_account.ib_rebate_account.user.full_name'),
                },
                {
                    name: 'created_at_readable',
                    title: i18n.t('nav.header.links.createdat.title')
                },
                {
                    name: 'actions',
                    title: i18n.t('nav.header.links.actions.title'),
                    getCellValue: row => {
    
                        // Available actions
                        const showActions = dataGetTableAvailableResourceActions(get(row, 'available_resource_actions'));
    
                        // If no actions present
                        if (size(showActions) < 1) {
                            return null;
                        }
    
                        // Return
                        return (
                            <ActionButton
                                actions={
                                    getTableRowActions(
                                        showActions,
                                        {
                                            update_rebate_account: {
                                                pathname: adminIbTradingClientView.routeWithoutParam + '/' + get(row, 'id'),
                                                state: { fromPage: location }
                                            }
                                        },
                                        dispatch
                                    )
                                }
                                tableRow={assignIn(row, { rowId: get(row, 'id'), type: 'data' })}
                            />
                        );
                    }
                },
            ],
            tableColumnExtensions: [
                { columnName: 'fpm_trading_client_account_code', sortingEnabled: false },
                { columnName: 'trading_client_full_name', sortingEnabled: false },
                { columnName: 'trading_client_full_email', sortingEnabled: false },
                { columnName: 'trading_client_country', sortingEnabled: false },
                { columnName: 'trading_client_agent_code', sortingEnabled: false },
                { columnName: 'trading_client_address', sortingEnabled: false },
                { columnName: 'basics_currency_name', sortingEnabled: false, width: 110 },
                { columnName: 'basics_trading_platform_name', sortingEnabled: false, width: 110 },
                { columnName: 'fpm_referred_rebate_account_code', sortingEnabled: false },
                { columnName: 'fpm_referred_rebate_account_user_name', sortingEnabled: false },
                { columnName: 'created_at_readable', sortingEnabled: false },
                { columnName: 'actions', sortingEnabled: false, filteringEnabled: false, width: 100 },
            ],

            //Fixed columns
            leftColumns: ['fpm_trading_client_account_code'],
            rightColumns: ['actions'],

            //Defaults
            defaultSorting: [{
                columnName: "fpm_trading_client_account_code",
                direction: "desc"
            }],
            defaultHiddenColumnNames: [
                'trading_client_agent_code',
                'trading_client_address',
                'fpm_referred_rebate_account_code',
                'fpm_referred_rebate_account_user_name',
                'created_at_readable'
            ],

            apiUrl: 'admin/ib/trading-client-management/trading-client?' + tradingClientSearch.name + '=' + searchInputValue,
            rowSelectorID: 'current_node_id',
            parentSelectorID: 'parent_node_id',
            tableTreeColumn: '',

            showActionColumns: false,
            forceRefresh: {
                shouldTableRefresh: shouldTableRefresh,
                callback: this.forceRefreshTable
            },
        };

        return (
            <ElementContainer
                content={[
                    <div className="page-body client right-column-chooser">
                        <AtomSearchInput
                            form={searchInputForm}
                            inputField={tradingClientSearch}
                        />
                        <ElementTableRemote
                            tableProps={tableProps}
                            userID={userID}
                        />
                    </div>
                ]}
                title={i18n.t('nav.header.links.searchtradingclients.title')}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userID: state.auth.user.id,
        searchInputValue: get(state, 'form.' + searchInputForm + '.values.' + tradingClientSearch.name, '')
    };
};

export default connect(mapStateToProps)(Page);
