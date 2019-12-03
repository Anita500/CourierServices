
var cacheDb = require('./db');

var OrderData=function(orderId, callback)
{
  var orderId = orderId;
  cacheDb.createCache(orderId,'','','',null,function(result)
  {
    callback(result);
  });		
};

module.exports.OrderData=OrderData;