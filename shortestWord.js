/* Shortest Word

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

PREP
Parameters: A string of words.
Returns: A positive integer representing the length of the shortest word.
Examples: findShort("Welcome to earth"); //2, findShort("This sentence will self destruct.");//4
Pseudo code: Convert word string into an array of words.  Loop through the array and count the length of each word.  Order the lengths by size and return the first one.
*/

function findShort(s) {
    return s.split(' ').map(word => word.length).sort((a, b)=> a - b)[0];
}

console.log(findShort("Welcome to earth"));
console.log(findShort("This sentence will self destruct."));