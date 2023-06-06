//               'getUp', 3000, walk
function doAction(name, duration, nextAction){
  console.log(`Starting the ${name} action.`);
  setTimeout(() => {
    console.log(`Ending the ${name} action.`);
    if (nextAction){
      nextAction();
    }
  }, duration); // schedules a callback to be called
}

//
// look
//
const look = () => {
  doAction('look', 1500, look);
};

//
// getUp
//
const getUp = () => {
  doAction('getUp', 3000, walk);
};

//
// walk
//
const walk = () => {
  doAction('walk', 5000, openTheDoor);
};

//
// openTheDoor
//
const openTheDoor = () => {
  doAction('openTheDoor', 2000, walkThroughTheDoor);
};

//
// walkThroughTheDoor
//
const walkThroughTheDoor = () => {
  doAction('walkThroughTheDoor', 1500, null);
};


look();
getUp();
sleepFor(10000);

console.log("End of the Main Thread.");

// the event loop cannot start until the main thread is finished.

// const fs = require('fs');

// fs.readFile('./filename.txt', 'utf8', (err, results) => {
//   if (err){
//     console.log('File Read Error:', err);
//   } else {
//     console.log('results', results);
//   }

// });

// const axios = require('axios');

// axious.get('http://example.com/monkeyfuzz', );

// // 
// // callbacks are not in and of themselves async
// // 

// const one = () => {
//   console.log('one');
// };

// const two = () => {
//   console.log('two');
// };


// function doThings(callback){
//   for (let j = 0; j < 42; j++) {
//     callback();
//   }
// }

// doThings(two);

