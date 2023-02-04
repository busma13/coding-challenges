/* Array Week Challenge - Day 4

Imagine, if you will, an array with length X, with each of its entries having X number of primitives as their entries. Now imagine it arranged as a grid.

// for the less imaginative among us :) 
[[0,1,2],[3,4,5],[6,7,8]]

// as a grid
[
[0,1,2],
[3,4,5],
[6,7,8]
]

Still with me? I hope so! Today I need your help moving some things around again. I'm always rearranging.

Please write twin functions that each take in a given value that will only appear once within a given array of a similar structure to the one described above, which will either move that value up one row or down one row in the array, keeping its same horizontal position. It will essentially swap places with whatever was where it needed to be. Just like in Day 2, don't do anything if the given value is already as high or low as it can get.

Oh, and go ahead and mutate the given array. We're livin' on the wild side!

Examples:

myGrid = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]

// call move up function with 'h' and myGrid
console.log(myGrid) = [['a', 'b', 'c'], ['d', 'h', 'f'], ['g', 'e', 'i']]

// call move up function again, same arguments
console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]

// call move up function again, same arguments
// Note that 'h' is already as far up as it can go
console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]

// call move down function this time, with 'f' and myGrid as arguments
console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]

// call move down function again, same arguments
// Note that 'f' is already as far down as it can go
console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]

Good luck, see you tomorrow!

Given a two dimensional array with an equal number of elements in the outer array as in each inner array. All elements are unique.
Return the same array with the inner elements swapped around.
*/

const moveUp = (element, arr) => {
    for (let i = 0; i < arr.length; i++) {
        let subIdx = arr[i].indexOf(element)
        if (subIdx !== -1) {
            if (i > 0) {
                arr[i][subIdx] = arr[i-1][subIdx]
                arr[i-1][subIdx] = element
            }
            break
        }
    }
}

const moveDown = (element, arr) => {
     for (let i = 0; i < arr.length; i++) {
        let subIdx = arr[i].indexOf(element)
        if (subIdx !== -1) {
            if (i < arr.length - 1) {
                arr[i][subIdx] = arr[i+1][subIdx]
                arr[i+1][subIdx] = element
            }
            break
        }
    }
}
let myGrid = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]

moveUp('h', myGrid)
console.log(myGrid, [['a', 'b', 'c'], ['d', 'h', 'f'], ['g', 'e', 'i']])
moveUp('h', myGrid)
console.log(myGrid, [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']])
moveUp('h', myGrid)
console.log(myGrid, [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']])
moveDown('f', myGrid)
console.log(myGrid, [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']])
moveDown('f', myGrid)
console.log(myGrid, [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']])
