const deleteNth = require('./deleteOccurencesOfAnElementIfItOccursMoreThanNTimes')

test('2 occurences in the array [1,2,3,1,2,1,2,3]', ()=>{
    expect(deleteNth([1,2,3,1,2,1,2,3],2)).toEqual([1,2,3,1,2,3])
})

test('1 occurence in the array [20,37,20,21]', ()=>{
    expect(deleteNth([20,37,20,21],1)).toEqual([20,37,21])
})