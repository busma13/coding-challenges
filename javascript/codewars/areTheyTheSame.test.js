const comp = require('./areTheyTheSame')

test('Same test 1', ()=>{
    expect(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361])).toBe(true)
})

test('Same test 2', ()=>{
    expect(comp([121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361])).toBe(false)
})

test('Same test 3', ()=>{
    expect(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 36100, 25921, 361, 20736, 361])).toBe(false)
})

test('Same test 4', ()=>{
    expect(comp(null, [])).toBe(false)
})