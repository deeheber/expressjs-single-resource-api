const express = require('express');
const Note = require('../models/note');
const router = express.Router();

module.exports = router

  //update author id on a note
  .put('/:id/notes/:noteId', (req, res, next)=>{
    Note.findById(req.params.noteId)
      .then(note => {
        if(!note)  throw new Error(`note id ${req.params.noteId} does not exist`);
        return note.setAuthor(req.params.id);
      })
      .then(note => res.send(note))
      .catch(()=>{
        next('Error adding authorId to note');
      });
  })

  //remove author id from a note
  .delete('/null/notes/:noteId', (req, res, next)=>{
    Note.findById(req.params.noteId)
      .then(note => {
        if(!note) throw new Error(`note id ${req.params.noteId} does not exist`);
        return note.removeAuthor(req.params.noteId);
      })
      .then(note => res.send(note))
      .catch(()=>{
        next('Error removing authorId from note');
      });
  });
