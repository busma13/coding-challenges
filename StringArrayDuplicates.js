/* String Array Duplicates

In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

    dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

    dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck!

input = array of strings, lowercase
output = array of strings without consecutive duplicate letters
*/

function dup(s) {
     return s.map(word => word.split('').filter((char, idx, arr) => char != arr[idx - 1]).join(''));
};

console.log(dup(["abracadabra","allottee","assessee"]), ["abracadabra","alote","asese"])
console.log(dup(["kelless","keenness"]), ["keles","kenes"])