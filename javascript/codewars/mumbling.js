/* Mumbling

This time no story, no theory. The examples below show you how to write function accum:
Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.

PREP
Parameters: A string of upper and lowercase letters.
Returns: A string with each character of the parameter string repeated a number a times equal to its position in the string.  Characters separated by hyphens.
Examples: see above.
Pseudo code: Convert string to an array of characters.  Map each character based on the pattern: First letter uppercase followed by the same letter lowercase as many times as its index. Join array back to string with '-' delimiter. Return the string.
*/

function accum(s) {
	return s.split('').map((e, idx) => e.toUpperCase() + e.toLowerCase().repeat(idx)).join('-');
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));