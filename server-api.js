const express = require('express');
const bodyParser = require('body-parser')
const knex = require('knex');
const moment = require('moment');

const createApiRouter = require('./apiRouter');

const app = express();

const PORT = parseInt(process.env.PORT) || 5000;
const USERS = 'users';

app.use('/api/v1', createApiRouter(app));

async function startServer(db) {
    app.set('db', db);

    app.listen(PORT, function() {
        console.log('Server is running: http://localhost:%j', PORT);
    });
}

startServer(knex({
    client: 'sqlite3',
    connection: {
        filename: './data.db',
    },
    useNullAsDefault: true
}));
