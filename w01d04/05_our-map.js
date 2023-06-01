const names = ['alice', 'bob', 'carol'];

// const newArr = [];
// for (const name of names) {
//   const transformed = `${name} is a fantastic person`;
//   newArr.push(transformed);
// }

const ourMap = function(arr, callback) {
  // create an output array
  const newArr = [];

  // loop through each element in the provided array
  for (const element of arr) {
    // call the provided callback on each element of the array AND capture the return value
    const returnVal = callback(element);

    // add the returnVal to the output array
    newArr.push(returnVal);
  }

  // return the array we created
  return newArr;
};

const toDoOnEachLoop = function(name) {
  return `${name} is a terrible person!`;
};

const ogMap = names.map(toDoOnEachLoop);

console.log('ogMap', ogMap);

const ourOutput = ourMap(names, toDoOnEachLoop);

console.log('ourMap', ourOutput);
