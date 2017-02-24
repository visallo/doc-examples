require(['public/v1/api', 'util/retina'], function(visallo, retina) {

    // Put this text in a comment to trigger some decorations
    var onlyDecorationAlignmentsText = 'show all decoration alignments';
    var hasAllDecorationComment = function(v) {
        return _.any(v.properties, function(p) {
            return p.name === 'http://visallo.org/comment#entry' &&
                p.value.indexOf(onlyDecorationAlignmentsText) >= 0;
        })
    };

    ['top', 'center', 'bottom'].forEach(function(y, row) {
        ['left', 'center', 'right'].forEach(function(x, col) {
            visallo.registry.registerExtension('org.visallo.graph.node.decoration', {
                applyTo: hasAllDecorationComment,
                alignment: { h: x, v: y },
                classes: 'customAll',
                data: function(vertex) {
                    return {
                        label: (row * 3 + col) + 1
                    }
                },
                onMouseOver: function() {
                    console.log('over')
                },
                onMouseOut: function() {
                    console.log('out')
                }
            });
        })
    })


    visallo.registry.registerExtension('org.visallo.graph.node.decoration', {
        applyTo: function(v) {
            return _.any(v.properties, function(p) {
                return p.name === 'http://visallo.org/comment#entry' &&
                    p.value.indexOf(onlyDecorationAlignmentsText) === -1 &&
                    p.value.indexOf("popover") === -1;
            })
        },
        alignment: { h: 'left', v: 'top' },
        classes: 'custom',
        data: function(vertex) {
            return {
                label: vertex.properties.length
            }
        }
    });

    visallo.registry.registerExtension('org.visallo.graph.node.decoration', {
        applyTo: function(v) {
            return _.any(v.properties, function(p) {
                return p.name === 'http://visallo.org/comment#entry' &&
                    p.value.indexOf("popover") >= 0;
            })
        },
        alignment: { h: 'right', v: 'top' },
        classes: 'customPopover',
        data: function(vertex) {
            return {
                label: 'Popover'
            }
        },
        onClick: function(event, data) {
            var id = this.id();
            require(['org/visallo/examples/graph_node_decoration/popover'], function(Popover) {
                Popover.attachTo(data.cy.container(), {
                    anchorTo: {
                        decorationId: id
                    }
                });
            })
        }
    });

    visallo.registry.registerExtension('org.visallo.graph.style', function(style) {
        style
            .selector('.decoration.custom')
            .css({
                shape: 'octagon',
                'background-color': 'orange',
                'border-color': 'darkorange',
                'padding-left': 10,
                'padding-right': 10,
                'font-size': 23 * retina.devicePixelRatio,
                width: 20 * retina.devicePixelRatio,
                height: 20 * retina.devicePixelRatio
            })
            .selector('.decoration.customAll')
            .css({
                shape: 'roundrectangle',
                'background-color': 'blue',
                'border-color': 'darkblue',
                'padding-left': 10,
                'padding-right': 10,
                'font-size': 19 * retina.devicePixelRatio,
                width: 15 * retina.devicePixelRatio,
                height: 15 * retina.devicePixelRatio
            })
            .selector('.decoration.customPopover')
            .css({
                shape: 'roundrectangle',
                'background-color': 'green',
                'border-color': 'darkgreen',
                'padding-left': 10,
                'padding-right': 10,
                'font-size': 19 * retina.devicePixelRatio
            })
    });
});
