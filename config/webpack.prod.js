/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const { paths } = require('./constants');
const webpackBaseConfig = require('./webpack.base');

module.exports = merge(webpackBaseConfig, {
	mode: 'production',
	devtool: 'source-map',
	output: {
		path: paths.build,
		publicPath: '/',
		filename: '[name].[contenthash].bundle.js'
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'styles/[name].[contenthash].css',
			chunkFilename: '[id].css'
		})
	],
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			}
		]
	},
	optimization: {
		minimizer: [
			new TerserJSPlugin({
				cache: true,
				parallel: true,
				sourceMap: true
			}),
			new OptimizeCssAssetsPlugin({})
		]
	}
});
