/* Array Helpers

This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

Explanation:

    square() must return a copy of the array, containing all values squared
    cube() must return a copy of the array, containing all values cubed
    average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
    sum() must return the sum of all array values
    even() must return an array of all even numbers
    odd() must return an array of all odd numbers

Note: the original array must not be changed in any case!
Example

var numbers = [1, 2, 3, 4, 5];

numbers.square();  // must return [1, 4, 9, 16, 25]
numbers.cube();    // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum();     // must return 15
numbers.even();    // must return [2, 4]
numbers.odd();     // must return [1, 3, 5]

PREP
Parameters: Any array of numbers or an empty array.
Returns: square -> array, cube -> array, average -> number, sum -> number, even -> array, odd -> array
Examples: See above.
Pseudo code: Create 6 new prototype functions. In the square function multiply each element by itself and return the array. In the cube function multiply each element by itself twice and return the array.  In the average function get the sum of all elements and divide by the number of elements. In the sum function add all the elements together.  In the even function return an array of the elements that are divisible by 2. In the odd function return an array of the elements that are not divisible by 2.
*/

Array.prototype.square = function() {
    return this.map(n => n*n);
}

Array.prototype.cube = function() {
    return this.map(n => n*n*n);
}

Array.prototype.average = function() {
    if (this === []) return NaN;
    return this.sum() / this.length;
}

Array.prototype.sum = function() {
    return this.reduce((acc, c) => acc + c, 0);
}

Array.prototype.even = function() {
    return this.filter(n => n % 2 === 0);
}

Array.prototype.odd = function() {
    return this.filter(n => n % 2 === 1);
}

let numbers = [1,2,3,4,5];
console.log(numbers.square());
console.log(numbers.cube());
console.log(numbers.average());
console.log([].average());
console.log(numbers.sum());
console.log(numbers.even());
console.log(numbers.odd());