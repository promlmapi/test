import React from 'react';
import { translate } from 'react-i18next';
import { httpCallMake } from '../../../custom/Libraries/httpCall';
import ElementDropdown from '../Dropdown';
import { isEmpty } from 'lodash';

// URI encode filter values
const filterURIEncoded = ({ filters }) => {

    //Check if filters applied
    let filter = filters.reduce((acc, { columnName, operation, value }) => {
        acc.push(`["${columnName}", "${operation}", "${encodeURIComponent(value)}"]`);
        return acc;
    }, []);

    //If filter is applied
    if (filters.length > 0) {
        filter = `[${filter}]`;
    }

    return filter;
};

class ExportDateAdvancedOptionFilterButton extends React.Component {

    constructor(props) {
        super(props);

        //State
        this.state = {
            isLoading: false,
        };

        this.exportFile = this.exportFile.bind(this);
    }

    exportFile({ fileType, RequestType }) {

        //Show loading button
        this.setState({
            isLoading: true,
        });

        const { dateRangeFilters } = this.props['tableProps']? this.props['tableProps']: {};

        let advance_export_option       = '';
        let impersonated_user_option    = '';
        let URI                         = '';

        if(this.props['advancedExportOption'] != 'undefined'){
            advance_export_option = this.props['advancedExportOption']? this.props['advancedExportOption']: '';
        }

        if(this.props['location'] != 'undefined'){
            impersonated_user_option = this.props['location']? this.props['location']: '';
        }

        const filterDateString = filterURIEncoded({ filters: dateRangeFilters});

        if (typeof advance_export_option !== 'undefined' && !isEmpty(advance_export_option)) {
            URI = this.props.apiUrl + '?file_type=' + fileType+ '&request_type='+ RequestType + '&filter='+ filterDateString + '&advanced_option='+advance_export_option;
        }else if (typeof impersonated_user_option !== 'undefined' && !isEmpty(impersonated_user_option)) {
            URI = this.props.apiUrl + impersonated_user_option +'&file_type=' + fileType + '&request_type='+ RequestType + '&filter='+ filterDateString;

        } else {
            URI = this.props.apiUrl + '?file_type=' + fileType + '&filter='+ filterDateString + '&request_type='+ RequestType;
        }

    
        //Make API request
        return httpCallMake(URI, 'get')
            .then(() => {

                //Stop loading button
                this.setState({
                    isLoading: false,
                });
            });
    }

    render() {
        const { isLoading } = this.state;

        return (
            <ElementDropdown
                headerTitle='Choose format'
                icon='file'
                items={[
                    {
                        content: 'CSV-All',
                        onClick: this.exportFile,
                        param: {
                            fileType: 'csv',
                            RequestType: 'csv-all'
                        }
                    },
                    {
                        content: 'CSV-Paid',
                        onClick: this.exportFile,
                        param: {
                            fileType: 'csv',
                            RequestType: 'csv-paid'
                        }
                    },
                    {
                        content: 'PDF',
                        onClick: this.exportFile,
                        param: {
                            fileType: 'pdf',
                            RequestType: 'pdf-all'
                        }
                    },
                    {
                        content: 'XLS',
                        onClick: this.exportFile,
                        param: {
                            fileType: 'xls',
                            RequestType: 'xls-all'

                        }
                    },
                ]}
                loading={isLoading}
                title='Export'
                width={105}
            />
        );
    }
};

export default translate()(ExportDateAdvancedOptionFilterButton);