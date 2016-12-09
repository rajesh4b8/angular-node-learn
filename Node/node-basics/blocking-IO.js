/**
 * http://usejsdoc.org/
 */


/*

	blocking IO
	
	1. open file........................
	2. create buffer...............
	3. read file.....................
	4. display on console ...........
	
	5. continue with other work....

*/


var fs=require("fs");

var fd=fs.openSync("menu.txt", "r");
var fileData=fs.readFileSync(fd, 'utf8');

console.log(fileData);

console.log('continue with other work...');








