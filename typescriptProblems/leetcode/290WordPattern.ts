/* 290. Word Pattern
Easy

Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false

Constraints:

1 <= pattern.length <= 300
pattern contains only lower-case English letters.
1 <= s.length <= 3000
s contains only lowercase English letters and spaces ' '.
s does not contain any leading or trailing spaces.
All the words in s are separated by a single space. */

function wordPattern(pattern: string, s: string): boolean {
  // holds pattern/word pairs: a: 'dog', b: 'cat'
  const map = {};

  const wordsArr = s.split(" ");
  // pattern must be same length as number of words
  if (pattern.length !== wordsArr.length) return false;
  // go through each letter of the pattern
  for (let i = 0; i < pattern.length; i++) {
    // pattern letter has been seen
    if (map[pattern[i]]) {
      // word for that pattern letter doesn't match current word
      if (map[pattern[i]] !== wordsArr[i]) {
        return false;
      }
      // pattern letter hasn't been seen
    } else {
      // word has been seen before with different pattern letter
      if (Object.values(map).includes(wordsArr[i])) {
        return false;
      }
      // add new word/pattern pair to map
      map[pattern[i]] = wordsArr[i];
    }
  }
  return true;
}
