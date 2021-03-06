const router = require('express').Router();
const parser = require('../parser')();
const User = require('../models/user');
const token = require('../auth/token');

module.exports = router

  .post('/signup', parser, (req, res, next)=>{
    const {username, password} = req.body;
    delete req.body.password;

    User.find({username})
      .count()
      .then(count => {
        if(count > 0) throw {code: 400, error: `username ${username} already exists`};

        const user = new User(req.body);
        user.generateHash(password);
        return user.save();
      })
      .then(user => token.sign(user))
      .then(token => res.send({token}))
      .catch(next);
  })

  .post('/signin', parser, (req,res, next)=>{
    const {username, password} = req.body;
    delete req.body.password;

    User.findOne({username})
      .then(user => {
        if (!user || !user.compareHash(password)){
          throw {code: 400, error: 'invalid username or password'};
        }
        return token.sign(user);
      })
      .then(token => res.send({token}))
      .catch(next);
  });
