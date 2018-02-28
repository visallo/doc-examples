define([
    'public/v1/api',
    './template.hbs'
], function(
    api,
    template) {
    'use strict';

    return api.defineComponent(GraphExportExample);

    function GraphExportExample() {

        this.after('initialize', function() {
            this.$node.html(template({
                productId: this.attr.productId,
                workspaceId: this.attr.workspaceId
            }));
            this.$node.find('pre')[0].textContent = JSON.stringify(this.attr.cy.json(), null, 2)
        });

    }
});
