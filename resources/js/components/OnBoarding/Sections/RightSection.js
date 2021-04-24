import React from 'react'
import {Grid, Image} from 'semantic-ui-react'
import {getTranslation, assetPath, getAccountsInfo} from '../../../custom/Libraries/Utility.js';
import {translate} from 'react-i18next';

const OnBoardingRightSection = props => {

    //Get support info for help block
    let supportAccount = getAccountsInfo('support');

    return (
        <Grid.Column mobile={16} tablet={8} computer={8} className="on-boarding-right" floated='right'>
            <div className="list-features">
                <ul>
                    <li>
                        <div className="list-img">
                            <div className="list-img-center">
                                <span>
                                    <Image src={assetPath('icons/bonus.png')} alt="Bonus"
                                           title="Bonus"/>
                                </span>
                            </div>
                        </div>
                        <div className="list-text">
                            <h5>{ getTranslation('register.right.wideRange.title', 4) }</h5>
                            <p>{ getTranslation('register.right.wideRange.desc', 4) }</p>
                        </div>
                    </li>
                    <li>
                        <div className="list-img">
                            <div className="list-img-center">
                                <span>
                                    <Image src={assetPath('icons/client-satisfaction.png')}
                                           alt="Client Satisfaction" title="Client Satisfaction"/>
                                </span>
                            </div>
                        </div>
                        <div className="list-text">
                            <h5>{ getTranslation('register.right.clientSatisfaction.title', 4) }</h5>
                            <p>{ getTranslation('register.right.clientSatisfaction.desc', 4) }</p>
                        </div>
                    </li>
                    <li>
                        <div className="list-img">
                            <div className="list-img-center">
                                <span>
                                    <Image src={assetPath('icons/fast-execution.png')}
                                           alt="Fast Execution"
                                           title="Fast Execution"/>
                                </span>
                            </div>
                        </div>
                        <div className="list-text">
                            <h5>{ getTranslation('register.right.fastExecution.title', 4) }</h5>
                            <p>{ getTranslation('register.right.fastExecution.desc', 4) }</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="help-area">
                <h4>{ getTranslation('register.right.hereToHelp.title', 4) }</h4>
                <p>{ getTranslation('register.right.hereToHelp.desc', 4) }</p>
                <ul>
                    <li>
                        <a href={ supportAccount.phone.link } title="Call US">
                            <span>
                                <Image src="images/icons/call.png" alt="Call Us" title="Call Us"/>
                            </span>
                            { supportAccount.phone.visible }
                        </a>
                    </li>
                    <li>
                        <a href={ supportAccount.email.link } title="Mail Us">
                            <span>
                                <Image src="images/icons/mail.png" alt="Mail Us" title="Mail Us"/>
                            </span>
                            { supportAccount.email.visible }
                        </a>
                    </li>
                </ul>
            </div>
        </Grid.Column>
    );
};

export default translate()(OnBoardingRightSection)