/* Array.diff

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

PREP
Parameters: Two arrays of numbers.
Returns: One array of numbers that is the diff of the two parameter arrays.
Examples: see above.
Pseudo code: Loop through array a.
             Check for a match between the current number and all the numbers in array b.
             If there is a match remove that number from a.
             Return the edited list.
*/

// function arrayDiff(a, b) {
//     return a.filter(n => !b.includes(n))
// }

function arrayDiff(a, b) {
    if (a.length === 0 || b.length === 0) return a
    const bSet = new Set(b)
    return a.filter(n => !bSet.has(n))
}

console.log(arrayDiff([1,2],[1]), [2]);
console.log(arrayDiff([1,2,2,2,3],[2]), [1,3]);
console.log(arrayDiff([1,2,2], []), [1,2,2]);
console.log(arrayDiff([], [1,2]), []);
console.log(arrayDiff([1,2,3], [1,2]), [3]);