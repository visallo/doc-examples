define([
    'react'
], function(React) {
    'use strict';

    const ExampleText = React.createClass({
        render() {
            const { vertex, propertyName, propertyKey } = this.props;
            return (
                <dl>
                    <dt>Name</dt>
                    <dd><code>{propertyName}</code></dd>
                    <dt>Key</dt>
                    <dd><code>{propertyKey}</code></dd>
                </dl>
            )
        }
    });

    return ExampleText;
});
