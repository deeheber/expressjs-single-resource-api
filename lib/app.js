const express = require('express');
const app = module.exports = express();
const router = require('./router');

app.use('/', router);

//error handling
app.use((error, req, res, next)=>{
  res.status(400).json(error);
});
