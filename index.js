//const server = require('./lib/server');

const app = require('./lib/app');
const http = require('http');

const server = http.createServer(app);

server.listen('8000', ()=>{
  console.log('server started on ', server.address().port);
});

module.exports.server = server;
