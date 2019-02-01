/* eslint-env node */
const path = require('path');
const { shared, externals } = require('../../../../../../../../webpack.shared.js');

module.exports = {
    ...shared({
       publicPath: '/jsc/org/visallo/examples/visibility/dist/',
       dir: __dirname
    }),
    entry: {
        plugin: './src/plugin.js',
        ExampleEditor: './src/ExampleEditor.jsx',
        ExampleViewer: './src/ExampleViewer.jsx'
    },
    externals: externals(
        'public/v1/api',
        'react'
    )
}