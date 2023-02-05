const sumOfMultiples = require('./problem1-multiplesOf3Or5')

test('The sum of the multiples of 3 or 5 below 10 is 23', ()=>{
    expect(sumOfMultiples(10)).toBe(23);
})

test('The sum of the multiples of 3 or 5 below 1000 is 233168', ()=>{
    expect(sumOfMultiples(1000)).toBe(233168);
})