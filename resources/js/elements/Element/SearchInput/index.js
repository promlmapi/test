// Basics
import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { InputField } from 'react-semantic-redux-form';

class AtomSearchInput extends React.Component {

    render() {
        const {
            className,
            inputField
        } = this.props;

        return (
            <div className={'atom-search-input ' + className}>
                <Field
                    component={InputField}
                    icon='search'
                    name={inputField.name}
                    placeholder={inputField.lang.placeHolder}
                    type={inputField.type}
                />
            </div>
        );
    }
}

AtomSearchInput.defaultProps = {
    className: 'mb-2',
};

AtomSearchInput.propTypes = {
    className: PropTypes.string,
    inputField: PropTypes.object.isRequired
};

export default reduxForm({
    destroyOnUnmount: false
})(AtomSearchInput);
