const findMissingLetter = require('./findTheMissingLetter')

test('Find the missing e', ()=>{
    expect(findMissingLetter(['a','b','c','d','f'])).toBe('e')
})

test('Find the missing P', ()=>{
    expect(findMissingLetter(['O','Q','R','S'])).toBe('P')
})