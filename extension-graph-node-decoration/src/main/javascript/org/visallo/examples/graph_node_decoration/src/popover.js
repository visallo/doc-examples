import { defineComponent } from 'public/v1/api'
import withPopover from 'util/popovers/withPopover'

export default defineComponent(DecorationPopover, withPopover);

function DecorationPopover() {

    this.before('initialize', function(node, config) {
        config.template = '/org/visallo/examples/graph_node_decoration/dist/template.hbs'
        this.after('setupWithTemplate', function() {
        })
    });
}

