import {connect} from 'react-redux'
import NotificationSystem from './System'

const mapStateToProps = (state) => {
    return {
        notifications: state.notifications,
    }
};

export default connect(mapStateToProps)(NotificationSystem)