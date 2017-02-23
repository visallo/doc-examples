require(['public/v1/api'], function(visallo) {

    visallo.registry.registerExtension('org.visallo.admin', {
       section: i18n('org.visallo.examples.admin.section'),
       name: i18n('org.visallo.examples.admin.react.name'),
       subtitle: i18n('org.visallo.examples.admin.react.subtitle'),
       componentPath: 'org/visallo/examples/admin/React'
    });

    visallo.registry.registerExtension('org.visallo.admin', {
       section: i18n('org.visallo.examples.admin.section'),
       name: i18n('org.visallo.examples.admin.flight.name'),
       subtitle: i18n('org.visallo.examples.admin.flight.subtitle'),
       componentPath: 'org/visallo/examples/admin/flight'
    });

    visallo.registry.registerExtension('org.visallo.admin', {
       section: i18n('org.visallo.examples.admin.section'),
       name: i18n('org.visallo.examples.admin.url.name'),
       subtitle: i18n('org.visallo.examples.admin.url.subtitle'),
       url: 'https://www.visallo.com',
       options: {
           sortHint: 0
       }
    });

});
