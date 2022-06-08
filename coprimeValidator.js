/* Coprime Validator

Write a program to determine if the two given numbers are coprime. A pair of numbers are coprime if their greatest shared factor is 1.

The inputs will always be two positive integers between 2 and 99.
Examples

20 and 27:

    Factors of 20: 1, 2, 4, 5, 10, 20
    Factors of 27: 1, 3, 9, 27
    Greatest shared factor: 1
    Result: 20 and 27 are coprime

12 and 39:

    Factors of 12: 1, 2, 3, 4, 6, 12
    Factors of 39: 1, 3, 13, 39
    Greatest shared factor: 3
    Result: 12 and 39 are not coprimes

PREP
Parameters: two numbers between 2 and 99.
Returns: true or false.
Examples: isCoprime(20, 27); //true, isCoprime(12, 39); //false
Pseudo code: Find the factors of each number.
             Find the greatest shared factor.
             Compare it to one.
             Return true or false.
*/

function isCoprime(x, y) {
    let factorsX = getFactors(x);
    let factorsY = getFactors(y);
    let greatestShared = 1;
    for (let i = 1; i < factorsX.length; i++) {
        for (let j = 1; j < factorsY.length; j++) {
            if (factorsX[i] === factorsY[j]) {
                greatestShared = factorsX[i];
            }
        }
    }
    return greatestShared === 1;
}

function getFactors(n) {
    let factors = [];
    for (let i = 1; i <= n/2; i++) {
        if (n % i === 0) {
            factors.push(i);
        }
    }
    factors.push(n);
    return factors;
}

console.log(isCoprime(12, 39))
console.log(isCoprime(20, 27))
console.log(isCoprime(30, 90))