/* eslint-env node */
const path = require('path');
const { shared, externals } = require('../../../../../../../../webpack.shared.js');

const common = shared({
    publicPath: '/org/visallo/examples/search_advanced/dist/',
    dir: __dirname
})

module.exports = [
    {
        ...common,
        target: 'webworker',
        entry: {
            'worker-plugin': './src/worker.js',
        },
        externals: externals(
            'public/v1/workerApi'
        )
    },
    {
        ...common,
        entry: {
            plugin: './src/plugin.js',
            Search: './src/Search.jsx'
        },
        externals: externals(
            'public/v1/api',
            'react'
        )
    }
];
