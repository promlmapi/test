import React from 'react';
import {Card} from 'semantic-ui-react';
import PropTypes from 'prop-types';

class AtomCard extends React.Component {

    render() {
        const {description, title} = this.props;

        return (
            <Card
                fluid
                className="atom-card custom-card"
                // color={color === 1 ? 'yellow' : 'green'}
                header={title}
                description={description}
            />
        );
    }
}

AtomCard.propTypes = {
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default AtomCard;