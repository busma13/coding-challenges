/* Beginner Series #3 Sum of Numbers

Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
Examples (a, b) --> output (explanation)

(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

PREP
Parameters: two integers, either positive or negative
Returns: a single integer.
Examples: getSum(1,0); //1, getSum(-2, 3); //3
Pseudo code: Create a sum variable. Sort the two numbers lowest to highest.  Use a for loop that goes from the low number to the high number. On each loop add the iterator to the sum variable. Return the sum variable.
*/

function getSum( a,b ){
    let sum = 0, low, high;
    if (a < b) {
        low = a;
        high = b;
    } else {
        low = b;
        high = a;
    }
    for (let i = low; i <= high; i++) {
        sum += i;
    }
    return sum;
}

console.log(getSum(1,0))
console.log(getSum(-2,3))