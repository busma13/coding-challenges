/* 70. Climbing Stairs
Easy

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

 

Constraints:

    1 <= n <= 45

*/
/**
 * @param {number} n
 * @return {number}
 */

//Recursion - too slow!
//  var climbStairs = function(n) {
//     if (n == 1) return 1
//     if (n == 2) return 2
//     return climbStairs(n - 1) + climbStairs(n - 2)
// };

 var climbStairs = function(n) {
    if (n == 1) return 1
    let prev1 = 1 
    let prev2 = 1 
    for (let i = 2; i < n; i++) {
        let temp = prev2
        prev2 += prev1
        prev1 = temp
    }
    return prev1 + prev2
}

console.log(climbStairs(1), 1)
console.log(climbStairs(2), 2)
console.log(climbStairs(3), 3)
console.log(climbStairs(4), 5)
console.log(climbStairs(5), 8)
