const data = require('../data');

const db = {};

db.fetchAll = function(category, callback){
  if(data[category]){
    callback(null, JSON.stringify(data[category]));
  } else {
    callback(JSON.stringify('Resource not found'));
  }
};

db.fetchItem = function(resource, id, callback){
  const category = data[resource];

  if(category){
    if(category[id-1]){
      callback(null, JSON.stringify(category[id-1]));
    } else {
      callback(JSON.stringify('Resource not found'));
    }
  } else {
    callback(JSON.stringify('Resource not found'));
  }
};

module.exports = db;
