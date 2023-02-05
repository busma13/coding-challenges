/* Grasshopper - Summation

Summation

Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

PREP
Parameters: Positive integer greater than 0 (num).
Returns: Positive integer.
Examples: summation(5); //15, summation(1); //1
Pseudo code: Create a sum variable and set it to 0.  Run a loop from 1 to num. On each loop add the iterator to sum.  Return the sum.
*/

var summation = function (num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

console.log(summation(5));
console.log(summation(1));