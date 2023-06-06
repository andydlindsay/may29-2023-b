//const assert = require('assert').strict;
const { assert } = require('chai');
const fncs = require('../hello-world');

// describe();

it('says how are you at the appropriate time', () => {
  fncs.howAreYou('Joanne');
});

it('says Hello in the expected way', () => {
  const expected = `Hello, my little friend!`;
  const actual = fncs.sayHello('my little friend');
  
  assert.equal(expected, actual); // this will CRASH if not true
  console.log('actual', actual);
});

it('says Goodbye in the expected way', () => {
  const expected = `Goodbye, my little friend!`;
  const actual = fncs.sayGoodbye('my little friend');
  
  assert.equal(expected, actual); // this will CRASH if not true
  console.log('actual', actual);
});
