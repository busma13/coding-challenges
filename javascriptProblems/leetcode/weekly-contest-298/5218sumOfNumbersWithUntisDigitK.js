/* 5218. Sum of Numbers With Units Digit K

Given two integers num and k, consider a set of positive integers with the following properties:

The units digit of each integer is k.
The sum of the integers is num.
Return the minimum possible size of such a set, or -1 if no such set exists.

Note:

The set can contain multiple instances of the same integer, and the sum of an empty set is considered 0.
The units digit of a number is the rightmost digit of the number.
 

Example 1:

Input: num = 58, k = 9
Output: 2
Explanation:
One valid set is [9,49], as the sum is 58 and each integer has a units digit of 9.
Another valid set is [19,39].
It can be shown that 2 is the minimum possible size of a valid set.
Example 2:

Input: num = 37, k = 2
Output: -1
Explanation: It is not possible to obtain a sum of 37 using only integers that have a units digit of 2.
Example 3:

Input: num = 0, k = 7
Output: 0
Explanation: The sum of an empty set is considered 0.
 

Constraints:

0 <= num <= 3000
0 <= k <= 9
*/

/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */

//ran out of time. does not work.
 var minimumNumbers = function(num, k) {
    if (num === 0 ) return 0;
    if (num % 2 !== 0 && k % 2 === 0) return -1;
    if (k === 0) {
        if (num % 10 === 0) {
            return 1;
        } else {
            return -1;
        }
    }
    if (k === 1) return num % 10;
    if (k === 2) {
        switch (num % 10) {
            case 0:
                return 5;
            case 2:
                return 1;
            case 4:
                return 2;
            case 6:
                return 3;
            case 8:
                return 4;
        }
    }
    if (k === 3) {

    }

};

console.log(minimumNumbers(37, 2)); // -1
console.log(minimumNumbers(0, 7)); //0
console.log(minimumNumbers(20, 0)); //1
console.log(minimumNumbers(15, 0)); // -1
console.log(minimumNumbers(34, 1)); //4
console.log(minimumNumbers(46, 2)); //3
console.log(minimumNumbers(30, 2)); //5
// console.log(minimumNumbers(37, 2));