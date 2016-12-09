

// var o = {
//     doWork: function () {
//         console.log('im C');
//     }
// };

//------------------------------------------------

// soln-1  : IIFE/self-executable function pattern

// (function () {


//     var o = {
//         doWork: function () {
//             console.log('im C');
//         }
//     };


//     app.c = o; // export    

// })();

//--------------------------------------------------

// soln-2 : AMD


// define('js/c', [], function () {

//     //......
//     var o = {
//         doWork: function () {
//             console.log('im C');
//         }
//     };

//     return o;

// });

//--------------------------------------------------