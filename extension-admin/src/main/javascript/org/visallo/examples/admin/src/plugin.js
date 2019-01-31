import { registry } from 'public/v1/api'

registry.registerExtension('org.visallo.admin', {
   section: i18n('org.visallo.examples.admin.section'),
   name: i18n('org.visallo.examples.admin.react.name'),
   subtitle: i18n('org.visallo.examples.admin.react.subtitle'),
   componentPath: 'org/visallo/examples/admin/dist/Admin'
});

registry.registerExtension('org.visallo.admin', {
   section: i18n('org.visallo.examples.admin.section'),
   name: i18n('org.visallo.examples.admin.url.name'),
   subtitle: i18n('org.visallo.examples.admin.url.subtitle'),
   url: 'https://www.visallo.com',
   options: {
       sortHint: 0
   }
});
