/* Array Combinations

Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

solve([[1,2],[4],[5,6]]),4)
solve([[1,2],[4,4],[5,6,6]]),4)
solve([[1,2],[3,4],[5,6]]),8)
solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)

In - an array of subarrays containing numbers. Positive, ints.
Out - a nubmer that represents how many unique arrays can be created.
*/

// function solve(arr) {
//     //loop through the array
//     //convert subarray into a set
//     let setArray = arr.map(subArray => new Set(subArray))
//     //multiply the length of each of the sets together
//     let product = setArray.reduce((acc, c) => acc * c.size, 1)
//     // return that product
//     return product
// }

// const solve = arr => arr.map(subArray => new Set(subArray)).reduce((acc, c) => acc * c.size, 1)

const solve = arr => arr.reduce((acc, c) => acc * new Set(c).size, 1)

console.log(solve([[1,2],[4],[5,6]]),4)
console.log(solve([[1,2],[4,4],[5,6,6]]),4)
console.log(solve([[1,2],[3,4],[5,6]]),8)
console.log(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)