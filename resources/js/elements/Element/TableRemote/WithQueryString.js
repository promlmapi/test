// Basics
import React, { Component } from "react";
import {
    map,
    size
} from 'lodash';

// Libraries
import { getQueryParams } from '../../../custom/Libraries/Utility';

export default function withQueryString(WrappedComponent) {

    return class extends Component {

        constructor(props) {
            super(props);

            // Defaults
            let queryStringFilters = [];

            // Getting query params
            const queryParams = getQueryParams(props.location);

            // If query params are present
            if (size(queryParams) > 0) {

                // Formatting filters
                queryStringFilters = map(queryParams, (value, key) => {
                    return {
                        columnName: key,
                        operation: "contains",
                        value: value,
                    };
                });
            }

            // Default state
            this.state = {
                queryStringFilters
            };
        }

        render() {
            const { queryStringFilters } = this.state;

            return (
                <WrappedComponent
                    {...this.props}
                    queryStringFilters={queryStringFilters}
                />
            );
        }
    };
}
