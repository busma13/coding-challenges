/* Stop gninnipS My sdroW

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

PREP
Parameters: A string of letters and spaces.
Returns: The same string, but with all words of 5 or more letters reversed.
Examples: see above.
Pseudo code: Split input string into an array of words.
             Loop through array.
             If an element has 5 or more letters reverse it.
             Join the array back into a string.
             Return the string.
*/

function spinWords(string){
    return string.split(' ')
                 .map(el => el.length >= 5 ? el.split('').reverse().join('') : el)
                 .join(' ');
}

console.log(spinWords( "Hey fellow warriors" ));
console.log(spinWords( "This is a test" ));
console.log(spinWords( "This is another test" ));
console.log(spinWords( "Single" ));
console.log(spinWords( "Hey" ));