import React, { Component } from "react";
import ClipboardJS from 'clipboard';

export default function withClipboard(WrappedComponent) {
    return class extends Component {

        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    clipboard={ClipboardJS}
                />
            );
        }
    };
}
