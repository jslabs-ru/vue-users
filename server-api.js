const fs = require('fs');
const express = require('express');

const app = express();

const PORT = parseInt(process.env.PORT) || 5000;

app.get('/api/v1/users', function(req, res) {
    res.json([
        'Alice',
        'Robert',
        'John',
        'Lucy',
        'Michael',
        'William'
    ]);
})

app.listen(PORT, function() {
    console.log('Server is running: http://localhost:%j', PORT);
});
