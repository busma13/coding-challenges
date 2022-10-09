/* String Week Challenge - Day 1

⭐ String Week

This week our challenges all deal with Strings! As one of JavaScript's primitive data structures, Strings are critical to understand and manipulate. Feel free to use JavaScript's built-in String methods.

🏆 The Challenge - Day 1

This week we will be discovering hidden messages by manipulating a given string. Your solutions should account for any non-empty string. On Friday we'll combine our functions to decode a message.

Oh no! How did this happen?! Somehow similar-looking numbers and letters have been confused in our document. Someone may have been messing around writing naughty words on a calculator. We need to get them back to normal.

Below, find the mix-ups that have been made. Note: the confusion happened in both directions and was case-sensitive.

'0' <-> 'O'      '5' <-> 'S'
'1' <-> 'I'      '6' <-> 'G'
'2' <-> 'Z'      '7' <-> 'L'
'3' <-> 'E'      '8' <-> 'B'
'4' <-> 'h'      '9' <-> 'q'

As an example, here is how a string looks before and after the characters are fixed:

"PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770." 
// implement fix function -> 
"PRO-TIP #498: IT'S NICE TO SAY HELLO."

Please create a function that will fix a given string of this mistake before incalculable damage can be done!

PREP
Parameters: A string.
Returns: The same string with all the letters or numbers that are mixed up replaced with the correct character.
Examples: See above.
Pseudo code: Create a map object that contains the 20 characters and their counterparts as key/value pairs.  Split the string into an array of characters.  Loop through the array. For each character, see if it is in the map. If so replace the key with the value character. After the loop finishes, turn the array back into a string and return the string.
*/

const pairs = {
    '0': 'O',
    '1': 'I',
    '2': 'Z',
    '3': 'E',
    '4': 'h',
    '5': 'S',
    '6': 'G',
    '7': 'L',
    '8': 'B',
    '9': 'q',
    'O': '0',
    'I': '1',
    'Z': '2',
    'E': '3',
    'h': '4',
    'S': '5',
    'G': '6',
    'L': '7',
    'B': '8',
    'q': '9',
} 
function swapCharacters(str) {
    return str.split('').map(c => c in pairs ? pairs[c] : c).join('')
}

console.log(swapCharacters("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770." ))