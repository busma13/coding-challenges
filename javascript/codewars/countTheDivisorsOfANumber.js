/* Count the divisors of a number

Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.
Examples (input --> output)

4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

PREP
Parameters: A positive integer.
Returns: A positive integer.
Examples: getDivisorsCnt(10); // 4 
Pseudo code: Create a count variable. Set it equal to 1. Loop from 1 to n/2. See if n is equally divisible by that number.  If so increase the count.  Return count.
*/

function getDivisorsCnt(n){
    let count = 1;
    for (let i = 1; i <= n/2; i++) {
        if (n % i === 0) count++; 
    }
    return count;
}

console.log(getDivisorsCnt(1));
console.log(getDivisorsCnt(4));
console.log(getDivisorsCnt(12));
console.log(getDivisorsCnt(30));
console.log(getDivisorsCnt(500000));
