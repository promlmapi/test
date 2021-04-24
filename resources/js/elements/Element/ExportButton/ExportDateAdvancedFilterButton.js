import React from 'react';
import { translate } from 'react-i18next';
import { httpCallMake } from '../../../custom/Libraries/httpCall';
import ElementDropdown from '../Dropdown';

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

class ExportDateAdvancedFilterButton extends React.Component {

    constructor(props) {
        super(props);

        //State
        this.state = {
            isLoading: false,
        };

        this.exportFile = this.exportFile.bind(this);
    }

    exportFile({ fileType }) {

        //Show loading button
        this.setState({
            isLoading: true,
        });

        const { dateRangeFilters } = this.props['tableProps']? this.props['tableProps']: {};
        const filterdatestring = filterURIEncoded({ filters: dateRangeFilters});

        //Make API request
        return httpCallMake(this.props.apiUrl + '?file_type=' + fileType + '&filter='+ filterdatestring, 'get')
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
                        content: 'CSV',
                        onClick: this.exportFile,
                        param: {
                            fileType: 'csv'
                        }
                    },
                    {
                        content: 'PDF',
                        onClick: this.exportFile,
                        param: {
                            fileType: 'pdf'
                        }
                    },
                    {
                        content: 'XLS',
                        onClick: this.exportFile,
                        param: {
                            fileType: 'xls'
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

export default translate()(ExportDateAdvancedFilterButton);