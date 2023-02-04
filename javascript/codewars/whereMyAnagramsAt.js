/* Where My Anagrams At?

What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false

Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

Parameters: A string and an array of strings.
Returns: An array of strings containing all the anagrams.
Examples: See above.
Pseudo code: Create an empty result array.  Loop through the words array.  Check if the word at each index is the same length as our parameter word.  If not go on to the next word.  If they are of equal length sort them both lexigraphically and see if they are equal.  If they are add the word to the result array. If not move on to the next word. After the loop return the result array.
*/

function anagrams(word, words) {
    return words.filter(el => word.split('').sort().join('') === el.split('').sort().join(''))
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']))