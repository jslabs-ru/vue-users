const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');

const USERS = 'users';

function createApiRouter(app) {
    const router = express.Router();

    router.use(bodyParser.json());
    router.use(bodyParser.urlencoded({ extended: true }));

    router.get('/ping', async function(req, res) {
        res.json({
            ok: 1
        });
    })

    router.get('/users', async function(req, res) {
        const db = app.get('db');
        const users = await db(USERS);
        res.json(users);
    })

    router.get('/users/:userid', async function(req, res) {
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

    router.put('/users/:userid', async function(req, res) {
        const db = app.get('db');
        const { userid } = req.params;

        const userData = req.body;

        Object.assign(userData, {updated_at: moment().format('YYYY-MM-DD hh:mm:ss')})

        await db(USERS)
            .where('userid', userid)
            .update(userData);

        res.status(200).json({
            ok: 1
        });
    })

    router.post('/users', async function(req, res) {
        res.json({});
    })

    return router;
}

module.exports = createApiRouter;
