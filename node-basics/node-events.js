/**
 * http://usejsdoc.org/
 */

var EventEmitter = require('events');
var util = require('util');

// var ee=new EventEmitter();
//
// ee.on('some-event', function(e) {
// console.log('some-event handled......');
// });
//
//
//
// ee.emit('some-event');
// ee.emit('some-event');
// ee.emit('some-event');
// ee.emit('some-event');

// ---------------------------------

function Door() {

	this.open = function() {
		console.log('door opened....');
		this.emit('open', {
			doorNum : 3,
			floor : 8
		});
	};
	this.close = function() {
		console.log('door closed....');
		this.emit('close', {
			doorNum : 3,
			floor : 8
		});
	};

}
util.inherits(Door, EventEmitter);

var door = new Door();

// ------------------------------------------------

var light = {
	setUp : function() {
		door.on('open', function(e) {
			console.log('Lights ON - ' + e.doorNum + " " + e.floor);
		});
		door.on('close', function(e) {
			console.log('Lights OFF - ' + e.doorNum + " " + e.floor);
		});
	}
};

var AC = {
	setUp : function() {
		door.on('open', function(e) {
			console.log('AC ON - ' + e.doorNum + " " + e.floor);
		});
		door.on('close', function(e) {
			console.log('AC OFF - ' + e.doorNum + " " + e.floor);
		});
	}
};

light.setUp();
AC.setUp();

// ------------------------------------------------

setTimeout(function() {
	door.open();
}, 5000);

setTimeout(function() {
	door.close();
}, 8000);
