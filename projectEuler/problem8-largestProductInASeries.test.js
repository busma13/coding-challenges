const { largestProductInSeries, numString } = require('./problem8-largestProductInASeries');

test('The largest product of 4 adjacent digits in numString is 5832', ()=>{
    expect(largestProductInSeries(4, numString)).toBe(5832);
})

test('The largest product of 13 adjacent digits in numString is 23514624000', ()=>{
    expect(largestProductInSeries(13, numString)).toBe(23514624000);
})