/*
463. Island Perimeter
Easy

You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

Example 1:

Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
Output: 16
Explanation: The perimeter is the 16 yellow stripes in the image above.
Example 2:

Input: grid = [[1]]
Output: 4
Example 3:

Input: grid = [[1,0]]
Output: 4
 

Constraints:

row == grid.length
col == grid[i].length
1 <= row, col <= 100
grid[i][j] is 0 or 1.
There is exactly one island in grid.
*/
function islandPerimeter(grid) {
    var count = 0;
    var height = grid.length;
    for (var i = 0; i < height; i++) {
        var width = grid[i].length;
        var prevHorizontal = 0;
        for (var k = 0; k < width; k++) {
            var current = grid[i][k];
            if (prevHorizontal != current) {
                count++;
                prevHorizontal = current;
            }
            if (k === width - 1 && current === 1) {
                count++;
            }
            if (i === 0 && current === 1) {
                count++;
            }
            if (i > 0 && grid[i - 1][k] !== current) {
                count++;
            }
            if (i === height - 1 && current === 1) {
                count++;
            }
        }
    }
    return count;
}
console.log(islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
]));
console.log(islandPerimeter([[0, 1]]));
