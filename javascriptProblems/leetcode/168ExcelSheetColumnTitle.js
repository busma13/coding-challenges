/* 168. Excel Sheet Column Title
Easy

Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...

 

Example 1:

Input: columnNumber = 1
Output: "A"

Example 2:

Input: columnNumber = 28
Output: "AB"

Example 3:

Input: columnNumber = 701
Output: "ZY"

 

Constraints:

    1 <= columnNumber <= 231 - 1

*/
/**
 * @param {number} columnNumber
 * @return {string}
 */
 var convertToTitle = function(columnNumber) {
    let result = '';
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    while (columnNumber > 0) {
        columnNumber--;
        let index = columnNumber % 26;
        result = alphabet[index] + result;
        columnNumber = Math.floor(columnNumber / 26);
    }
    return result;
};

console.log(convertToTitle(1), 'A');
console.log(convertToTitle(13), 'M');
console.log(convertToTitle(26), 'Z');
console.log(convertToTitle(28), 'AB');
console.log(convertToTitle(676), 'YZ');
console.log(convertToTitle(701), 'ZY');