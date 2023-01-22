const largestPalindromeProduct = require('./problem4-largestPalindromeProduct')

test('Largest palindrome product of 1 digit numbers is 9', ()=>{
    expect(largestPalindromeProduct(1)).toBe(9);
})

test('Largest palindrome product of 2 digit numbers is 9009', ()=>{
    expect(largestPalindromeProduct(2)).toBe(9009);
})

test('Largest palindrome product of 3 digit numbers is 906609', ()=>{
    expect(largestPalindromeProduct(3)).toBe(906609);
})