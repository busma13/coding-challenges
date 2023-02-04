/* 14. Longest Common Prefix
Easy

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".


Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.


Constraints:

    1 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let prefix = ''
    
    for (let i = 0; i < strs[0].length; i++) {
        let current = strs[0][i]
        for (let k = 1; k < strs.length; k++) {
            if (current !== strs[k][i]) return prefix
        }
        prefix += current
    }
    return prefix
};


console.log(longestCommonPrefix(["flower","flow","flight"]), 'fl')
console.log(longestCommonPrefix(["dog","racecar","car"]), '')
console.log(longestCommonPrefix(["dog","racecar","door"]), '')
console.log(longestCommonPrefix(["drrog","drroorcar","droor"]), 'dr')
console.log(longestCommonPrefix(["ddd","ddd","ddd"]), 'ddd')
console.log(longestCommonPrefix(["a"]), 'a')