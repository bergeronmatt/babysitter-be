// set up express
const express = require('express');

// set up server object
const server = express();

// set up server to use JSON
server.use(express.json());

// Routers
// TODO: add payment router
// TODO: make the payment router private so no one can access it

// base api
server.get('/api', (req, res) => {
    res.status(200).json({message: 'API is up and running'})
})

// export
module.exports = server;