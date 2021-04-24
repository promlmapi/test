import React from 'react'
import { Input } from 'semantic-ui-react'

class ReferralDetail extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        const { resourceDetail } = this.props;

        let referralIB = "";
        if (typeof resourceDetail !== 'undefined' && resourceDetail.hasOwnProperty('user') && !_.isEmpty(resourceDetail.user.ib_metadata)) {
            referralIB = resourceDetail.user.ib_metadata.referrer_rebate_account_code? resourceDetail.user.ib_metadata.referrer_rebate_account_code: '';
        }

        return (
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
                defaultValue={referralIB}
                readOnly
            />
        )
    }

}
export default ReferralDetail