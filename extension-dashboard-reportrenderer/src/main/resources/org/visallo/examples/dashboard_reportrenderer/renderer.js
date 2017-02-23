define([
    'public/v1/api',
    'dashboard/reportRenderers/withRenderer'
], function(api, withReportRenderer) {

    return api.defineComponent(JSONStringRenderer, withReportRenderer)

    function JSONStringRenderer() {

        //Transform data (better performance than doing in render)
        this.processData = function(data) {
            return JSON.stringify(data, null, 2);
        }

        this.render = function(d3, node, data) {
            d3.select(node)
                .style({
                    'white-space': 'pre',
                    'font-family': 'menlo',
                    'font-size': '8pt'
                })
                .text(data);
        }
    }
})
