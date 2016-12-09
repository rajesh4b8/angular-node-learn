

// var o = {
//     doWork: function () {
//         console.log('im B');
//     }
// };

//------------------------------------------------

// soln-1  : IIFE/self-executable function pattern

// (function () {


//     var o = {
//         doWork: function () {
//             console.log('im B');
//         }
//     };

//     app.b = o; // export    


// })();


//--------------------------------------------------

// soln-2 : AMD


// define('js/b', [], function () {

//     //......
//     var o = {
//         doWork: function () {
//             console.log('im B');
//         }
//     };

//     return o;

// });

//--------------------------------------------------