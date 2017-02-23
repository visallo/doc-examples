require(['public/v1/api'], function(visallo) {

    visallo.registry.registerExtension('org.visallo.detail.text', {
        shouldReplaceTextSectionForVertex: function(vertex, name, key) {
            return true;
        },
        componentPath: 'org/visallo/examples/detail_text/Example'
    });

});
