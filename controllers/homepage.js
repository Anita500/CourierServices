var express=require('express');
var router=express.Router();

router.get('/',function(req,res){
	res.render('./homePage/index');
});

 router.post('/',function(req,res){
	var data={
		orderId: req.body.orderId
	};
					req.session.orderId = data.orderId;
					res.redirect('/orderdetails');	
});

//Exports

module.exports=router;

