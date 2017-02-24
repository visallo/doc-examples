require(['public/v1/api'], function(visallo) {

    visallo.registry.registerExtension('org.visallo.layout.component', {
        identifier: 'org.visallo.layout.body',
        children: [
            { ref: 'org.visallo.layout.text', model: 'Testing' },
            { componentPath: 'detail/properties/properties', className: 'org-visallo-properties', modelAttribute: 'data' },
            { componentPath: 'comments/comments', className: 'org.visallo-comments', modelAttribute: 'data' },
            { componentPath: 'detail/relationships/relationships', className: 'org-visallo-relationships', modelAttribute: 'data' },
            { componentPath: 'detail/text/text', className: 'org-visallo-texts' }
        ]
    });

});
