/* The Hashtag Generator

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

    It must start with a hashtag (#).
    All words must have their first letter capitalized.
    If the final result is longer than 140 chars it must return false.
    If the input or the result is an empty string it must return false.

Examples

" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

PREP
Parameters: A string.
Returns: A string that starts with a #, is in upper camel case, and is between 2 and 140 characters, or false
Examples: generateHashtag('code wars'); //'#CodeWars, generateHashtag('');//false
Pseudo code: If the argument is an empty string return false.  Split the string into an array of words.  Filter out the empty strings, if any. Capitalize each word.  Join the array back into a string, but with no spaces. Add a hashtag to the front of the string.  If the string is over 140 characters or is empty return false. Otherwise return the string.
*/

function generateHashtag (str) {
    if (str === '') return false
    str = str.split(' ')
             .filter(word => word !== '')
             .map(word  => word[0].toUpperCase() + word.slice(1))
             .join('')
    str = '#' + str
    return str.length > 140 || str === '#' ? false : str
}

// console.log(generateHashtag('code wars'))
// console.log(generateHashtag('Codewars is nice'))
console.log(generateHashtag("code" + " ".repeat(140) + "wars"))
// console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"))
// console.log(generateHashtag("a".repeat(139)))
// console.log(generateHashtag("a".repeat(140)))
console.log(generateHashtag("   "))
