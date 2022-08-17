/* Credit Card mask

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.
Examples

"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"

PREP
Parameters: A string (can be empty).
Returns: a string with all but the last 4 characters replaced with #.
Examples: maskify('4362362343245123'); //############5123
Pseudo code: If the string is 4 or fewer characters return the string.  Else slice off the last 4 characters and add as many # characters as needed to make the string as long as the original.  Return the string. 
*/

function maskify(cc) {
    if (cc.length <= 4) {
        return cc;
    } else {
        return cc.slice(-4).padStart(cc.length, '#');
    }
}

console.log(maskify('4362362343245123'));
console.log(maskify(''));
console.log(maskify('43'));
console.log(maskify('4362'));
console.log(maskify('43623'));
