const app = require('./app');
const http = require('http');
//const routeGetRequest = require('./routeGetRequest');
//const writeResponse = require('./writeResponse');

module.exports = http.createServer(app);

//   (request, response)=>{
//
//   if(request.method === 'GET'){
//     routeGetRequest(request, response);
//   } else {
//     writeResponse.bad(JSON.stringify('Resource not found'), response);
//   }
//
// }
