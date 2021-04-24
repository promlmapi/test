// Basics
import React from 'react';
import {Header} from 'semantic-ui-react';
import PropTypes from 'prop-types';

// Utilities
import {size} from 'lodash';

class AtomPageHeading extends React.Component {

    render() {
        const {
            button,
            className,
            dividerClassName,
            title,
            withDivider
        } = this.props;

        // If title is empty
        if (size(title) < 1) {
            return null;
        }

        return (
            <div className={'atom-page-heading ' + className}>
                {
                    withDivider &&
                    <hr className={dividerClassName} />
                }
                <Header
                    as='h3'
                    className="page-heading mb-3"
                    content={
                        <span>
                            <span className="page-heading-title">
                                {title}
                            </span>
                            {button}
                        </span>
                    }
                />
            </div>
        );
    }
}

AtomPageHeading.defaultProps = {
    className: '',
    dividerClassName: 'mt-5',
    withDivider: false
};

AtomPageHeading.propTypes = {
    button: PropTypes.element,
    className: PropTypes.string,
    dividerClassName: PropTypes.string,
    title: PropTypes.string.isRequired,
    withDivider: PropTypes.bool,
};

export default AtomPageHeading;