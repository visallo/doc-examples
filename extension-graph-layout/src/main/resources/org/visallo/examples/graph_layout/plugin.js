require(['public/v1/api', 'util/retina'], function(visallo, retina) {

    MyLayout.identifier = 'org-visallo-examples-graph-layout';
    function MyLayout(options) {
        this.options = options;
    }

    MyLayout.prototype.run = function() {
        var cy = this.options.cy;

        var width = $(window).width();
        var height = $(window).height();
        cy.nodes().each(function(i, node) {
            node.renderedPosition(retina.pointsToPixels({
                x: Math.round(Math.random() * width),
                y: Math.round(Math.random() * height)
            }));
        })

        // Must call ready and stop callbacks
        cy.one("layoutready", this.options.ready);
        cy.trigger("layoutready");

        cy.one("layoutstop", this.options.stop);
        cy.trigger("layoutstop");

        return this;
    };

    visallo.registry.registerExtension('org.visallo.graph.layout', MyLayout);
});
