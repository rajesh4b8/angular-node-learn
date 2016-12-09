

var updateFuncs = [];
for (var i = 1; i <=2; i++){
    updateFuncs.push(function () { return i});
}

//-------------------------

var i = updateFuncs[0]();
console.log(i);  // 3   