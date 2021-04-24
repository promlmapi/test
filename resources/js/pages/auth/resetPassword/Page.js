import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {firstRun} from '../../../custom/Libraries/Page.js';
import {responseValidate} from '../../../custom/Libraries/Form';
import PageResetPasswordForm from './Form'
import { httpCallMake } from '../../../custom/Libraries/httpCall.js'
import * as action from '../../../store/actions/index.js'
import { ConfigAppPage } from '../../../custom/Configs/Page';
import ElementPasswordFieldMessage from '../../../elements/Element/PasswordFieldMessage';

class PageResetPassword extends React.Component {

    constructor(props) {

        super(props);

        //First run
        firstRun(this.props);
    }

    render() {
        const { isAuthenticated, userID } = this.props;

        const submitFormHandler = (values, dispatch) => {

            let token ='';
            let URL = location.search;
            if (typeof URL !== 'undefined' && !_.isEmpty(URL)) {
                let tokenArray= URL.split("=");
                token = tokenArray[1]?tokenArray[1]:false;
            } 

            return httpCallMake('user/password/verify-token/'+token, 'post', values)
                .then(data => {
                    return responseValidate(data);
                }).then(data => {
                    window.location.href = "/login";
                });
        };

        return (
            <div>
                <Grid
                    textAlign='center'
                    verticalAlign='middle'
                    centered
                >
                    <Grid.Column mobile={16} tablet={10} computer={8}>
                        <Header as='h2' textAlign='center'>
                            Reset Password
                        </Header>
                        <ElementPasswordFieldMessage />
                        <PageResetPasswordForm onSubmit={submitFormHandler}/>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        isAuthenticated : state.auth.isAuthenticated,
        userID : state.auth.user.id,
    }
};

export default connect(mapStateToProps)(PageResetPassword);
