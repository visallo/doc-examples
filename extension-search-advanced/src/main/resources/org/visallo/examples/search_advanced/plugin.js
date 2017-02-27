require(['public/v1/api'], function(visallo) {

    visallo.registry.registerExtension('org.visallo.search.advanced', {
        displayName: 'Example',
        componentPath: 'org/visallo/examples/search_advanced/example',
        savedSearchUrl: '/element/search'
    });

});
