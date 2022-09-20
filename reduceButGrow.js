/* Reduce but Grown

Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

PREP
Parameters: An array of integers.
Returns: An integer that is the product of all the numbers in the array.
Examples: grow([1,2,3]);//6, grow([4,1,1,1,4]);//16
Pseudo code: Use the reduce method on the array to multiply all the values together. Return that product.
*/

function grow(x){
    return x.reduce((acc, c) => acc * c);
}

console.log(grow([1,2,3]))
console.log(grow([4,1,1,1,4]))