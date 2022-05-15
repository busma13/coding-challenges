/* Capitalization and Mutability

Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

PREP
Parameters: A string from 1 to 10 characters, never empty, no special characters or numbers.
Returns: A string with an uppercase first letter.
Examples: capitalizeWord('word') // Word, capitalizeWord('i') // I
Pseudo code:
*/

function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
}

console.log(capitalizeWord('word'));
console.log(capitalizeWord('i'));
console.log(capitalizeWord('hello!'));