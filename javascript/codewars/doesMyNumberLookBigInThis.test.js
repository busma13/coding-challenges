const narcissistic = require('./doesMyNumberLookBigInThis')

test('153 should be narcissistic', ()=>{
    expect(narcissistic(153)).toBe(true);
})

test('1652 should not be narcissistic', ()=>{
    expect(narcissistic(1652)).toBe(false)
})