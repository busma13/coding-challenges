/* String Week Challenge - Day 7

Oooh, yeah! Here it is, the final function you'll need in your string-decoding arsenal this week. Today's challenge might not be too trying after all the others, but you never know!

Today you'll need to create a function that swaps each letter of the alphabet for its opposite. A letter's opposite is one that, if the alphabet were flipped Z-A, would be the same number of letters in, and which would also have the opposite case.

Examples:

'A'  // first letter of the alphabet, uppercase
'z'  // last letter of the alphabet, lowercase

'p'  // 16th letter of the alphabet, lowercase
'K'  // 16th letter from *end* of alphabet, uppercase

'vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH'
// function replaces letters with opposites
'Example: 0 number or punctuation changes'

Do me a favor and try to solve it a couple of different ways to see which you preferred and why.

PREP
Parameters: A string.
Returns: The string with each letter replaced with its opposite.
Examples: See above.
Pseudo code: Create an array of the lowercase alphabet.  Create a second array of the lowercase alphabet in reverse order. Split the input string into an array. Loop through the array and if a character converted to lowercase is in the alphabet array replace it with the character at the same index in the reverse array.  If the original character was lowercase convert to uppercase and vice versa.  After the loop finishes convert the array back to a string and return it.
*/

function letterSwap(str) {
    let low = 'abcdefghijklmnopqrstuvwxyz'
    let rev = low.split('').reverse().join('')
    return str.split('').map(ch => {
        let idx = low.indexOf(ch.toLowerCase())
        return idx === -1 ? ch : ch === ch.toLowerCase() ? rev[idx].toUpperCase() : rev[idx]
    }).join('')
}

// console.log(letterSwap('vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH'))

/*
🧩 Put it all Together

Finally! We have every function needed to decode the gobbledygook I shared a week ago! Some of you already figured it out yesterday (bravo!), but let's pretend you didn't.

Please use the daily functions, in order, to decode the week's secret message. Then, when you feel good about your result, go ahead and tweet the string with no explanation and #huntober2022, you earned it.

Two things to note:

    It's very important that the functions are called in the order they were given (e.g. Day 1 first, Day 7 last), as any deviation could throw things far out of whack
    Day 2 and Day 5 weren't designed to be part of this overall decoder. The answers you got on those days should be used as inputs for Days 3 & 6 respectively
*/
let encryptedMsg = "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"

const swapCharacters = require('./stringWeekChallengeDay1.js');
const keyCharReplacement = require('./stringWeekChallengeDay3.js');
const reverse = require('./stringWeekChallengeDay4.js');
const removeDecoys = require('./stringWeekChallengeDay6.js')

encryptedMsg = swapCharacters(encryptedMsg)
console.log(encryptedMsg)
encryptedMsg = keyCharReplacement(encryptedMsg, 'Space')
console.log(encryptedMsg)
encryptedMsg = reverse(encryptedMsg)
console.log(encryptedMsg)
encryptedMsg = removeDecoys(encryptedMsg, 3)
console.log(encryptedMsg)
encryptedMsg = letterSwap(encryptedMsg)
console.log(encryptedMsg)

