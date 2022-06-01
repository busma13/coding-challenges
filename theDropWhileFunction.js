/* The DropWhile Function

Yet another staple for the functional programmer. You have a sequence of values and some predicate for those values. You want to remove the longest prefix of elements such that the predicate is true for each element. We'll call this the dropWhile function. It accepts two arguments. The first is the sequence of values, and the second is the predicate function. The function does not change the value of the original sequence.

function isEven(num) {
  return num % 2 === 0;
}
var seq = [2,4,6,8,1,2,5,4,3,2];

dropWhile(seq, isEven) // -> [1,2,5,4,3,2]

Your task is to implement the dropWhile function. If you've got a span function lying around, this is a one-liner! Alternatively, if you have a takeWhile function on your hands, then combined with the dropWhile function, you can implement the span function in one line. This is the beauty of functional programming: there are a whole host of useful functions, many of which can be implemented in terms of each other.

PREP
Parameters: An array of numbers. The array can be empty.
            A predicate function used to evaluate the array.
Returns: An array which is a subset of the parameter array.
Examples: dropWhile([2,100,1000,10000,5,3,4,6], isEven); //[5,3,4,6]
Pseudo code: Loop through the array.
             Evaluate each array element based on the predicate function.
             Once the function returns false, return a new array that is a copy of the parameter array starting from the index of the false value.
*/

function dropWhile(arr, pred) {
    for(let i = 0; i < arr.length; i++) {
        if (!pred(arr[i])) {
            return arr.slice(i)
        }
    }
    return [];
}

function isEven(num) {
    return num % 2 === 0;
}

console.log(dropWhile([2,100,1000,10000,5,3,4,6], isEven)); //[5,3,4,6]
console.log(dropWhile([], isEven)); //[]