define([
    'public/v1/api',
    'util/popovers/withPopover'
], function(
    api,
    withPopover) {

    return api.defineComponent(DecorationPopover, withPopover);

    function DecorationPopover() {

        this.before('initialize', function(node, config) {
            config.template = '/org/visallo/examples/graph_node_decoration/template'
            this.after('setupWithTemplate', function() {
            })
        });
    }
});
