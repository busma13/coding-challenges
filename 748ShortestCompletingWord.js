/*
748. Shortest Completing Word
Easy
Topics
Companies
Hint
Given a string licensePlate and an array of strings words, find the shortest completing word in words.

A completing word is a word that contains all the letters in licensePlate. Ignore numbers and spaces in licensePlate, and treat letters as case insensitive. If a letter appears more than once in licensePlate, then it must appear in the word the same number of times or more.

For example, if licensePlate = "aBc 12c", then it contains letters 'a', 'b' (ignoring case), and 'c' twice. Possible completing words are "abccdef", "caaacab", and "cbca".

Return the shortest completing word in words. It is guaranteed an answer exists. If there are multiple shortest completing words, return the first one that occurs in words.

 

Example 1:

Input: licensePlate = "1s3 PSt", words = ["step","steps","stripe","stepple"]
Output: "steps"
Explanation: licensePlate contains letters 's', 'p', 's' (ignoring case), and 't'.
"step" contains 't' and 'p', but only contains 1 's'.
"steps" contains 't', 'p', and both 's' characters.
"stripe" is missing an 's'.
"stepple" is missing an 's'.
Since "steps" is the only word containing all the letters, that is the answer.
Example 2:

Input: licensePlate = "1s3 456", words = ["looks","pest","stew","show"]
Output: "pest"
Explanation: licensePlate only contains the letter 's'. All the words contain 's', but among these "pest", "stew", and "show" are shortest. The answer is "pest" because it is the word that appears earliest of the 3.
 

Constraints:

1 <= licensePlate.length <= 7
licensePlate contains digits, letters (uppercase or lowercase), or space ' '.
1 <= words.length <= 1000
1 <= words[i].length <= 15
words[i] consists of lower case English letters.
*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function shortestCompletingWord(licensePlate, words) {
    var shortest = undefined;
    var length = Infinity;
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var letters = licensePlate
        .toLowerCase()
        .split("")
        .filter(function (char) { return alphabet.includes(char); });
    var map = {};
    for (var _i = 0, letters_1 = letters; _i < letters_1.length; _i++) {
        var letter = letters_1[_i];
        if (!map[letter]) {
            map[letter] = 0;
        }
        map[letter]++;
    }
    for (var _a = 0, words_1 = words; _a < words_1.length; _a++) {
        var word = words_1[_a];
        if (word.length < letters.length)
            continue;
        if (word.length >= length)
            continue;
        console.log("word: ", word);
        var mapCopy = __assign({}, map);
        console.log("mapCopy start: ", mapCopy);
        for (var _b = 0, _c = word.split(""); _b < _c.length; _b++) {
            var ch = _c[_b];
            if (mapCopy[ch]) {
                mapCopy[ch]--;
                if (mapCopy[ch] === 0) {
                    delete mapCopy[ch];
                }
            }
        }
        console.log("mapCopy end: ", mapCopy);
        if (Object.keys(mapCopy).length === 0) {
            length = word.length;
            shortest = word;
        }
    }
    return shortest || words[0];
}
console.log(shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"]));
