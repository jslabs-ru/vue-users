var path = require('path');
var webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const { domain, clientId, audience } = require('../authConfig.json');

const NODE_ENV = process.env.NODE_ENV;
const HMR = process.env.HMR;

const plugins = [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
        DOMAIN: JSON.stringify(domain),
        CLIENT_ID: JSON.stringify(clientId),
        AUDIENCE: JSON.stringify(audience)
    })
];

const client = [
    '@babel/polyfill',
    path.join(__dirname, 'main.js')
]

if(HMR) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
    client.push('webpack-hot-middleware/client?path=/__webpack_hmr');
}

var config = {
    mode: NODE_ENV === 'production' ? 'production' : 'development',
    optimization: {
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
        client
    },
    output: {
        path: path.join(__dirname, '/../dist/js'),
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
