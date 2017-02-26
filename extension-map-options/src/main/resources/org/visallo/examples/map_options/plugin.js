require(['public/v1/api'], function(visallo) {

    visallo.registry.registerExtension('org.visallo.map.options', {
        identifier: 'org-visallo-examples-map_options-countryborders',
        optionComponentPath: 'org/visallo/examples/map_options/CountryBorders'
    });

});
