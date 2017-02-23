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
            var { item, extension } = this.props,
                previous = item.configuration,
                configuration = { ...previous, count: (previous.count || 0) + 1 };

            console.log(previous.count, configuration.count)
            item = { ...item, configuration }
            this.props.configurationChanged({ item, extension })
        }
    });

    return ReactConfigExample;
});
