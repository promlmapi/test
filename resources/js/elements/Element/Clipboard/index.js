import React from 'react';
import PropTypes from 'prop-types';
import { isSupported } from 'clipboard';

// Hooks
import withClipboard from '../../../custom/Hooks/WithClipboard';

class ElementClipboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hasCopied: false
        };
    }

    componentDidMount() {
        const {
            clipboard,
            text
        } = this.props;
        const button = this.button;

        // If supported
        if (isSupported()) {

            // Clipboard instance
            const Clipboard = clipboard;
            this.clipboard = new Clipboard(
                button, {
                text: () => text
            });

            const thisObject = this;
            this.clipboard.on('success', function (e) {
                thisObject.setState({
                    hasCopied: true
                });

                setTimeout(function () {
                    thisObject.setState({
                        hasCopied: false
                    });
                }, 3000);
            });
        }
    }

    componentWillUnmount() {
        if (this.clipboard) {
            this.clipboard.destroy();
        }
    }

    render() {
        const {
            buttonContent,
            ifNotSupported,
            text
        } = this.props;
        const { hasCopied } = this.state;

        return (
            <div className="element-clipboard">
                {
                    !isSupported()
                        ? ifNotSupported
                        : (
                            <a href={text} target="_blank" onClick={e => e.preventDefault()}>
                                <button
                                    className="ui link icon blue left labeled button basic mini compact element-clipboard__button"
                                    ref={(element) => { this.button = element }}
                                >
                                    <i
                                        aria-hidden="true"
                                        className={`${hasCopied ? 'check' : 'copy'} icon`}
                                    />
                                    {buttonContent}
                                </button>
                            </a>
                        )
                }
            </div>
        )
    }
};

ElementClipboard.defaultProps = {
    buttonContent: 'Copy Link'
};

ElementClipboard.propTypes = {
    buttonContent: PropTypes.string,
    clipboard: PropTypes.func.isRequired,
    ifNotSupported: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired
};

export default withClipboard(ElementClipboard);
