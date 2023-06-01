const runMyFunc = function(callback) {
  console.log(callback); // console.log
  callback('elise'); // console.log('elise')
};

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

sayHello('alice');

// sayHello()
// console.log()

runMyFunc(sayHello);
// runMyFunc(console.log);
