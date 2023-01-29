/* Special Pythagorean triplet

Problem 9

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
a2 + b2 = c2

For example, 3**2 + 4**2 = 9 + 16 = 25 = 5**2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

function productOfPythagoreanTriplet(sum) {
    let a, b, c;
    for (a = 1; a < sum/2; a++) {
        for (b = 2; b < sum/2; b++) {
            c = Math.sqrt((a*a) + (b*b));
            if (c % 1 === 0) {
                if (a + b + c === sum) {
                    return a * b * c;
                }
            }
        }
    }
}

console.log(productOfPythagoreanTriplet(12), 60)
console.log(productOfPythagoreanTriplet(1000), 31875000)

module.exports = productOfPythagoreanTriplet;