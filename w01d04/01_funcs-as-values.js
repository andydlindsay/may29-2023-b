// function declaration
// function sayHello1(name) {
//   console.log(`hello there ${name}`);
// }

// function expression
// const sayHello = function(name) {
//   // console.log(`hello there ${name}`);

//   return `hello there ${name}`;
// };

// const returnVal = sayHello('alice');
// console.log(returnVal);

// const total = sum(2, 4);

// const returnVal = sayHello();
// console.log(returnVal);

// console.log(sayHello()); // undefined


// console.log(sayHello); // ???
// console.log(console.log);

const a = 5;
const b = a;

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

// const copy = sayHello;

// copy('carol'); // sayHello('carol')

const funcs = [];
funcs.push(sayHello);
funcs.push(console.log);

console.log(funcs);

funcs[0]('dean');

// const myFunc = funcs[0];
// myFunc('dean');


