/* Odd or Even

Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).
Examples:

Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"

Have fun!

PREP
Parameters: An array of integers.
Returns: The string 'odd' or 'even'.
Examples: oddOrEven([0]);//even, oddOrEven([0, 1]);//odd, oddOrEven([]);//even
Pseudo code: If the array is empty return even.  Sum all the elements in the array.  If the sum modulo 2 is o return even. Else return odd.
*/

function oddOrEven(array) {
    return array.reduce((acc, c) => acc + c, 0) % 2 === 0 ? 'even' : 'odd';
}

console.log(oddOrEven([]))
console.log(oddOrEven([0]))
console.log(oddOrEven([0,1]))
console.log(oddOrEven([34, 45, 2, 64]))