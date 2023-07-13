// const myArr = [[1], 2, 3];
// // const other = [4, 5, 6];
// // const copy = myArr;
// const copy = JSON.parse(JSON.stringify(myArr));

// // spread operator

// const copy = [...myArr, 4];

// // copy.push(4);

// console.log(myArr);
// console.log(copy);

const user = {
  name: 'alice',
  age: 42,
  hobbies: ['sky diving', 'fishing']
};

const copy = {
  ...user,
  name: 'bob',
  hobbies: [
    ...user.hobbies,
    'watching tv'
  ]
};

// copy.name = 'bob';
// copy.hobbies.push('watching tv');

console.log(user);
console.log(copy);

