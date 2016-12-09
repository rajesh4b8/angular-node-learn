/**
 * http://usejsdoc.org/
 */

var fs = require('fs');

fs.open('menu.txt', 'r', function(err, fd) {

	console.log('file opened.....');

	var buffer = new Buffer(100000);
	fs.read(fd, buffer, 0, 100000, null, function(err, bytesRead, buffer) {
		console.log('file red.....');
		var fileData = buffer.toString("utf8", 0, bytesRead);
		console.log(fileData);
		fs.close(fd,function() {
			// ...
		});
	});

});

fs.open('menu2.txt', 'r', function(err, fd) {

	console.log('file opened.....');

	var buffer = new Buffer(100000);
	fs.read(fd, buffer, 0, 100000, null, function(err, bytesRead, buffer) {
		console.log('file red.....');
		var fileData = buffer.toString("utf8", 0, bytesRead);
		console.log(fileData);
		fs.close(fd,function() {
			// ...
		});
	});

});

console.log('continue with other work....');
