/* 67. Add Binary
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
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if (a.length > b.length) {
        b = b.padStart(a.length, '0')
    }

    if (b.length > a.length) {
        a = a.padStart(b.length, '0')
    }

    let revA = a.split('').reverse().map(Number)
    let revB = b.split('').reverse().map(Number)
    let i = 0
    let carry = 0
    let sum = ''
    while (i < a.length) {
        if (revA[i] + revB[i] + carry === 0) {
            sum = 0 + sum
            carry = 0
        } else if (revA[i] + revB[i] + carry === 1) {
            sum = 1 + sum
            carry = 0
        } else if (revA[i] + revB[i] + carry === 2) {
            sum = 0 + sum
            carry = 1
        } else if (revA[i] + revB[i] + carry === 3) {
            sum = 1 + sum
            carry = 1
        }
        i++
    }
    if (carry === 1) {
        sum = 1 + sum
    }

    return sum
};

console.log(addBinary('11', '1'), '100')
console.log(addBinary('1010', '1011'), '10101')