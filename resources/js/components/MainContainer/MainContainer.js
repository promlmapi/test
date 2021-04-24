// Basics
import React from 'react';
import {connect} from 'react-redux';

// Utilities
import {isEmpty} from 'lodash';

// Services
import {dataGetUserProfile, dataPrerequisitesUpdate} from '../../services/dataService';

class MainContainer extends React.Component {

    componentDidMount() {
        const {dispatch, prerequisites} = this.props;

        // If prerequisites are empty
        if(isEmpty(prerequisites)) {

            // Update prerequisites
            dispatch(dataPrerequisitesUpdate());
        }
    }

    componentDidUpdate() {
        const {isAuthenticated, userID, dispatch} = this.props;

        //Get user profile
        if(isAuthenticated) {
            dispatch(dataGetUserProfile(userID));
        }
    }

    render() {
        const {children} = this.props;

        return (
            {...children}
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated : state.auth.isAuthenticated,
        userID: state.auth.user.id,
        prerequisites: state.data.prerequisites,
    };
};

export default connect(mapStateToProps)(MainContainer);
