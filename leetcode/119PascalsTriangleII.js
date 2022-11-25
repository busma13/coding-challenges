/* 119. Pascal's Triangle II
Easy

Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:

Input: rowIndex = 3
Output: [1,3,3,1]

Example 2:

Input: rowIndex = 0
Output: [1]

Example 3:

Input: rowIndex = 1
Output: [1,1]

Constraints:

    0 <= rowIndex <= 33

 

Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?
*/
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
    if (rowIndex === 0) return [1];
    let result = [1];
    for (let i = 1; i < rowIndex; i++) {
        result.push(calculatePositionValue(i, rowIndex));
    }
    result.push(1);
    return result;
};

function calculatePositionValue(k, n) {
    return calculateFactorial(n) / (calculateFactorial(k) * calculateFactorial(n-k));
}

function calculateFactorial(num) {
    let product = 1;
    while (num > 1) {
        product *= num;
        num--;
    }
    return product;
}

// console.log(getRow(4), [1,4,6,4,1]);
console.log(getRow(10));