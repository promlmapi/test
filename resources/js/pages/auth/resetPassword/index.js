import {connect} from 'react-redux'
import PageResetPassword from './Page'

const mapStateToProps = (state) => {
    return {
        isAuthenticated : state.auth.isAuthenticated,
    }
};

export default connect(mapStateToProps)(PageResetPassword)