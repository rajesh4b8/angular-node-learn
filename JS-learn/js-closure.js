
// closure

/*

A closure is a function having access to the parent scope,
even after the parent function has closed.

why we need?

 --> to abstract public-behav of any module.
 --> whicle executing function asycn to access parent-scoped data.

*/

function teach(sub) {
    console.log('teaching ' + sub);
    let notes = sub + "notes";
    let v = 100;
    function learn() {
        console.log('learning '+notes);    
    }
    console.log('teach finished...');
    return learn;
} // context will destroy

let learnFunc=teach('js');  // new-context with (args + local)


learnFunc();