/* Descending Order

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
Examples:

Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

PREP
Parameters: A non-negative integer.
Returns: A non-negative integer with digits arranged in descending order.
Examples: descendingOrder(42145); //54421
Pseudo code: Split the number into an array of numbers.
             Sort the array in descending order.
             Return the array.
*/

function descendingOrder(n){
    return Number(n.toString().split('').sort((a, b) => b - a).join(''));
}

console.log(descendingOrder(42145));
console.log(descendingOrder(126834));
console.log(descendingOrder(72_358_445));
console.log(descendingOrder(0));


