// set up env
require('dotenv').config();

// set up server object
const server = require('./api/server');

// set up env port and backup port
const port = process.env.BACKEND_PORT || 4000;

// listen for the server
server.listen(port, () => {
    console.log(`=== SERVER IS RUNNING ON PORT ${port} ===`)
})