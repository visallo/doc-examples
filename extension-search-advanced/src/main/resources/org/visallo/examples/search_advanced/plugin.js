require(['public/v1/api'], function(visallo) {

    visallo.registry.registerExtension('org.visallo.search.advanced', {
        displayName: 'Example',
        componentPath: 'org/visallo/examples/search_advanced/Example',
        savedSearchUrl: '/org/visallo/examples/search_advanced/search'
    });

});
