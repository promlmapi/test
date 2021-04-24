import React from 'react';
import {Form, Input} from 'semantic-ui-react';
import {startsWith} from 'lodash';

// Package
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

// Get date object
const dateFormatter = (date) => {
    return new Date(date);
};

class ElementDatePicker extends React.Component {
    constructor(props) {
        super(props);
        const {input} = this.props;
        const {value} = input;

        // State
        this.state = {
            startDate: value ? value : new Date(),
            hasFieldInitialized: false,
        };

        // Binding
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidUpdate(prevProps) {
        const {hasFieldInitialized, startDate} = this.state;
        const {input, initialValue} = this.props;
        const {onChange, value} = input;

        // If initialValue updated
        if (
            !hasFieldInitialized
            && (prevProps.initialValue !== initialValue)
            && initialValue
            && (startDate !== initialValue)
        ) {
            this.handleChange(dateFormatter(initialValue));
            this.setState({
                hasFieldInitialized: true,
            })
        }

        // If props updated
        if (
            (initialValue ? hasFieldInitialized : true)
            && (prevProps.input.value !== value)
            && value
            && !/^\d/.test(value) //If first character is not numeric
            // && (startDate !== value)
        ) {
            // Change input value
            onChange(value);

            // Change calendar UI
            this.handleChange(value);
        }
    }

    handleChange(date) {

        // If date is invalid
        if (date && !startsWith(date, 'Invalid Date')) {
            // Set state
            this.setState({
                startDate: date,
            });
        }
    }

    render() {
        const {startDate} = this.state;
        const {
            input, label, placeholder, required,
            meta: {touched, error}
        } = this.props;

        return (
            <Form.Field
                error={!!(touched && error)}
                required={required}
            >
                <label>{ label }</label>
                <div className="ui left icon input">
                    <DatePicker
                        placeholderText={placeholder}
                        dateFormat={['yyyy-MM-dd', 'dd-MM-yyyy']}
                        selected={startDate}
                        maxDate={new Date()}
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        autoComplete='off'
                        {...input}
                    />
                    <i aria-hidden="true" className="calendar alternate outline icon"></i>
                </div>
                {touched && error && <div className="ui red pointing basic label">{error}</div>}
            </Form.Field>
        );
    }
}

export default ElementDatePicker;