/* Mean Means

Example

List of numbers: 1, 3, 9, 27, 81

    n = 5
    Arithmetic mean = (1 + 3 + 9 + 27 + 81) / 5 = 121 / 5 = 24.2
    Geometric mean = (1 * 3 * 9 * 27 * 81) ^ (1/5) = 59049 ^ (1/5) = 9

Task

You will be given a list of numbers and their arithmetic mean. However, the list is missing one number. Using this information, you must figure out and return the geometric mean of the FULL LIST, including the number that's missing.
*/

function geo_mean(nums, arith_mean) {
    const denominator = nums.length + 1;
    const total = arith_mean * denominator;
    let missingNum = total - nums.reduce((acc, c) => acc + c, 0);
    nums.push(missingNum);
    geometricMean = nums.reduce((acc, c) => acc * c, 1) ** (1/denominator);
    return geometricMean;
}

console.log(geo_mean([2], 10), 6)
console.log(geo_mean([1, 2], 3), 2.2894284851066637)
console.log(geo_mean([4, 6, 7, 2], 5), 4.580344097847165)
