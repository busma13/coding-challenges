function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const result: boolean[] = []
  let highest = 0
  for (const candyCount of candies) {
    if (candyCount > highest) {
      highest = candyCount
    }
  }
  for (const candyCount of candies) {
    const bool = (candyCount + extraCandies) >= highest
    result.push(bool)
  }
  
  return result
};