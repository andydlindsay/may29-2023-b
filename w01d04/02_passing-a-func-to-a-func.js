const runMyFunc = function(whatever) {
  const myFunc = arr[0];
  console.log(arr[0]); // console.log
  whatever('elise'); // console.log('elise')

  const newFunc = function() {};

  return newFunc;
};

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

sayHello('alice');

// sayHello()
// console.log()

runMyFunc(sayHello);
// runMyFunc(console.log);
