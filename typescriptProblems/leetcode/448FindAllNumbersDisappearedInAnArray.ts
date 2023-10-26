/* 448. Find All Numbers Disappeared in an Array
Easy

Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
Example 2:

Input: nums = [1,1]
Output: [2]

Constraints:

n == nums.length
1 <= n <= 105
1 <= nums[i] <= n

Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
*/

function findDisappearedNumbers(nums: number[]): number[] {
  const arr: number[] = new Array(nums.length).fill(0);
  const result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    arr[nums[i] - 1] = nums[i];
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 1) {
      result.push(i + 1);
    }
  }
  return result;
}
