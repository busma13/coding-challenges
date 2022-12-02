/* 153. Find Minimum in Rotated Sorted Array
Medium

Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

Example 1:

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
Example 2:

Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
Example 3:

Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 

Constraints:

n == nums.length
1 <= n <= 5000
-5000 <= nums[i] <= 5000
All the integers of nums are unique.
nums is sorted and rotated between 1 and n times.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */

// Recursive method - slow(169ms) but low memory usage(46.8MB)
 var findMinRecursion = function(nums) {
    console.log(nums);
    if (nums.length === 1) return nums[0];
    let half;
    if (nums.length % 2 === 0) {
        half = Math.floor(nums.length/2) - 1;
    } else {
        half = Math.floor(nums.length/2);    
    }
    console.log(half);
    if (nums[half] < nums[nums.length - 1]) {
        return findMin(nums.slice(0, half + 1))
    } else {
        return findMin(nums.slice(half + 1));
    }
};

//while loop method - 48ms faster than 99.93%, 42MB less than 69.23%
var findMin = function(nums) {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        let mid = Math.floor((r + l) / 2);
        if (nums[mid] < nums[r]) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }
    return nums[r];
}

console.log(findMin([4,5,6,7,0,1,2]), 0);
console.log(findMin([3,4,5,1,2]), 1);
console.log(findMin([11,13,15,17]), 11);