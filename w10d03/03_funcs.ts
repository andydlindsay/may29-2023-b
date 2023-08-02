// name, arguments, return value

const sayHello = (name: string, age: number = 42): string => {
  return `hello there ${name}`;
};

const returnVal1 = sayHello('Elise', 100)
const returnVal2 = sayHello('Dean')

const returningPromise = (num: number): Promise<number> => {
  return new Promise((resolve) => {
    resolve(num);
  });
};

returningPromise(100)
  .then((data) => {})
