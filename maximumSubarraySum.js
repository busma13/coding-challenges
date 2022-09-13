/* Maximum Subarray Sum

The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

PREP
Parameters: An array of numbers.
Returns: A subarray of the original array that has the greatest sum.
Examples: See above.
Pseudo code: Check if the array is empty. If so return 0. Check if all elements are negative. If so return 0.  Check if all elements are positive. If so return the sum of the array. Set a maxSum variable.  For each element in the array, check if the element's value is larger than maxSum. Also check the values of the element plus each element after it until you reach the end of the array. If any sum is larger than maxSum replace maxSum with that value. After looping through the whole array return maxSum.  
*/

var maxSequence = function(arr){
    let copy = arr.slice();
    if (arr === [] || copy.sort((a,b) => b-a)[0] < 0) return 0;
    if (copy.sort((a,b) => a-b)[0] >= 0) return arr.reduce((acc, c) => acc + c, 0);
    console.log(arr);
    let maxSum = 0;
    arr.forEach((n, i, a) => {
        let tempSum = 0;
        for (let j = i; j < a.length; j++) {
            tempSum += a[j];
            if (tempSum > maxSum) maxSum = tempSum;
        }
    })
    return maxSum;
}

console.log(maxSequence([-1,-5,-23,-2]));
console.log(maxSequence([-1,-5,-23,-2]));
console.log(maxSequence([5, 6, 12, 8, 19, 0]));
console.log(maxSequence([5, 6, 12, -2, 3, 8, 19, -6]));
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));