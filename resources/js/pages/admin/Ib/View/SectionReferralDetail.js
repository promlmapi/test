import React from 'react'
import { Input } from 'semantic-ui-react';

//views
import AtomPageHeading from '../../../../elements/Element/PageHeading';

class SectionReferralDetail extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        const { metaData } = this.props;

        let referralAccountCode = "";
        if (typeof metaData !== 'undefined' && !_.isEmpty(metaData)) {
            referralAccountCode = metaData.referrer_rebate_link? metaData.referrer_rebate_account_code: '';
        }

        return (
            <div>
                <AtomPageHeading
                    title='Referral IB'
                    withDivider
                />
                <Input
                    action={{
                    color: 'blue',
                    labelPosition: 'left',
                    icon: 'group',
                    content: 'Referral IB',
                    }}
                    fluid
                    actionPosition='left'
                    placeholder='Referral IB...'
                    defaultValue={referralAccountCode}
                    readOnly
                />
            </div>
            
        )
    }

}
export default SectionReferralDetail