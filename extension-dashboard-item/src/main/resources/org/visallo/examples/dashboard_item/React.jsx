define([
    'react'
], function(React) {
    'use strict';

    const ReactDashboardItem = React.createClass({
        render() {
            const { item, extension } = this.props;
            const { configuration: { count } } = item;
            return (
                <div>
                    Hello World
                    Count is {count || 'Not Set'}
                </div>
            )
        }
    });

    return ReactDashboardItem;
});
