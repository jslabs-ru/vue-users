require('console-stamp')(console, 'HH:MM:ss.l');

const fs = require('fs');
const moment = require('moment');
const express = require('express');
const history = require('connect-history-api-fallback');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./src/webpack.config.js');

const app = express();
const staticFileMiddleware = express.static('public');
const compiler = webpack(config);

const PORT = 8081;

function rewriteIndex() {
    const DELIMITER = '</body>';
    var indexContent = fs.readFileSync(__dirname + '/tpl/index-tpl.html', 'utf-8');
    var indexContentSplitted = indexContent.split(DELIMITER);

    var scriptSrc = config.output.publicPath + Object.keys(config.entry)[0] + '.js';

    var html = `${indexContentSplitted[0]}\n<script src="${scriptSrc}"></script>\n${DELIMITER}${indexContentSplitted[1]}`;
    fs.writeFileSync(__dirname + '/public/index.html', html);
}

rewriteIndex();

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

const historyMiddleware = history({
    disableDotRule: true,
    verbose: true
});

app.use(staticFileMiddleware);

app.use((req, res, next) => {
    if (req.path.match(/^\/api\/v1\//)) {
        next();
    } else {
        historyMiddleware(req, res, next);
    }
});

app.use(staticFileMiddleware);

app.get('/api/v1/users', function(req, res) {
    res.json([
        'Alice',
        'Robert',
        'John',
        'Lucy',
        'Michael'
    ]);
})

app.listen(PORT, function() {
    console.log('Dev server is running: http://localhost:%j', PORT);
});
