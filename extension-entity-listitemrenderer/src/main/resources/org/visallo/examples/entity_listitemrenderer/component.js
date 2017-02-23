define([
    'public/v1/api',
    'hbs!./template'
], function(
    api,
    template) {

    return api.defineComponent(ListItemExample);

    function ListItemExample() {

        this.after('initialize', function() {
            var $node = this.$node;
            var item = this.attr.item;
            var usageContext = this.attr.usageContext;

            api.connect().then(function(connected) {
                $node.html(template({
                    item: item,
                    usageContext: usageContext,
                    title: connected.formatters.vertex.title(item)
                }));
            })

            $node.data('vertexId', item.id);
        });

    }
});
