/* Sort The Odd

Task

You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
Examples

[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

PREP
Parameters: An array of numbers.
Returns: An array of numbers with the odd number sorted in ascending order and even numbers in their original position.
Examples: sortArray([5, 8, 6, 3, 4]);//[3, 8, 6, 5, 4]
Pseudo code: Make an array of the indexes that hold odd numbers (indexArray). Make an array of just the odd numbers (oddArray ). Sort the oddArray in ascending order. Loop through indexArray. Put the number at index i of oddArray into the original array at index indexArray[i]. Return the original array.
*/

function sortArray(array) {
    let indexArray = [],
        oddArray = [];
    array.forEach((n, i)=> {
        if (n % 2 !== 0) {
            indexArray.push(i); 
            oddArray.push(n);
        }
    });
    oddArray.sort((a, b)=> a - b);
    indexArray.forEach((n, i)=> array[n] = oddArray[i]);
    return array;
}

console.log(sortArray([5, 8, 6, 3, 4]))
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))
console.log(sortArray([31, -49,  -9, 24, -38,  33, -45, -40,  11,  49, 39, 7,  20,  25, 10, -44, -12, 45,  19, -17, -26, -47,   3,  12]))