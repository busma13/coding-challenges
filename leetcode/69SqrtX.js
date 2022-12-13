/* 69. Sqrt(x)
Easy

Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

    For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

 

Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.

Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

 

Constraints:

    0 <= x <= 2**31 - 1 (2,147,483,647)

*/
/**
 * @param {number} x
 * @return {number}
 */
//  var mySqrt = function(x) {
//     if (x === 0) return 0
//     let i = 1
//     while ( i**2 <= x) {
//         i++
//     }
//     return i - 1
// };

var mySqrt = function(x) {
    if (x == 1) return 1;
    let l = 0;
    let r = x;
    while (l < r - 1) {
        m = Math.floor((l + r)/2);
        if (m**2 === x) return m;
        if (m**2 < x) l = m;
        if (m**2 > x) r = m;
        if (l === r) return l;
    }
    return l;
};

console.log(mySqrt(0), 0)
console.log(mySqrt(1), 1)
console.log(mySqrt(2), 1)
console.log(mySqrt(3), 1)
console.log(mySqrt(4), 2)
console.log(mySqrt(8), 2)
console.log(mySqrt(15), 3)
console.log(mySqrt(0.5), 0)