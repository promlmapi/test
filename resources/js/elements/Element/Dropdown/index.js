import React from 'react';
import PropTypes from 'prop-types';
import {Dropdown} from 'semantic-ui-react';
import {
    map,
    size
} from 'lodash';

class ElementDropdown extends React.Component {

    render() {
        const { 
            headerTitle,
            icon,
            items,
            loading,
            title,
            width
        } = this.props;

        return (
            <Dropdown
                text={title}
                icon={icon}
                loading={loading}
                floating
                labeled
                button
                className='icon heading-dropdown'
                color="blue"
                style={{
                    width: width || 'unset'
                }}
            >
                <Dropdown.Menu>
                    <Dropdown.Header content={headerTitle} />
                    {size(items) > 0 && (
                        map(items, (item, index) => {
                            const {
                                content,
                                onClick,
                                param
                            } = item;

                            return (
                                <Dropdown.Item
                                    content={content}
                                    key={index}
                                    onClick={() => onClick(param)}
                                />
                            );
                        })
                    )}
                </Dropdown.Menu>
            </Dropdown>
        );
    }
};

ElementDropdown.defaultProps = {
    loading: false
};

ElementDropdown.propTypes = {
    headerTitle: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            content: PropTypes.string.isRequired,
            onClick: PropTypes.func.isRequired,
            param: PropTypes.object.isRequired
        })
    ).isRequired,
    loading: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    width: PropTypes.number
};

export default ElementDropdown;
