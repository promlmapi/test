import {connect} from 'react-redux'
import PageForgotPassword from './Page'

const mapStateToProps = (state) => {
    return {
        isAuthenticated : state.auth.isAuthenticated,
    }
};

export default connect(mapStateToProps)(PageForgotPassword)