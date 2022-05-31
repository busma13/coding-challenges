/* Calculate Average

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

PREP
Parameters: An array of numbers or an empty array.
Returns: A single number that is their average.
Examples: find_average([1,1,1]); //1, find_average([1,2,3]); //2, find_average([1,2,3,4]); //2.5
Pseudo code: Check array to see if it's empty. If so return 0.
             Sum all numbers in the array.
             Divide sum by length of array.
             Return that answer.
*/

function find_average(array) {
    return array.length === 0 ? 0 : array.reduce((acc, c) => acc + c, 0) / array.length;
}

console.log(find_average([1,1,1]));
console.log(find_average([1,2,3]));
console.log(find_average([1,2,3,4]));