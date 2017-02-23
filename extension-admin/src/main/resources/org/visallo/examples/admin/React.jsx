define([
    'react'
], function(React) {
    'use strict';

    const PropTypes = React.PropTypes;
    const ReactAdminExample = React.createClass({
        propTypes: {
        },
        render() {
            return (
                <div>Hello from React</div>
            )
        }
    });

    return ReactAdminExample;
});
