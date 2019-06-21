/* eslint-env node */
const path = require('path');
const { shared, externals } = require('../../../../../../../../webpack.shared.js');

module.exports = {
    ...shared({
       publicPath: '/jsc/org/visallo/examples/map_options/dist/',
       dir: __dirname
    }),
    entry: {
        plugin: './src/plugin.js',
        CountryBorders: './src/CountryBorders.jsx'
    },
    externals: externals(
        'public/v1/api',
        'react'
    )
}
