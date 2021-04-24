import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { notificationStyles } from '../../../sass/components/notificationStyles'
import Notifications from 'react-notification-system-redux';
import Http from '../../Http'
import { httpInterceptors } from '../../custom/Libraries/httpCall.js'

class NotificationSystem extends React.Component {

    constructor(props) {

        super(props);
    }
    
    componentDidMount() {
        httpInterceptors(Http);
    }

    render() {
        const {notifications} = this.props;

        return (
            <Notifications
                notifications={notifications}
                allowHTML={true}
                style={notificationStyles}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        notifications: state.notifications,
    }
};

NotificationSystem.propTypes = {
    notifications: PropTypes.array
};

export default connect(mapStateToProps)(NotificationSystem);
