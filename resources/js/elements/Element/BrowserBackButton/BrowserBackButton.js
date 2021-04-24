// Basics
import React from 'react';
import {translate} from 'react-i18next';
import {Icon, Button} from 'semantic-ui-react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

// Utilities
import {
    get,
    size
} from 'lodash';

class BrowserBackButton extends React.Component {

    render() {
        const {
            linkTo,
            location
        } = this.props;

        // Location state
        const locationState = get(location, 'state.fromPage');

        // Calculating back link
        const backLink = locationState ? locationState : linkTo;

        // If backlink not present
        if (size(backLink) < 1) {
            return null;
        }

        return (
            <Button
                as={Link}
                inverted
                color='blue'
                icon
                labelPosition='left'
                to={ backLink }
            >
                <Icon name='left arrow'/>
                Back to list
            </Button>
        );
    }
}

BrowserBackButton.propTypes = {
    linkTo: PropTypes.string,
    location: PropTypes.object,
};

export default translate()(withRouter(BrowserBackButton));