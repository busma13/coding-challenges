/* The Span Function

The span function is a good one to know. It accepts a sequence and a predicate function and returns two sequences. The first sequence contains all the elements of the argument sequence up to the item that caused the first failure of the predicate. The second returned sequence contains the rest of the original sequence. The original sequence is not modified.

For example,


function isEven (x) {
  return Math.abs(x) % 2 === 0;
}

var arr = [2,4,6,1,8,10];

// This is true
span(arr, isEven) === [[2,4,6],[1,8,10]]

Your task is to...wait for it... write your own span function !!!

Hint/Challenge: If you have completed the takeWhile function and the dropWhile function, then you can solve this problem in one line!

PREP
Parameters: A sequence of values (an array) and a function that will be used on the array of values.
Returns: Two new arrays: one is the sequence of values where the predicate function is true and the other is the rest of the values from whre the predicate function was false.
Examples: function isOdd(num) {
             return num % 2 !== 0;
          }
          var seq = [1,5,111,1111,2,4,6,4,5];

          span(seq, isOdd); //[1,5,111,1111], [2,4,6,4,5]
Pseudo code: Create 2 new empty arrays.
             Loop through the values array. If function(value) is true add value to the new array. If function(value) is false add it and all other values to the second array.
             Return the new arrays. 
*/

function span(arr, predicate) {
    let prefixArr, restArray = [];
    for(let i = 0; i < arr.length; i++) {
        console.log(predicate(arr[0]))
        if(!predicate(arr[i])) {
            prefixArr = arr.slice(0, i);
            restArray = arr.slice(i);
            return [prefixArr, restArray];
        }
    }
    return [arr, []];
}

function isEven(x) {
    return Math.abs(x) % 2 === 0;
  }
  
  function isOdd(x) {
    return Math.abs(x) % 2 !== 0;
  }

  var arr1 = [2,4,6,1,4,8];
  var arr2 = [1,4,5,7,6];
  var arr3 = [13,17,19,11,21];

console.log(span(arr1, isEven))
console.log(span(arr2, isEven))
console.log(span(arr3, isOdd))