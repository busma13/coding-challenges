/* Sum Mixed Array

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

PREP
Parameters: An array of integers in both string and number type.
Returns: a number that represents the sum of all integers in the array.
Examples: sumMix([9, 3, '7', '3']); // 22, sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]); // 42
Pseudo code: Convert all strings to numbers. (map(Number))
             Sum all elements in the string. (reduce) 
             return the sum.
*/

function sumMix(x){
    return x.map(Number).reduce((acc,c) => acc + c);
}

console.log(sumMix([9, 3, '7', '3']));
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));