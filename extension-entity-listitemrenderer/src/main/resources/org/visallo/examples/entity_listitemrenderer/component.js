define([
    'public/v1/api',
    './template.hbs'
], function(
    api,
    template) {

    return api.defineComponent(ListItemExample);

    function ListItemExample() {

        this.attributes({
            item: null,
            usageContext: null,
            imgSelector: '.img'
        });

        this.after('initialize', function() {
            var $node = this.$node;
            var item = this.attr.item;
            var usageContext = this.attr.usageContext;

            api.connect().then(function(connected) {
                $node
                    .addClass('example-renderer')
                    .html(template({
                        item: item,
                        usageContext: usageContext,
                        title: connected.formatters.vertex.title(item)
                    }));
            })

            this.on('loadPreview', _.once(this.onLoadPreview.bind(this)));

            $node.data('vertexId', item.id);
        });

        this.onLoadPreview = function(event) {
            var self = this,
                item = this.attr.item;

            api.connect().then(function(c) {
                var url = c.formatters.vertex.image(item, null, 80, 80);
                var imageIsFromConcept = c.formatters.vertex.imageIsFromConcept(item);

                self.select('imgSelector')
                    .toggleClass('icon', imageIsFromConcept)
                    .css('background-image', 'url(' + url + ')');
            })
        };
    }
});
