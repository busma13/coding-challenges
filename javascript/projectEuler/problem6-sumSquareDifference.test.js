const { sumSquareDifference, calcSumOfSquares, calcSquareOfSums } = require('./problem6-sumSquareDifference')

test('The difference between the square of the sums and the sum of the sqaures of the first 10 natural numbers is 2640', ()=>{
    expect(sumSquareDifference(10)).toBe(2640);
})

test('The difference between the square of the sums and the sum of the sqaures of the first 100 natural numbers is 25164150', ()=>{
    expect(sumSquareDifference(100)).toBe(25164150);
})

test('The sum of the sqaures of the first 10 natural numbers is 385', ()=>{
    expect(calcSumOfSquares(10)).toBe(385);
})

test('The sum of the sqaures of the first 100 natural numbers is 338350', ()=>{
    expect(calcSumOfSquares(100)).toBe(338350);
})

test('The square of the sums of the first 10 natural numbers is 3025', ()=>{
    expect(calcSquareOfSums(10)).toBe(3025);
})

test('The square of the sums of the first 100 natural numbers is 25502500', ()=>{
    expect(calcSquareOfSums(100)).toBe(25502500);
})