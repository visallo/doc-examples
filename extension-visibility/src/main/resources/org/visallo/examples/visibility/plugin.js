require(['public/v1/api'], function(visallo) {

    visallo.registry.registerExtension('org.visallo.visibility', {
        editorComponentPath: 'org/visallo/examples/visibility/ExampleEditor',
        viewerComponentPath: 'org/visallo/examples/visibility/ExampleViewer'
    });
});
