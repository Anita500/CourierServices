//Diclaration
var express=require('express');
var app=express();
var homepage = require('./controllers/homepage');
var orderdetails = require('./controllers/orderdetails');
var orders = require('./controllers/orders');
var updateorderstatus = require('./controllers/updateorderstatus');
var addorder = require('./controllers/addorder');
var login=require('./controllers/login');
var logout=require('./controllers/logout');
var db=require('./models/db');
var bodyParser=require('body-parser');
var expressSession=require('express-session');
var path = require('path');
var port= 5001;


//COnfigure
app.set('view engine','ejs');

//Middlewire
app.use(bodyParser.urlencoded({extended:false}));
app.use(expressSession({secret: 'My secret',resave: false,saveUninitialized: true}));
app.get('/',function(req,res){
	res.redirect('/homepage');
});
// Static
app.use(express.static(path.join(__dirname, './Asset')));

app.all('*/*',function(req,res,next){
	

	if(req.url=='/homepage'|| req.url=='/login'|| req.url=='/orderdetails'|| req.url=='/orders' || req.url=='/addorder'|| req.url=='/')

	{
		next();
		return;
	}
	else
	{
		next();
	}
});

//Route
app.use('/homepage',homepage);
app.use('/orderdetails',orderdetails);
app.use('/orders',orders);
app.use('/updateorderstatus',updateorderstatus);
app.use('/addorder',addorder);
app.use('/login',login);
app.use('/logout',logout);

//Server setup
app.listen(port,function(){
	console.log('Started port '+port);
});
