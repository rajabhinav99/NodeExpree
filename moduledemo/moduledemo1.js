var mod1obj = require('./lib/mod1');

var mod2obj = require('./lib/mod2');

var mod3obj = require('../moduledemo2/app')

console.log(mod1obj);
console.log(mod1obj.id);
console.log();
mod1obj.doget();
console.log(mod2obj.id);

console.log();
console.log();
mod3obj.getData();
mod3obj.getLogin();