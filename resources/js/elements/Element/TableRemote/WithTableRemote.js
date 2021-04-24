// Basics
import React, { Component } from "react";
import { get } from 'lodash';

export default function withTableRemote(WrappedComponent) {

    return class extends Component {

        constructor(props) {
            super(props);

            // Default state
            this.state = {
                showExportButton: false
            };

            // Bindings
            this.handleApiResponseCallback = this.handleApiResponseCallback.bind(this);
        }

        handleApiResponseCallback({ response }) {

            // Getting all available actions
            const availableActions = get(response, 'available_resource_actions');

            // If actions are available
            if (availableActions) {

                // Checking if export is available
                const showExportButton = get(availableActions, 'export');

                // Show export button
                if (showExportButton) {
                    this.setState({
                        showExportButton: true
                    });
                }
            }
        }

        render() {
            const { showExportButton } = this.state;

            return (
                <WrappedComponent
                    {...this.props}
                    handleApiResponseCallback={this.handleApiResponseCallback}
                    showExportButton={showExportButton}
                />
            );
        }
    };
}
