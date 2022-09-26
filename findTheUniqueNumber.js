/* Find the Unique Number

There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

PREP
Parameters: An array of at least 3 numbers.
Returns: The number from the array that is unique.
Examples: See above.
Pseudo code: Compare the first two number in the array.  If they are equal, find the number that is not equal to the first number and return it. If they are not equal, compare the first number to the third. If those are equal, return the second number.  If they are unequal return the first number.
*/

function findUniq(arr) {
    return (arr[0] !== arr[1]) ? (arr[0] !== arr[2]) ? arr[0] : arr[1] : arr.find(n => n !== arr[0]); 
}

console.log(findUniq([1,0,0]))
console.log(findUniq([0,1,0]))
console.log(findUniq([0,0,1]))
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
console.log(findUniq([ 1, 1, 2, 1, 1 ]));
console.log(findUniq([ 3, 10, 3, 3, 3 ]));
  