// Basics
import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {Accordion, Grid, Icon, Image} from 'semantic-ui-react';
import PropTypes from 'prop-types';

// Views
import CustomSideBar from '../sideBar/Page';

// Utilities
import {get} from 'lodash';

// Constants
import {ConfigAppPage} from '../../custom/Configs/Page';

// Libraries
import {assetPath} from '../../custom/Libraries/Utility';

// Assets
const hamburgerIcon = assetPath('icons/humburger.png');

class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirectTo: null,
            activeIndex: -1,
        };

        // Bindings
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const {user} = this.props;

        //If user has not completed on-boarding steps and trying to open dashboard pages then redirecting to correct step
        const hasRegistrationCompleted = get(user, 'registration_status.is_complete');
        if (!hasRegistrationCompleted) {

            //Routes based on user's current step
            let stepRoutes = {
                1: ConfigAppPage.onBoardingStepTwo.route,
                2: ConfigAppPage.onBoardingStepThree.route,
                3: ConfigAppPage.onBoardingStepFour.route,
                4: ConfigAppPage.profile.route,
            };

            //The route user should redirect to
            let currentStep = get(user, 'registration_status.steps.current');

            //Updating state with correct route
            this.setState({
                redirectTo: stepRoutes[currentStep],
            });
        }
    }

    handleClick(e, titleProps) {
        const {index} = titleProps;
        const {activeIndex} = this.state;
        const newIndex = activeIndex === index ? -1 : index;

        // Setting state
        this.setState({
            activeIndex: newIndex
        });
    }

    render() {
        const {redirectTo} = this.state;
        const {location} = this.props;
        const {activeIndex} = this.state;

        // If should redirect
        if (redirectTo && redirectTo !== location.pathname) {

            // Redirecting user
            return (
                <Redirect replace to={redirectTo}/>
            )
        }

        return (
            <Grid className="container-body">
                <Grid.Column mobile={16} tablet={16} computer={3} className="container-body-sidebar">
                    <Accordion styled className="left-side-menu parent">
                        <Accordion.Title
                            className="accordion-responsive-title"
                            active={activeIndex === 1}
                            index={1}
                            onClick={this.handleClick}
                        >
                            <div>
                                <small><Image src={hamburgerIcon} width="26" alt="Menu"/></small>
                                Menu
                                <span className="arrow">
                                    <Icon name='angle down'/>
                                    <Icon name='angle left'/>
                                </span>
                            </div>
                        </Accordion.Title>
                        <Accordion.Content
                            active={activeIndex === 1}
                            className="accordion-responsive-content"
                        >
                            <CustomSideBar
                                {...this.props.children.props}
                            />
                        </Accordion.Content>
                    </Accordion>
                </Grid.Column>
                <Grid.Column
                    mobile={16}
                    tablet={16}
                    computer={13}
                    className="container-body-component"
                >
                    <div className="main-container">
                        {this.props.children}
                    </div>
                </Grid.Column>
            </Grid>
        );
    }
}

Page.propTypes = {
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        userID: state.auth.user.id,
    };
};

export default connect(mapStateToProps)(Page);
