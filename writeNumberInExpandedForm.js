/* Write Number In Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

NOTE: All numbers will be whole numbers greater than 0.

PREP
Parameters: A whole numbers greater than 0.
Returns: A string that is the number in expanded form.
Examples: See above.
Pseudo code: Create an empty result string. Convert the argument number into a string and reverse its order. Loop through each character of the string. If the character is a zero move on to the next character. If it isn't zero add a '+ ', the character, and number of 0s equal to the index the character is at to the beginning of the result string. When the loop ends remove the front '+ '. Return the string.
*/

function expandedForm(num) {
    let result = ''
    let str = num.toString().split('').reverse().join('')
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 0) continue
        result = ' + ' + str[i] + '0'.repeat(i) + result
    }
    return result.slice(3)
}

console.log(expandedForm(12)); // Should return '10 + 2'
console.log(expandedForm(42)); // Should return '40 + 2'
console.log(expandedForm(70304)); // Should return '70000 + 300 + 4'