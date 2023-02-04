/* Simple Pig Latin

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

PREP
Parameters: A string.
Returns: A string writeen in Pig Latin.
Examples: see above.
Pseudo code: Split the string into an array of words.  Loop through the words and remove the first letter. Then add it to the end of the word.  Then add an 'ay' to the end of the word. Join the array back into a string.  Return the string.
*/

function pigIt(str){
    return str.split(' ')
        .map(word => {
            return '!@#$%^&*()_-+=|\{}[]:;/?><,.'.includes(word[0]) ? word : word.substring(1) + word[0] + 'ay';
        })
        .join(' ');
}

console.log(pigIt('Pig latin is cool'));
console.log(pigIt('Hello world !'));  