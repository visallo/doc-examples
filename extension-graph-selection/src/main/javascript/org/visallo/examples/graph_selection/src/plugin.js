import { registry } from 'public/v1/api'

var doRandomSelection = function(cy) {
    var elements = cy.elements('.v,.e').unselect(),
        randomIndex = Math.floor(Math.random() * elements.length);
    elements[randomIndex].select();
}
doRandomSelection.identifier = 'org-visallo-examples-graph-selection';
doRandomSelection.visibility = 'always';

registry.registerExtension('org.visallo.graph.selection', doRandomSelection);
