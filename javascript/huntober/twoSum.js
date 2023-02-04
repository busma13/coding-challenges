/* Two Sum

Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

describe("Two Sum", () => {
 it("Should implement two sum", () => {
  assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
 });
});
*/

function twoSum(nums, value) {
    let pairs = [];
    let map = {};
    for (const num of nums) {
        const diff = value - num;
        if (map[diff]) {
            pairs.push([num,diff]);
            delete map[diff];
        } else {
            map[num] = true;
        }
    }
    return pairs;
}

console.log(twoSum([1,2,2,3,4], 4), [[2,2], [3,1]]);
console.log(twoSum([1,2,2,3,3,3,4], 4), [[2,2], [3,1]]);
console.log(twoSum([1,1,1,2,2,3,3,3,4], 4), [[2,2], [3,1]]);