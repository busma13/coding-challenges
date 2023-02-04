const divisors = require('./findTheDivisors')

test('12 has the divisors of [2,3,4,6]', ()=>{
    expect(divisors(12)).toEqual([2,3,4,6])
})

test('25 has the divisor of [5]', ()=>{
    expect(divisors(25)).toEqual([5])
})

test('13 has no divisors because it is prime', ()=>{
    expect(divisors(13)).toBe('13 is prime')
})