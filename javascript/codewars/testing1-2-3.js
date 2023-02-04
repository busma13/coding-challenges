/* Testing 1-2-3

Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

PREP
Parameters: An arrray of strings.  It can be empty.
Returns: An array of the same strings, but with the line number, a colon, and a space at the beginning.
Examples: numbers([]);//[], numbers['first', 'second', 'third'];//['1: first', '2: second', '3: third']
Pseudo code: Loop through all the elements in the array.  Prepend each string element with the element's index plus 1, then a colon and space. Return the array.
*/

var number=function(array){
    return array.map((el, i) => i+1 + ': ' + el);
}

console.log(number(['first', 'second', 'third']))
console.log(number(["a", "b", "c"]))
console.log(number([]))