/* Largest palindrome product

Problem 4

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

function largestPalindromeProduct(digits) {
    let start = Number('9'.repeat(digits));
    let end = Number('1' + '0'.repeat(digits-1));
    const palindromes = [];
    for (let i = start; i >= end; i--) {
        for(let j = i; j >= end; j--) {
            let currentProduct = i * j;
            if(isPalindrome(currentProduct)) {
                palindromes.push(currentProduct);
            }
        }
    }
    return palindromes.sort((a, b)=> b - a)[0];
}

function isPalindrome(num) {
    return num.toString().split('').reverse().join('') === num.toString();
}

console.log(largestPalindromeProduct(1), 9)
console.log(largestPalindromeProduct(2), 9009)
console.log(largestPalindromeProduct(3), 906609)

module.exports = largestPalindromeProduct;