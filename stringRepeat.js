/* Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

PREP
Parameters: Positive integer and a string.
Returns: a string of s repeated exactly n times.
Examples: repeatStr(6, "I"); //"IIIIII"
Pseudo code: Create an empty string.  Loop n times and add s to the empty string.


*/
function repeatStr (n, s) {
    return s.repeat(n);
}

console.log(repeatStr(6, "I"));
