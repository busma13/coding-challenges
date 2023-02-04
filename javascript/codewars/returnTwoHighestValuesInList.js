/* Return Two Highest Values In List

In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []

*/

function twoHighest(arr) {
  const highest = [];
  arr.sort((a,b) => b - a);
  while (arr.length > 0 && highest.length < 2) {
    const num = arr.shift()  
    if (!highest.includes(num)) highest.push(num);
  }
  return highest;
}

//return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2)
// convert arr to Set, then spread into array, then sort, then slice off first 2