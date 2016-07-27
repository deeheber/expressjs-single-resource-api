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
  });
  //
  // .put('/:id', parser, (req, res, next)=>{
  //     //see if the item exists
  //   db.fetchItem('notes', req.params.id, (error, result)=>{
  //     if(error){
  //       next(error);
  //     } else {
  //       const item = result;
  //       db.update('notes', req.params.id, item, req.body, (error, data)=>{
  //         res.status(200).json(data);
  //       });
  //     }
  //   });
  // })
  //
  // .delete('/:id', (req, res, next)=>{
  //   db.fetchItem('notes', req.params.id, (error, result)=>{
  //     if(error){
  //       next(error);
  //     } else {
  //       const item = result;
  //       db.delete('notes', item, (error, data)=>{
  //         res.status(200).json(data);
  //       });
  //     }
  //   });
  // });
