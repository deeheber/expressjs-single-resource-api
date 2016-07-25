const express = require('express');
const app = module.exports = express();
const db = require('./db');

app.get('/:category', (req, res) =>{
  db.fetchAll(req.params.category, (error, result)=>{
    if(error){
      res.status(400).send(error);
    } else {
      res.status(200).send(result);
    }
  });
});

app.get('/:category/:id', (req, res)=>{
  db.fetchItem(req.params.category, req.params.id, (error, result)=>{
    if(error){
      res.status(400).send(error);
    } else {
      res.status(200).send(result);
    }
  });
});
