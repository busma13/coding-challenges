/* Count Characters In Your String

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

PREP
Parameters: A string (can be empty).
Returns: An object whose keys are the characters in the parameter string and whose values are the number of times that character was present in the string.
Examples: count('aba'); //{a:2, b:1}, count(''); //{}
Pseudo code: Convert string to an array of characters. Using the reduce method loop through each character.  Set the accumulator to an empty object. If the character is not in the object already, add it.  Add one to the value of that character.  Return the object.
*/
function count (string) {
    return string.split('').reduce((acc, c) => {
        if (!acc[c]) {
            acc[c] = 0;
        }
        acc[c]++;
        return acc;
    }, {})
}

console.log(count('aba'))
console.log(count('abcdefghijklmnopqrstuvwxyz'))
console.log(count(''))

/*const count = string =>
[...string].reduce((pre, val) => (pre[val] = -~pre[val], pre), {});

bitwise not / unary negation
~2 -> -3
-~2 -> 3

-~undefined -> 1

function count (string) {  
   r = {};
   string.split('').forEach(c => r[c] = (r[c] || 0) + 1);
   return r;
}

*/