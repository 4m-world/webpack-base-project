const merge = require('webpack-merge');
const { HotModuleReplacementPlugin } = require('webpack');
const { paths } = require('./constants');
const webpackBaseConfig = require('./webpack.base');

module.exports = merge(webpackBaseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: paths.build,
        open: true,
        compress: true,
        hot: true,
        port: 3000
    },
    plugins: [
        new HotModuleReplacementPlugin()
    ]
});
