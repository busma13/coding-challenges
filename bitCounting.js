/* Bit Counting

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

PREP
Parameters: An integer 'n'.
Returns: An integer representing the number of bits that are equal to one when the input integer is converted to binary.
Examples: countBits('1234'); //5, countBits('0'); //0, countBits('2'); //1
Pseudo code: Convert n into binary.  Tally the number of ones in the binary string.  Return that number.
*/

var countBits = function(n) {
    if (n === 0) {
        return 0;
    }
    let bin = toBinary(n);
    return bin.split('').reduce((acc, c) => {
        if (c === '1') acc++;
        return acc;
    }, 0);
};

function toBinary(num, result = '') {
    if (num >= 2) {
        result += '' + num % 2;
        return toBinary(Math.floor(num / 2), result);
    } else {
        result += '' + 1;
        return result.split('').reverse().join('');
    }
}

console.log(toBinary('1234'));
console.log(countBits('1234'));

//n.toString(2).split('0').join('').length;