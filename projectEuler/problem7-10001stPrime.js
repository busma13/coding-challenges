/* 10001st Prime
Problem 7

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

function findNthPrime(n) {
    let highestPrime = 2;
    let primeCounter = 2;
    let counter = 3;

    test: while (primeCounter <= n) {
        for (let i = 2; i <= Math.sqrt(counter); i++) {
            if (counter % i != 0) {
                continue;
            } else {
                counter += 2;
                continue test;
            }
        }
        primeCounter++;
        highestPrime = counter;
        counter += 2;
    }
    return highestPrime;
}

console.log(findNthPrime(6), 13)
console.log(findNthPrime(10001))

module.exports = findNthPrime;