// Basics
import React from 'react';
import { Icon, Table, Button } from 'semantic-ui-react';
import { Field } from 'redux-form';
import { InputField, SelectField, TextAreaField } from 'react-semantic-redux-form';
import { Link } from 'react-router-dom';

// Utilities
import {
    assignIn, concat, cloneDeep, filter, find, forEach, get, includes, isEmpty, isInteger,
    map, merge, size, sum, toLower, upperFirst
} from 'lodash';

// Libraries
import { formPrepareSelectOptions } from './Form';
import { generateRandomNumber, getTranslation, joinNestedArrayKeys } from './Utility';
import i18n from '../../i18n';

// Views
import CheckBoxGroup from '../../elements/Element/CheckBoxGroup/CheckBoxGroup';
import { TableLinkViewFormatter } from '../../elements/Element/TableRemote/Helper';
import CollectionMessage from '../../elements/Collection/Message/Message.jsx'
import AtomPageHeading from '../../elements/Element/PageHeading';
import ElementClipboard from '../../elements/Element/Clipboard';

// Constants
import { ConfigAppPage } from '../Configs/Page';
import { ConfigAppPageAdmin } from '../Configs/PageAdmin';
import BasicField from '../Basics/Field';
import { ConfigAppBasic } from '../Configs/App';

// Page configs
const { adminPendingNbaList, adminGroupView } = ConfigAppPageAdmin;

//Form fields
const {
    tradingCurrency,
    tradingCurrencyMulti,
    tradingPlatform,
    tradingProduct,
    tradingProductMulti,
    rebateCalculationType,
    rebateRateTableType
} = BasicField;

const formattedList = (data, primaryKey, secondaryKey = 'data') => {

    //Return object
    if (!isEmpty(data)) {

        if (isEmpty(primaryKey)) {
            return data;
        } else {

            if (data.hasOwnProperty(primaryKey)) {

                if (isEmpty(secondaryKey)) {
                    return data[primaryKey];
                } else {

                    if (data[primaryKey].hasOwnProperty(secondaryKey)) {
                        return data[primaryKey][secondaryKey];
                    }
                }
            }
        }
    }
    return [];

};

//Remove all the empty values from list
export const dataRemoveEmptyValuesFromList = (data) => {

    // Return options which have value
    return filter(data, function (row) {
        return isInteger(get(row, 'value'));
    });
};

//Order react-select options
export const dataOrderList = (values) => {

    // Order fixed values first
    return values.filter(v => get(v, 'isFixed')).concat(values.filter(v => !get(v, 'isFixed')));
};

//Update list with fixed value
export const dataUpdateListWithFixedValue = (data, selected) => {

    // Clone data
    const clonedData = cloneDeep(data);

    // Remove empty values
    let sanitizedData = dataRemoveEmptyValuesFromList(clonedData);

    // Find option which to be fixed
    let fixedOption = find(sanitizedData, { value: selected });

    // If fixed option found
    if (fixedOption) {
        fixedOption = assignIn(fixedOption, {
            isFixed: true,
        });
    }

    // Return
    return dataOrderList(sanitizedData);
};

//Get country list
export const dataGetCountryIbList = (placeHolder = null, data) => {

    //Get prerequisites
    let list = formattedList(data, 'country_ib');

    //Return options
    return formPrepareSelectOptions(list, ['iso', 'id', 'display_name'], placeHolder, true);
};

//Get region list
export const dataGetContinentIbList = (placeHolder = null, data) => {

    //Get prerequisites
    let list = formattedList(data, 'continent_ib');

    //Return options
    return formPrepareSelectOptions(list, ['id', 'id', 'name'], placeHolder);
};

//Get phone code list
export const dataGetPhoneCodeList = (placeHolder = null, data) => {

    //Get prerequisites
    let list = formattedList(data, 'country');

    //Return options
    return formPrepareSelectOptions(list, ['iso', 'id', 'display_name', 'phone_code'], placeHolder, true, true);
};

//Get sales status list
export const dataGetSalesStatusList = (placeHolder = null, data) => {

    //Get prerequisites
    let list = formattedList(data);

    //Return options
    return formPrepareSelectOptions(list, ['id', 'code', 'name'], placeHolder);
};

//Get supporting document list
export const dataGetSupportingDocumentList = (placeHolder = null, data) => {

    //Get prerequisites
    let list = formattedList(data);

    //Return options
    return formPrepareSelectOptions(list, ['id', 'id', 'name'], placeHolder);
};

//Get nominated bank accounts list
export const dataNominatedBankAccountsList = (placeHolder = null, data) => {

    //Get prerequisites
    let list = formattedList(data);

    //Return options
    return formPrepareSelectOptions(list, ['id', 'id', 'beneficiary_account_number'], placeHolder);
};

//Get rebate accounts list (trading account)
export const dataGetRebateAccountsTradingList = (placeHolder = null, data) => {

    //Get prerequisites
    let list = formattedList(data);

    let listData = [];
    listData = map(list, function (row) {

        let rowData = row;

        //If data has "linked_trading_accounts_count" key and is greater than 0
        rowData = Object.assign(rowData, {
            disabled: (row.hasOwnProperty('linked_trading_accounts_count') && row['linked_trading_accounts_count'] > 0),
        });

        //Return
        return rowData;
    });

    //Return options
    return formPrepareSelectOptions(listData, ['id', 'id', 'display_name'], placeHolder);
};

//Get rebate accounts list
export const dataGetRebateAccountsList = (placeHolder = null, data) => {

    //Get prerequisites
    let list = formattedList(data);

    //Return options
    return formPrepareSelectOptions(list, ['id', 'id', 'display_name'], placeHolder);
};

//Get rebate calculation type list
export const dataGetRebateCalculationTypeList = (placeHolder = null, data) => {

    //Get prerequisites
    let list = formattedList(data, 'rebate_calculation_type');

    //Return options
    return formPrepareSelectOptions(list, ['id', 'id', 'name'], placeHolder);
};

//Get rebate rate type list
export const dataGetRebateRateTypeList = (placeHolder = null, data) => {

    //Get prerequisites
    let list = formattedList(data, 'basics_rebate_rate_table_types');

    //Return options
    return formPrepareSelectOptions(list, ['id', 'id', 'name'], placeHolder);
};

//Get trading currency list
export const dataGetTradingCurrencyList = (placeHolder = null, data, key = 'currency') => {

    //Get prerequisites
    let list = formattedList(data, key);

    //Return options
    return formPrepareSelectOptions(list, ['id', 'id', 'pretty_code'], placeHolder);
};

//Get trading currency list for react-select
export const dataGetTradingCurrencyListMulti = (data, selected) => {

    //Return options
    return dataUpdateListWithFixedValue(data, selected);
};

//Get trading platform list
export const dataGetTradingPlatformList = (placeHolder = null, data) => {

    //Get prerequisites
    let list = formattedList(data, 'trading_platform');

    //Return options
    return formPrepareSelectOptions(list, ['id', 'id', 'pretty_code'], placeHolder);
};

//Get trading product list
export const dataGetTradingProductList = (placeHolder = null, data, key = 'trading_product') => {

    //Get prerequisites
    let list = formattedList(data, key);

    //Return options
    return formPrepareSelectOptions(list, ['id', 'id', 'pretty_code'], placeHolder);
};

//Get user level list
export const dataGetUserLevelList = (placeHolder = null, data) => {

    //Get prerequisites
    let list = formattedList(data, 'user_level');

    //Return options
    return formPrepareSelectOptions(list, ['id', 'id', 'name'], placeHolder);
};

//Get user level list
export const dataGetUserHierarchyList = (placeHolder = null, data, level) => {

    //Get prerequisites
    let list = formattedList(data, level);

    //Return options
    return formPrepareSelectOptions(list, ['id', 'id', 'full_name'], placeHolder);
};

//Get upload reason list
export const dataGetUploadReasonList = (placeHolder = null, data) => {

    //Get prerequisites
    let list = formattedList(data, 'supporting_document_upload_reason');

    //Return options
    return formPrepareSelectOptions(list, ['id', 'id', 'name'], placeHolder);
};

//Get nominated bank countries list
export const dataGetNominatedBankCountryList = (placeHolder = null) => {

    let data = [
        {
            'id': 'Australia',
            'name': 'Australia',
        },
        {
            'id': 'Overseas',
            'name': 'Overseas',
        },
    ];

    //Get prerequisites
    let list = formattedList(data);

    //Return options
    return formPrepareSelectOptions(list, ['id', 'id', 'name'], placeHolder);
};

//Get adjustment type list
export const dataGetAdjustmentTypeList = (placeHolder = null, data) => {

    //Get prerequisites
    let list = formattedList(data);

    //Return options
    return formPrepareSelectOptions(list, ['id', 'id', 'name'], placeHolder);
};

//Get rebate account change reason list
export const dataGetRebateAccountChangeReasonList = (placeHolder = null, data) => {

    //Get prerequisites
    let list = formattedList(data);

    //Return options
    return formPrepareSelectOptions(list, ['id', 'id', 'name'], placeHolder);
};

//Get trading platform list
export const dataGetTradingPlatformListForRebateAccountAdd = (placeHolder = null, data) => {

    //Get prerequisites
    let list = formattedList(data, null);

    //Return options
    return formPrepareSelectOptions(list, ['basics_trading_platform.id', 'basics_trading_platform.id', 'basics_trading_platform.pretty_code'], placeHolder);
};

//Get commission level list
export const dataGetCommissionLevelList = (placeHolder = null, data) => {

    //Get prerequisites
    let list = formattedList(data);

    //Return options
    return formPrepareSelectOptions(list, ['id', 'id', 'name'], placeHolder);
};

//Get user object
export const dataGetUser = (key = null) => {

    //Get user
    let user = JSON.parse(localStorage.getItem('user'));

    //Return user object
    return key === null ? user : user[key];
};

//Get questionnaire list
export const dataQuestionnaireList = (props, data, checkParent = false) => {

    const {
        questionFirst,
        questionThree,
        questionSeven,
    } = props;

    //Get prerequisites
    let list = formattedList(data, 'questionnaire_question', (checkParent ? '' : 'data'));

    //Default
    let questions = [];

    if (checkParent) {
        list = [list];
    }

    //If list is not empty
    if (!isEmpty(list)) {

        //Iterate all questions
        let i = 1;
        questions = map(list, function (row) {

            //Increase counter
            i++;
            

            //If field is text
            if (row['field_type_id'] === 1) {

                if (row.id === 6 || (includes([8, 9], row.id) && questionSeven === 11 && questionFirst === 7) || (includes([10], row.id) && questionThree == 10 ) ) {
                    return (
                        <Field
                            key={i}
                            component={InputField}
                            name={'question_' + row.id}
                            label={row.question}
                            placeholder=''
                            required={row.is_required === 1}
                        />
                    );
                }
            }

            //If field is text area
            if (row['field_type_id'] === 2) {
                return (
                    <Field
                        key={i}
                        component={TextAreaField}
                        name={'question_' + row.id}
                        label={row.question}
                        placeholder=''
                        required={row.is_required === 1}
                        autoHeight
                    />
                );
            }

            //If field is select
            if (row['field_type_id'] === 3) {

                let selectField = [];

                if (includes([1, 3, 4], row.id) || (row.id === 7 && questionFirst === 7) || (row.id === 10 && questionThree === 10)) {

                    selectField.push(
                        <Field
                            key={i}
                            component={SelectField}
                            name={'question_' + row.id}
                            label={row.question}
                            options={formPrepareSelectOptions(row['questionnaire_question_options'], ['id', 'id', 'value'], getTranslation('pleaseSelect.title', 1))}
                            placeholder=''
                            required={row.is_required === 1}
                        />
                    );
                }

                //If this field has sub-questions
                map(row['questionnaire_question_options'], function (rowOpt) {
                    if (!isEmpty(rowOpt['questionnaire_subquestions'])) {
                        map(rowOpt['questionnaire_subquestions'], function (rowSub) {
                            selectField.push(dataQuestionnaireList(props, rowSub, true));
                            // dataQuestionnaireList(props, rowSub, true);
                        });
                    }
                });

                return selectField;
            }

            //If field is check box
            if (row['field_type_id'] === 4) {

                //Prepare checkboxes
                let checkKey = 1;
                let checkBoxes = map(row['questionnaire_question_options'], function (checkRow) {

                    const optionProperty = get(checkRow, 'properties', {})
                    checkKey++;
                    return {
                        label: checkRow.value,
                        value: checkRow.id,
                        name: 'question_' + row.id + '[' + checkRow.id + ']',
                        isSelected: get(optionProperty, 'is_selected', false),
                        readOnly: get(optionProperty, 'read_only', false)
                    }
                });

                return (
                    <CheckBoxGroup
                        key={i}
                        labelMain={row.question}
                        name={'question_' + row.id}
                        options={checkBoxes}
                        required={row.is_required === 1}
                    />
                );
            }
        });
    }

    //Return fields
    return questions;
};

// Format attachment cell in table
export const formatAttachmentCell = (attachments) => {

    // If no attachments
    if (size(attachments) < 1) {
        return;
    }

    // Attachment cell
    return map(attachments, function (attachmentValue, attachmentKey) {
        if (attachmentValue.hasOwnProperty('attachment_url')) {
            return (
                <a key={attachmentKey} href={attachmentValue['attachment_url']} target="_blank"
                    className="attachment-link">
                    {i18n.t('nav.header.links.view.title')}{size(attachments) === 1 ? '' : ('-' + sum([attachmentKey, 1]))}
                </a>
            );
        }
    });
};

//Get document listing table
export const dataGetDocumentListingTable = (userDocuments, hideColumns = [], actionCallback = null, additionalColumnData = null) => {

    //If data is present
    if (!isEmpty(userDocuments) && userDocuments.hasOwnProperty('data') && !isEmpty(userDocuments.data)) {
        let rows = map(userDocuments.data, function (row, key) {

            //Attachment cell
            let attachmentCell = formatAttachmentCell(row.attachments.data);

            return (
                <Table.Row
                    className="table-row-custom"
                    key={key}
                // warning={row.verification_status_id === 1}
                // positive={row.verification_status_id === 2}
                // negative={row.verification_status_id === 3}
                >
                    <Table.Cell>{row.document.name}</Table.Cell>
                    {
                        additionalColumnData &&
                        <Table.Cell>{additionalColumnData['value']}</Table.Cell>
                    }
                    <Table.Cell>{attachmentCell}</Table.Cell>
                    {!includes(hideColumns, 'upload_reason') && <Table.Cell>{row.upload_reason.name}</Table.Cell>}
                    {!includes(hideColumns, 'verification_status') &&
                        <Table.Cell>{row.verification_status.name}</Table.Cell>}
                    {!includes(hideColumns, 'actions') &&
                        <Table.Cell className="table-cell-action-custom" selectable textAlign='center'>
                            {row.verification_status_id === 1 &&
                                <a onClick={() => actionCallback(row.id)}><Icon className="brown" name='close' /></a>}
                        </Table.Cell>}
                </Table.Row>
            );
        });

        return (
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>{i18n.t('nav.header.links.documenttype.title')}</Table.HeaderCell>
                        {
                            additionalColumnData &&
                            <Table.HeaderCell>{additionalColumnData['title']}</Table.HeaderCell>
                        }
                        <Table.HeaderCell>{i18n.t('nav.header.links.view.title')}</Table.HeaderCell>
                        {!includes(hideColumns, 'upload_reason') &&
                            <Table.HeaderCell>{i18n.t('nav.header.links.appliedfor.title')}</Table.HeaderCell>}
                        {!includes(hideColumns, 'verification_status') &&
                            <Table.HeaderCell>{i18n.t('nav.header.links.status.title')}</Table.HeaderCell>}
                        {!includes(hideColumns, 'actions') &&
                            <Table.HeaderCell>{i18n.t('nav.header.links.actions.title')}</Table.HeaderCell>}
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {rows}
                </Table.Body>
            </Table>
        );
    } else {
        return CollectionMessage('No documents on file yet.');
    }
};

//Get referral links listing table
export const dataGetReferralLinksListingTable = (referralLinks, hideColumns = [], params = {}, returnDataOnly = false, isAdmin = false, authUser={}) => {

    //If data is present
    if (!isEmpty(referralLinks) && referralLinks.hasOwnProperty('data') && !isEmpty(referralLinks.data)) {
        let rows = map(referralLinks.data, function (row, key) {

            // Page config
            const { rebateAccountDetail } = ConfigAppPage;

            //Rebate account cell
            // let rebateAccountCell = !isAdmin
            //     ? TableLinkViewFormatter(
            //         toLower(row['account_code']),
            //         rebateAccountDetail['routeWithoutParam'],
            //         params,
            //         row['account_code'],
            //         false
            //     )
            //     : row['account_code'];
            let rebateAccountCell =  (authUser.user_level_id == 3)?  
                    TableLinkViewFormatter(
                        toLower(row['account_code']),
                        rebateAccountDetail['routeWithoutParam'],
                        params,
                        row['account_code'],
                        false
                    )
            :   <Button
                    inverted
                    color='blue'
                    size='mini'
                >
                {row['account_code'] ? row['account_code'] : ''}
                </Button>;

            //IB referral Link cell
            let ibLinkCell = row['ib_referral_link']
                ? (
                    <ElementClipboard
                        ifNotSupported={
                            <a href={row['ib_referral_link']} target="_blank" className="attachment-link">
                                Link
                            </a>
                        }
                        text={row['ib_referral_link']}
                    />
                )
                : 'n/a';

            //TC referral Link cell
            let tcLinkCell = row['tc_referral_link']
                ? (
                    <ElementClipboard
                        ifNotSupported={
                            <a href={row['tc_referral_link']} target="_blank" className="attachment-link">
                                Link
                            </a>
                        }
                        text={row['tc_referral_link']}
                    />
                )
                : 'n/a';

            //TC demo Link cell
            let tcDemoLinkCell = row['tc_demo_referral_link']
                ? (
                    <ElementClipboard
                        ifNotSupported={
                            <a href={row['tc_demo_referral_link']} target="_blank" className="attachment-link">
                                Link
                            </a>
                        }
                        text={row['tc_demo_referral_link']}
                    />
                )
                : 'n/a';

            // Currency cell
            const currencyCell = row['basics_currency']['pretty_code'];

            // Platform cell
            const platformCell = row['basics_trading_platform']['pretty_code'];

            // If to return data only
            if (returnDataOnly) {
                return {
                    current_node_id: get(row, 'current_node_id', null),
                    parent_node_id: get(row, 'parent_node_id', null),
                    rebate_account: rebateAccountCell,
                    currency: currencyCell,
                    platform: platformCell,
                    ib_link: ibLinkCell,
                    tc_link: tcLinkCell,
                    tc_demo_link: tcDemoLinkCell
                };
            }

            return (
                <Table.Row className="table-row-custom" key={key}>
                    <Table.Cell>
                        {rebateAccountCell}
                    </Table.Cell>
                    <Table.Cell>{currencyCell}</Table.Cell>
                    <Table.Cell>{platformCell}</Table.Cell>
                    <Table.Cell>{ibLinkCell}</Table.Cell>
                    <Table.Cell>{tcLinkCell}</Table.Cell>
                    <Table.Cell>{tcDemoLinkCell}</Table.Cell>
                </Table.Row>
            );
        });

        // If to return data only
        if (returnDataOnly) {
            return rows;
        }

        return (
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Rebate Account</Table.HeaderCell>
                        <Table.HeaderCell>Currency</Table.HeaderCell>
                        <Table.HeaderCell>Platform</Table.HeaderCell>
                        <Table.HeaderCell>Sub IB Referral Link</Table.HeaderCell>
                        <Table.HeaderCell>Client Referral Link</Table.HeaderCell>
                        <Table.HeaderCell>Demo Referral Link</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {rows}
                </Table.Body>
            </Table>
        );
    }

    // If to return data only
    if (returnDataOnly) {
        return [];
    }

    return null;
};

//Get rebate rate table's initialize fields
export const dataGetRebateRateTableInitializeFields = (groupInfo) => {
    let fieldsUserSelections = {};

    // Base currency
    const baseCurrencyID = get(groupInfo, 'basics_currency.id', '');

    // Basic fields
    let fieldsBasic = {
        [tradingCurrency.name]: baseCurrencyID,
        [tradingPlatform.name]: get(groupInfo, 'basics_trading_platform.id', ''),
        [rebateRateTableType.name]: get(groupInfo, 'basics_rebate_rate_table_type.id', ''),
        [rebateCalculationType.name]: get(groupInfo, 'basics_rebate_calculation_type.id', ''),
    };

    //Iterating all user levels
    const userLevels = [
        'three', 'four', 'five', 'six', 'seven', 'eight'
    ];
    forEach(userLevels, function (row, key) {

        let levelKey = key + 3;
        let currentLevelKey = 'user_level_' + levelKey + '_selections';
        if (groupInfo['user_level_selections'].hasOwnProperty(currentLevelKey)) {

            let userLevelSelection = groupInfo['user_level_selections'][currentLevelKey];
            fieldsUserSelections[BasicField['userLevel' + upperFirst(row) + 'SelectionView'].name] = joinNestedArrayKeys(userLevelSelection, 'display_name', '\n');
        }
    });

    //If user levels are present
    let fieldsUserLevelConfiguration = {};
    if (
        get(groupInfo, 'user_level_configurations.data')
    ) {

        // Selected currencies
        const selectedCurrencyList = map(get(groupInfo, 'user_level_configurations.data.0.ib_rebate_rate_table_currencies'), function (product) {
            return product['basics_currency'];
        });

        //Updating to selectable currency list in state
        const selectedCurrencyListFormatted = dataGetTradingCurrencyListMulti(
            dataGetTradingCurrencyList(null, selectedCurrencyList, null), baseCurrencyID
        );

        // Selected products
        const selectedProductList = map(get(groupInfo, 'user_level_configurations.data.0.ib_rebate_rate_table_currencies.0.ib_rebate_rate_table_products'), function (product) {
            return product;
        });

        //Updating to selectable products list in state
        const selectedProductListFormatted = (size(selectedProductList) < 1)
            ? null
            : map(selectedProductList, (row) => {
                return {
                    [rebateCalculationType.name]: row['basics_rebate_calculation_type']['id'],
                    [tradingProduct.name]: row['basics_trading_product_id']
                }
            })

        //Merge fields
        fieldsBasic = assignIn(
            fieldsBasic,
            {
                [tradingCurrencyMulti.name]: selectedCurrencyListFormatted,
                [tradingProductMulti.name]: selectedProductListFormatted,
            },
        );

        //Iterating all user level configurations
        forEach(groupInfo['user_level_configurations']['data'], function (userLevelConfiguration) {

            let fieldsCurrencyConfiguration = {};
            forEach(userLevelConfiguration['ib_rebate_rate_table_currencies'], function (currency) {

                let fieldsProductConfiguration = {};
                forEach(currency['ib_rebate_rate_table_products'], function (product) {

                    //Iterating all commission levels
                    let fieldsCommissionRebate = {};
                    for (let commissionLevel = 1; commissionLevel <= 3; commissionLevel++) {

                        //Commission level key
                        let commissionLevelKey = 'commission_level_' + commissionLevel + '_configuration';

                        //Defining keys
                        let commissionConfig = product['ib_rebate_rate_table_product_distribution_level_' + commissionLevel];

                        //If commission config in present
                        if (!isEmpty(commissionConfig)) {

                            fieldsCommissionRebate = merge(fieldsCommissionRebate, {
                                [commissionLevelKey]: {
                                    'total_available_rebate': commissionConfig.hasOwnProperty('total_available_rebate') ? commissionConfig['total_available_rebate'] : ''
                                }
                            });

                            // Iterating all user levels
                            for (let userLevelKey = 3; userLevelKey <= 8; userLevelKey++) {
                                let fieldCommissionDefault = 'user_level_' + userLevelKey + '_default_distribution';
                                let fieldCommissionMarkedUp = 'user_level_' + userLevelKey + '_marked_up_distribution';
                                fieldsCommissionRebate[commissionLevelKey][fieldCommissionDefault] = commissionConfig[fieldCommissionDefault];
                                fieldsCommissionRebate[commissionLevelKey][fieldCommissionMarkedUp] = commissionConfig[fieldCommissionMarkedUp];
                            }
                        }
                    }

                    //Products configurations
                    fieldsProductConfiguration = merge(fieldsProductConfiguration, {
                        ['trading_product_' + product['basics_trading_product_id'] + '_configuration']: fieldsCommissionRebate
                    });
                });

                //Currency configurations
                fieldsCurrencyConfiguration = merge(fieldsCurrencyConfiguration, {
                    ['trading_currency_' + currency['basics_currency_id'] + '_configuration']: fieldsProductConfiguration
                });
            });

            //User level configurations
            fieldsUserLevelConfiguration = merge(fieldsUserLevelConfiguration, {
                ['user_level_' + userLevelConfiguration['basics_user_level_id'] + '_configuration']: fieldsCurrencyConfiguration
            });
        })
    }

    //Merge all fields
    return merge(fieldsBasic, fieldsUserSelections, fieldsUserLevelConfiguration);
};

//Get dynamic table
export const dataGetTableDynamic = (data, location, withDivider = false) => {

    // If data is empty
    if (size(data) < 1) {
        return;
    }

    // Title
    const title = get(data, 'metadata.label');

    // Table rows
    const tableData = get(data, 'rows');

    // Render table body
    const renderBodyRow = ({ label, type, value }, i) => ({
        key: `row-${i}`,
        cells: [
            label,
            type === 'link-to-nba'
                ? (
                    value
                        ? (
                            <td key={generateRandomNumber()}>
                                <Link
                                    to={{
                                        pathname: adminPendingNbaList.route + '/' + value,
                                        state: { fromPage: location.pathname }
                                    }}
                                >
                                    Click here
                                </Link>
                            </td>
                        )
                        : <td />
                )
                : value,
        ],
    });

    // Return
    return (
        <div className="table-dynamic" key={generateRandomNumber()}>
            {
                title && (
                    <AtomPageHeading
                        className="table-heading"
                        title={title}
                        withDivider={withDivider}
                    />
                )
            }
            <Table
                celled
                // headerRow={headerRow}
                renderBodyRow={renderBodyRow}
                selectable
                tableData={tableData}
            />
        </div>
    );

};

//Get dynamic table
export const dataGetTableAvailableResourceActions = (availableResourceActions) => {

    // If no actions present
    if (!availableResourceActions) {
        return null;
    }

    // Default
    let showActions = [];

    // Iterate all available actions
    forEach(availableResourceActions, function (actionRow, actionIndex) {

        // If cash adjustment
        if (actionRow) {
            showActions = concat(showActions, [actionIndex]);
        }
    });

    // Return
    return showActions;
};
