// Basics
import React from 'react';
import { connect } from 'react-redux';
import { Grid, Header } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import {
    clone,
    forEach,
    get,
    map
} from 'lodash';

// Libraries
import { firstRun } from '../../../../custom/Libraries/Page';
import { httpCallMake } from '../../../../custom/Libraries/httpCall';
import { responseValidate } from '../../../../custom/Libraries/Form';

// Views
import AdminGroupAddForm from './Form';

// Fields
import BasicField from '../../../../custom/Basics/Field';

// Configs
import { ConfigAppPageAdminBasic } from '../../../../custom/Configs/PageAdmin';

const PageComponent = props => {

    const {cloneDetail, userID, redirectTo} = props;

    const submitFormHandler = (values, dispatch) => {

        //Form fields
        const {
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

                //Master level user selection
                if (key === 0) {
                    submitValues[row] = [submitValues[row]];
                } else {

                    //Other user level section, where react-select is implemented
                    let submitUserSelections = map(submitValues[row], function (selectedUser) {
                        return selectedUser['value'];
                    });

                    //Adding fields to be submitted
                    submitValues[row] = submitUserSelections;
                }
            }
        });

        return httpCallMake('admin/rebate-rate-table', 'post', submitValues)
            .then(data => {
                return responseValidate(data);
            }).then(data => {

                //Redirecting user
                const resoureId = get(data, 'resource.id');
                if (resoureId) {
                    redirectTo(resoureId);
                }

                return data;
            });
    };

    return (
        <Grid divided='vertically' className="page-body">
            <Grid.Row columns={1} className="top-heading-row">
                <Grid.Column>
                    <Header as='h2' className="top-heading">
                        Add trading group
                    </Header>
                </Grid.Column>
            </Grid.Row>
            <AdminGroupAddForm
                cloneDetail={cloneDetail}
                onSubmit={submitFormHandler}
            />
        </Grid>
    );
};

class AdminGroupListPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirectTo: null,
        };

        //First run
        firstRun(props, null, true);

        this.redirectTo = this.redirectTo.bind(this);
    }

    redirectTo(resourceID) {

        this.setState({
            redirectTo: ConfigAppPageAdminBasic['baseAdminUri'] + '/group/' + resourceID,
        });
    }

    render() {
        const {location} = this.props;
        const {redirectTo} = this.state;

        //Redirecting user
        if (redirectTo) {
            return (
                <Redirect push to={redirectTo}/>
            );
        }

        return (
            <PageComponent
                cloneDetail={get(location, 'state.cloneDetail')}
                redirectTo={this.redirectTo}
                userID={this.props.userID}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userID: state.auth.user.id,
    }
};

export default connect(mapStateToProps)(AdminGroupListPage);
