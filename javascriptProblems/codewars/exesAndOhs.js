/* Exes and Ohs
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

PREP
Parameters: A string.
Returns: A boolean.
Examples: see above.
Pseudo code: Make all characters lowercase. Convert string to an array of characters. Count each character type and see if there are equal numbers of x and o. Return true if equal or false if not equal.
*/
function XO(str) {
    let xoArray = str.toLowerCase().split('');
    let resultArr = xoArray.reduce((acc, c) => {
        if (!acc[c]) {
            acc[c] = 0;
        }
        acc[c]++;
        return acc;
    }, {});
    return resultArr['o'] === resultArr['x'];
}

console.log(XO("ooxXm"));
console.log(XO("xooxx"));