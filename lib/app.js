const express = require('express');
const app = module.exports = express();

const ensureAuth = require( './auth/ensureAuth' )();

const notes = require('./routes/notes');
const authors = require('./routes/authors');
const auth = require('./routes/auth');

app.use('/api/auth', auth);

//TODO: uncomment ensureAuth
//TODO: update readme, changelog, and version in package.json to reflect changes

app.use('/api/notes', ensureAuth, notes);
app.use('/api/authors', ensureAuth, authors);

// eslint-disable-next-line
app.use((error, req, res, next)=>{
  res.status(400).json(error);
});

module.exports = app;
