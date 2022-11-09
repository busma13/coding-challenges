/* 35. Search Insert Position
Easy

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

    1 <= nums.length <= 104
    -104 <= nums[i] <= 104
    nums contains distinct values sorted in ascending order.
    -104 <= target <= 104

*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (target > nums[nums.length - 1]) {
        return nums.length
    } else if (target < nums[0]) {
        return 0
    } else {
        return binarySearch(nums, target, 0, nums.length - 1)
    }
};

function binarySearch(nums, target, idxLow, idxHigh) {
    console.log(nums, target, idxLow, idxHigh)
    if (idxLow > idxHigh) {
        return error
    }
    let mid = Math.floor((idxLow + idxHigh) / 2)
    //divide nums in half
    // check last value of lower half for target
    if (nums[mid] === target) {
        //if target found return the idx
        return mid
    }
    if (idxLow === idxHigh) {
        return idxLow
    }
    //if less than target run function on upper half
    if (nums[mid] < target) {
        console.log('too low')
        return binarySearch(nums, target, mid + 1, idxHigh)
    }
    //if greater than target run function on lower half
    if (nums[mid] > target) {
        console.log('too high')
        return binarySearch(nums, target, idxLow, mid)
    }
}

console.log(searchInsert([1,3,5,6], 5), 2)
console.log(searchInsert([1,3,5,6], 7), 4)
console.log(searchInsert([1,3,5,6], 0), 0)
console.log(searchInsert([1,3,5,6], 2), 1)


//better answer
// var searchInsert = function(nums, target) {
//     let start = 0;
//     let end = nums.length - 1;
    
//     while(start < end){
//         let mid = Math.floor((start+end)/2);
//         if (nums[mid] === target) return mid;
//         nums[mid] > target ? end = mid : start = mid + 1;
//     }
//     if (start === end){
//         return target <= nums[start] ? start : start + 1;
//     }
// };