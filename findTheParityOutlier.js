/* Find the Parity Outlier

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
Examples

[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)

PREP
Parameters: An array of at least 3 integers.
Returns: An integer that is the parity outlier.
Examples: findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]); //11
Pseudo code: First find out if most items are odd or even. Compare the first number % 2 and the second % 2. If they are equal and both odd, search for an even number and return it.  If equal and both even, search for an odd number and return it.  If they are not equal do the same comparison with the first number to the third.  If they are equal return the second number.  If they are not equal return the first number.
*/

function findOutlier(integers){
    let oultierMod;
    if (integers[0] % 2 === integers[1] % 2) {
        oultierMod = integers[0] % 2 === 0 ? 1 : 0;
        console.log(oultierMod)
        return integers.find(int => Math.abs(int % 2) === oultierMod);
    } else {
        if (integers[0] % 2 === integers[2] % 2) {
            return integers[1];
        } else {
            return integers[0];
        }
    }
}

// console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
// console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
// console.log(findOutlier([2, 5, 0]));
// console.log(findOutlier([161, 3, 1719, 19, 110, 13, -21]));
console.log(findOutlier([28439390,-186344840,-111852251,-148111156,124175064,177218760,-97757918,-116634650,54290948,-180363436,146871490,186190974,116429480,-144927254,-180818448]));