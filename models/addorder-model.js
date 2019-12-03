
var cacheDb = require('./db');

var addOrder=function(data, callback)
{
 
  cacheDb.createCache('', '','','', data, function(result)
  {
    callback(result);
  });
};
module.exports.addOrder=addOrder;