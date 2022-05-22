/* Vowel Remover

Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
Examples

"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"

    don't worry about uppercase vowels
    y is not considered a vowel for this kata

PREP
Parameters: a string
Returns: a string without lowercase vowels (y is not a vowel)
Examples: shortcut('hello');// hll, shortcut('goodbye');//gdby, shortcut('HELLO');//HELLO
Pseudo code: Split the string into an array of characters.
             Filter the array - remove characters included in string 'aeiou'.
             Join array into String.
             Return string.
*/

function shortcut (string) {
    return string.split('').filter(c => !'aeiou'.includes(c)).join('');
}

console.log(shortcut('hello')); //hll
console.log(shortcut('HELLO'));//HELLO
console.log(shortcut('Aha')); //Ah