var express=require('express');
var router=express.Router();
updateOrderModel=require.main.require('./models/updateorderstatus-model');

router.get('/?',function(req,res){
    var data={
		OrderNumber: req.query.OrderNumber
    };
    updateOrderModel.updateOrder(data,function(result){
		res.render('./updateorderstatus/index',{result:result});
	});
    
});

router.post('/?',function(req,res){
    var data={
        username: req.session.loggedUser,
		password: req.session.password,
        OrderNumber: req.query.OrderNumber,
        Status: req.body.statusSelect,
        OrderDate: req.body.DeliveredDate
    };
    req.session.data = data;
    res.redirect('/orders');
});

//Exports

module.exports=router;