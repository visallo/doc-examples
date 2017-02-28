define([
    'react'
], function(React) {
    'use strict';

    const ReactConfigExample = React.createClass({
        render() {
            return (
                <button style={{display: 'block'}}
                    className="btn" 
                    onClick={this.onClick}>Increment</button>
            )
        },
        onClick() {
            const { item, extension } = this.props;
            const { configuration:previous } = item;
            const configuration = { ...previous, count: (previous.count || 0) + 1 };

            this.props.configurationChanged({
                item: { ...item, configuration },
                extension
            })
        }
    });

    return ReactConfigExample;
});
