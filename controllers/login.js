var express=require('express');
var router=express.Router();

// Request Handler

router.get('/',function(req,res){
	res.render('./login/index');
});

router.post('/',function(req,res){
	var data={
		username: req.body.userName,
		password: req.body.password
	};
			if (data.username == 'admin01' && data.password == 'AdminPass01')
			{
				req.session.loggedUser = data.username;
				req.session.password = data.password;
				res.redirect('/orders');
			}
			//else
			//{
				//res.render('./login',{errorMessage:{message:'Invalid Login credentials'}});
			//}
});

//Exports

module.exports=router;

