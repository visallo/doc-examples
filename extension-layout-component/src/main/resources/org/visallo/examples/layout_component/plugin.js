require(['public/v1/api'], function(visallo) {

    visallo.registry.registerExtension('org.visallo.layout.component', {
        identifier: 'org.visallo.layout.body',
        children: [
            {
                ref: 'org.visallo.layout.text',
                model: 'Example of text layout component with fixed string',
                className: 'examples-layout_component-subheader'
            },
            { componentPath: 'detail/properties/properties', className: 'org-visallo-properties', modelAttribute: 'data' },
            { componentPath: 'comments/comments', className: 'org.visallo-comments', modelAttribute: 'data' },
            { componentPath: 'detail/relationships/relationships', className: 'org-visallo-relationships', modelAttribute: 'data' },
            { componentPath: 'detail/text/text', className: 'org-visallo-texts' }
        ]
    });


    visallo.registry.registerExtension('org.visallo.layout.component', {
        applyTo: {
            constraints: ['width', 'height'],
            contexts: ['popup']
        },
        identifier: 'org.visallo.layout.body',
        children: [
            {
                componentPath: 'org/visallo/examples/layout_component/popupBody',
                className: 'examples-layout_component-popupbody'
            }
        ]
    });
});
