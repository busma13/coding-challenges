/* Last Digit Symmetry

Consider the number 1176 and its square (1176 * 1176) = 1382976. Notice that:

    the first two digits of 1176 form a prime.
    the first two digits of the square 1382976 also form a prime.
    the last two digits of 1176 and 1382976 are the same.

Given two numbers representing a range (a, b), how many numbers satisfy this property within that range? (a <= n < b)
Example

solve(2, 1200) = 1, because only 1176 satisfies this property within the range 2 <= n < 1200. See test cases for more examples. The upper bound for the range will not exceed 1,000,000.

Good luck!
*/

function solve(a, b) {
  let total = 0
  for (let i = a; i < b; i++) {
    // first 2 digits prime
    const first2Digits = getFirst2Digits(i)
    if (!isPrime(first2Digits)) {
      // console.log('i = ' + i, first2Digits + ' is not prime')
      continue
    } 
    // calc square
    const square = i * i
    const first2DigitsOfSquare = getFirst2Digits(square)
    // first 2 digits of square prime
    if (!isPrime(first2DigitsOfSquare)) {
      // console.log(i +' * '+ i +' = '+ square, first2DigitsOfPrime + ' is not prime')

      continue
    }
    // last 2 digits equal
    if (i % 100 === square % 100) {
      // console.log(i + ' satisfies all parameters')
      total++
    }
  }
  return total;
}

function getFirst2Digits(n) {
  let numString = n.toString()
  if (numString.length < 3) return n
  return Number(numString.slice(0, 2))
}

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
        return false;
    }
  }
  return true
}

console.log(solve(2,1200),1)
console.log(solve(2,100000),247);
console.log(solve(2,1000000),2549);
console.log(solve(100000,1000000),2302);