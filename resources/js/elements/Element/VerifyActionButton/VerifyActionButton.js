// Basics
import React from 'react';
import {translate} from 'react-i18next';
import {Button} from 'semantic-ui-react';
import {Redirect} from 'react-router';

// Libraries
import {httpCallMake} from '../../../custom/Libraries/httpCall';

// Utilities
import {get, forEach, merge} from 'lodash';

// Constants
import {ConfigAppPageAdmin} from '../../../custom/Configs/PageAdmin';

class VerifyActionButton extends React.Component {

    constructor(props) {
        super(props);

        //State
        this.state = {
            reject: {
                show: false,
                loading: false,
            },
            approve: {
                show: false,
                loading: false,
            },
            redirectTo: null,
        };

        // Bindings
        this.handleClick = this.handleClick.bind(this);
        this.handleInitiate = this.handleInitiate.bind(this);
    }

    componentDidMount() {
        this.handleInitiate();
    }

    componentDidUpdate(prevProps) {
        const {resourceDetail} = this.props;

        //If resource details have been updated
        if (prevProps.resourceDetail !== resourceDetail) {
            this.handleInitiate();
        }
    }

    handleInitiate() {
        const {resourceDetail} = this.props;

        // Available actions
        const availableActions = get(resourceDetail, 'available_resource_actions');

        // If actions not available
        if (!availableActions) {
            return;
        }

        //All actions
        const allActions = ['reject', 'approve'];
        const selfObject = this;

        //Iterate all actions
        forEach(allActions, function (row) {

            // Getting action details
            const action = get(resourceDetail, 'available_resource_actions.' + row);

            //If action is available in resource
            if (action) {

                //Show loading button
                selfObject.setState({
                    [row]: merge(
                        selfObject.state[row], {
                            show: true,
                        }
                    )
                });
            }
        });
    }

    handleClick(action) {
        const {resourceID, apiUrl, redirectTo} = this.props;

        //Show loading button
        this.setState({
            [action]: merge(this.state[action], {
                loading: true,
            })
        });

        // Make API request
        return httpCallMake(apiUrl + '/' + resourceID + '/' + action, 'patch')
            .then(data => {

                //Stop loading button
                this.setState({
                    [action]: merge(this.state[action], {
                        loading: false,
                    }),
                    redirectTo: ConfigAppPageAdmin[redirectTo]['route'],
                });
            });
    }

    render() {
        const {reject, approve, redirectTo} = this.state;

        //Redirecting user
        if (redirectTo) {
            return (
                <Redirect push to={redirectTo}/>
            );
        }

        return (
            <span>
                { (reject.show || approve.show) && <Button.Group floated='right' className="resource-actions-buttons">
                    { reject.show &&
                    <Button inverted color='blue' onClick={() => this.handleClick('reject')} loading={reject.loading}>
                        Decline
                    </Button> }
                    <Button.Or />
                    { approve.show &&
                    <Button inverted color='blue' onClick={() => this.handleClick('approve')} loading={approve.loading}>
                        Approve
                    </Button> }
                </Button.Group> }
            </span>
        );
    }
}

export default translate()(VerifyActionButton);