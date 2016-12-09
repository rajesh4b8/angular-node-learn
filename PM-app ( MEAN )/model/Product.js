/**
 * http://usejsdoc.org/
 */
var mongoose = require('mongoose');

var Product = mongoose.model('Product', {
	id : String,
	name : String,
	price : Number,
	description : String,
	make:Date,
},"products");

module.exports=Product;