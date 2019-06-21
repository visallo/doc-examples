/* eslint-env node */
const path = require('path');
const { shared, externals } = require('../../../../../../../../webpack.shared.js');

module.exports = {
    ...shared({
       publicPath: '/jsc/org/visallo/examples/admin/dist/',
       dir: __dirname
    }),
    entry: {
        plugin: './src/plugin.js',
        Admin: './src/Admin.jsx'
    },
    externals: externals(
        'public/v1/api',
        'react'
    )
};
