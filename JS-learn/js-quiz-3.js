


let teachService = {
    doTeach: function () {
        console.log(this.name+" teaching JS");
    }
};


let trainer = {
    name:'Ria'
};

var teachBtn = document.getElementById('teachBtn');
//teachBtn.addEventListener('click',teachService.doTeach);

// soln-1
// teachBtn.addEventListener('click', function () { 
//     teachService.doTeach();
// });

// better soln
teachBtn.addEventListener('click',teachService.doTeach.bind(trainer));


