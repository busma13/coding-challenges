/* Perpendicular Lines

Description:

You are given an input (n) which represents the amount of lines you are given, your job is to figure out what is the maximum amount of perpendicular bisectors you can make using these lines.

Note: A perpendicular bisector is one that forms a 90 degree angle

n will always be greater than or equal to 0
*/

const maxBisectors = n => {
    let max = 0;
    for (let i = 1; i <= Math.floor(n/2); i++) {
        let product = (n - i) * i;
        if (product > max) max = product;
    }
    return max;
}

console.log(maxBisectors(2), 1)
console.log(maxBisectors(3), 2)
console.log(maxBisectors(4), 4)
console.log(maxBisectors(5), 6)