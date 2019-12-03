var express=require('express');
var router=express.Router();
addOrderModel=require.main.require('./models/addorder-model');

router.get('/',function(req,res){
		res.render('./addorder/index');
    
});

router.post('/',function(req,res){
    var data={
        username: req.session.loggedUser,
        password: req.session.password,
        senderFirstName: req.body.senderFirstName,
        senderCity: req.body.senderCity,
        senderLastName: req.body.senderLastName,
        senderState: req.body.senderState,
        senderAge: req.body.senderAge,
        senderContact: req.body.senderContact,
        senderAddress: req.body.senderAddress,
        senderZipCode: req.body.senderZipCode,
        recipientFirstName: req.body.recipientFirstName,
        recipientCity: req.body.recipientCity,
        recipientLastName: req.body.recipientLastName,
        recipientState: req.body.recipientState,
        recipientAge: req.body.recipientAge,
        recipientContact: req.body.recipientContact,
        recipientAddress: req.body.recipientAddress,
        recipientZipCode: req.body.recipientZipCode,
        order_date: req.body.orderDate,
        weight: req.body.weight,
        cost: req.body.cost
    };
        req.session.data = data;
        res.redirect('/orders');
});

//Exports

module.exports=router;