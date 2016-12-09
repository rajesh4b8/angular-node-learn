
"use strict";

//

// var person = {
//     name:''
// };

// how to check propert exist !

// // way-1

// if (person.name) {
//     console.log('name property exist...');
// }

// // way-2
// if ("name" in person) {
//     console.log('name property exist...');
// }


//---------------------------------------

// var person = {
//     name: 'Nag',
//     age: 32
// };

//Object.defineProperty(person, 'name', {configurable:false,writable:false});
//delete person.name;
//person.name = "Nage";

//Object.preventExtensions(person); // cant add new-prop
//Object.seal(person);              // cant add new-prop + cant delete any prop
//Object.freeze(person);              // cant add new-prop + cant delete any prop + cant change prop

// person.newProp = 'new-value';
// delete person.age;
// person.name = '';


//-----------------------------------------



// js obj's  properties

/*

   types

   --> data property
   --> accessor property

*/


var person = {
    
    _name: 'Nag',
    _age: 32,

    set name(newName) {
        if (!newName) {
            this._name = newName;
        }
    },
    get name() {
        return this._name;
    },

    set age(age) {
        if (age>0) {
            this._age = age;
        }
    },
    get age() {
        return this._age;
    },

};

person.name = "";  // write (set )
console.log(person.name);       // read  (get )
