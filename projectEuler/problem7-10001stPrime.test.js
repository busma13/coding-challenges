const findNthPrime = require('./problem7-10001stPrime')

test('6th prime is 13', ()=>{
    expect(findNthPrime(6)).toBe(13)
})

test('10001th prime is 104743', ()=>{
    expect(findNthPrime(10001)).toBe(104743)
})