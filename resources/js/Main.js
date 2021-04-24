// Basics
import React from 'react';
import {Container} from 'semantic-ui-react';

// Libraries
import {getAppEnv} from './custom/Libraries/App';

// Views
import Navigation from './common/navigation';
// import FooterInfo from './common/footer/info';

class Main extends React.Component {

    render() {
        const {children} = this.props;

        return (
            <div>
                <Navigation {...this.props.children.props}/>
                <main className="main-body fadeIn animated">
                    <Container
                        className={
                            'main-container '
                            + (getAppEnv() === 'production' ? 'width-unset' : '')
                        }
                    >
                        {children}
                    </Container>
                    {/*<FooterInfo />*/}
                </main>
            </div>
        );
    }
}

export default Main;