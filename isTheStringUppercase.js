/* Is The String Uppercase?

Task

Create a method to see whether the string is ALL CAPS.
Examples (input -> output)

"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True

In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

PREP
Parameters: A string (can be empty)
Returns: True or fasle
Examples: 'Hello'.isUpperCase(); //false, 'HI'.isUpperCase(); //true, ''.isUpperCase(); //true
Pseudo code: Convert string to uppercase and see if it is equal to the original string.
*/

String.prototype.isUpperCase = function() {
    console.log(this.toString())
    return this.toString().toUpperCase() === this.toString();
}

console.log('Hello'.isUpperCase())
console.log('HI'.isUpperCase())
console.log(''.isUpperCase())
