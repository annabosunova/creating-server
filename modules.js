// require statement  to import people.js to modules.js module, 
// we write relative path to people.js
const x = require('./people');

// output whatever was exported from people.js module,
//  if nothing was exported it will be an empty object

console.log(x); 
//another way:
console.log(x.people,x.ages)

// if we have multiple objects exported from the module
// but we want to import only one of those we can specify 
// this object name in the file we want to import it to:
const { people } = require('./people');

console.log(people);
