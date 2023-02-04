/* Break camelCase

Complete the solution so that the function will break up camel casing, using a space between words.
Example

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

PREP
Parameters: A string (can be empty).
Returns: A string that is no longer camelCase.
Examples: solution(camelCamelCamel); // 'camel Camel Camel'
Pseudo code: Convert the input string to an array. Loop through the array. If the character is capitalized convert it to that character with a space in front of it. Convert the array back to a string. Return the string.
*/

function solution(string) {
    return string.split('')
                 .map(ch => ch === ch.toUpperCase() ? ` ${ch}` : ch)
                 .join('')
}

console.log(solution('camelCamelCamel'))