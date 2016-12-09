(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

console.log('app.js');

// // a.js
// app.a.doWork();


// require(null, ['js/a'], function (a) { 
//     a.doWork();
// });

//-------------------------------------------------


var greet = require('./js/a');
greet();

},{"./js/a":2}],2:[function(require,module,exports){


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
},{}]},{},[1]);
