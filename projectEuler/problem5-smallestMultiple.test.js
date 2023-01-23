const smallestMultiple = require('./problem5-smallestMultiple');

test('The smallest multiple of all numbers from 1 to 10 is 2520', ()=>{
    expect(smallestMultiple(10)).toBe(2520);
})

test('The smallest multiple of all numbers from 1 to 20 is 232792560', ()=>{
    expect(smallestMultiple(20)).toBe(232792560);
})