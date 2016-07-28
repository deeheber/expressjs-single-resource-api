const express = require('express');
const parser = require('../parser')();
const Note = require('../models/note');
const router = express.Router();

module.exports = router

  .get('/', (req, res, next) =>{
    Note.find()
      .then(note => res.send(note))
      .catch(next);
  })

  .get('/:id', (req, res, next)=>{
    Note.findById(req.params.id)
      .then(note => res.send(note))
      .catch(next);
  })

  .post('/', parser, (req, res, next)=>{
    new Note(req.body).save()
      .then(saved => res.send(saved))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Note.findByIdAndRemove(req.params.id)
      .then(() => res.json('Note deleted'))
      .catch(next);
  })

  .put('/:id', parser, (req, res, next)=>{
    Note.findByIdAndUpdate(req.params.id, req.body)
      .then(() => res.json('Note updated'))
      .catch(next);
  });
