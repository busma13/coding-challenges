/* Single Word Pig Latin

Pig Latin is an English language game where the goal is to hide the meaning of a word from people not aware of the rules.

So, the goal of this kata is to wite a function that encodes a single word string to pig latin.

The rules themselves are rather easy:

    The word starts with a vowel(a,e,i,o,u) -> return the original string plus "way".

    The word starts with a consonant -> move consonants from the beginning of the word to the end of the word until the first vowel, then return it plus "ay".

    The result must be lowercase, regardless of the case of the input. If the input string has any non-alpha characters, the function must return None, null, Nothing (depending on the language).

    The function must also handle simple random strings and not just English words.

    The input string has no vowels -> return the original string plus "ay".

For example, the word "spaghetti" becomes "aghettispay" because the first two letters ("sp") are consonants, so they are moved to the end of the string and "ay" is appended.

PREP
Parameters: A string.
Returns: a string manipulated into pig latin.
Examples: pigLatin('map'); //apmay, pigLatin('egg'); //eggway
Pseudo code: Convert string to lowercase. Convert string to array of characters. Check for non-alpahbetical characters.  If there are any return null. Loop through array while the current character is a consonant. Move the first character to the end. On the next loop check the first character again.  Convert array back to a string.  If there were no consonants add 'way' to the end of the word.  If there were consonants add 'ay' to the end of the word.Return the string.
*/

function pigLatin(string){
    arr = string.toLowerCase().split('')
    let allAlpha = true;
    let consonant = false;
    let i = 0;
    arr.forEach(ch => {
        if (!'abcdefghijklmonpqrstuvwxyz'.includes(ch)) {
            allAlpha = false;
            return;
        }
    })
    if (!allAlpha) return null;
    while (!'aeiou'.includes(arr[0]) && i < string.length){
        consonant = true;
        let temp = arr.shift();
        arr.push(temp);
        i++;
    }
    let str = arr.join('');
    if (consonant) {
        str += 'ay';
    } else {
        str += 'way';
    }
    return str;
}

console.log(pigLatin('Spaghetti'))
console.log(pigLatin('egg'))
console.log(pigLatin('map'))
console.log(pigLatin('CCCC'))
console.log(pigLatin('Hello'))