const sumEvenFibs = require('./problem2-evenFibonacciNumbers')

test('Sum of even fibonacci numbers up to 100 is 188', ()=>{
    expect(sumEvenFibs(100)).toBe(188);
})

test('Sum of even fibonacci numbers up to 4,000,000 is 4,613,732', ()=>{
    expect(sumEvenFibs(4000000)).toBe(4613732);
})