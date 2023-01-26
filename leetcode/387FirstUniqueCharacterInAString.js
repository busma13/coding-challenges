/* 387. First Unique Character in a String
Easy

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1

Constraints:

1 <= s.length <= 105
s consists of only lowercase English letters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = {};
    for (let i = 0; i < s.length; i++) {
        const current = s[i]
        if (map[current] != null) {
            map[current] = 999999;
        } else {
            map[current] = i;
        }
    }
    let lowest = 999999;
    for (const letter in map) {
        if (map[letter] < lowest) lowest = map[letter];
    }
    return lowest === 999999 ? -1 : lowest;
};

console.log(firstUniqChar('leetcode'), 0)
console.log(firstUniqChar('loveleetcode'), 2)
console.log(firstUniqChar('aabb'), -1)