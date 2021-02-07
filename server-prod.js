const fs = require('fs');
const express = require('express');
const history = require('connect-history-api-fallback');

const app = express();
const staticFileMiddleware = express.static('dist');

const PORT = parseInt(process.env.PORT) || 5000;

const historyMiddleware = history({
    disableDotRule: true,
    verbose: false
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

const server = app.listen(PORT, function() {
    console.log('Server is running: http://localhost:%j', PORT);
});

process.on('message', (message) => {
    if (message === 'shutdown') {
        console.log('Stop express server');
        server.close(() => {
            process.exit();
        });
    }
});
