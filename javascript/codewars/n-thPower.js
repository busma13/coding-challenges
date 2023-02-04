/* N-th Power

This kata is from check py.checkio.org

You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

Let's look at a few examples:

    array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
    array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

PREP
Parameters: An array of positive numbers and a non-negative number N.
Returns: A number that is the number at index N to the N-th power, or -1 if there is no index N.
Examples: index([1,2,3,4], 2); // 9, index([1,2,3], 3); // -1 
Pseudo code: Find the Nth index of the array.
             If it doesn't exist return -1.
             Else multiply it by itself N times.
             Return the product.
*/

function index(array, n){
    return array.length > n ? array[n]**n : -1;
}

console.log(index([1,2,3,4], 2));
console.log(index([1,2,3], 3));