/* Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.
*/

// function stringTransformer(str) {
//     //split string into an array of words
//     const arr = str.split(' ')
//     //reverse word order
//     const revArray = arr.reverse()
//     //split words into characters
//     const split = revArray.map(word => word.split('').map(ch => ch.toUpperCase() === ch ? ch.toLowerCase() : ch.toUpperCase()).join('')).join(' ')
//     //swap upper and lower case
//     //join characters
//     //join words
//     //return str
//     return split
// }

function stringTransformer(str) {

    str = str.split('')
             .map(ch => {
               return ch.toUpperCase() === ch ? ch.toLowerCase() : ch.toUpperCase()
             })
             .join('')

    return str.split(' ')
              .reverse()
              .join(' ')
}

console.log(stringTransformer('Example Input'), 'iNPUT eXAMPLE')
console.log(stringTransformer('lONGER Example Input'), 'iNPUT eXAMPLE Longer')