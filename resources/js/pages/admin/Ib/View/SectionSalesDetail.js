import React from 'react'
import { connect } from 'react-redux'
import { Button, Transition, Comment, Form, Header, Divider, Feed, Icon, Label, Item, Segment, Image } from 'semantic-ui-react';
import { httpCallMake } from '../../../../custom/Libraries/httpCall';
import { responseValidate } from '../../../../custom/Libraries/Form';

//views
import AtomPageHeading from '../../../../elements/Element/PageHeading';
import CommentSectionForm  from './Comment/Form';


class PageComponent extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            visible:false
        }

        //bind
        this.submitFormHandler  = this.submitFormHandler.bind(this);
        this.toggleVisibility   = this.toggleVisibility.bind(this);
    }

    submitFormHandler(values, dispatch){

        const { metaData } = this.props;
        if (typeof metaData !== 'undefined'  && !_.isEmpty(metaData)) {
            let resourceID = metaData.id;
            return httpCallMake('admin/comment/sales-status-note/' + resourceID, 'post', values)
                .then(data => {
                    return responseValidate(data);
                }).then(data => {
                    window.location.reload(false);
                    return data;
                });
        } 
    };

    toggleVisibility(){
        this.setState((prevState) => ({ visible: !prevState.visible }))
    }

    
    render() {


    const { metaData } = this.props;

    let IBnote = "";
    let IBSalesDetails = {};

    if (typeof metaData !== 'undefined' && !_.isEmpty(metaData)) {
        IBnote          = (metaData.note)? metaData.note: '';
        IBSalesDetails  = { 'comment': IBnote};
    }


        return (

        <div>
            <AtomPageHeading
                title="Sales comment"
                withDivider
                dividerClassName=""
            />
            <Item.Group divided>
                <Item>
                    <Item.Content>
                        <Button
                            size='mini'
                            icon={this.state.visible ? 'close' : 'edit'}
                            content={this.state.visible ? 'close' : 'edit'}
                            onClick={this.toggleVisibility}
                        />
                        <Item.Extra>
                            <Feed>
                                <Feed.Event>
                                    <Feed.Label>
                                        <Icon name='pencil'/>
                                    </Feed.Label>
                                    <Feed.Content>
                                        <Feed.Summary>
                                        { (metaData.note) ? metaData.note: <Image src='/images/pages/dummy_paragraph.png' />}
                                        </Feed.Summary>
                                    </Feed.Content>
                                </Feed.Event>
                            </Feed>
                        </Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group>
           
            { this.state.visible? 
                <CommentSectionForm initialValues={IBSalesDetails} onSubmit={this.submitFormHandler}/>
                : ''}                
            
        </div>
       );
    }
};


class SectionSalesDetail extends React.Component {

    constructor(props) {

        super(props);
    }

    render() {
        return (
            <PageComponent metaData={this.props.metaData}/>
        );
    }
}


export default SectionSalesDetail;