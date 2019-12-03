var NodeCache = require( "node-cache" );
var myCache = new NodeCache();
var addorderobj = {};
var addOrderId;

var createCache = function(orderId, username, password, result, data, callback){
	var order1Obj = { OrderNumber : "487655", Sfname: "Joey", Slname: "Tribiani", Saddress: "Central Perk", Scity: "Chennai" , Sstate: "Tamil Nadu", Szip : "987654", Sage :"22", SMobile : "9988776655",
    Rfname: "Abc", Rlname: "Bing", Raddress: "Central Perk", Rcity: "Bhopal" , Rstate: "Madhya Pradesh", Rzip : "120120", Rage :"22", RMobile : "7854123690", Cost: "410.0", Weight: "41.0", Status: "Open", OrderDate: "30/10/2018", DeliveredOn: "Not Delivered"};
	
	var order2Obj = { OrderNumber : "831655", Sfname: "abc", Slname: "xyz", Saddress: "Central Perk", Scity: "Chennai" , Sstate: "Tamil Nadu", Szip : "987654", Sage :"22", SMobile : "9988776655",
    Rfname: "ssss", Rlname: "cccc", Raddress: "Central Perk", Rcity: "abcd" , Rstate: "Tamil Nadu", Rzip : "120120", Rage :"22", RMobile : "7854123690", OrderDate : "30/10/2018",
	Status:"Delivered", Weight: "23.0", Cost:"230.0"};

	var order3Obj = { OrderNumber : "192874", Sfname: "shweta", Slname: "mishra", Saddress: "Army Camp", Scity: "Panipat" , Sstate: "Haryana", Szip : "1000067", Sage :"22", SMobile : "9988776655",
    Rfname: "bbbb", Rlname: "aaaa", Raddress: "Army camp", Rcity: "Rohtak" , Rstate: "Haryana", Rzip : "120120", Rage :"22", RMobile : "7854123690",OrderDate : "30/10/2018",
	Status:"Open", Weight: "58.0", Cost:"580.0"};

	var order4Obj = { OrderNumber : "655690", Sfname: "aaaa", Slname: "bbbb", Saddress: "Rajendra Nagar", Scity: "Indore" , Sstate : "Madhya Pradesh", Szip : "1000067", Sage :"22", SMobile : "9988776655",
    Rfname: "ffff", Rlname: "jjjjj", Raddress: "Central Perk", Rcity: "chennai" , Rstate: "Tamil Nadu", Rzip : "120120", Rage :"22", RMobile : "7854123690", OrderDate : "30/10/2018" ,
	Status:"Cancelled", Weight: "25.63", Cost:"256.3"};
	
	
	if(result.OrderNumber == '487655'){
	if(typeof result.Status !== 'undefined' && typeof result.OrderDate !== 'undefined'){
		order1Obj.Status = result.Status;
		order1Obj.OrderDate = result.OrderDate;
	myCache.set( "order1Key", order1Obj, function( err, success ){
		if( !err && success ){
		  console.log( success );
		}
		});
	}
}
	else{
		myCache.set( "order1Key", order1Obj, function( err, success ){
			if( !err && success ){
				console.log( success );
			}
			});
	}

	if(result.OrderNumber == '831655'){
	if(typeof result.Status !== 'undefined' && typeof result.OrderDate !== 'undefined'){
		order2Obj.Status = result.Status;
		order2Obj.OrderDate = result.OrderDate;
	  myCache.set( "order2Key", order2Obj, function( err, success ){
		if( !err && success ){
		  console.log( success );
		}
		});
	}
}
	else{
		myCache.set( "order2Key", order2Obj, function( err, success ){
			if( !err && success ){
				console.log( success );
			}
			});
	}

	if(result.OrderNumber == '192874'){
	if(typeof result.Status !== 'undefined' && typeof result.OrderDate !== 'undefined'){
		order3Obj.Status = result.Status;
		order3Obj.OrderDate = result.OrderDate;
	  myCache.set( "order3Key", order3Obj, function( err, success ){
		if( !err && success ){
		  console.log( success );
		}
		});
	}
}
	else{
		myCache.set( "order3Key", order3Obj, function( err, success ){
			if( !err && success ){
				console.log( success );
			}
			});
	}

	if(result.OrderNumber == '655690'){
	if(typeof result.Status !== 'undefined' && typeof result.OrderDate !== 'undefined'){
		order4Obj.Status = result.Status;
		order4Obj.OrderDate = result.OrderDate;
	  myCache.set( "order4Key", order4Obj, function( err, success ){
		if( !err && success ){
		  console.log( success );
		}
		});
	}
}
	else{
		myCache.set( "order4Key", order4Obj, function( err, success ){
			if( !err && success ){
				console.log( success );
			}
			});
	}


  if(orderId =='487655'){
	myCache.get( "order1Key", function( err, value ){
		if( !err ){
		  if(typeof value == 'undefined'){
			callback(value);
		  }else{
			callback(value);
		  }
		}
		if(err){
			callback(false);
		}
		});
}
else if(orderId == '831655'){
	  myCache.get( "order2Key", function( err, value ){
		if( !err ){
		  if(typeof value == 'undefined'){
			callback(value);
		  }else{
			callback(value);
		  }
		}
		if(err){
			callback(false);
		}
	  });
}
else if(orderId == '192874'){
	  
	  myCache.get( "order3Key", function( err, value ){
		if( !err ){
		  if(typeof value == 'undefined'){
			callback(value);
		  }else{
			callback(value);
		  }
		}
		if(err){
			callback(false);
		}
	  });
}
else if(orderId == '655690'){
	 
	myCache.get( "order4Key", function( err, value ){
		if( !err ){
		  if(typeof value == 'undefined'){
			callback(value);
		  }else{
			callback(value);
		  }
		}
		if(err){
			callback(false);
		}
	  });
}
else if(orderId){
	addOrderId = orderId;
	myCache.get( "addorderkey", function( err, value ){
		if( !err ){
		  if(typeof value == 'undefined'){
			callback(value);
		  }else{
			callback(value);
		  }
		}
		if(err){
			callback(false);
		}
	  });

}
if(addOrderId == result.OrderNumber){
	if(typeof result.Status !== 'undefined' && typeof result.OrderDate !== 'undefined'){
	addorderobj.Status = result.Status;
	addorderobj.OrderDate = result.OrderDate;
  myCache.set( "addorderkey", addorderobj, function( err, success ){
	if( !err && success ){
	  console.log( success );
	}
	});
}
}
if(data !== null){
	var min=100000; 
	var max=900000; 
	var random = Math.floor(Math.random() * (+max - +min)) + +min;
	addorderobj.OrderNumber = random;
	addorderobj.OrderDate = data.order_date;
	addorderobj.senderState = data.senderState;
	addorderobj.recipientState = data.recipientState;
	addorderobj.weight = data.weight;
	addorderobj.cost = data.cost;
	addorderobj.Status = 'open';
	myCache.set( "addorderkey", addorderobj, function( err, success ){
		if( !err && success ){
		  console.log( success );
		}
		});
}

	if(username !== '' &&  password !== ''){

	  myCache.mget( ["order1Key", "order2Key","order3Key","order4Key","addorderkey"], function( err, value ){
        if( !err ){
          if(typeof value == 'undefined'){
            callback(value);
          }else{
            callback(value);
          }
        }
        if(err){
            callback(false);
        }
		});
	}

};

module.exports.createCache=createCache;