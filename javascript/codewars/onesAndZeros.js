/* Ones And Zeros

Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11

However, the arrays can have varying lengths, not just limited to 4.

PREP
Parameters: An array of 1s and 0s.
Returns: A number that is the base 10 representation of the binary number made from the array.
Examples: binaryArrayToNumber([1,0,1,1]); //11
Pseudo code: Reverse the array order.  Use reduce to go through the array and sum all the elements as follows: if the element is 1 add the index + 1 multiplied by 2 to our sum, if 0 add nothing.  Return the sum at the end.
*/

const binaryArrayToNumber = arr => {
    let value = 1,
        sum = 0;
    arr.reverse().forEach(el => {
        if (el === 1) sum += value;
        value *= 2;
    })
    return sum;
};

console.log(binaryArrayToNumber([1,0,1,1]))
console.log(binaryArrayToNumber([1,1]))
console.log(binaryArrayToNumber([1,1,0,1,1]))