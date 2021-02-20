const fs = require('fs');
const knex = require('knex');
const express = require('express');
const history = require('connect-history-api-fallback');

const app = express();
const staticFileMiddleware = express.static('dist');

const PORT = parseInt(process.env.PORT) || 5000;
const USERS = 'users';

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

app.get('/api/v1/users', async function(req, res) {
    const db = app.get('db');
    const users = await db(USERS);
    res.json(users);
})

app.get('/api/v1/users/:userid', async function(req, res) {
    const db = app.get('db');
    const { userid } = req.params;

    const users = await db(USERS).where('userid', userid);

    if(users.length) {
        res.status(200).json(users[0]);
    } else {
        res.status(404).json({
            error: 'Not found'
        });
    }
})

async function startServer(db) {
    app.set('db', db);

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
}

startServer(knex({
    client: 'sqlite3',
    connection: {
        filename: './data.db',
    }
}));
