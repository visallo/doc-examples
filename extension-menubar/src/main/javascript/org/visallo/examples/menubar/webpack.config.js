/* eslint-env node */
const path = require('path');
const { shared, externals } = require('../../../../../../../../webpack.shared.js');

module.exports = {
    ...shared({
       publicPath: '/org/visallo/examples/menubar/dist/',
       dir: __dirname
    }),
    entry: {
        plugin: './src/plugin.js',
        Pane: './src/Pane.jsx',
        'welcome.hbs': './src/welcome.hbs'
    },
    externals: externals(
        'public/v1/api',
        'handlebars',
        'react'
    )
}
