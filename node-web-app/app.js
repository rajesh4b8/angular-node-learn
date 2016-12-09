/**
 * http://usejsdoc.org/
 */

var express = require('express');
var fs = require('fs');
var logger = require('./logger');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

// app.get("/", function(req, res) {
// res.send('Welcome to Express-World');
// });
// app.get('/products', function(req, res) {
//
// //
// var items = [ {
// name : 'Laptop',
// price : 100,
// desc : 'bla'
// }, {
// name : 'Mobile',
// price : 200,
// desc : 'bla'
// } ];
//
// // res.send(items); // object | array ==> json
// res.json(items);
//
// });
//
// app.get('/product-title.html', function(req, res) {
//
// var html = "<div><h3>Title</h3></div>";
// res.send(html);
//
// });
//
// app.get('/path', function(req, resp) {
// resp.redirect(301, 'new-path');
// });
// app.get('/new-path', function(req, resp) {
// resp.send('welcome to new-path');
// });
//

// -------------------------------------------
//
// app.get("/", function(req, res) {
//	
// // fs.readFile(__dirname+"/public/index.html", function(err, data) {
// // res.send(data);
// // });
//	
// res.sendFile(__dirname+"/public/index.html");
//	
// });
//
// app.get("/css/bootstrap.css", function(req, res) {
// res.sendFile(__dirname+"/public/css/bootstrap.css");
// });
//

// -------------------------------------------

//app.use(logger); // custom middleware
//// app.use(morgan());
//app.use(express.static("public")); // 
//app.get('/products', function(req, res) {
//
//	// load data from DB
//	var items = [ {
//		name : 'Laptop',
//		price : 100,
//		desc : 'bla'
//	}, {
//		name : 'Mobile',
//		price : 200,
//		desc : 'bla'
//	} ];
//
//	if (req.query.count >= 0) {
//		res.json(items.slice(0, req.query.count));
//	} else {
//		res.json(items);
//	}
//
//});

//---------------------------------------------

//app.param('id',function(req,resp,next){
//	var id=req.params.id;
//	req.id=id;
//	next();
//});
//
//app.get("/products/:id",function(req,resp,next){
//	resp.send('product-id :'+req.id);
//});
//app.get("/customers/:id",function(req,resp,next){
//	resp.send('customer-id :'+req.id);
//});

//---------------------------------------------

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.post('/products',function(req,resp,next){
	resp.send(req.body);
});


//---------------------------------------------
















app.listen(3000, function() {
	console.log('Listening on http://localhost:3000/');
});