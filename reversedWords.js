/* Reversed Words

Complete the solution so that it reverses all of the words within the string passed in.

Example:

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

PREP
Parameters: A string
Returns: A string where all the words are in reverse order
EXamples: reverseWords('hello world')// world hello, 
          reverseWords('hello')// hello
Pseudo code: Get the String parameter. Split the string at the spaces.  Take that array and reverse the order of the elements within it. Join the elements of the array with a space delimiter.  Return that string. 
*/

function reverseWords(str){
    return str.split(' ').reverse().join(' '); 
}

console.log(reverseWords('hello world'));
console.log(reverseWords('foobar'))
console.log(reverseWords('The greatest victory is that which requires no battle'))