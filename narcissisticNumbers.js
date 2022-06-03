/* Narcissistic Numbers

A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. If this seems confusing, refer to the example below.

Ex: 153, where l = 3 ( the number of digits in 153 )
1**3 + 5**3 + 3**3 = 153

Write a function that, given n, returns whether or not n is a Narcissistic Number.

PREP
Parameters: a number
Returns: a boolean that matches whether or not it fits the condition.
Examples: isNarcissistic(153); // true
Pseudo code: Calculate the number of digits in the number(l).
             Multiply each digit by l.
             Add these products together.
             Compare that sum to the original number.
             If they are equal return true, else return false.
*/

function isNarcissistic(n) {
    const l = n.toString().length;
    return n === n.toString().split('').map(Number).reduce((sum, num) => sum + num**l, 0) 
}

console.log(isNarcissistic(153));
console.log(isNarcissistic(1));
console.log(isNarcissistic(435));
console.log(isNarcissistic(370));
