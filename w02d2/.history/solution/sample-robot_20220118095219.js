// const readline = require('readline');
// import chalk from 'chalk';
const chalk = require('chalk');

const start = Date.now();

//
// a doAction function which console logs the acts taken by the robot
// by scheduling messages to appear when the action is finished
//
const doAction = function(name,millisecondsFromNow,nextAction,color = 'blue'){
  const timeSinceStart = Date.now() - start;
  console.log(chalk[color](`${timeSinceStart}: ${name} starting. will take ${millisecondsFromNow} milliseconds.`));
  setTimeout(()=>{
    if (nextAction !== null){
      nextAction();
    }
    const newTimeSinceStart = Date.now() - start;
    console.log(chalk[color](`${newTimeSinceStart}: ${name} ended ${millisecondsFromNow} later.`));
  },millisecondsFromNow);
}

//
// Look
//
const look = ()=>{
  doAction("look",1000,null);
};

//
// Get Up
//
const getUp = ()=>{
  doAction("get up",5000,walk,'red');
};

//
// Walk
//
const walk = ()=>{
  doAction("walk",7000,openTheDoor,'yellow');
};

//
// openTheDoor
//
const openTheDoor = ()=>{
  doAction("open the door",3000,walkThroughTheDoor,'magenta');
};

//
// walkThroughTheDoor
//
const walkThroughTheDoor = ()=>{
  look();
  doAction("walk through the door",4000,null,'green');
}

setInterval(()=>{
  look();
},1500);

getUp();

console.log("Default Programming is Finished.");

// console.log("Starting Input Based Programming.");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal: false
// });

// rl.on('line', function(line){
//     switch (line) {
//       case "look":
//         look();
//         break;
//       case "getUp":
//         getUp();
//         break;
//       case "walk":
//         walk();
//         break;
//       case "openTheDoor":
//         openTheDoor();
//         break;
//       case "walkThroughTheDoor":
//         walkThroughTheDoor();
//         break;
//       default:
//         console.log('input not understood');
//         break;
//     }
// });
