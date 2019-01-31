const path = require('path');

const shared = ({ publicPath, dir }) => ({
    mode: 'development',
    target: 'web',
    output: {
        path: path.resolve(dir, 'dist'),
        publicPath,
        filename: '[name].js',
        libraryTarget: 'amd',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.jsx?$/,
                include: [path.resolve(dir, 'src')],
                loader: 'eslint-loader'
            },
            {
                test: /\.jsx?$/,
                include: [path.resolve(dir, 'src')],
                loader: 'babel-loader'
            },
            {
                test: /\.hbs$/,
                include: [path.resolve(dir, 'src')],
                use: [
                    {
                        loader: 'handlebars-loader',
                        options: {
                            ignoreHelpers: true,
                            ignorePartials: true,
                            inlineRequires: true,
                            runtime: 'handlebars'
                        }
                    }
                ]
            }
        ]
    }
});
const externals = (...list) => list.reduce((map, entry) => {
    map[entry] = { amd: entry };
    return map;
}, {});

module.exports = {
    shared,
    externals
}