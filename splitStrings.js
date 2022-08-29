/* Split strings

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']

PREP
Parameters: A string. It can be empty.
Returns: An array of 2 character long strings.
Examples: solution('abc');//['ab', 'c_'], solution('4t');/['4t'], solution('');/[]
Pseudo code: Create an empty array.  If the string length is odd add an underscore to the end of the string.  Loop from 0 to one less that the string length, stepping by 2. On each loop add the string character at index i and the string character at index i + 1 to the array as a string.  When done looping return the array.
*/

function solution(str){
    const arr = [];
    if (str.length % 2 === 1) str += '_';
    for (let i = 0; i < str.length; i += 2) {
        arr.push(str.substring(i, i+2));
    }
    return arr;
}

console.log(solution(''));
console.log(solution('abc'));
console.log(solution('abcdefghij'));