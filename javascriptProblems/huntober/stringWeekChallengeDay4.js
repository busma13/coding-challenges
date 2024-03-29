/* String Week Challenge - Day 4

Today's challenge is minor to give you all a bit of a break halfway through the challenge week, but there are a couple of side quests I'm going to throw out for those with extra time on their hands.

So far we've swapped out calculator characters, cleaned up after a cat and a preschooler, and placed some spaces. Today is simple! Given a string, reverse it. Any details like whitespace, letter casing, or punctuation should be preserved and flipped along with the rest of the string. For example:

"   The white space at the beginning of this string doesn't match the whitespace at the end. "
// reverse it
" .dne eht ta ecapsetihw eht hctam t'nseod gnirts siht fo gninnigeb eht ta ecaps etihw ehT   "

PREP
Parameters: A string.
Returns: The same string reversed.
Examples: See above.
Pseudo code: Convert string to array  Use the reverse method on the array. Convert back to string. Return the string.
*/

function reverse(str) {
    return str.split('').reverse().join('')
}

// console.log(reverse(" .dne eht ta ecapsetihw eht hctam t'nseod gnirts siht fo gninnigeb eht ta ecaps etihw ehT   "))

module.exports = reverse