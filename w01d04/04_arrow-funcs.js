// arrow functions were added in ES6 (2015)
// advantages of arrow functions
// 1. no function keyword!!!!
// 2. if only one argument, no parens needed
// 3. if only one line of code, no curly braces needed
// 4. if no curly braces, the line of code is implicitly returned


const funct = function(name) {
  console.log(`hello there ${name}`);
  // return undefined;
};

const arrow = name => `hello there ${name}`;

const returnVal = arrow('alice');
console.log('returnVal', returnVal);

const loggedUserIn = doThing(true);
console.log(loggedUserIn);
