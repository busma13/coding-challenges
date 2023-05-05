/* Last Digits Of A Number
Your job is to implement a function which returns the last D digits of an integer N as a list.
Special cases:

    If D > (the number of digits of N), return all the digits.
    If D <= 0, return an empty list.

Examples:

N = 1
D = 1
result = [1]

N = 1234
D = 2
result = [3, 4]

N = 637547
D = 6
result = [6, 3, 7, 5, 4, 7]
*/

const lastDigit = (n, d) => {
  if (d <= 0) return []

  const result = []
  let nArray = n.toString().split("")

  for (let i = 0; i < d && nArray.length > 0; i++) {
    result.unshift(Number(nArray.splice(nArray.length - 1, 1)[0]))
  }

  return result
}

console.log(lastDigit(123767, 4))
console.log(lastDigit(1234, -4))
console.log(lastDigit(1343, 5))
