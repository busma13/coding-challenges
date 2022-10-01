/* Build Tower

Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]

And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

PREP
Parameters: A positive integer.
Returns: An array of strings. Each element in the array represents the floor of a tower.
Examples: see above
Pseudo code: Create an empty result array.  The largest floor will have nFloor * 2 - 1 asterisks.  Create a string called flr with that many asterisks and and push it to the result array.  Loop from nFloors - 1 down to 1. On each loop replace the first and last asterisk of current floor with a space and unshift that string to the result array.  When the loop finishes return the array.
*/

function towerBuilder(nFloors) {
    let flr = '*'.repeat(nFloors * 2 - 1)
    let result = [flr]

    for ( let i = nFloors; i > 1; i-- ) {
        let idx = flr.indexOf('*')
        flr = flr.substring(0, idx) + ' ' + flr.substring(idx + 1)
        idx = flr.lastIndexOf('*')
        flr = flr.substring(0, idx) + ' ' + flr.substring(idx + 1)
        result.unshift(flr)
    }
    return result
}

console.log(towerBuilder(3))
console.log(towerBuilder(6))