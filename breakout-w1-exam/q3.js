/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */

// "lighthouse in the house"
// {
//   i: 1,
//   l: 2,
//   g: 1
// }
const mode = function(arr) {
  // create the piles
  // set aside space in memory to store our piles
  const piles = {};

  // loop through the provided array
  for (const num of arr) {
    // have we seen this element before
    if (piles[num]) {
      // if yes, then we need to increment the number of times seen
      piles[num] += 1;
    } else {
      // if no, we need to create a new key/value pair inside piles
      piles[num] = 1;
    }
  }

  // console.log(arr);
  // console.log(piles);

  // compare the piles
  // create variables to hold highest value seen AND key associated with highest value
  let highestValue = 0;
  let highestKey = null;

  // loop through the piles object
  for (const pileKey in piles) {
    // grab the value from the object
    const value = piles[pileKey];

    // is this the highest value we've seen so far?
    if (value > highestValue) {
      // if yes, update the highest value seen
      highestValue = value;
      highestKey = pileKey;
    }
  }

  return Number(highestKey); // '5' => 5
};

// Don't change below:
module.exports = { mode };
