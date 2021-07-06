// set up express
const express = require('express');

// set up server object
const server = express();

// set up cors
const cors = require('cors');

// set up server to use JSON
server.use(express.json());
server.use(cors());

// Import Routers
// TODO: add payment router
// TODO: make the payment router private so no one can access it
const paymentRouter = require('../router/payment/payment-router');


// API Routes
server.use('/api/payment', paymentRouter);

// base api
server.get('/api', (req, res) => {
    res.status(200).json({message: 'API is up and running'})
})

// export
module.exports = server;