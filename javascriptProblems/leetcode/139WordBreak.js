/* 139. Word Break
Medium

Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false
 
Constraints:

1 <= s.length <= 300
1 <= wordDict.length <= 1000
1 <= wordDict[i].length <= 20
s and wordDict[i] consist of only lowercase English letters.
All the strings of wordDict are unique.
*/
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict, memo = {}) {
    console.log('s: ', s)
    console.log('memo: ', memo)
    if (s.length === 0) return true;
    if (memo[s]) return memo[s];
    for (const word of wordDict) {
        if (s.indexOf(word) === 0) {
            let result = wordBreak(s.slice(word.length), wordDict, memo)
            memo[s] = result;
            if (result === true) return true;
        }
    }
    return false;
};

// console.log(wordBreak('leetcode', ['leet', 'code']), true)
console.log(wordBreak('applepenapple', ['apple', 'pen']), true)
console.log(wordBreak('catsandog',["cats","dog","sand","and","cat"]), false)
// console.log(wordBreak("cars", ["car","ca","rs"]), true)
