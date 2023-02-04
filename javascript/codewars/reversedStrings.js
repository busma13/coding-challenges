/* Reversed Strings

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

PREP
Parameters: A string, could be empty.
Returns: A string that is the parameter string in reverse order.
Examples: solution('world')// dlrow, solution('word')//drow
Pseudo code: Split string into array of characters.
             Reverse the array.
             Join the array into a string.
             Return the string.
*/

function solution(str){
    return str.split('').reverse().join('');
}

console.log(solution('world'));
console.log(solution('word'));