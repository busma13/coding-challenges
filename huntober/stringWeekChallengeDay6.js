/* String Week Challenge - Day 6

Thanks for all your help yesterday, you guys are cool cats! Today's challenge will have you removing decoy characters from a string.

Write a function that, when given a non-empty string, and positive integer X, removes every Xth character from the string. Counting should begin from the first element in the string and should continue in that pattern until the end of the string.

For example:

// For the string below and 4
"Thies its H alltowe!en!? Th#is Tis GHalolowmeen$!"
// remove decoy strings
"This is Halloween! This is Halloween!"

// For the string below and 5
"The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow."
// remove decoy strings and preach 🙌
"The Bachelor is a terrible television show."

PREP
Parameters: A string(str) and a positive integer(n)).
Returns: The same string with every nth character removed.
Examples: See above.
Pseudo code: Convert string into an array.  Loop through the array. For each character, if the index + 1 is divisible by n remove the character. Convert the array back to a string.  Return the string.
*/

function removeDecoys(str, n) {
    return str.split('').filter((ch, i) => (i+1) % n !== 0).join('')
}

console.log(removeDecoys("Thies its H alltowe!en!? Th#is Tis GHalolowmeen$!", 4))

console.log(removeDecoys("The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow.", 5))