/* Merge Two Arrays

Write a function that combines two arrays by alternatingly taking elements from each array in turn.

Examples:

[a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

[1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]

Points:

    The arrays may be of different lengths, with at least one character/digit.
    One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).

Inspired by https://adriann.github.io/programming_problems.html

PREP
Parameters: Teo arrays, one of 1 character long strings and another of positive integers. Arrays contain at least one element.
Returns: One arrays containing all the elements from the argument arrays.
Examples: mergeArrays(['a','b','c'], [1,2,3]);//['a',1,'b',2,'c',3]
Pseudo code: Create a result arrray.  Create a loop that runs while both argument arrays have elements. Remove the elements from index i of the first array and second array and add them to result. When the loop ends add the elements remaining in the longer array to result. Return result. 
*/

function mergeArrays(a, b) {
    let result = [];
    while (a.length > 0 && b.length > 0) {
        result.push(a.shift())
        result.push(b.shift())
    }
    return result.concat(a, b);
}

console.log(mergeArrays(['a','b','c'], [1,2,3]))
console.log(mergeArrays(['a','b'], [1,2,3]))
console.log(mergeArrays(['a','b','c'], [1]))