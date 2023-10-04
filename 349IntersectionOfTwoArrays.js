/* 349. Intersection of Two Arrays
Easy

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
*/
function intersection(nums1, nums2) {
    var result = [];
    var memo = [];
    var set1 = new Set(nums1);
    var set2 = new Set(nums2);
    for (var _i = 0, set1_1 = set1; _i < set1_1.length; _i++) {
        var element = set1_1[_i];
        memo[element] = 1;
    }
    for (var _a = 0, set2_1 = set2; _a < set2_1.length; _a++) {
        var element = set2_1[_a];
        memo[element]++;
    }
    for (var key in memo) {
        if (memo[key] == 2) {
            result.push(parseInt(key));
        }
    }
    return result;
}
