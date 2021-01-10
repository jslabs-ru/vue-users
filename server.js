require('console-stamp')(console, 'HH:MM:ss.l');

const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./src/webpack.config.js');

const app = express();
const compiler = webpack(config);

const PORT = 8081;

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, function() {
    console.log('Listening on %a', PORT);
});
