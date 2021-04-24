import React from 'react'
import { connect } from 'react-redux'
import { Button, Comment, Form, Header, Divider, Feed, Icon, Label, Item, Segment, Image } from 'semantic-ui-react';
import { firstRun } from '../../../../../custom/Libraries/Page';
import { httpCallMake } from '../../../../../custom/Libraries/httpCall'
import { responseValidate } from '../../../../../custom/Libraries/Form';

import CommentSectionForm  from './Form';

const PageComponent = props => {

    const { resourceDetail } = props;

    let status = "";
    let IBnote = "";
    let IBSalesStatus = '';
    let IBSSalestatusColor = '';
    let IBSalesDetails = {};

    if (typeof resourceDetail !== 'undefined' && resourceDetail.hasOwnProperty('user') && !_.isEmpty(resourceDetail.user.ib_metadata)) {
        status          = (resourceDetail.user.ib_metadata.sales_status)? resourceDetail.user.ib_metadata.sales_status: 'not_yet_review';
        IBnote          = (resourceDetail.user.ib_metadata.note)? resourceDetail.user.ib_metadata.note: '';
        IBSalesDetails  = { 'sales_status': status, 'comment': IBnote};
    }

    // ***********Sales Status******************
    let salesStatus = {};
    let salesStatusColor = {};
    if((typeof resourceDetail != 'undefined') && resourceDetail.hasOwnProperty('sales_status')  && !_.isEmpty(resourceDetail.sales_status) ){
        _.forEach(resourceDetail.sales_status, function(value) {
            //Merge rules
            _.assign(salesStatus, {
                [value.code]: value.name,
            });
            _.assign(salesStatusColor, {
                [value.code]: value.color,
            });
        });
    }
    IBSalesStatus       = salesStatus[status]?      salesStatus[status]      : salesStatus['not_yet_review'];
    IBSSalestatusColor  = salesStatusColor[status]? salesStatusColor[status] : salesStatusColor['not_yet_review'];

    const submitFormHandler = (values, dispatch) => {

        const { resourceDetail } = props;
        if (typeof resourceDetail !== 'undefined' && resourceDetail.hasOwnProperty('user') && !_.isEmpty(resourceDetail.user.ib_metadata)) {
            let resourceID = resourceDetail.user.ib_metadata.id;

            return httpCallMake('admin/comment/sales-status-note/' + resourceID, 'post', values)
                .then(data => {
                    return responseValidate(data);
                }).then(data => {
                    window.location.reload(false);
                    return data;
                });
        } 
    };

    
    return (

        <Comment.Group>
            <Header as='h3' dividing>
            Sales Status & Comments
            </Header>
            {/* This is Account Owner & Sales status */}
            <Item.Group divided>
                <Item>
                    <Item.Content>
                        <Item.Description>
                            <Label as='a' color={IBSSalestatusColor} image>
                                Sales Status:
                                <Label.Detail>{IBSalesStatus}</Label.Detail>
                            </Label>
                        </Item.Description>
                        <Item.Extra>
                            <Feed>
                                <Feed.Event>
                                    <Feed.Label>
                                        <Icon name='pencil' />
                                    </Feed.Label>
                                    <Feed.Content>
                                        <Feed.Summary>
                                            {IBnote? IBnote :<Image src='/images/pages/dummy_paragraph.png' />}
                                        </Feed.Summary>
                                    </Feed.Content>
                                </Feed.Event>
                            </Feed>
                        </Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group>
            {/* This is Account Owner & Sales status */}
            <Divider hidden />
            <CommentSectionForm initialValues={IBSalesDetails} onSubmit={submitFormHandler}/>
        </Comment.Group>
    );
};

class CommentPage extends React.Component {

    constructor(props) {

        super(props);
    }

    render() {
        return (
            <PageComponent resourceDetail={this.props.resourceDetail}/>
        );
    }
}


export default CommentPage;
