require(['public/v1/api'], function(visallo) {

    var doRandomSelection = function(cy) {
        var elements = cy.elements('.v,.e').unselect(),
            randomIndex = Math.floor(Math.random() * elements.length);
        elements[randomIndex].select();
    }
    doRandomSelection.identifier = 'org-visallo-examples-graph-selection';
    doRandomSelection.visibility = 'always';

    visallo.registry.registerExtension('org.visallo.graph.selection', doRandomSelection);
});
