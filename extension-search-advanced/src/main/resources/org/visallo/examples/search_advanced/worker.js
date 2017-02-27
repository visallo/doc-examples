define('data/web-worker/services/org-visallo-examples-search', [
    '../util/ajax'
], function(ajax) {
    'use strict';

    var api = {
            search: function(query, offset, size) {
                return ajax('GET', '/element/search', {
                    q: query,
                    filter: '[]',
                    offset: offset,
                    size: size
                })
            }
        };

    return api;
});
