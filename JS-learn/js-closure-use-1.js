

// --> to abstract public-behav of any module.


// counter module


const counter = (function() {
    
    let count = 0;  // private
    //public
    return {
        doCount: function() {
            count++;
        },
        getCount: function() {
            return count;
        }
    };
    
})();

// const counter = init();