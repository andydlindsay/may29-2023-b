/* Question 2
 *
 *  Implement the functions defined below
 *
 */

// Meant to be used by median. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */

// 3,4,9,6,1,7
// 0 1 2 3 4 5

// length = 5
// targetIndex = 3 and 2

// (5 - 1) / 2
// Math.floor(6 / 2)

const median = function(arr) {
  // sort the array
  arr.sort();

  // check if the array is even length
  if (arr.length % 2 === 0) {
    // even-length
    // calculate the middle index and neighbouring index
    const rightIndex = arr.length / 2;
    const leftIndex = rightIndex - 1;

    // grab the elements from the array
    const rightElement = arr[rightIndex];
    const leftElement = arr[leftIndex];

    // calculate the average
    const result = (rightElement + leftElement) / 2;

    return result;
  }

  // odd-length
  // calculate the middle index (PEDMAS, BEDMAS)
  const middleIndex = (arr.length - 1) / 2;

  // grab the middle index from the array
  const result = arr[middleIndex];

  return result;
};

// Don't change below:
module.exports = { median };
