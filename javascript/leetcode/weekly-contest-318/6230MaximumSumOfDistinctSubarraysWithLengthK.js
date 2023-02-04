/* 6230. Maximum Sum of Distinct Subarrays With Length K
Medium

You are given an integer array nums and an integer k. Find the maximum subarray sum of all the subarrays of nums that meet the following conditions:

The length of the subarray is k, and
All the elements of the subarray are distinct.
Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return 0.

A subarray is a contiguous non-empty sequence of elements within an array.


Example 1:

Input: nums = [1,5,4,2,9,9,9], k = 3
Output: 15
Explanation: The subarrays of nums with length 3 are:
- [1,5,4] which meets the requirements and has a sum of 10.
- [5,4,2] which meets the requirements and has a sum of 11.
- [4,2,9] which meets the requirements and has a sum of 15.
- [2,9,9] which does not meet the requirements because the element 9 is repeated.
- [9,9,9] which does not meet the requirements because the element 9 is repeated.
We return 15 because it is the maximum subarray sum of all the subarrays that meet the conditions
Example 2:

Input: nums = [4,4,4], k = 3
Output: 0
Explanation: The subarrays of nums with length 3 are:
- [4,4,4] which does not meet the requirements because the element 4 is repeated.
We return 0 because no subarrays meet the conditions.
 

Constraints:

1 <= k <= nums.length <= 105
1 <= nums[i] <= 105
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var maximumSubarraySum = function(nums, k) {
    //create highestSum variable
    let highestSum = 0
    //loop through array, stop at length - k
    for (let i = 0; i <= nums.length - k; i++) {
        //check if elements are distinct
        let subArray = nums.slice(i, i + k)
        if (new Set(subArray).size === k) {
            //sum elements
            let sum = subArray.reduce((acc, c) => acc + c, 0)
            if (sum > highestSum) {
                highestSum = sum
            }
        }
    }
    //return highestSum
    return highestSum
};

console.log(maximumSubarraySum([1,5,4,2,9,9,9], 3), 15)
console.log(maximumSubarraySum([4,4,4], 3), 0)
console.log(maximumSubarraySum([3,5,3,4], 2), 8)
//time limit exceeded

/*
class Solution {
    public long maximumSubarraySum(int[] nums, int k) {

        Set<Integer> digits = new HashSet<Integer>();

        long sum=0;
        long max=0;

        int start=0;
        for(int i=0;i<nums.length;i++){
            if(digits.size()<k){
                if(!digits.contains(nums[i])){
                    sum+=nums[i];
                    digits.add(nums[i]);

                    if(digits.size()==k){
                        max = sum>max ? sum : max;
                    }
                }else{
                    while(start < i && digits.contains(nums[i])){
                        sum-=nums[start];
                        digits.remove(nums[start++]);
                    }
                    digits.add(nums[i]);
                    sum+=nums[i];
                }
            }else{
                sum-=nums[start];
                digits.remove(nums[start++]);
                while(start < i && digits.contains(nums[i])){
                    sum-=nums[start];
                    digits.remove(nums[start++]);
                }
                digits.add(nums[i]);
                sum+=nums[i];
                if(digits.size()==k){
                    max = sum>max ? sum : max;
                }

            }

        }

        return max;
    }
}
*/