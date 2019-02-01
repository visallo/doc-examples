/* eslint-env node */
const path = require('path');
const { shared, externals } = require('../../../../../../../../webpack.shared.js');

module.exports = {
    ...shared({
       publicPath: '/org/visallo/examples/graph_options/dist/',
       dir: __dirname
    }),
    entry: {
        plugin: './src/plugin.js',
        React: './src/React.jsx'
    },
    externals: externals(
        'public/v1/api',
        'react'
    )
}