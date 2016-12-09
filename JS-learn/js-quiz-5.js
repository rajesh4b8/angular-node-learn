

function teach() {
    
    console.log('teaching....');
    var name = "Nag"; // move this data to heap before context destroy

    setTimeout(function () { 
        try {
            console.log('after timeout...');
            //throw new Error('oops i hate JS');
            console.log(name);
        }
        catch (e) {
            console.log('i caught '+e.message);
        }
    }, 5000);    

    console.log('teaching finished..');
}

teach();