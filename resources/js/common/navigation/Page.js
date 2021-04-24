import React from 'react';
import {connect} from 'react-redux'
import {NavLink, Link, Redirect} from 'react-router-dom';
import {Button, Container, Dropdown, Image, Menu, Responsive, Segment, Flag} from 'semantic-ui-react';
import i18n from '../../i18n';
import ConfigLayout from '../../custom/Configs/Layout';
import {translate} from 'react-i18next';
import * as action from '../../store/actions/index'
import {ConfigAppPage} from '../../custom/Configs/Page';
import * as dataAction from '../../store/actions/data'
import * as adminAction from '../../store/actions/admin'
import {Icon} from 'semantic-ui-react'

// Libraries
import {getAppEnv} from '../../custom/Libraries/App';
import {assetPath} from '../../custom/Libraries/Utility';
import {httpCallMake} from '../../custom/Libraries/httpCall'
import {responseValidate} from '../../custom/Libraries/Form';
import {checkPageOnBoarding, logoutAndReset} from '../../custom/Libraries/Page';

//Constants
const assetLogo = assetPath('logo.png');
const indexRoute = ConfigAppPage.index.route;
const dashboardRoute = ConfigAppPage.profile.route;

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logOutDone: false,
            value:'en',
        };
        this.handleLogout = this.handleLogout.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleLogout() {
        // event.preventDefault();
        const {userID, dispatch} = this.props;

        return httpCallMake('user/' + userID + '/logout', 'get')
            .then(data => {

                return responseValidate(data);
            }).then(data => {

                //Set state as logged out
                this.setState({
                    logOutDone: true,                    
                });

                //Logout and reset data
                logoutAndReset();
            });
    }

    handleChange(event) {       
        i18n.changeLanguage(event.target.value);
        localStorage.setItem('selectedlang', event.target.value);
        return httpCallMake('user/updatelocale/'+event.target.value, 'get')
            .then(data => {
                return responseValidate(data);
            }).then(data => {
               //console.log('locale updated');
               window.location.reload();
            });
    }

    componentDidMount() {
      const selectedlang = localStorage.getItem('selectedlang');
      this.setState({value: selectedlang});
    }

    render() {
        const {isAuthenticated} = this.props;

        //If user logged out
        if (this.state.logOutDone) {
            return (
                <Redirect to={indexRoute}/>
            )
        }

        //On-boarding step
        let isOnBoardingStep = false;
        let logoLink = isAuthenticated ? dashboardRoute : indexRoute;

        //If the page routes are on-boarding steps
        if (checkPageOnBoarding(this.props.location.pathname)) {

            //Setting it to true
            isOnBoardingStep = true;

            //Updating logo link
            logoLink = indexRoute;
        }

        
        const selectboxstyle = {
          float: 'left',
          width:'auto'
        };

        return (
            <div id="header">

                <Responsive as={Segment} className="navbar">
                    <Container className={getAppEnv() === 'production' ? 'w-100 p-0' : ''}>
                        <Menu pointing secondary size='large'>
                            <Menu.Item as={Link} to={logoLink} className="logo" replace>
                                <Image src={assetLogo} alt="Logo"/>
                            </Menu.Item>
                            <Menu.Menu position='right'>
                                {
                                    this.props.isAuthenticated
                                        ?
                                        !isOnBoardingStep &&
                                        <div>
                                            <select style={selectboxstyle} className="ui fluid button mr-3 small-bnt" value={this.state.value} onChange={this.handleChange}>
                                                <option value="">Select Language</option>
                                                <option value="ar">العربية‏</option>
                                                <option value="en">English</option>
                                                <option value="es">Español</option>
                                                <option value="fr">Français</option>
                                                <option value="zh">中文 (简体)</option>
                                                <option value="gr">Deutsch</option>
                                                <option value="pr">Português</option>
                                                <option value="po">Polski</option>
                                                <option value="rs">русский</option>
                                                <option value="ms">Bahasa Melayu</option>
                                                <option value="vi">Vietnamese</option>
												<option value="it">Italian</option>
                                                <option value="ko">Korean</option>
                                            </select>
                                            <Link to={dashboardRoute} className="user-profile-link">
                                                <span className="user-name"> <Icon
                                                    name='user outline'/> {this.props.userName}</span>
                                            </Link>
                                            <Button className="small-bnt" fluid onClick={this.handleLogout}
                                                    key='logout'>
                                                <Icon name='sign-out'/> {i18n.t('nav.header.links.logout.title')}
                                            </Button>
                                        </div>

                                        :

                                        <div>
                                            <select style={selectboxstyle} className="ui fluid button mr-3 small-bnt" value={this.state.value} onChange={this.handleChange}>
                                                <option value="">Select Language</option>
                                                <option value="ar">العربية‏</option>
                                                <option value="en">English</option>
                                                <option value="es">Español</option>
                                                <option value="fr">Français</option>
                                                <option value="zh">中文 (简体)</option>
                                                <option value="gr">Deutsch</option>
                                                <option value="pr">Português</option>
                                                <option value="po">Polski</option>
                                                <option value="rs">русский</option>
                                                <option value="ms">Bahasa Melayu</option>
                                                <option value="vi">Vietnamese</option>
												<option value="it">Italian</option>
                                                <option value="ko">Korean</option>
                                            </select>

                                            <Button className="mr-3 small-bnt" as={Link}
                                                    to={ConfigLayout.nav.header.links.login.link} fluid>
                                                {i18n.t('nav.header.links.login.title')}
                                            </Button>
                                            <Button className="small-bnt" as={Link}
                                                    to={ConfigLayout.nav.header.links.register.link} fluid>
                                                {i18n.t('nav.header.links.register.title')}
                                            </Button>
                                        </div>

                                }
                            </Menu.Menu>
                        </Menu>
                    </Container>
                </Responsive>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userID: state.auth.user.id,
    }
};

export default connect(mapStateToProps)(translate('layout')(Page));
