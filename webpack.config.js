var webpack = require('webpack');
var path = require('path');


// Webpack Config
var webpackConfig = {
    entry: {
        'polyfills': './app/App_Resources/web/polyfills.web.ts',
        'vendor': './app/App_Resources/web/vendor.web.ts',
        'main': './app/main.web.ts',
    },

    plugins: [
        // On compile time, webpack will replace if(global.android){...} with if(false){...}
        // marking the code as deade & unreachable, and though
        // not importing nativescript packages declared inside these blocks
        new webpack.DefinePlugin({
            'global.web' : true,
            'global.android' : false
        })
    ],

    module: {
        preLoaders: [
            {
                test: /\.(ts|scss)$/,
                loader: 'string-replace',
                query: {
                    multiple: [
                        { search: '.tns.s?css', replace: '.web.scss', flags: 'g' },
                        { search: '.tns', replace: '.web', flags: 'g' },
                        { search: 'moduleId: module.id,', replace: '', flags: 'g' }
                    ]
                }
            }
        ],

        loaders: [
            { test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader'] },
            { test: /\.scss$/, loaders: ["style", "css?sourceMap", "sass?sourceMap"], exclude: [path.resolve(__dirname, 'app', 'client')] },
            { test: /\.scss$/, loaders: ["to-string", "css?sourceMap", "sass?sourceMap"], include: [path.resolve(__dirname, 'app', 'client')] },
            { test: /\.html$/, loader: 'raw-loader' },
            { test: /\.json$/, loader: 'json-loader' },
        ]
    }

};


// Our Webpack Defaults
var defaultConfig = {
    devtool: 'cheap-module-source-map',
    cache: true,
    debug: false,
    output: {
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.optimize.CommonsChunkPlugin({ name: ['main', 'vendor', 'polyfills'], minChunks: Infinity }),
    ],

    resolve: {
        root: [path.join(__dirname, 'src')],
        extensions: ['', '.ts', '.js']
    },

    devServer: {
        historyApiFallback: true,
        watchOptions: { aggregateTimeout: 300, poll: 1000 }
    },

    node: {
        global: 1,
        crypto: 'empty',
        module: 0,
        Buffer: 0,
        clearImmediate: 0,
        setImmediate: 0
    }
};

var webpackMerge = require('webpack-merge');
module.exports = webpackMerge(defaultConfig, webpackConfig);
