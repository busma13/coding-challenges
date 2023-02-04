/* WeIrD StRiNg CaSe

at accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
Examples:

toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

PREP
Parameters: A string
Returns: The same string but with each word converted to weird string case.
Examples: see above.
Pseudo code: Convert the string to an array of words.  Loop through all the words.  For each word convert every other character to upppercase.  Combine all the words back into a string and return it.
*/

function toWeirdCase(string){
    return string.split(' ')
                 .map(word => word.split('')
                                  .map((ch, i) => i % 2 === 0 ? ch.   toUpperCase() : ch.toLowerCase())
                                  .join(''))
                 .join(' ');
}

console.log(toWeirdCase("string"))
console.log(toWeirdCase("Weird string case"))