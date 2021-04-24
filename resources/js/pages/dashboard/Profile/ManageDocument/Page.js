import React from 'react'
import {connect} from 'react-redux'
import {Grid, Header, Table, Icon} from 'semantic-ui-react'
import {firstRun} from '../../../../custom/Libraries/Page';
import SaveDocumentForm from './Form'
import {httpCallMake} from '../../../../custom/Libraries/httpCall'
import {responseValidate} from '../../../../custom/Libraries/Form';
import {dataGetDocumentListingTable} from '../../../../custom/Libraries/Data';
import * as dataService from '../../../../services/dataService'
import _ from 'lodash';
import BasicField from '../../../../custom/Basics/Field';
import i18n from '../../../../i18n';

const PageComponent = allProps => {

    const {userID, userDocuments, prerequisites, props} = allProps;

    //Submit handler
    const submitFormHandler = (values, dispatch) => {

        let formData = new FormData();

        //If files have been uploaded
        const filedDocumentName = BasicField.document.name;
        if (!_.isEmpty(values[filedDocumentName])) {
            _.forEach(values[filedDocumentName], function (row, index) {
                formData.append(BasicField.document.name + '[' + index + ']', row);
            })
        }

        formData.append(BasicField.documentType.name, values[BasicField.documentType.name]);
        formData.append(BasicField.uploadReason.name, values[BasicField.uploadReason.name]);

        return httpCallMake('user/' + userID + '/supporting-documents', 'post', formData)
            .then(data => {
                return responseValidate(data);
            }).then(data => {
                return data;
            });
    };

    //Remove button handler
    const handleClick = (documentID) => {

        //Delete document file
        return httpCallMake('user/' + userID + '/supporting-documents/' + documentID, 'delete')
            .then(data => {
                return responseValidate(data);
            }).then(data => {

                //Update user documents
                props.dispatch(dataService.dataGetUserDocuments(userID));
            });
    };

    // Legal documents
    const legalDocuments = _.get(prerequisites, 'basics_fp_documents.ib_contracts');

    return (
        <Grid divided='vertically' className="page-body">
            <Grid.Row columns={1} className="top-heading-row">
                <Grid.Column>
                    <Header as='h2' className="top-heading">
                    {i18n.t('nav.header.links.managedocuments.title')}
                    </Header>
                </Grid.Column>
            </Grid.Row>
            
            <Grid.Row columns={1} className="manage-documents-content">
                <Grid.Column mobile={16} tablet={16} computer={16}>
                {
                    !_.isEmpty(legalDocuments) &&
                    <Grid.Column>
                        <Header as='h3' className="page-heading">
                        {i18n.t('nav.header.links.contractfpmarkets.title')}
                        </Header>
                        {
                            dataGetDocumentListingTable(
                                legalDocuments,
                                ['upload_reason', 'verification_status', 'actions'],
                                null,
                                {title: 'Format', value: 'PDF'}
                            )
                        }
                    </Grid.Column>
                }
                {
                    !_.isEmpty(userDocuments) &&
                    <Grid.Column className="my-5">
                        <Header as='h3' className="page-heading">
                        {i18n.t('nav.header.links.uploadeddocuments.title')}
                        </Header>
                        { dataGetDocumentListingTable(userDocuments, [], handleClick) }
                    </Grid.Column>
                }
                <Grid.Column>
                    <SaveDocumentForm userID={userID} userDocuments={userDocuments} onSubmit={submitFormHandler}/>
                </Grid.Column>
                </Grid.Column>
            </Grid.Row>
            
        </Grid>
    );
};

class Page extends React.Component {

    constructor(props) {

        super(props);

        //First run
        firstRun(props);
    }

    componentDidMount() {

        //Get supporting documents list
        this.props.dispatch(dataService.dataSupportingDocumentUpdate(this.props.userID));

        //Get user documents
        this.props.dispatch(dataService.dataGetUserDocuments(this.props.userID));
    }

    render() {
        const {userID, userDocuments, prerequisites} = this.props;

        return (
            <PageComponent userID={userID} userDocuments={userDocuments} prerequisites={prerequisites} props={this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        prerequisites: state.data.prerequisites,
        userID: state.auth.user.id,
        userDocuments: state.data.userDocuments,
    }
};

export default connect(mapStateToProps)(Page);
