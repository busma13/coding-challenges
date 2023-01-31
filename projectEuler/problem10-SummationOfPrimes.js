/* Summation of primes

Problem 10

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

//brute force
// function summationOfPrimes(n) {
//     let sum = 0;
//     outer: for (let i = 2; i < n; i++) {
//         for (let j = 2; j <= i/2; j++) {
//             if(i % j === 0) {
//                 continue outer;
//             }
//         }
//         sum += i;
//     }
//     return sum;
// }

// seive
function summationOfPrimes(n) {
    let sum = 2;
    let isPrimeMap = new Array(n);
    isPrimeMap.fill(true);
    for (let i = 3; i < n; i += 2) {
        if (isPrimeMap[i] === true) {
            sum += i;
            for (let j = i; j <= n; j += i) {
                isPrimeMap[j] = false;
            }
        }
    }
    return sum;
}
console.log(summationOfPrimes(10), 17)
console.log(summationOfPrimes(2000000), 142913828922)

module.exports = summationOfPrimes;