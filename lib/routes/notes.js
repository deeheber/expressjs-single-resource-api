const express = require( 'express' );
const parser = require('../parser')();
const router = express.Router();

module.exports = router

  // .get('/', (req, res, next) =>{
  //   db.fetchAll('notes', (error, result)=>{
  //     if(error){
  //       next(error);
  //     } else {
  //       res.status(200).json(result);
  //     }
  //   });
  // })
  //
  // .get('/:id', (req, res, next)=>{
  //   db.fetchItem('notes', req.params.id, (error, result)=>{
  //     if(error){
  //       next(error);
  //     } else {
  //       res.status(200).json(result);
  //     }
  //   });
  // })
  //
  // .post('/', parser, (req, res)=>{
  //   db.add('notes', req.body, (error, result)=>{
  //     res.status(200).json(result);
  //   });
  // })
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
