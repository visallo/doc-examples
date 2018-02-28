define([
    'create-react-class'
], function(createReactClass) {
    'use strict';

    const ExampleText = createReactClass({
        render() {
            const { value, property, element } = this.props;
            const style = {};

            if (value === 'classified') {
                style.fontWeight = 'bold';
                style.color = 'orange';
            }

            return (
                <div className="visibility" style={style}>
                    {_.isUndefined(value) || value === '' ?
                        (<i>{i18n('visibility.blank')}</i>) :
                        value
                    }
                </div>
            );
        }
    });

    return ExampleText;
});
