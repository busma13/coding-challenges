/* 6220. Average Value of Even Numbers That Are Divisible by Three

Difficulty:Easy
Given an integer array nums of positive integers, return the average value of all even integers that are divisible by 3.

Note that the average of n elements is the sum of the n elements divided by n and rounded down to the nearest integer.

 

Example 1:

Input: nums = [1,3,6,10,12,15]
Output: 9
Explanation: 6 and 12 are even numbers that are divisible by 3. (6 + 12) / 2 = 9.
Example 2:

Input: nums = [1,2,4,7,10]
Output: 0
Explanation: There is no single number that satisfies the requirement, so return 0.
 

Constraints:

1 <= nums.length <= 1000
1 <= nums[i] <= 1000

/**
 * @param {number[]} nums
 * @return {number}
 */

 var averageValue = function(nums) {
    let filtered = nums.filter(num => num % 2 === 0 && num % 3 === 0)
    let avg = Math.floor(filtered.reduce((acc, c)=> acc + c, 0)/filtered.length)
    return avg || 0
};

console.log(averageValue([1,3,6,10,12,15]), 9)
console.log(averageValue([1,2,4,7,10]), 0)
console.log(averageValue([94,65,82,40,79,74,92,84,37,19,16,85,20,79,25,89,55,67,84,3,79,38,16,44,2,54,58,94,69,71,14,24,13,21]), 61)