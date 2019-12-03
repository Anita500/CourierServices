
var cacheDb = require('./db');

var updateOrder=function(result, callback)
{
  if(typeof result.username == 'undefined' && typeof result.password === 'undefined'){
    cacheDb.createCache(result.OrderNumber,'','','',null, function(result1)
    {
      callback(result1);
    });
}
else{
  cacheDb.createCache('', result.username, result.password, result,null, function(result1)
  {
    callback(result1);
  });
}
};
module.exports.updateOrder=updateOrder;