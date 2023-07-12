function numIslands(grid: string[][]): number {
  let islandCount = 0
  const visited: boolean[][] = []
  for (let row of visited) {
    row.fill(false)
  }
  console.log(visited.toString())
  // for (let i = 0; i < grid.length; i++) {
  //   for (let j = 0; j < grid[i].length; j++) {
  //     if (grid[i][j] === "0") {
  //       continue
  //     } else {
  //       furthestLand[i] = j
  //     }
  //   }
  // }

  return islandCount
}
