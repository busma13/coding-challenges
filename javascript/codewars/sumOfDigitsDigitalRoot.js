/* Sum of digits / Digital root

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
Examples

    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

PREP
Parameters: A non-negative integer.
Returns: A non-negative integer that is 1 digit long.
Examples: digital_root(16); //7, digital_root(942); //6
Pseudo code: Break the number into an array of digits.
             If array length is 1 return the value at index 0.
             Else sum all the values and run the function on the sum.
*/

function digital_root(n) {
  let arr = n.toString().split('');
  if (arr.length === 1) {
    return n;
  } else {
    return digital_root(arr.reduce((acc, c) => +acc + +c));
  }
}

console.log(digital_root(4));
console.log(digital_root(16));
console.log(digital_root(942));
console.log(digital_root(132189));
console.log(digital_root(493193));