// Basics
import React from 'react';
import { connect } from 'react-redux';
import { Grid, Header } from 'semantic-ui-react';

// Libraries
import { firstRun } from '../../../../custom/Libraries/Page';
import { dataGetTableAvailableResourceActions } from '../../../../custom/Libraries/Data';
import { getTableRowActions } from '../../../../elements/Element/TableRemote/ActionButton/Library';
import i18n from '../../../../i18n';

// Configs
import { ConfigAppPageAdmin } from '../../../../custom/Configs/PageAdmin';
import BasicField from '../../../../custom/Basics/Field';

// Utilities
import {
    assignIn,
    get,
    size
} from 'lodash';

// Views
import ElementContainer from '../../../../elements/Element/Container';
import ElementTableRemote from '../../../../elements/Element/TableRemote/TableRemote';
import ActionButton from '../../../../elements/Element/TableRemote/ActionButton/ActionButton';
import AtomSearchInput from '../../../../elements/Element/SearchInput';

// Page configs
const {
    adminGroupView,
    adminTransactionCashAdjustmentAdd
} = ConfigAppPageAdmin;

// Fields
const {
    rebateAccountSearch
} = BasicField;

// Search input form
const searchInputForm = 'searchRebateAccount';

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

        // From page
        const fromPage = location;

        //Table props
        const tableProps = {
            columns: [
                {
                    name: 'ib_rebate_account_code',
                    title:i18n.t('nav.header.links.accountcode.title'),
                    getCellValue: row => row.account_code
                },
                {
                    name: 'ib_full_name',
                    title:i18n.t('nav.header.links.ibfullname.title'),
                    getCellValue: row => row.user.full_name
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
                    name: 'basics_rebate_commission_level_name',
                    title:i18n.t('nav.header.links.commissionlevel.title'),
                    getCellValue: row => row.basics_rebate_commission_level.name
                },
                {
                    name: 'created_at_readable',
                    title:i18n.t('nav.header.links.createdat.title'),
                    getCellValue: row => row.created_at_readable
                },
                {
                    name: 'actions',
                    title:i18n.t('nav.header.links.actions.title'),
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
                                            destroy: {
                                                callback: this.forceRefreshTable
                                            },
                                            do_cash_adjustment: {
                                                pathname: adminTransactionCashAdjustmentAdd.routeWithoutParam + '/' + get(row, 'id'),
                                                state: { fromPage: location }
                                            },
                                            show_linked_rebate_rate_table: {
                                                pathname: adminGroupView.routeWithoutParam + '/' + get(row, 'linked_rebate_rate_table_id'),
                                                state: { fromPage: location }
                                            }
                                        },
                                        dispatch
                                    )
                                }
                                apiUrl='admin/ib/rebate-account-management/rebate-account'
                                tableRow={assignIn(row, { rowId: get(row, 'id'), type: 'data' })}
                            />
                        );
                    }
                },
            ],
            tableColumnExtensions: [
                { columnName: 'ib_rebate_account_code', sortingEnabled: false, width: 150 },
                { columnName: 'ib_full_name', sortingEnabled: false },
                { columnName: 'basics_currency_name', sortingEnabled: false, width: 110 },
                { columnName: 'basics_trading_platform_name', sortingEnabled: false, width: 110 },
                { columnName: 'basics_rebate_commission_level_name', sortingEnabled: false, width: 165 },
                { columnName: 'created_at_readable', sortingEnabled: false },
                { columnName: 'actions', sortingEnabled: false, filteringEnabled: false, width: 110 },
            ],

            //Fixed columns
            leftColumns: ['ib_rebate_account_code'],
            rightColumns: ['actions'],

            //Defaults
            defaultSorting: [{
                columnName: "ib_rebate_account_code",
                direction: "desc"
            }],
            defaultHiddenColumnNames: [
                'created_at_readable'
            ],

            apiUrl: 'admin/ib/rebate-account-management/rebate-account?advanced_search=1&' + rebateAccountSearch.name + '=' + searchInputValue,
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
                            inputField={rebateAccountSearch}
                        />
                        <ElementTableRemote
                            tableProps={tableProps}
                            userID={userID}
                        />
                    </div>
                ]}
                title={i18n.t('nav.header.links.searchrebateaccounts.title')}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userID: state.auth.user.id,
        searchInputValue: get(state, 'form.' + searchInputForm + '.values.' + rebateAccountSearch.name, '')
    };
};

export default connect(mapStateToProps)(Page);
