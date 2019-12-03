var express=require('express');
var router=express.Router();
ordersModel=require.main.require('./models/orders-model');


router.all('/',function(req,res){
    var username = req.session.loggedUser;
    var password = req.session.password;
    if(typeof req.session.data === 'undefined'){
    ordersModel.OrderList(username, password, '', function(result)
    {
       /* if(typeof result !== 'undefined' && JSON.stringify(result) !== '{}')
        {
            res.render('./orders/index',{result:result});
        }
        if(typeof result === 'undefined' || JSON.stringify(result) === '{}')
        {*/
            res.render('./orders/index',{result:undefined});
        //}
    });
}
else{
    var data = req.session.data;
    if(typeof data.Status !== 'undefined')
    {
    ordersModel.OrderList(username, password, data, function(result)
    {
        if(typeof result !== 'undefined' && JSON.stringify(result) !== '{}')
        {
            res.render('./orders/index',{result:result});
        }
        if(typeof result === 'undefined' || JSON.stringify(result) === '{}')
        {
            res.render('./orders/index',{result:undefined});
        }
    });
    }
    else{
        ordersModel.OrderList(username, password, data, function(result)
    {
        if(typeof result !== 'undefined' && JSON.stringify(result) !== '{}')
        {
            res.render('./orders/index',{result:result});
        }
        if(typeof result === 'undefined' || JSON.stringify(result) === '{}')
        {
            res.render('./orders/index',{result:undefined});
        }
    });
    }
}
});

//Exports

module.exports=router;

