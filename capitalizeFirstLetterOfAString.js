/* Capitalize First Letter of a String

Write a function capitalize() which capitalizes the first letter (if any) of the given string. For example:
Input 	Output
string 	String
hello World 	Hello World
i love codewars 	I love codewars
This sentence is already capitalized 	This sentence is already capitalized
0123the first character of this sentence is not a letter 	0123the first character of this sentence is not a letter

JavaScript / CoffeeScript: Extend the String prototype with a method capitalize() so you can call it on a string like so: "string".capitalize(). Learn about inheritance and the prototype chain.

Furthermore, the built-in string methods toUpperCase() and toLowerCase() are disabled for this Kata.

PREP
Parameters: A string
Returns: A string with the first letter capitialized.
Examples: 'word'.capitalize(); //Word
Pseudo code: Get the char code at the first index.  If it is a lowercase letter (between 97 and 122) subtract 32 and convert that number to its string value.  Return that number concatinated to the original string from index 1 to the end.
*/

String.prototype.capitalize = function () {
    if (this.charCodeAt(0) >= 97 && this.charCodeAt(0) <= 122) {
        return String.fromCharCode(this.charCodeAt(0) - 32) + this.slice(1);
    } else {
        return String.fromCharCode(this.charCodeAt(0)) + this.slice(1);
    }
}

console.log('test'.capitalize())