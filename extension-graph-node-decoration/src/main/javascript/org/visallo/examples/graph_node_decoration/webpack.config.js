/* eslint-env node */
const path = require('path');
const { shared, externals } = require('../../../../../../../../webpack.shared.js');

module.exports = {
    ...shared({
       publicPath: '/org/visallo/examples/graph_node_decoration/dist/',
       dir: __dirname
    }),
    entry: {
        plugin: './src/plugin.js',
        'template.hbs': './src/template.hbs'
    },
    externals: externals(
        'public/v1/api',
        'util/retina',
        'util/popovers/withPopover',
        'handlebars'
    )
}
