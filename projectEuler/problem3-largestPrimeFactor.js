/* Largest Prime Factor

Problem 3

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

function largestPrimeFactor(n) {
    const factors = [];
    let i = 2;
    while (i <= Math.sqrt(n)) {
        if (n % i === 0) {
            factors.push(i);
            n = n / i;
        } else {
            i++;
        }
    }
    factors.push(n)
    console.log(factors)
    return factors.sort((a, b) => b - a)[0];
}

console.log(largestPrimeFactor(8), 2);
console.log(largestPrimeFactor(13195), 29);
console.log(largestPrimeFactor(600851475143), 6857);

module.exports = largestPrimeFactor;