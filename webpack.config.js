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
        todo: './src/examples/todo/main.ts',
        "todo-angular": './src/examples/todo-angular/main.ts'
    },
    devServer: {
        port: 3000,
        hot: true,
        stats: "minimal"
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
            { test: /.ts$/, use: ['ts-loader', 'angular2-template-loader', 'ts-nameof-loader'] },
            { test: /\.html$/, use: ['html-loader'] }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [path.resolve("./src"), "node_modules"]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: true }),
        new webpack.HotModuleReplacementPlugin(),
        new AureliaPlugin({ aureliaApp: undefined, features: { polyfills: "none" } }),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core/,
            path.resolve('./src')
        ),
        htmlPluginForBundle('main'),
        htmlPluginForBundle('counters'),
        htmlPluginForBundle('sequence'),
        htmlPluginForBundle('withId'),
        htmlPluginForBundle('todo'),
        htmlPluginForBundle('todo-angular'),
        new ProgressBarPlugin({
            clear: true
        })
    ]
};

function htmlPluginForBundle(name) {
    const dir = (name === 'main' ? '' : name + '/');
    return new HtmlWebpackPlugin({
        chunks: [name],
        filename: dir + 'index.html',
        template: 'src/examples/' + dir + 'index.html',
        inject: true,
        minify: false
    });
}