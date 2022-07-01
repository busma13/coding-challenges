/* The takeWhile Function

Here's another staple for the functional programmer. You have a sequence of values and some predicate for those values. You want to get the longest prefix of elements such that the predicate is true for each element. We'll call this the takeWhile function. It accepts two arguments. The first is the sequence of values, and the second is the predicate function. The function does not change the value of the original sequence.

function isEven(num) {
  return num % 2 === 0;
}
var seq = [2,4,6,8,1,2,5,4,3,2];

takeWhile(seq, isEven) // -> [2,4,6,8]

Your task is to implement the takeWhile function.

If you've got a span function lying around, this is a one-liner! Also, if you liked this problem, you'll surely love the dropWhile function.

PREP
Parameters: A sequence of values (an array) and a function that will be used on the array of values.
Returns: A new array of the values that are true for the function from the start until the function returns false.
Examples: function isOdd(num) {
             return num % 2 !== 0;
          }
          var seq = [1,5,111,1111,2,4,6,4,5];

          takeWhile(seq, isOdd); //[1,5,111,1111]
Pseudo code: Create a new empty array.
             Loop through the values array. If function(value) is true add value to the new array. If function(value) is false stop the loop.
             Return the new array. 
*/

function takeWhile (arr, pred) {
    prefixArr = [];
    value = 0;
    while (pred(arr[value]) && value < arr.length) {
        prefixArr.push(arr[value]);
        value++;
    }
    return prefixArr;
}

function isOdd(num) {
    return num % 2 !== 0;
 }

 function isEven(num) {
    return num % 2 === 0;
  }

console.log(takeWhile([1,5,111,1111,2,4,6,4,5], isOdd));
console.log(takeWhile([2,6,4,10,1,5,4,3], isEven));