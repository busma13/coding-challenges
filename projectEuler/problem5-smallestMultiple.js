/* Smallest multiple

Problem 5

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

function smallestMultiple(n) {
    let current = n;
    if (current % 2 !== 0) current *= 2;
    nLoop: while (true) {
        for (let i = n; i > n/2; i--) {
            if (current % i !== 0) {
                current += 2;
                continue nLoop;
            }
        }
        return current;
    }
}

console.log(smallestMultiple(10), 2520)
// console.log(smallestMultiple(20), 232792560)

module.exports = smallestMultiple;