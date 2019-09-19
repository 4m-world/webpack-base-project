const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { paths } = require('./constants');

module.exports = {
    entry: [
        'core-js/modules/es.promise',
        'core-js/modules/es.array.iterator',
        paths.src + '/index.js'
    ],
    output: {
        path: paths.build,
        filename: '[name].bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(),

        new CopyWebpackPlugin([
            {
                from: paths.static,
                to: 'assets',
                ignore: ['*DS_Store']
            }
        ]),

        new HtmlWebpackPlugin({
            title: 'Webpack base project',
            favicon: paths.static + '/images/favicon.png',
            template: paths.static + '/index.html',
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            // Javascript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            // Styles
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
                    { loader: 'postcss-loader', options: { sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } }
                ]
            },
            // Images
            {
                test: /\.(ico|gif|png|jpg|jpeg|webp|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    context: 'src' // prevent display of src/ in filename
                }
            },
            // Fonts
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/,
                loader: 'url-loader',
                options: {
                    limit: 4096,
                    name: '[path][name].[ext]',
                    context: 'src'
                }
            }
        ]
    }
}