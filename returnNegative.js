/* Return negative

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
Examples

makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

Notes

    The number can be negative already, in which case no change is required.
    Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

PREP
Parameters: A number.
Returns: A negative number with the same absolute value as the parameter number.
Examples: see above.
Pseudo code: Get the absolute value of the number. Multiply by -1. Return number.
*/

function makeNegative(num) {
    return Math.abs(num) * -1;
}

console.log(makeNegative(5));
console.log(makeNegative(-5));
console.log(makeNegative(0));