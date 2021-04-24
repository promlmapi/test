import React from 'react';
import {Button, TransitionablePortal, Container, Label, Grid} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {isEmpty} from 'lodash';

// Libraries
import {getAppEnv} from '../../custom/Libraries/App';
import {getAccountsInfo} from '../../custom/Libraries/Utility.js';
import i18n from '../../i18n';

//Get global contacts
const globalContact = getAccountsInfo('global');

class FooterInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        };

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleOpen() {
        this.setState({open: true})
    }

    handleClose() {
        this.setState({open: false})
    }

    render() {
        const {prerequisites} = this.props;

        //Check if we can show footer
        let showFooter = prerequisites.hasOwnProperty('logs_deployment') && !isEmpty(prerequisites['logs_deployment']);

        return (
            <div className="main-footer">
                {
                    showFooter &&
                    <Container className="footer-container">
                        <TransitionablePortal
                            closeOnTriggerClick
                            onOpen={this.handleOpen}
                            onClose={this.handleClose}
                            openOnTriggerClick
                            trigger={
                                <Button className="info-button" circular icon='info' size='mini' basic color='blue'/>
                            }
                        >
                            <Label className="footer-info-label">
                                App version
                                <Label.Detail>v{prerequisites['logs_deployment']['tag']}</Label.Detail>
                                &nbsp; &nbsp; Last deployed at
                                <Label.Detail>{prerequisites['logs_deployment']['created_at_formatted']}</Label.Detail>
                            </Label>
                        </TransitionablePortal>
                    </Container>
                }

                <Container className={getAppEnv() === 'production' ? 'width-unset' : ''}>
                    <div className="footer">
                        <div className="footer-top">
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column mobile={16} tablet={8} computer={8}>
                                        <div className="info-col">
                                            <p> {i18n.t('nav.header.links.callus.title')}: </p>
                                            <a href={ globalContact.phone.link }>
                                                <p className="mb-5">
                                                    <strong>
                                                        {globalContact.phone.visible}
                                                    </strong>
                                                </p>
                                            </a>
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column mobile={16} tablet={8} computer={8} floated="right">
                                        <div className="info-col right">
                                            <p> {i18n.t('nav.header.links.email.title')}: </p>
                                            <a href={ globalContact.email.link }>
                                                <p>
                                                    <strong>
                                                        {globalContact.email.visible}
                                                    </strong>
                                                </p>
                                            </a>
                                        </div>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </div>
                        <div className="footer-content hide">
                            <div className="footer-top">
                                <Grid>
                                    <Grid.Row>
                                        <Grid.Column mobile={16} tablet={7} computer={7}>
                                            <div className="info-col">
                                                <p> Call us: </p>
                                                <p className="mb-5"><strong>+61 2 8252 6800</strong></p>
                                                <p> Email: </p>
                                                <p><strong>support@fpmarket.com</strong></p>
                                            </div>
                                        </Grid.Column>
                                        <Grid.Column mobile={16} tablet={3} computer={3}>
                                            <div className="footer-widget">
                                                <h5> Quick Links</h5>
                                                <ul>
                                                    <li><a href="#">Client Log In</a></li>
                                                    <li><a href="#">Open New Account</a></li>
                                                    <li><a href="#">Why FP Markets?</a></li>
                                                    <li><a href="#">Account Types</a></li>
                                                </ul>
                                            </div>
                                        </Grid.Column>
                                        <Grid.Column mobile={16} tablet={3} computer={3}>
                                            <div className="footer-widget">
                                                <h5> Trade</h5>
                                                <ul>
                                                    <li><a href="#">Tools & Platforms</a></li>
                                                    <li><a href="#">Web Platforms</a></li>
                                                    <li><a href="#">Mobile Platforms</a></li>
                                                </ul>
                                            </div>
                                        </Grid.Column>
                                        <Grid.Column mobile={16} tablet={3} computer={3}>
                                            <div className="footer-widget">
                                                <h5> Services</h5>
                                                <ul>
                                                    <li><a href="#">Email us</a></li>
                                                    <li><a href="#">Funding</a></li>
                                                    <li><a href="#">FAQs</a></li>
                                                </ul>
                                            </div>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </div>
                            <div className="footer-middle">
                                <Grid>
                                    <Grid.Row>
                                        <Grid.Column mobile={16} tablet={7} computer={7}>
                                            <div className="footer-nav">
                                                <ul>
                                                    <li><a href="#">Privacy Policy</a></li>
                                                    <li><a href="#">Terms & Conditions </a></li>
                                                </ul>
                                            </div>
                                        </Grid.Column>
                                        <Grid.Column mobile={16} tablet={5} computer={5} floated="right">
                                            <p> &copy; FP Markets 2018</p>
                                        </Grid.Column>

                                    </Grid.Row>
                                </Grid>
                            </div>
                            <div className="footer-bottom">
                                <p>FIRST PRUDENTIAL MARKETS PTY LTD DISCLAIMER</p>
                                <p className="mb-3">Commission, interest, platform fees, dividends,
                                    variation margin and other fees and charges may apply to financial products or
                                    services available from First Prudential Markets Pty Ltd. The information in this
                                    website has been prepared without taking into account your personal objectives,
                                    financial situation or needs. You should consider the information in light of your
                                    objectives, financial situation and needs before making any decision about whether
                                    to acquire or dispose of any financial product. Derivatives can be risky; losses can
                                    exceed your initial payment and you must be able to meet all margin calls as soon as
                                    they are made. When trading Contract for Difference (CFD) you do not own or have any
                                    rights to the CFDs underlying assets. FP Markets recommends that you seek
                                    independent
                                    advice from an appropriately qualified person before deciding to invest in or
                                    dispose of a
                                    derivative. A Product Disclosure Statement for each of the financial products
                                    available
                                    from FP Markets can be obtained either from this website or on request from our
                                    offices
                                    and should be considered before entering into transactions with us. First Prudential
                                    Markets Pty Ltd (ABN 16 112 600 281, AFS Licence No. 286354).</p>

                                <p>*Highest overall client satisfaction. Investment trends 2016 Australia CFD
                                    Report. </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        prerequisites: state.data.prerequisites,
    }
};

export default connect(mapStateToProps)(FooterInfo);