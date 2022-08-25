/* Detect Pangram

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

PREP
Parameters: A string
Returns: True if the string is a pangram, false otherwise.
Examples: isPangram('This sentence is too short');/false, isPangram('abcdefghijklmnopqrstuvwxyz');//true
Pseudo code: Convert input string to lowercase.  Create an alphabet string.  Loop through the alphabet and check if each letter is included in our input string.  If a letter is not included return false.  If we get to the end of the array then we return true.
*/

function isPangram(string) {
    string = string.toLowerCase();
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < letters.length; i++) {
        if (!string.includes(letters[i])) return false;
    }
    return true;
}

console.log(isPangram('abcdefghijklmnopqrstuvwxyz'));
console.log(isPangram('The quick brown fox jumps over the lazy dog'));