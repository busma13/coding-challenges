/* 242. Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 10^4
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    let mapS = {};
    let mapT = {};
    s.split('').forEach(ch => {
        if(!mapS[ch]) mapS[ch] = 1;
        else mapS[ch]++;
    });
    t.split('').forEach(ch => {
        if(!mapT[ch]) mapT[ch] = 1;
        else mapT[ch]++;
    });
    for (let char in mapS) {
        let arrS = Object.keys(mapS);
        let arrT = Object.keys(mapT);
        if (mapT[char] && arrS.length === arrT.length) {
            if (mapS[char] !== mapT[char]) {
                return false;
            } 
        } else {
            return false;
        }
    }
    return true;
};

console.log(isAnagram("anagram", "nagaram")); //true
console.log(isAnagram("a", "ab")); //false
console.log(isAnagram("aa", "a")); //false