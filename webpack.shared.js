const shared = ({ publicPath, dir }) => {
    mode: 'development',
    target: 'web',
    output: {
        path: path.resolve(dir, 'dist'),
        publicPath,
        filename: '[name].js',
        libraryTarget: 'amd',
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            include: [
              path.resolve(dir, 'src')
            ],
            loader: 'babel-loader'
        }]
    }
};
const externals = (...list) => list.reduce((map, entry) => {
    map[entry] = { amd: entry };
    return map;
}, {});

module.exports = {
    shared,
    externals
}