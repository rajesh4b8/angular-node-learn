/**
 * http://usejsdoc.org/
 */

var Product = require('../model/Product');

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	Product.find(function(err, docs) {
		res.json(docs);
	});
});
router.post('/', function(req, res) {

	var product = new Product();
	Object.assign(product, req.body);
	product.save(function(err, doc) {
		res.status(201).json(doc);
	});

});
router['delete']('/:id', function(req, res) {
	Product.remove({_id:req.params.id},function(err,doc){
		if(err){
			console.dir(err);
		}
		//console.log(doc);
		res.send('product revoved...');
	});
});


module.exports = router;