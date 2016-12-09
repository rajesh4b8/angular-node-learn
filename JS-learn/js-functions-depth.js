

/*

  2 ways to create function-obj

    a. function decleration
    b. function expression (anonymous )


*/


// 1. function declaration

// console.log(add(12, 13));

// function add(n1, n2) {
//     return n1 + n2;
// }
// console.log(add(12,13));



// 2. function expression

// console.log(add(12, 13));

// var add = function (n1, n2) {
//     return n1 + n2;
// }
 
// console.log(add(12,13));


//------------------------------------


// functions as values

// function sayHello() { console.log('hello') };

// var sayHi = sayHello;
// sayHi();




// functions as args

// function greet(f) {
//     if (f) {
//         f();
//         return;
//     }
//     console.log('hello...');
// }
// greet();
// greet(function () { console.log('ola...'); });


// var nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// nums.sort(function (a, b) { return a - b;});

// console.log(nums);


// function as returns value


// function teach() {
//     console.log('teach...');

//     function learn() {
//         console.log('learn...');
//     }
//     return learn;
// }

// var learnFunc = teach();
// learnFunc();
// learnFunc();
// learnFunc();

//-----------------------------------


// function reflect() {
//     console.dir(arguments);
//     return arguments[0];
// }

// console.log(reflect(12,13,14));


// function sum() {
//     let result = 0,
//         len = arguments.length,
//         i = 0;
    
//     while (i < len) {
//         result += arguments[i];
//         i++;
//     }

//     return result;
// }


// function f1(){
//     return "no lunch"
// }
// // var f1 = new Function();
// function f1(money) {
//     return "biryani"
// }
// // var f1 = new Function();

// console.log(f1());


//----------------------------