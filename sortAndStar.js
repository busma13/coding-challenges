/* Sort and Star

You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.

PREP
Parameters: An array of strings.
Returns: The string with the lowest ASCII value, with '***' between each character.
Examples: twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]); // b***i***t***c***o***i***n
          twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]); // a***r***e
Pseudo code: Sort the array using the default sort algorithm.  
             Copy the first string in the array.
             Add '***' between each character.
             Return the string.
*/

function twoSort(s) {
    s.sort();
    return s[0].split('').join('***');
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]));


//s.sort()[0].split('').join('***');
//[...s.sort()[0]].join('***');