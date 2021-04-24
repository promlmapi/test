import React from 'react';
import {Form} from 'semantic-ui-react';

export default class FileInput  extends React.Component{
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        const { input: { onChange } } = this.props;
        onChange(e.target.files);
    }

    render(){
        const { input: { value }, ...props } = this.props;
        const {input, name, label, key, required, meta, } = this.props;
        const {touched, error} = meta;

        return(
            <Form.Field
                error={!!(touched && error)}
                required={required}
            >
                <label>{ label }</label>
                <input
                    key={key}
                    onChange={this.onChange}
                    type="file"
                    multiple
                    accept='.jpg, .png, .jpeg'
                    {...props}
                />
                {touched && error && <div className="ui red pointing basic label">{error}</div>}
            </Form.Field>
        )
    }
}
