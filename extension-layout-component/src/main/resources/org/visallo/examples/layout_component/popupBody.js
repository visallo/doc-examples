define([
    'public/v1/api'
], function(
    api) {

    return api.defineComponent(PopupBodyExample);

    function PopupBodyExample() {

        this.attributes({
            model: undefined,
            buttonSelector: '.btn'
        })

        this.after('initialize', function() {
            this.on('updateModel', this.onUpdateModel);
            this.on('click', {
                buttonSelector: this.onClick
            })
            this.render(this.attr.model);
        });

        this.onUpdateModel = function(event, data) {
            this.render(data.model);
        }

        this.render = function(model) {
            var self = this,
                $node = this.$node,
                count = model.properties.length;

            api.connect().then(function(c) {
                $node.text('This element has ' +
                    c.formatters.string.plural(count, 'property', 'properties')
                ).append('<button class="btn btn-small">Search Related</button>')
                self.trigger('positionDialog');
            })
        }

        this.onClick = function(event) {
            this.trigger('searchByRelatedEntity', { vertexIds: [this.attr.model.id] });
        }

    }
});
