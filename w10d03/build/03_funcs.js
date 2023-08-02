"use strict";
// name, arguments, return value
const sayHello = (name, age = 42) => {
    return `hello there ${name}`;
};
const returnVal1 = sayHello('Elise', 100);
const returnVal2 = sayHello('Dean');
const returningPromise = (num) => {
    return new Promise((resolve) => {
        resolve(num);
    });
};
returningPromise(100)
    .then((data) => { });
