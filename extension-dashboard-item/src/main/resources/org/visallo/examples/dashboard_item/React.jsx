define([
    'create-react-class'
], function(createReactClass) {
    'use strict';

    const ReactDashboardItem = createReactClass({
        componentDidMount() {
            const { item, extension } = this.props;
            $(this.refs.wrap.parentNode).on('refreshData', (event) => {
                this.props.configurationChanged({
                    item: { ...item, configuration: { ...item.configuration, count: 0 } },
                    extension
                })
            });
        },
        componentWillUnmount() {
            $(this.refs.wrap.parentNode).off('refreshData');
        },
        render() {
            const { item, extension } = this.props;
            const { configuration: { count } } = item;
            return (
                <div ref="wrap">
                    Hello World
                    Count is {count || 'Not Set'}
                </div>
            )
        }
    });

    return ReactDashboardItem;
});
