/* Flatten and Sort an Array

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

Addendum:

Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well

PREP
Parameters: An array of arrays
Returns: A single array containing all the elements from the 2d array, sorted in ascending order.
Examples: see above.
Pseudo code: Flatten the array.  Sort from smallest to largest. Return the array.
*/

function flattenAndSort(array) {
    return array.flat().sort((a, b) => a - b);
}

console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));