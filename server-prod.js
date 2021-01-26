const fs = require('fs');
const express = require('express');
const history = require('connect-history-api-fallback');

const app = express();
const staticFileMiddleware = express.static('dist');

const PORT = parseInt(process.env.PORT) || 5000;

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
    console.log('Server is running: http://localhost:%j', PORT);
});
