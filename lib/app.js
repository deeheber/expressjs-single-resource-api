const express = require('express');
const app = module.exports = express();
const db = require('./db');
const parser = require('./parser')();

// GET
app.get('/:category', (req, res, next) =>{
  db.fetchAll(req.params.category, (error, result)=>{
    if(error){
      next(error);
    } else {
      res.status(200).json(result);
    }
  });
});

app.get('/:category/:id', (req, res, next)=>{
  db.fetchItem(req.params.category, req.params.id, (error, result)=>{
    if(error){
      next(error);
    } else {
      res.status(200).json(result);
    }
  });
});

//POST
app.post('/:category', parser, (req, res)=>{
  db.add(req.params.category, req.body, (error, result)=>{
    res.status(200).json(result);
  });
});

//PUT
app.put('/:category/:id', parser, (req, res, next)=>{
    //see if the item exists
  db.fetchItem(req.params.category, req.params.id, (error, result)=>{
    if(error){
      next(error);
    } else {
      const item = result;
      db.update(req.params.category, req.params.id, item, req.body, (error, data)=>{
        res.status(200).json(data);
      });
    }
  });
});

//DELETE
app.delete('/:category/:id', (req, res, next)=>{
  db.fetchItem(req.params.category, req.params.id, (error, result)=>{
    if(error){
      next(error);
    } else {
      const item = result;
      db.delete(req.params.category, item, (error, data)=>{
        res.status(200).json(data);
      });
    }
  });
});

//error handling
app.use((error, req, res, next)=>{
  res.status(400).json(error);
});
