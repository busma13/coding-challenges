/*67. Add Binary
Easy

Given two binary strings a and b, return their sum as a binary string.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 
Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
*/
function addBinary(a, b) {
    let answer = "";
    let shorter = a.length < b.length ? a : b;
    let longer = a === shorter ? b : a;
    console.log(shorter, longer);
    let shortRevArray = shorter
        .padStart(longer.length, "0")
        .split("")
        .reverse()
        .map(Number);
    console.log("short:", shortRevArray);
    let longRevArray = longer.split("").reverse().map(Number);
    console.log("long:", longRevArray);
    let carry = 0;
    for (let i = 0; i < longRevArray.length; i++) {
        if (shortRevArray[i] + longRevArray[i] + carry === 0) {
            answer = "0" + answer;
            carry = 0;
        }
        else if (shortRevArray[i] + longRevArray[i] + carry === 1) {
            answer = "1" + answer;
            carry = 0;
        }
        else if (shortRevArray[i] + longRevArray[i] + carry === 2) {
            answer = "0" + answer;
            carry = 1;
        }
        else {
            answer = "1" + answer;
            carry = 1;
        }
    }
    if (carry === 1) {
        answer = "1" + answer;
    }
    return answer;
}
console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));
