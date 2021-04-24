import React from 'react'
import { connect } from 'react-redux'
import { Grid, Header, Divider } from 'semantic-ui-react'
import { firstRun } from '../../../../custom/Libraries/Page';
import ChangePasswordForm from './Form'
import { httpCallMake } from '../../../../custom/Libraries/httpCall'
import { responseValidate } from '../../../../custom/Libraries/Form';
import ElementPasswordFieldMessage from '../../../../elements/Element/PasswordFieldMessage';
import i18n from '../../../../i18n';

const PageComponent = props => {

    const { userID } = props;

    const submitFormHandler = (values, dispatch) => {

        return httpCallMake('user/' + userID + '/password/change', 'post', values)
            .then(data => {
                return responseValidate(data);
            }).then(data => {
                return data;
            });
    };

    return (
        <Grid divided='vertically' className="page-body">
            <Grid.Row columns={1} className="top-heading-row">
                <Grid.Column>
                    <Header as='h2' className="top-heading">
                    {i18n.t('nav.header.links.changepassword.title')}
                    </Header>
                </Grid.Column>
            </Grid.Row>
            <Divider hidden/>
            <Grid.Row columns={1}>
                <Grid.Column mobile={16} tablet={16} computer={16}>
                <Grid.Column >
                    <ElementPasswordFieldMessage />
                    <ChangePasswordForm onSubmit={submitFormHandler}/>
                </Grid.Column>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

class Page extends React.Component {

    constructor(props) {

        super(props);

        //First run
        firstRun(props);
    }

    render() {
        return (
            <PageComponent userID={this.props.userID}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userID : state.auth.user.id,
    }
};

export default connect(mapStateToProps)(Page);
