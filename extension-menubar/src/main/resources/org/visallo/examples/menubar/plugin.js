require(['public/v1/api'], function(visallo) {

    visallo.registry.registerExtension('org.visallo.menubar', {
        title: i18n('org.visallo.examples.menubar.title'),
        identifier: 'org-visallo-examples-menubar',
        action: {
            type: 'pane',
            componentPath: 'org/visallo/examples/menubar/Pane'
        },
        welcomeTemplatePath: 'hbs!org/visallo/examples/menubar/welcome',
        icon: '../img/glyphicons/white/glyphicons_066_tags@2x.png',
        options: {
            placementHint: 'top',
            placementHintAfter: 'search',
        }
    });

});
