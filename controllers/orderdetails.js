var express=require('express');
var router=express.Router();
orderModel=require.main.require('./models/orderdetails-model');

router.all('/',function(req,res){
	var orderId = req.session.orderId;
    orderModel.OrderData(orderId, function(result)
			{
				if(result)
				{
                    res.render('./orderdetails/index',{result:result});
				}
			});		
});

//Exports   

module.exports=router;

