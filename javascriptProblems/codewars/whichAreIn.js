/* Which Are In?

Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
Example 1:

a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]
Example 2:

a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []
Notes:

    Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
    In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
    Beware: In some languages r must be without duplicates.

Parameters: Two arrays of strings (a1 and a2).
Returns: A new array containing strings from a1 that are substrings of strings in a2.
Examples: inArray(["xyz", "live", "strong"],["lively", "alive", "harp", "sharp", "armstrong"]); //["live", "strong"]
Pseudo code: Create a result array.  Loop through a1. For each string loop through a2 and see if it is a substring of one of those strings.  If it is add it to the result array and go on to the next string in a1.  When done looping sort the array lexigraphically and return result.
*/

function inArray(a1,a2){
    let result = [];
    outerLoop: for (let i = 0; i < a1.length; i++) {
        for (let j = 0; j < a2.length; j++) {
            if (a2[j].includes(a1[i])) {
                result.push(a1[i]);
                continue outerLoop;
            }
        }
    }
    return result.sort();
}

console.log(inArray(["xyz", "live", "strong"],["lively", "alive", "harp", "sharp", "armstrong"]))