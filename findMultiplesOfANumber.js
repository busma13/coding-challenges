/* Find Multiples of a Number

In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

If you can, try writing it in only one line of code.

PREP
Parameters: Two positive integers.
Returns: An array of numbers.
Examples: findMultiples(2,6); //[2,4,6], findMultiples(3,6); //[3,6]
Pseudo code: Loop from integer to limit. Step by i * integer. Add i to an array each loop.  RTeturn the array.
*/
function findMultiples(integer, limit) {
  let arr = [];
  for (let i = integer; i <= limit; i += integer) {
    arr.push(i);
  }
  return arr;
}

console.log(findMultiples(2,6))
console.log(findMultiples(3,6))
