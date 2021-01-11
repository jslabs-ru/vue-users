require('console-stamp')(console, 'HH:MM:ss.l');

const fs = require('fs');
const moment = require('moment');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./src/webpack.config.js');

const app = express();
const compiler = webpack(config);

const PORT = 8081;
const DELIMITER = '</body>';

var indexContent = fs.readFileSync(__dirname + '/public/index.html', 'utf-8');
var indexContentSplitted = indexContent.split(DELIMITER);

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.get('/', function(req, res) {
    var scriptSrc = config.output.publicPath + Object.keys(config.entry)[0] + '.js';

    var html = `${indexContentSplitted[0]}\n<script src="${scriptSrc}"></script>\n${DELIMITER}${indexContentSplitted[1]}`;

    res.set('Content-Type', 'text/html; charset=utf-8');
    res.status(200).send(html);
});

app.listen(PORT, function() {
    console.log('Dev server is running: http://localhost:%j', PORT);
});
