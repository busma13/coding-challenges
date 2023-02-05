const validatePIN = require('./regexValidatePinCode')


test('test 4 digits', ()=>{
    expect(validatePIN('1234')).toBe(true)
})

test('test 5 digits', ()=>{
    expect(validatePIN('12345')).toBe(false)
})

test('test 6 digits', ()=>{
    expect(validatePIN('123456')).toBe(true)
})

test('test non-digit', ()=>{
    expect(validatePIN('a234')).toBe(false)
})