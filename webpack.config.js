var path = require('path');
var webpack = require('webpack');
var { AureliaPlugin } = require('aurelia-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
    entry: { 
        main: './src/examples/main.ts',
        counters: './src/examples/counters/main.ts',
        sequence: './src/examples/sequence/main.ts',
        withId: './src/examples/withId/main.ts',
        "todo-aurelia": './src/examples/todo-aurelia/main.ts'
    },
    devServer: {
        port: 80,
        hot: true,
        // stats: "minimal"
    },
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: path.resolve('./dist'),
        filename: '[name]/main.js',
        chunkFilename: '[id].js',
        devtoolModuleFilenameTemplate: '[absolute-resource-path]',
        devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
    },
    module: {
        rules: [
            { test: /.ts$/, use: ['ts-loader', 'ts-nameof-loader'] },
            { test: /\.html$/, use: ['html-loader'] }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [path.resolve("./src"), "node_modules"]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: true }),
        new AureliaPlugin({ aureliaApp: undefined, features: { polyfills: "none" } }),
        new HtmlWebpackPlugin({
            chunks: ['main'],
            filename: 'index.html',
            template: 'src/examples/index.html',
            inject: true,
            minify: false
        }),
        htmlPluginForBundle('counters'),
        htmlPluginForBundle('sequence'),
        htmlPluginForBundle('withId'),
        htmlPluginForBundle('todo-aurelia'),
        new webpack.HotModuleReplacementPlugin(),
        new ProgressBarPlugin({
            clear: true
        })
    ],
    // stats: "minimal"
};

function htmlPluginForBundle(name) {
    return new HtmlWebpackPlugin({
        chunks: [name],
        filename: name + '/index.html',
        template: 'src/examples/' + name + '/index.html',
        inject: true,
        minify: false
    });
}