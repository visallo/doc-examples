import { registry } from 'public/v1/api'

registry.registerExtension('org.visallo.search.advanced', {
    displayName: i18n('org.visallo.examples.search.advanced.react.name'),
    componentPath: 'org/visallo/examples/search_advanced/React',
    savedSearchUrl: '/org/visallo/examples/search_advanced/dist/Search'
});

