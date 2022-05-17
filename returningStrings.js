/* Returning Strings

Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]

PREP
Parameters: name: a string
Returns: string: "Hello, <name> how are you doing today?"
Examples: greet('Joe') "Hello, Joe how are you doing today?"
Pseudo code: return a string literal that inserts <name> into our string.
*/

function greet(name){
  return `Hello, ${name} how are you doing today?`;
}

console.log(greet('Joe'));