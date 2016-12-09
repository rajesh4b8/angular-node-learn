


function Person(name, age) {
    this.name = name;
    this.age = age;

    return {
        prop:'some-value'
    };
}

var p = new Person('Nag', 32);
console.log(p.name)