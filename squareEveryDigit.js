/* Square Every Digit

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer

PREP
Parameters: An integer.
Returns: An integer.
Examples: squareDigits(9119); //811181, squareDigits(5); //25
Pseudo code: Convert num to string.
             Convert string to array of digits.
             Loop through array and square each digit.
             Convert array to string.
             Convert string to number.
             Return number.
*/

function squareDigits(num){
    return Number(num.toString().split('').map(d => d*d).join(''));
}

console.log(squareDigits(5));
console.log(squareDigits(9119));