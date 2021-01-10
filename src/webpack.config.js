var path = require('path');
var webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const TerserPlugin = require('terser-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const HMR = process.env.HMR

const plugins = [
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en|ru/),
    new VueLoaderPlugin()
];

const usersapp = [
    '@babel/polyfill',
    path.join(__dirname, 'main.js')
]

if(HMR) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
    usersapp.push('webpack-hot-middleware/client?path=/__webpack_hmr');
}

var config = {
    mode: NODE_ENV === 'production' ? 'production' : 'development',
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    output: {
                        comments: false,
                    },
                },
            })
        ],
        minimize: NODE_ENV === 'production' ? true : false
    },
    context: __dirname,
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
            vuex: 'vuex/dist/vuex.js',
            '@': __dirname
        }
    },
    entry: {
        usersapp
    },
    output: {
        path: path.join(__dirname, '/../public/js'),
        publicPath: '/js/',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-syntax-dynamic-import']
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins
}

module.exports = config;
