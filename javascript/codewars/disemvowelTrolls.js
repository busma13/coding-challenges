/* Disemvowel Trolls

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

PREP
Parameters: A string.
Returns: A new string with all vowels removed.
Examples: disemvowel("This website is for losers LOL!"); // "Ths wbst s fr lsrs LL!"
Pseudo code: Split string into array of characters.
             Using filter method, remove any vowels.
             Use join method to make a new string.
             Return new string.
*/

function disemvowel(str) {
    return str.split('').filter(ch => !'aeiouAEIOU'.includes(ch)).join('');
}

console.log(disemvowel("This website is for losers LOL!"));
console.log(disemvowel("Peter Piper picked a peck of pickled peppers."));