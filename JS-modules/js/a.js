

// var o = {
//     doWork: function () {
//         console.log('im A');
//     }
// };

//------------------------------------------------

// soln-1  : IIFE/self-executable function pattern

// (function () { 

//     var i = 10;    

//     app.b.doWork();
//     app.c.doWork();

//     var o = {
//         doWork: function () {
//             console.log('im A');
//         }
//     };

//     app.a = o; // export


// })();

//--------------------------------------------------

// soln-2 : AMD


// define('js/a', ['js/b','js/c'], function (b,c) {

//     //......

//     b.doWork();
//     c.doWork();

//     var o = {
//         doWork: function () {
//             console.log('im A');
//         }
//     };

//     return o;

// });

//--------------------------------------------------

// soln-3 : commonJS

// console.log('a.js');

var message = "hello";
// console.log(message);

function greet() {
    console.log(message);
}
// greet();
module.exports = greet;