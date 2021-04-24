// Basics
import React from 'react';
import {connect} from 'react-redux';
import {Grid, Header, Button} from 'semantic-ui-react';
import {Redirect} from 'react-router';
import {push} from 'connected-react-router';

// Libraries
import {httpCallMake} from '../../../../custom/Libraries/httpCall';
import {responseValidate} from '../../../../custom/Libraries/Form';
import {firstRun} from '../../../../custom/Libraries/Page';
import {hasPermissionToAction} from '../../../../custom/Libraries/Permission';

// View
import AdminGroupAddForm from '../Add/Form';

// Utilities
import {forEach, omit, clone, concat, get} from 'lodash';

// Constants
import {BasicField} from '../../../../custom/Basics/Field';
import {ConfigAppPageAdmin} from '../../../../custom/Configs/PageAdmin';
import {BasicPermissionApiAdminRrtDestroy} from '../../../../custom/Basics/Permission';

// Services
import {adminGetGroupDetail} from '../../../../services/adminService';

// Page configs
const { adminGroupAdd } = ConfigAppPageAdmin;

class AdminGroupListPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            groupID: props.match.params['groupId'],
            deleteButtonLoading: false,
            deleteButtonShow: false,
            cloneButtonShow: false,
            cloneButtonLoading: false,
            redirectTo: false,
        };

        //First run
        firstRun(props, null, true);

        // Bindings
        this.submitFormHandler = this.submitFormHandler.bind(this);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
        this.handleCloneClick = this.handleCloneClick.bind(this);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        const {groupID} = this.state;

        // Get group details
        dispatch(adminGetGroupDetail(groupID));
    }

    componentDidUpdate(prevProps) {
        const {hasPermissionToDestroy, groupDetail} = this.props;
        const {groupID, deleteButtonShow} = this.state;

        // If group detail has been updated
        if (hasPermissionToDestroy && !deleteButtonShow && prevProps.groupDetail !== groupDetail && typeof groupDetail[groupID] !== 'undefined' && groupDetail[groupID].hasOwnProperty('available_resource_actions') && groupDetail[groupID]['available_resource_actions']['delete']) {

            // Set state to show delete button
            this.setState({
                deleteButtonShow: true,
            });
        }

        // If group detail has been updated
        if (
            prevProps.groupDetail !== groupDetail
            && groupDetail
            && get(groupDetail, [groupID, 'available_resource_actions', 'duplicate'])
        ) {

            // Set state to show clone button
            this.setState({
                cloneButtonShow: true
            });
        }

    }

    submitFormHandler(values, dispatch) {
        const {groupID} = this.state;

        //Form fields
        const {
            tradingCurrency, tradingPlatform, tradingProduct, userLevel,
            userLevelThreeSelection, userLevelFourSelection, userLevelFiveSelection,
            userLevelSixSelection, userLevelSevenSelection, userLevelEightSelection
        } = BasicField;

        const formFieldsUserSelections = [
            userLevelThreeSelection.name, userLevelFourSelection.name, userLevelFiveSelection.name,
            userLevelSixSelection.name, userLevelSevenSelection.name, userLevelEightSelection.name,
        ];

        let submitValues = clone(values);

        //Iterating all user selection fields
        forEach(formFieldsUserSelections, function (row, key) {

            //If field is present in submitted
            if (submitValues.hasOwnProperty(row)) {
                submitValues[row] = [submitValues[row]];
            }
        });

        //Fields to remove
        let removeFields = concat(formFieldsUserSelections, [
            tradingCurrency.name, tradingPlatform.name, tradingProduct.name, userLevel.name,
        ]);

        //Remove all keys and prepare final array
        let finalSubmitValues = omit(submitValues, removeFields);

        return httpCallMake('admin/rebate-rate-table/' + groupID, 'post', finalSubmitValues)
            .then(data => {
                return responseValidate(data);
            }).then(data => {
                return data;
            });
    };

    handleRemoveClick() {
        const {groupID} = this.state;

        //Set button to loading state
        this.setState({
            deleteButtonLoading: true,
        });

        // Delete account
        return httpCallMake('admin/rebate-rate-table/' + groupID, 'delete')
            .then(data => {

                return responseValidate(data);
            }).then(data => {

                //Set button to normal state
                this.setState({
                    deleteButtonLoading: false,
                    redirectTo: true,
                });
            });
    };


    handleCloneClick() {
        const { dispatch } = this.props;
        const { groupID } = this.state;

        // Set button to loading state
        this.setState({
            cloneButtonLoading: true,
        });

        // Delete account
        return httpCallMake(`admin/rebate-rate-table/${groupID}/duplicate`, 'get')
            .then(data => {

                // Set button to normal state
                this.setState({
                    cloneButtonLoading: false,
                });

                // Redirect to add page with clone details
                dispatch(push({
                    pathname: adminGroupAdd.route,
                    state: {
                        cloneDetail: get(responseValidate(data), 'resource')
                    }
                }));

                return;
            });
    };

    render() {
        const {hasPermissionToDestroy} = this.props;
        const {
            groupID,
            cloneButtonShow,
            cloneButtonLoading,
            deleteButtonLoading,
            deleteButtonShow,
            redirectTo
        } = this.state;

        //Redirecting user
        if (redirectTo) {
            return (
                <Redirect push to={ConfigAppPageAdmin.adminGroupList.route}/>
            );
        }

        return (
            <Grid divided='vertically' className="page-body">
                <Grid.Row columns={1} className="top-heading-row">
                    <Grid.Column>
                        <Header as='h2' className="top-heading">
                            Trading group #{ groupID }
                        </Header>
                        { hasPermissionToDestroy && deleteButtonShow &&
                        <Button inverted color='blue' floated='right' onClick={() => this.handleRemoveClick()}
                                loading={deleteButtonLoading}>
                                Delete
                        </Button>}
                        {cloneButtonShow && (
                            <Button
                                inverted
                                color='blue'
                                content='Clone'
                                floated='right'
                                onClick={() => this.handleCloneClick()}
                                loading={cloneButtonLoading}
                            />
                        )}
                    </Grid.Column>
                </Grid.Row>
                <AdminGroupAddForm isViewPage={true} groupID={groupID} onSubmit={this.submitFormHandler}/>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        groupDetail: state.admin.groupDetail,
        hasPermissionToDestroy: hasPermissionToAction(state.auth.permissions.data, BasicPermissionApiAdminRrtDestroy),
    };
};

export default connect(mapStateToProps)(AdminGroupListPage);
