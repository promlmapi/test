// Basics
import React from 'react';
import {Form} from 'semantic-ui-react';

// React-select
import Select, { components } from 'react-select';
import AsyncSelect from 'react-select/lib/Async';
import makeAnimated from 'react-select/lib/animated';

// Utilities
import {get} from 'lodash';

// const DropdownIndicator = (
//     props
// ) => {
//     return (
//       <components.DropdownIndicator>
//         <i aria-hidden="true" class="dropdown icon" />
//       </components.DropdownIndicator>
//     );
//   };

// Styles
const styles = {
    multiValue: (base, state) => {
        return state.data.isFixed ? { ...base, backgroundColor: 'gray' } : base;
    },
    multiValueLabel: (base, state) => {
        return state.data.isFixed
            ? { ...base, fontWeight: 'bold', color: 'white', paddingRight: 6 }
            : base;
    },
    multiValueRemove: (base, state) => {
        return state.data.isFixed ? { ...base, display: 'none' } : base;
    },
};

export default class SelectInput  extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        const { input: { value } } = this.props;
        const {
            input,
            name,
            label,
            key,
            required,
            isClearable = true,
            isDisabled = false,
            meta,
            options,
            loadOptions,
            defaultOptions = true,
            placeholder,
            getOptionLabel = 'text',
            getOptionValue = 'value',
            defaultValue,
            isMulti = true
        } = this.props;
        const {touched, error} = meta;

        //If component should be async or not
        let ComponentType = Select;
        if (!options) {
            ComponentType = AsyncSelect;
        }

        return(
            <Form.Field
                error={!!(touched && error)}
                required={required}
            >
                <label>{ label }</label>
                <ComponentType
                    //{...this.props}
                    backspaceRemovesValue={false}
                    cacheOptions
                    className="element-select-input-container"
                    classNamePrefix="element-select-input"
                    closeMenuOnSelect={
                        isMulti
                            ? false
                            : true
                    }
                    components={
                        makeAnimated()
                    }
                    defaultValue={defaultValue}
                    defaultOptions={defaultOptions}
                    getOptionLabel={(option) => option[getOptionLabel]}
                    getOptionValue={(option) => option[getOptionValue]}
                    isClearable={isClearable}
                    isDisabled={isDisabled}
                    isMulti={isMulti}
                    loadOptions={loadOptions}
                    onBlur={event => event.preventDefault()}
                    onChange={(value) => input.onChange(value)}
                    options={options}
                    placeholder={placeholder}
                    simpleValue={true}
                    styles={styles}
                    value={input.value}
                />
                {touched && error && <div className="ui red pointing basic label">{error}</div>}
            </Form.Field>
        )
    }
}
