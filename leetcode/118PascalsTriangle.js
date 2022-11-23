/* 118. Pascal's Triangle
Easy

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

 

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:

Input: numRows = 1
Output: [[1]]

 

Constraints:

    1 <= numRows <= 30

*/
/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    let triangle = [];
    for (let i = 0; i < numRows; i++) {
        triangle.push(generateRow(triangle[i-1]));
    }
    return triangle;
};

function generateRow(previousRow) {
    if (previousRow === undefined ) {
        return [1];
    } else if (previousRow.length === 1) {
        return [1, 1];
    } else {
        return calculateRowValues(previousRow)
    }
}

function calculateRowValues(previousRow) {
    let newRow = [1];
    for (let i = 1; i < previousRow.length; i++) {
        newRow.push(previousRow[i] + previousRow[i - 1]);
    }
    newRow.push(1);
    return newRow;
}

console.log(generate(1), [[1]])
console.log(generate(2), [[1], [1,1]])
console.log(generate(3), [[1],[1,1],[1,2,1]])
console.log(generate(4), [[1],[1,1],[1,2,1],[1,3,3,1]])
console.log(generate(5), [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]])