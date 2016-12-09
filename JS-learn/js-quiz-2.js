


function start() {
    
function Trainer(name){
    this.name = name;
    this.doTeach=function() {
        console.log(this.name + " teaching js");
        let self = this;
        function doLearn() {
            console.log(this.name+' learning js from '+self.name);
        }
        return doLearn;
    }
};

var nagTrainer = new Trainer('Nag'); // constructor invocation
var learnFunc = nagTrainer.doTeach(); // method-invocation

var emp1 = { name: 'emp1' };
var emp2 = { name: 'emp2' };

learnFunc.call(emp1);  // call/apply/bind invocation
learnFunc.call(emp2);    


}

start();  // function-invocation

