/* Replace with Alphabet Position

Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
Example

alphabetPosition("The sunset sets at twelve o' clock.")

Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

PREP
Parameters: A string with letters as well as other characters.
Returns: A string of digits and spaces.
Examples: see above.
Pseudo code: Create an empty result array. Convert the input string to lowercase then convert it to an array of characters.  Loop through each character in the array. If the character is a letter add it's postion in the alphabet to the result array. COnvert result array to a string joined by a space. Return that string.
*/

function alphabetPosition(text) {
    let letters ='abcdefghijklmnopqrstuvwxyz';
    return text.toLowerCase().split('').map(ch => letters.includes(ch) ? letters.indexOf(ch) + 1 : '').filter(ch => ch !== '').join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))