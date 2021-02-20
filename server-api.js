const fs = require('fs');
const express = require('express');
const knex = require('knex');

const app = express();

const PORT = parseInt(process.env.PORT) || 5000;
const USERS = 'users';

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

app.post('/api/v1/users', async function(req, res) {
    res.json({});
})

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
    }
}));
