import { defineComponent } from 'public/v1/api'
import withReportRenderer from 'dashboard/reportRenderers/withRenderer'

export default defineComponent(JSONStringRenderer, withReportRenderer)

function JSONStringRenderer() {

    //Transform data (better performance than doing in render)
    this.processData = function(data) {
        return JSON.stringify(data, null, 2);
    }

    this.render = function(d3, node, data) {
        d3.select(node)
            .style({
                'white-space': 'pre',
                'font-family': 'menlo courier monospace',
                'font-size': '8pt'
            })
            .text(data);
    }
}
