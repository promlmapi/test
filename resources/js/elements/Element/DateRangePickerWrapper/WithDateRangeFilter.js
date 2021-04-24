// Basics
import React, { Component } from "react";

// Libraries
import { getDateFilter } from '../../../custom/Libraries/Form';

// Date range object
const dateRangeObject = (startDate, endDate) => {

    return [
        {
            columnName: "start_date",
            operation: "greaterThanOrEqual",
            value: startDate,
        },
        {
            columnName: "end_date",
            operation: "lessThanOrEqual",
            value: endDate,
        }
    ];
};

export default function withDateRangeFilter(WrappedComponent) {

    return class extends Component {

        constructor(props) {
            super(props);

            // Setting default date range
            let dateRangeFilters = dateRangeObject(null, null);
            if (props.useDefaultDateRange) {
                const defaultDateRange = getDateFilter('default', 'default', true);
                dateRangeFilters = dateRangeObject(defaultDateRange['startDate'], defaultDateRange['endDate']);
            }

            // Default state
            this.state = {
                dateRangeFilters
            };

            // Bindings
            this.handleFilters = this.handleFilters.bind(this);
        }

        handleFilters(startDate, endDate) {
            this.setState({
                dateRangeFilters: dateRangeObject(startDate, endDate)
            });
        }

        render() {
            const { dateRangeFilters } = this.state;

            return (
                <WrappedComponent
                    {...this.props}
                    onDateFilter={this.handleFilters}
                    dateRangeFilters={dateRangeFilters}
                />
            );
        }
    };
}
