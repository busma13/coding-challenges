const digPow = require('./playingWithDigits')

test('n of 89 and p of 1 should return 1', ()=>{
    expect(digPow(89,1)).toBe(1)
})
test('n of 92 and p of 1 should return -1', ()=>{
    expect(digPow(92,1)).toBe(-1)
})
test('n of 695 and p of 2 should return 2', ()=>{
    expect(digPow(695,2)).toBe(2)
})
test('n of 46288 and p of 3 should return 51', ()=>{
    expect(digPow(46288,3)).toBe(51)
})