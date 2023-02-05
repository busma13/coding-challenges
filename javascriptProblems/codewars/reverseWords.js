/* Reverse Words

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

PREP
Parameters: A string
Returns: The same string but with each word in reverse order.
Examples: reverseWords('This will be fun.');//sihT lliw eb .nuf
Pseudo code: Convert the parameter string into an array of words. Loop through the array and reverse the order of each word. Join the array back into a string of words. Return the string.
*/

function reverseWords(str) {
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

console.log(reverseWords('This is a test.'))
console.log(reverseWords('double  spaces'))