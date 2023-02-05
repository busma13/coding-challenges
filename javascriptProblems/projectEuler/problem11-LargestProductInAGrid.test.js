const { largestProductInGrid, grid } = require('./problem11-LargestProductInAGrid');

test('The largest product of 4 consecutive numbers in the grid is 70600674', ()=>{
    expect(largestProductInGrid(grid)).toBe(70600674);
})
