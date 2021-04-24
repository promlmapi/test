import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import i18n from '../../../../i18n';
import {translate} from 'react-i18next';
import {httpCallMake} from '../../../../custom/Libraries/httpCall';
import {Button, Icon, Popup, Segment} from 'semantic-ui-react';
import {get, includes, isFunction, toString} from 'lodash';
import * as action from '../../../../store/actions/admin';

// Constants
import BasicField from '../../../../custom/Basics/Field';

// Fields
const {
    destroyDeclaration
} = BasicField;

class TableRemoteActionButton extends React.Component {

    constructor(props) {
        super(props);

        // State
        this.state = {
            actions: [],
            loading: false,
            hideRow: false,
            isOpenPopup: false
        };

        // Binding
        this.handleClick = this.handleClick.bind(this);
        this.handlePopupOpen = this.handlePopupOpen.bind(this);
        this.handlePopupClose = this.handlePopupClose.bind(this);
        this.updateActions = this.updateActions.bind(this);
    }

    componentDidMount() {
        this.updateActions();
    }

    componentDidUpdate(prevProps) {
        const {actions} = this.props;

        // If actions updated
        if (
            prevProps.actions !== actions
            && (actions !== this.state.actions)
        ) {
            this.updateActions();
        }
    }

    updateActions() {
        const {actions} = this.props;
        this.setState({actions});
    }

    handleClick(rowId, label, callback, additionalData) {
        const {apiUrl, dispatch, isTransactionPage} = this.props;

        //Show loading button
        this.setState({
            loading: true,
        });

        // If view
        if (
            includes(
                [
                    'can_update_commission_level',
                    'do_cash_adjustment',
                    'show_linked_rebate_rate_table',
                    'update_rebate_account',
                    'view'
                ],
                label
            )
            && isFunction(callback)
        ) {

            //Callback
            callback(rowId, label);
            return;
        }

        // Defaults for "approve" and "reject" actions
        let apiRequestUrl = apiUrl + '/' + rowId + '/' + label;
        let apiRequestMethod = 'patch';
        let apiRequestFormData = {};

        // If destroy action
        if (includes(['destroy'], label)) {
            apiRequestUrl = apiUrl + '/' + rowId;
            apiRequestMethod = 'delete';
            apiRequestFormData = {
                [destroyDeclaration.name]: 1
            };
        }

        //Make API request
        return httpCallMake(apiRequestUrl, apiRequestMethod, apiRequestFormData)
            .then(data => {

                // If transaction page
                if (isTransactionPage) {
                    dispatch(action.adminUpdateTransactionStatus(rowId, label));
                }

                // If destroy action
                if (includes(['destroy'], label) && isFunction(get(callback, 'callback'))) {

                    // Refresh table
                    callback.callback(additionalData ? additionalData : true);
                }

                //Callback
                // callback(rowId, label);

                //Stop loading button
                if (!additionalData) {
                    this.setState({
                        loading: false,
                        hideRow: true,
                    });
                }
            });
    }

    handlePopupOpen() {
        this.setState({
            isOpenPopup: true
        });
    }

    handlePopupClose() {
        this.setState({
            isOpenPopup: false
        });
    }

    render() {
        const {tableRow} = this.props;
        const {
            actions,
            loading,
            hideRow,
            isOpenPopup
        } = this.state;

        //Row ID
        const rowId = tableRow.rowId;

        //Self object
        const selfObject = this;

        return (
            <div>
                {loading && (
                    <Segment
                        basic
                        size="mini"
                        loading
                        className="actions-loading-segment"
                    />
                )}
                { !loading && !hideRow && (
                    <Button.Group size='mini'>
                        {actions.map(function (action, index) {
                            if (tableRow.type === 'data' || toString(tableRow.type) === 'Symbol(data)') {

                                let contentToReturn = (
                                    <Popup
                                        content={action.info.content}
                                        key={index}
                                        header={action.info.header}
                                        position='bottom right'
                                        trigger={
                                            <Button
                                                inverted
                                                icon
                                                color={action.color}
                                                onClick={
                                                    () => action.label === 'destroy'
                                                        ? selfObject.handlePopupOpen()
                                                        : selfObject.handleClick(rowId, action.label, action.action, action.additionalData)
                                                }
                                            >
                                                <Icon name={action.icon}/>
                                            </Button>
                                        }
                                    />
                                );

                                // If action is to destroy rebate account
                                if (action.label === 'destroy') {
                                    contentToReturn = (
                                        <Popup
                                            key={index}
                                            trigger={contentToReturn}
                                            open={isOpenPopup}
                                            onClose={selfObject.handlePopupClose}
                                            content={
                                                <div>
                                                    <p>Are you sure this request is in compliance with FP policies and the relevant IB is aware of the change?</p>
                                                    <Button
                                                        className="mt-2"
                                                        content='No, cancel!'
                                                        onClick={selfObject.handlePopupClose}
                                                    />
                                                    <Button
                                                        className="mt-2"
                                                        color='red'
                                                        icon='trash'
                                                        content='Yes, continue!'
                                                        onClick={() => selfObject.handleClick(rowId, action.label, action.action, action.additionalData)}
                                                    />
                                                </div>
                                            }
                                            on='click'
                                            position='top right'
                                            wide
                                        />
                                    )
                                }

                                // Return
                                return contentToReturn;
                            } else {
                                return ('');
                            }

                        })}
                    </Button.Group>
                )}
            </div>
        );
    }
}

TableRemoteActionButton.defaultProps = {
    isTransactionPage: false,
};

TableRemoteActionButton.propTypes = {
    actions: PropTypes.array.isRequired,
    apiUrl: PropTypes.string,
    isTransactionPage: PropTypes.bool,
    tableRow: PropTypes.object.isRequired,
};

export default connect(null)(translate()(TableRemoteActionButton));