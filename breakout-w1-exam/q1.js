/* Question 1
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MIN - the lowest value in a list
 *
 * For example:
 *
 *    min([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    0
 */
const min = function(arr) {
  // return Math.min(...arr);

  // create a space to hold the lowest value seen
  // let lowestValue = Infinity;
  let lowestValue = arr[0];

  // loop through the provided array
  for (const num of arr) {
    // is this the lowest value we've seen so far?
    if (num < lowestValue) {
      // if yes, replace the lowest value with the current element 
      lowestValue = num;
    }
  }

  // return the lowest value seen
  return lowestValue;
};


/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const max = function(arr) {
  // set aside space in memory to hold highest seen so far
  let highestValue = arr[0];

  // loop through the provided array
  for (const num of arr) {
    // is this the highest value we've seen so far?
    if (num > highestValue) {
      // if yes, replace highest value with current element
      highestValue = num;
    }
  }

  // return highest value seen
  return highestValue;
};

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const range = function(arr) {
  const highest = max(arr);
  const lowest = min(arr);

  const difference = highest - lowest;
  return difference;

  // return max(arr) - min(arr);
};

// Don't change below:

module.exports = { min, max, range };
