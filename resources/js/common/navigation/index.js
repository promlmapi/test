// import libs
import {connect} from 'react-redux'

// import component
import Page from './Page'

const mapStateToProps = state => {
    return {
        isAuthenticated : state.auth.isAuthenticated,
        userName : state.auth.user.first_name,
    }
};

export default connect(mapStateToProps)(Page)