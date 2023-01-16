const SeriesSum = require ('./sumOfTheFirstNthTermOfSeries');

test('SeriesSum of 1 should be 1.00', ()=>{
    expect(SeriesSum(1)).toBe('1.00');
})

test('SeriesSum of 2 should be 1.25', ()=>{
    expect(SeriesSum(2)).toBe('1.25');
})

test('SeriesSum of 5 should be 1.57', ()=>{
    expect(SeriesSum(5)).toBe('1.57');
})