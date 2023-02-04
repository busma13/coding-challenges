/* Array Wek Challenge - Day 1

 This week we'll be working with arrays toward a final puzzling result on Friday when we combine our daily functions. Your solutions should be built to work within any given daily constraints.

Do you know how to compare arrays? Not sure? Don't worry, you'll figure it out...

Today's task is to write a function that will check equality between 2 arrays with a particular structure.

The arrays will:

    Be of equal size
    Will each contain some number (X) arrays
    Each inner array will contain that same number (X) primitive elements

All the nested primitives within each array must strictly match to return a true result. Any mismatches will return false.

For example:

// each of these arrays have 3 nested arrays of 3 strings each 
const arr1 = [['a','b','c'],['d','e','f'],['g','h','i']]
const arr2 = [['a','b','c'],['d','e','f'],['g','h','i']]
const arr3 = [['a','B','c'],['d','E','f'],['g','H','i']]
const arr4 = [['a','b','c'],['g','h','i'],['d','e','f']]

// if we were to use our function to compare all the possible pairs
// ONLY arr1 vs arr2 would return true

checkEquality(arr1, arr2) => true
checkEquality(arr1, arr3) => false
checkEquality(arr1, arr4) => false
// etc.

Good luck! Check back tomorrow for the next challenge of the week!

PREP
Parameters: Two arrays, each with three nested arrays that each contain 3 strings.
Returns: True or false. 
Examples: See above.
Pseudo code: Determine how many subarrays the arrays will have and save this as 'x'.  Use nested for loops to loop through the first array.  Check if the value ate every elements and subelement is equal to that of the second array.  If they are not equal return false.  If the loop finishes return true.
*/

function checkEquality (arr1, arr2) {
    const x = arr1.length
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < x; j++) {
            if (arr1[i][j] !== arr2[i][j]) return false
        }
    }
    return true
}

const arr1 = [['a','b','c'],['d','e','f'],['g','h','i']]
const arr2 = [['a','b','c'],['d','e','f'],['g','h','i']]
const arr3 = [['a','B','c'],['d','E','f'],['g','H','i']]
const arr4 = [['a','b','c'],['g','h','i'],['d','e','f']]
console.log(checkEquality(arr1, arr2))
console.log(checkEquality(arr1, arr3))
console.log(checkEquality(arr1, arr4))