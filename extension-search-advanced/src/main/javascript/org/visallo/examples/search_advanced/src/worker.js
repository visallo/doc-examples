import { registry, ajax } from 'public/v1/workerApi'

registry.registerExtension('org.visallo.service', {
    name: 'org-visallo-examples-search',
    services: {
        search: function(query, offset, size) {
            return ajax('GET', '/element/search', {
                q: query,
                offset,
                size
            })
        }
    }
});
