/* Stringy Strings

Write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.

PREP
Parameters: a number, integer, positive
Returns: a string starting with 1, then alternating between 0 and 1 until it is the length of the parameter number.
Examples: stringy(3); //101, stringy(12); //101010101010
Pseudo code: Declare a variable to hold our string.  
             Assign it a value of ''.
             Alternate between adding 1 and 0 to the string until its length == the parameter number.
*/

function stringy(size) {
    let str = '';
    for (let i = 0; i < size; i++) {
        (i % 2 === 0) ? str = str + '1' : str = str + '0';
    }
    return str;
}

console.log(stringy(3));
console.log(stringy(4));
console.log(stringy(12));

// str += i % 2;  //much simpler to read