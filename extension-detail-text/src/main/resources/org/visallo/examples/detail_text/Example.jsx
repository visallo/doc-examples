define([
    'create-react-class'
], function(createReactClass) {
    'use strict';

    const ExampleText = createReactClass({
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
