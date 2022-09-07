/* Filling an array (Part 1)

We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]

Note: The parameter is optional. So you have to give it a default value.

PREP
Parameters: A number (n).
Returns: An array with all the numbers from 0 to n-1. 
Examples: arr(2); //[0,1], arr(12);//[0,1,2,3,4,5,6,7,8,9,10,11]
Pseudo code: Loop from 0 to n - 1. On each loop add i to the array.  Return the array when the loop finishes.
*/

const arr = N => {
    let array = [];
    for (let i = 0; i < N; i++) {
         array.push(i);
    }
    return array;
}

console.log(arr(5))
console.log(arr(12))