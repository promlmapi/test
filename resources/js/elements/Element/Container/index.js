import React from 'react';
import PropTypes from 'prop-types';
import {
    Grid,
    Header
} from 'semantic-ui-react';
import {
    map,
    size
} from 'lodash';

// Views
import BrowserBackButton from '../BrowserBackButton/BrowserBackButton';

// Column responsive config
const columnResponsiveConfig = {
    full: {
        mobile: 16,
        tablet: 16,
        computer: 16
    },
    half: {
        mobile: 16,
        tablet: 12,
        computer: 10
    }
}
class ElementContainer extends React.Component {

    render() {
        const {
            browserBackButtonLink,
            columnWidth,
            content,
            contentPre,
            hasExportButton,
            headerActionContent,
            title
        } = this.props;

        return (
            <Grid divided='vertically' className={`page-body ${hasExportButton ? ' client' : ''}`}>
                {(title || headerActionContent) && (
                    <Grid.Row columns={1} className="top-heading-row">
                        <Grid.Column>
                            {title && (
                                <Header as='h2' className="top-heading">
                                    {title}
                                </Header>
                            )}
                            {headerActionContent}
                        </Grid.Column>
                    </Grid.Row>
                )}
                <Grid.Row columns={1}>
                    {size(content) > 0 && (
                        <Grid.Column
                            computer={columnResponsiveConfig[columnWidth]['computer']}
                            mobile={columnResponsiveConfig[columnWidth]['mobile']}
                            tablet={columnResponsiveConfig[columnWidth]['tablet']}
                        >
                            {size(contentPre) > 0 && map(contentPre, (row, key) => {
                                if (row) {
                                    return React.cloneElement(row, { key });
                                }
                            })}
                            {map(content, (row, key) => {
                                if (row) {
                                    return React.cloneElement(row, { key });
                                }
                            })}
                        </Grid.Column>
                    )}
                    <Grid.Column mobile={16} tablet={16} computer={16}>
                        <BrowserBackButton
                            linkTo={browserBackButtonLink || null}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
};

ElementContainer.defaultProps = {
    columnWidth: 'full',
    contentPre: null,
    hasExportButton: false,
    headerActionContent: null,
    loading: false
};

ElementContainer.propTypes = {
    browserBackButtonLink: PropTypes.string,
    columnWidth: PropTypes.oneOf([
        'full',
        'half'
    ]),
    content: PropTypes.arrayOf(
        PropTypes.node.isRequired
    ).isRequired,
    contentPre: PropTypes.arrayOf(
        PropTypes.node.isRequired
    ),
    hasExportButton: PropTypes.bool,
    headerActionContent: PropTypes.node,
    title: PropTypes.string.isRequired
};

export default ElementContainer;
