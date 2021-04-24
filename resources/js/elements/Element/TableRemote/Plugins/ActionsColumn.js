import React from 'react'
import PropTypes from 'prop-types'
import { Button, Icon } from 'semantic-ui-react'
import {Getter, Template, Plugin} from '@devexpress/dx-react-core'
import {
    Table,
} from '@devexpress/dx-react-grid-bootstrap4'
import ActionButton from '../ActionButton/ActionButton';

const pluginDependencies = [
    {name: 'Table'},
];

const ACTIONS_COLUMN_TYPE = 'actions_column';
const TABLE_HEADING_TYPE = 'heading';

function tableColumnsWithActions(tableColumns, width) {
    return [...tableColumns, {key: ACTIONS_COLUMN_TYPE, type: ACTIONS_COLUMN_TYPE, width: width, fixed: 'right', align: 'center'}];
}

function isHeadingActionsTableCell(tableRow, tableColumn) {
    return (tableRow.type === TABLE_HEADING_TYPE || tableRow.type.toString() === 'Symbol(heading)') && tableColumn.type === ACTIONS_COLUMN_TYPE;
}

function isActionsTableCell(tableRow, tableColumn) {
    return tableRow.type !== TABLE_HEADING_TYPE && tableColumn.type === ACTIONS_COLUMN_TYPE;

}

export class TableRemotePluginActionsColumn extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.setState({
            loading: false,
        });
    }

    handleClick(){
        this.setState({
            loading: true,
        });
    }

    render() {
        const {
            actions,
            width,
            apiUrl,
        } = this.props;
        const tableColumnsComputed = ({tableColumns}) => tableColumnsWithActions(tableColumns, width);

        return (
            <Plugin
                name="ActionsColumn"
                dependencies={pluginDependencies}
            >
                <Getter name="tableColumns" computed={tableColumnsComputed}/>

                <Template
                    name="tableCell"
                    predicate={({tableRow, tableColumn}) =>
                        isHeadingActionsTableCell(tableRow, tableColumn)}
                >
                    <Table.Cell>Actions</Table.Cell>
                </Template>
                <Template
                    name="tableCell"
                    predicate={({tableRow, tableColumn}) => isActionsTableCell(tableRow, tableColumn)}
                >
                    {params => (
                        <Table.Cell {...params} row={params.tableRow.row}>
                            <ActionButton actions={actions} apiUrl={apiUrl} tableRow={params.tableRow}/>
                        </Table.Cell>
                    )}
                </Template>
            </Plugin>
        );
    }
}

TableRemotePluginActionsColumn.propTypes = {
    actions: PropTypes.arrayOf(PropTypes.PropTypes.shape({
        icon: PropTypes.node,
        action: PropTypes.func.isRequired
    })).isRequired,
    width: PropTypes.number
};

TableRemotePluginActionsColumn.defaultProps = {
    width: 85,
};
