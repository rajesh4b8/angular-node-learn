


// e.g-1

function f(b){
  var a = 12;
  return a+b+35;
}

function g(x){
  var m = 4;
  return f(m*x);
}

g(21);




// ex-2


function foo(){
  throw new Error('oops');
}

function bar(){
foo();
}

function baz(){
bar();
}
baz();



// ex-3

function f1(){

let i=0;
while(i<5){
  // heavy task...
  console.log('hungry...');
  i++;
}

}

function f2(){
  console.log("simple work...");
}


f1();
f2();



//----------------------------------------------
/*
<button class="a">button-1</button>
<button class="b">button-2</button>
*/

console.log('satrt');

$.on('.a', 'click', function handle1(e) { 
    console.log('handling click event on .a element');
});

$.on('.b', 'click', function handle2(e) { 
    console.log('handling click event on .b element');
});

console.log('.......');

let i=0;
while(i<500){
  // heavy task...
  console.log('hungry...');
  i++;
}