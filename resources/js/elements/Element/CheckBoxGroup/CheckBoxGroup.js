import React from 'react';
import { Field } from "redux-form";
import { Form, Checkbox as CheckboxComponent } from 'semantic-ui-react';

class CheckBoxGroup extends React.Component {

    field({ input, meta, options, labelMain, required, singleOption = false }) {

        const { name, onChange, onBlur, onFocus } = input;
        const { touched, error } = meta;
        const inputValue = input.value;

        function onClick(event, data) {
            return input.onChange(data.checked);
        }

        const checkboxes = options.map(({
            label,
            readOnly = false,
            value
        }, index) => {

            const handleChange = (event) => {

                let arr = [];
                if (singleOption) {
                    arr = inputValue;
                    if (event.target.checked) {
                        arr = value;
                    }
                    else {
                        arr = null;
                    }
                } else {
                    arr = [...inputValue];
                    if (event.target.checked) {
                        arr.push(value);
                    }
                    else {
                        arr.splice(arr.indexOf(value), 1);
                    }
                }
                onBlur(arr);
                return onChange(arr);
            };

            const checked = inputValue.includes(value);

            return (
                <Form.Field key={index}>
                    <div className='ui checkbox'>
                        <input
                            type="checkbox"
                            name={`${name}[${index}]`}
                            value={value}
                            checked={checked}
                            onChange={handleChange}
                            onFocus={onFocus}
                            disabled={readOnly}
                        />
                        <label>
                            {label}
                        </label>
                    </div>
                </Form.Field>
            );
        });

        return (
            <Form.Field
                error={!!(touched && error)}
                required={required}
                className="custom-checkbox-group"
            >
                <label>{labelMain}</label>
                <Form.Group inline>
                    {checkboxes}
                </Form.Group>
                {touched && error && <div className="ui red pointing basic label">{error}</div>}
            </Form.Field>
        );
    };

    render() {
        return <Field {...this.props} type="checkbox" component={this.field} />;
    }
}

export default CheckBoxGroup;