/* 6101. Check if Matrix Is X-Matrix

A square matrix is said to be an X-Matrix if both of the following conditions hold:

All the elements in the diagonals of the matrix are non-zero.
All other elements are 0.
Given a 2D integer array grid of size n x n representing a square matrix, return true if grid is an X-Matrix. Otherwise, return false.

Input: grid = [[2,0,0,1],[0,3,1,0],[0,5,2,0],[4,0,0,2]]
Output: true
Explanation: Refer to the diagram above. 
An X-Matrix should have the green elements (diagonals) be non-zero and the red elements be 0.
Thus, grid is an X-Matrix.


Input: grid = [[5,7,0],[0,3,1],[0,5,0]]
Output: false
Explanation: Refer to the diagram above.
An X-Matrix should have the green elements (diagonals) be non-zero and the red elements be 0.
Thus, grid is not an X-Matrix.
 

Constraints:

n == grid.length == grid[i].length
3 <= n <= 100
0 <= grid[i][j] <= 105
*/

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
 var checkXMatrix = function(grid) {
    let step = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            console.log(i,j,grid[i][j]);
            if ((i === step && j === step) || (i === step && j === grid.length - 1 - step) || (i === grid.length - 1 - step && j === step) ||
            (i === grid.length - 1 - step && j === grid.length - 1 - step)){
                console.log('if')
                if (grid[i][j] === 0) return false;
            } else {
                console.log('else')
                if (grid[i][j] !== 0) return false;
            }
        }
        step++;
    }
    return true;
};

console.log(checkXMatrix([[2,0,0,1],[0,3,1,0],[0,5,2,0],[4,0,0,2]]));
console.log(checkXMatrix([[5,7,0],[0,3,1],[0,5,0]]));