
// console.log('hello...');

var en = require('./en');
var es = require('./es');

function greet(lang) {
    if (lang === 'en') {
        en();
    }
    if (lang === 'es') {
        es();
    }
}
module.exports = greet;