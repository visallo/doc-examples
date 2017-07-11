require(['public/v1/api'], function(visallo) {

    visallo.registry.registerExtension('org.visallo.search.advanced', {
        displayName: i18n('org.visallo.examples.search.advanced.react.name'),
        componentPath: 'org/visallo/examples/search_advanced/React',
        savedSearchUrl: '/org/visallo/examples/search_advanced/react/search'
    });

    visallo.registry.registerExtension('org.visallo.search.advanced', {
        displayName: i18n('org.visallo.examples.search.advanced.flight.name'),
        componentPath: 'org/visallo/examples/search_advanced/flight',
        savedSearchUrl: '/org/visallo/examples/search_advanced/flight/search'
    });

});
