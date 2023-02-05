const largestPrimeFactor = require('./problem3-largestPrimeFactor')

test('Largest prime factor of 8 is 2', ()=>{
    expect(largestPrimeFactor(8)).toBe(2);
})

test('Largest prime factor of 13195 is 29', ()=>{
    expect(largestPrimeFactor(13195)).toBe(29);
})

test('Largest prime factor of 600851475143 is 6857', ()=>{
    expect(largestPrimeFactor(600851475143)).toBe(6857);
})