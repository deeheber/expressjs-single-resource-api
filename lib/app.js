const express = require('express');
const app = module.exports = express();
const notes = require('./routes/notes');

//routes
app.use('/api/notes', notes);

//error handling
app.use((error, req, res, next)=>{
  res.status(400).json(error);
});

module.exports = app;
