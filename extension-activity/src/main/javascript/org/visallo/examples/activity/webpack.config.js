/* eslint-env node */
const path = require('path');
const { shared, externals } = require('../../../../../../../../webpack.shared.js');

const common = shared({
    publicPath: '/jsc/org/visallo/examples/activity/dist/',
    dir: __dirname
})

module.exports = [
    {
        ...common,
        target: 'webworker',
        entry: {
            'worker-plugin': './src/worker-plugin.js',
        },
        externals: externals(
            'public/v1/workerApi'
        )
    },
    {
        ...common,
        entry: {
            plugin: './src/plugin.js',
            Finished: './src/Finished.jsx',
        },
        externals: externals(
            'public/v1/api',
            'react',
            'util/vertex/formatters',
            'util/requirejs/promise!util/service/ontologyPromise',
            'util/requirejs/promise!util/service/propertiesPromise',
            'util/messages'
        )
    }
];
