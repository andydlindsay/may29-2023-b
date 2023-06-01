// anonymous => without name

// const total = 4;
// console.log(total);

// console.log(42);
console.log('alice');

const runMyFunc = function(callback) {
  callback('elise'); // console.log('elise')
};

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

runMyFunc(sayHello);

runMyFunc(function(name) {
  console.log(`hello there ${name}`);
});
