import React from 'react'
import {Grid, Header} from 'semantic-ui-react'

class Page extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <Grid
                textAlign='center'
                verticalAlign='middle'
            >
                <Grid.Column mobile={16} tablet={8} computer={8}>
                    <Header as="h1">Lost in space!</Header>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Page;