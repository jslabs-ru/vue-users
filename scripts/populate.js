const when = require('when');
const faker = require('faker');
const ObjectID = require('bson-objectid');

const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: './data.db',
    },
    useNullAsDefault: true
});

const USERS = 'users';
const USERS_COUNT = 10;

(async function() {
    await knex.schema.dropTableIfExists(USERS);

    await knex.schema.createTable(USERS, function(table) {
        table.increments();
        table.string('userid').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    });

    function insertUser(index) {
        return knex(USERS).insert({
            userid: ObjectID(),
            name: faker.name.findName(),
            email: faker.internet.email()
        })
    }

    await when.iterate(
        index => index + 1,
        index => index === USERS_COUNT,
        insertUser,
        0
    );

    process.exit();
})()
