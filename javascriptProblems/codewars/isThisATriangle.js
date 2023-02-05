/* Is This A Triangle?

Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

PREP
Parameters: 3 integer values.
Returns: true or false
Examples: isTriangle(1,2,2);//true, isTriangle(10, 5, 4);//false
Pseudo code: Check if all values are greater than 0.  If not return false.  Sort the three integers and see if the smaller 2 add up to a number larger than the largest integer. If not return false, else return true.
*/

function isTriangle(a,b,c) {
    let arr = [a,b,c];
    if (arr.includes(0)) return false; //not needed
    arr.sort((a,b) => a - b)
    return arr[0] + arr[1] > arr[2];
}

console.log(isTriangle(1,2,2))
console.log(isTriangle(1,2,0))
console.log(isTriangle(1,2,4))
console.log(isTriangle(7,2,2))