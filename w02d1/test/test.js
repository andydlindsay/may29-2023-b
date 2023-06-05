// const assert = require('assert');
const assert = require('chai').assert;

const objFuncs = require('../hello-world');

it('can say hello', () => {
  const actual = objFuncs.sayHello('Monkey');
  const expected = 'Hello, Monkey';
  assert.equal(expected, actual);
});

it('can say goodbye', () => {
  const actual = objFuncs.sayGoodbye('Monkey');
  const expected = 'Goodbye, Monkey';
  
  assert.equal(expected, actual);  
});


// console.log('test is finished');
