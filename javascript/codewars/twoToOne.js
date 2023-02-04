/* Two To One

Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

PREP
Parameters: two strings containing only lowercase letters.
Returns: one string of only lowercase letters.
Examples: longest('abc','bcde'); //'abcde
Pseudo code: Create a new Set. Add the two parameter words to the set(this will eliminate doubles). Sort the set alphabetically. Convert back to string. Return the string.
*/

function longest(s1, s2) {
    return [...new Set(s1 +''+ s2)].sort().join('');
}

console.log(longest('fabc', 'bcde'))
console.log(longest('abcdefghijklmnopqrstuvwxyz', 'abcdefghijklmn'))