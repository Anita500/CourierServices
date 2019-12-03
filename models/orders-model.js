var NodeCache = require( "node-cache" );
var myCache = new NodeCache();
var cacheDb = require('./db');

var OrderList=function(username, password, data, callback)
{
    if(data == ''){
    cacheDb.createCache('',username, password, '',null, function(result){

        callback(result); 

    });
}
else{
    if(typeof data.Status !== 'undefined'){
    cacheDb.createCache('',username, password, data, null, function(result){
        
                callback(result); 
        
            });
        }
        else{
            cacheDb.createCache('',username, password, '',data, function(result){
        
                callback(result); 
        
            });
        }
        }
}

module.exports.OrderList=OrderList;