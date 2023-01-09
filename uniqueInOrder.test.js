const uniqueInOrder = require('./uniqueInOrder')

test('Make the array [1,2,3] unique in order', () => {
    const arr = uniqueInOrder([1,2,2,3,3])
    expect(arr).toEqual([1,2,3]);
})

test('Make the string "AAAABBBCCDAABBB" unique in order', () => {
    expect(uniqueInOrder('AAAABBBCCDAABBB')).toEqual(['A', 'B', 'C', 'D', 'A', 'B']);
})

test('Make the string "AAAABBBCCDAABBB" unique in order', () => {
    expect(uniqueInOrder('ABBCcAD')).toEqual(['A', 'B', 'C', 'c', 'A', 'D']);
})