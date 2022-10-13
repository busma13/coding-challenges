/* Array Week Challenge - Day 2

So it turns out that some of the information I stored ever-so-safely in arrays just isn't looking right. I'm not going to be happy until it feels right, you know what I mean? Could you help me rearrange things a bit?

I need twin functions, a function that swaps a given primitive value in a given 1-dimensional array to an index to the left, and another that swaps it to the right.

Some things to note:

    If the given value is on the edge of the array and can't move in that direction, don't move it.
    The given primitive value will only occur once in the array
    The array passed in should be mutated by this function. Scandalous, I know.

Example:

myArray = ['abc', 'xyz', 1, 2, 'Hey!']

// call move left function with 'xyz' and myArray as arguments
console.log(myArray)   // ['xyz', 'abc', 1, 2, 'Hey!']

// call move left function again, same arguments
// Note that 'xyz' is already as far left as it can go
console.log(myArray) // ['xyz', 'abc', 1, 2, 'Hey!'] no change

// call move right function this time, with 2 and myArray as arguments
console.log(myArray) // ['xyz', 'abc', 1, 'Hey!', 2]

// call move right function again, same arguments
// Note that 2 is already as far right as it can go
console.log(myArray) // ['xyz', 'abc', 1, 'Hey!', 2] no change

Got it? Great! I can't wait to get moving things around.

PREP
Parameters: A primitive value and a one-dimensional array.
Returns: Nothing (undefined). The functions mutate the inputted array.
Examples: See above.
Pseudo code: If we are moving left make sure the primitive isn't at index 0. If we are moving right make sure the primitive isn't at index arr.length - 1. If we are do nothing.  Delete our primitive value from the array. Copy the value to the left or right of that index and add it to that index.  Overwirte the index to left or right with our primitive value.
*/

const swapLeft = (prim, arr) => {
    const idx = arr.indexOf(prim)
    if (idx !== 0) {
        arr[idx] = arr[idx - 1]
        arr[idx - 1] = prim
    }
}

const swapRight = (prim, arr) => {
    const idx = arr.indexOf(prim)
    if (idx !== arr.length - 1) {
        arr[idx] = arr[idx + 1]
        arr[idx + 1] = prim
    }
}

let arr = [1,2,3,4]
swapLeft(1, arr)
console.log(arr)
swapLeft(2, arr)
console.log(arr)
swapRight(4, arr)
console.log(arr)
swapRight(3, arr)
console.log(arr)