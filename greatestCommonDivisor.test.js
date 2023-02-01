const mygcd = require('./greatestCommonDivisor');

test('The greatest common divisor of and is ',()=>{
    expect(mygcd(30,12)).toBe(6);
})

test('The greatest common divisor of and is ',()=>{
    expect(mygcd(8,9)).toBe(1);
})

test('The greatest common divisor of and is ',()=>{
    expect(mygcd(1,1)).toBe(1);
})