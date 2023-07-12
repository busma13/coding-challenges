function numIslands(grid) {
    var islandCount = 0;
    var visited = [];
    for (var _i = 0, visited_1 = visited; _i < visited_1.length; _i++) {
        var row = visited_1[_i];
        row.fill(false);
    }
    console.log(visited.toString());
    // for (let i = 0; i < grid.length; i++) {
    //   for (let j = 0; j < grid[i].length; j++) {
    //     if (grid[i][j] === "0") {
    //       continue
    //     } else {
    //       furthestLand[i] = j
    //     }
    //   }
    // }
    return islandCount;
}
