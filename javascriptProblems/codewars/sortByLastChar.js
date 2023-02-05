/* Sort By Last Char

Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.

PREP
Parameters: A single string that contains words.
Returns: An array of those words, sorted alphabetically by their last   character only. If the last characters are equal then sort by original order.
Examples: last('man i need a taxi up to ubud'); //['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
Pseudo code: Take parameter string and put it into an array.
             Sort the array by last character.
             Return the array.
*/

function last(x){
    return x.split(' ').sort((a, b) => {
        if (a.charCodeAt(a.length - 1) < b.charCodeAt(b.length - 1)) {
            return -1
        }
        if (a.charCodeAt(a.length - 1) > b.charCodeAt(b.length - 1)) {
            return 1
        }
        return 0
    })
}

console.log(last('man i need a taxi up to ubud'));
console.log(last('what time are we climbing up the volcano'));