/* Question 0
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * COUNT - the number of items in a list
 *
 * For example:
 *
 *    count([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    9
 */
const count = function(arr) {
  const length = arr.length;
  return length;
 
  // return arr.length;
};

/* ===========================================================================
 * SUM - the sum of the numbers in a list
       - safe to assume that all items are numbers already
 *
 * For example:
 *
 *    sum([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    36
 */
const sum = function(arr) {
  // set aside space in memory to hold the running total
  let runningTotal = 0; // undefined

  // loop through the provided array
  for (const num of arr) {
    // add the current element to the running total
    runningTotal = runningTotal + num;
  }

  // return the running total
  return runningTotal;
};

// To be used by mean. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEAN - the average value of numbers in a list
 *      - use the provided 'round' function when returning your value
 *      - if empty array, return null to indicate that mean cannot be calculated
 *
 * For example:
 *
 *    mean([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    4
 */
const mean = function(arr) {
  // did they give us an empty array?
  if (arr.length === 0) {
  // if (!arr.length) {
    return null;
  }

  // avg = total / numOfElements
  const total = sum(arr);
  const numOfElements = count(arr);

  const avg = total / numOfElements;
  return round(avg);
};

// Don't change below:
module.exports = { count, sum, mean };
