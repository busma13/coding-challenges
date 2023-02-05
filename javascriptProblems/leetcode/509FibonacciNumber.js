/* 509 Fibonacci Number
Easy

The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.

Given n, calculate F(n).

Example 1:

Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

Example 2:

Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

Example 3:

Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

Constraints:

    0 <= n <= 30

*/
/**
 * @param {number} n
 * @return {number}
 */

// For Loop
var fib = function(n) {
    let fibs = [0,1];
    for (let i = 2; i <= n; i++){
        fibs[i] = fibs[i-1] + fibs[i-2];
    }
    return fibs[n];
};

// Recursion
var fibRecursive = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibRecursive(n-1) + fibRecursive(n-2);
}

var fibMemo = function(n, memo=[]) {
    if (memo[n]) return memo[n];
    if (n === 0 || n === 1) return n;
    memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo);
    return memo[n];
}

console.log(fib(2), 1)
console.log(fib(3), 2)
console.log(fib(4), 3)
console.log(fib(10), 55)

console.log(fibRecursive(2), 1)
console.log(fibRecursive(3), 2)
console.log(fibRecursive(4), 3)
console.log(fibRecursive(10), 55)

console.log(fibMemo(2), 1)
console.log(fibMemo(3), 2)
console.log(fibMemo(4), 3)
console.log(fibMemo(10), 55)