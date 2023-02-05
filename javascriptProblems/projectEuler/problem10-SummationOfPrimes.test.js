const summationOfPrimes = require('./problem10-SummationOfPrimes')

test('The sum of all primes below 10 is 17', ()=>{
    expect(summationOfPrimes(10)).toBe(17);
})

test('The sum of all primes below 2000000 is 142913828922', ()=>{
    expect(summationOfPrimes(2000000)).toBe(142913828922);
})