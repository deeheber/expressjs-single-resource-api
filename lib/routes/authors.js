const express = require('express');
const parser = require('../parser')();
const Author = require('../models/author');
const Note = require('../models/note');
const router = express.Router();

module.exports = router

  .get('/', (req, res, next)=>{
    Author.find()
      .then(author => res.send(author))
      .catch(()=>{
        next('Error getting authors.');
      });
  })

  .get('/:id', (req, res, next)=>{
    Author.findById(req.params.id)
      .then(author => res.send(author))
      .catch(()=>{
        next('Invalid author id.');
      });
  })

  .post('/', parser, (req, res, next)=>{
    new Author(req.body).save()
      .then(saved => res.send(saved))
      .catch(()=>{
        next('Error saving author.');
      });
  })

  .delete('/:id', (req, res, next)=> {
    Author.findByIdAndRemove(req.params.id)
      .then(deleted => res.send(deleted))
      .catch(()=>{
        next('Error deleting author.');
      });
  })

  .put('/:id', parser, (req, res, next)=>{
    Author.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
      .then(updated => res.send(updated))
      .catch(()=>{
        next('Error updating author profile.');
      });
  })

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
