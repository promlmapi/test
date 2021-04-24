import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import { firstRun } from '../../../../custom/Libraries/Page.js';
import ProfileForm from './Form';
import RebateEarning from './RebateEarning';

// libraries
import i18n from '../../../../i18n';

class Page extends React.Component {

    constructor(props) {

        super(props);

        //First run
        firstRun(props);
    }

    render() {

        return (
            <Grid divided='vertically' className="page-body">
                <Grid.Row columns={1} className="top-heading-row">
                    <Grid.Column>
                        <Header as='h2' className="top-heading">
                            {i18n.t('nav.header.links.profile.title')}                       
                        </Header>                      
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                    <Grid.Column >
                        <ProfileForm user={this.props.user}/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                    <Grid.Column >
                        <RebateEarning user={this.props.user}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default Page;
