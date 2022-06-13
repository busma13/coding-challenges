/* Even numbers in an array

Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

PREP
Parameters: an array of numbers, not empty, and a number.
Returns: a new array of length number.
Examples: evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3). //[4, 6, 8]
Pseudo code: Reverse the array.
             Loop through the array.
             Check if the number is even.
             If it is unshift it onto a new array.
             Once array is 'numbers' long stop.
             Return array.
*/

function evenNumbers(array, number) {
    array.reverse();
    const newArr = [];
    let i = 0;
    while (newArr.length < number) {
        if (array[i] % 2 === 0) {
            newArr.unshift(array[i]);
        }
        i++;
    }
    return newArr;
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2));
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1));