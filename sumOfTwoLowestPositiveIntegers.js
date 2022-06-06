/* Sum of Two Lowest Positive Integers

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

PREP
Parameters: An array of at least 4 positive integers.
Returns: An integer that is the sum of the two smallest numbers in the array.
Examples: sumTwoSmallestNumbers([5, 8, 12, 19, 22]); //13, sumTwoSmallestNumbers([15, 28, 4, 2, 43]); //6
Pseudo code: Sort the array.
             Add the first two numbers together.
             Return the sum.
*/

function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a, b) => a - b);
    return numbers[0] + numbers[1];
}
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));