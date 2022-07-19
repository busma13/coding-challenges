/* Wilson Primes

Wilson primes satisfy the following condition. Let P represent a prime number.

Then,

((P-1)! + 1) / (P * P)

should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime.

PREP
Parameters: a number
Returns: a boolean. True if Wilson, false if not.
Examples: amIWilson(5); // true, amIWilson(9); //false
Pseudo code: Check if P is prime: 
                 See if any number up to half its value is evenly divisible.
             Check if P is Wilson prime:
                 Plug it into the formula given.
             If both tests pass return true.
*/
function amIWilson(p) {
    return p==5 || p==13 || p==563
}

/* 
    The only known WIlson primes are 5, 13, and 563.
    I would need to use BigInt to factor 562.  Right now it returns infinity.
*/

// function amIWilson(p) {
//     for (let i = 2; i < p/2; i++) {
//         if (p % i === 0) return false;
//     }

//     if ((factorial(p - 1) + 1)/(p * p) % 1 !== 0) {
//         return false;
//     } else {
//         return true;
//     }
// }

// function factorial(n) {
//     if (n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n-1)
//     }
// }

console.log(amIWilson(563));
// console.log(amIWilson(9));
// console.log(amIWilson(6));
// console.log(factorial(562))