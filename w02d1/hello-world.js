const sayHello = (who) => {
  const returnValue = `Hello, ${who}!`;
  return returnValue;
};

const sayGoodbye = (who) => {
  const returnValue = `Goodbye, ${who}!`;
  return returnValue;
};

// console.log(sayHello('MonkeyFuzz'));

module.exports = {
  sayHello: sayHello,
  sayGoodbye: sayGoodbye
};
