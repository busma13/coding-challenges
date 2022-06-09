/* Chain me

Write a generic function chainer

Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).

The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.

function add(num) {
  return num + 1;
}

function mult(num) {
  return num * 30;
}

chain(2, [add, mult]);
// returns 90;

PREP
Parameters: A starting value that could be of any type.  An array of function names.
Returns: A single value that is the result of passing the starting value through all the functions.
Examples: chain(2, [add, mult]); //90
Pseudo code: Declare a variable to hold a temporary value. 
             Set it equal to our starting value parameter.
             Loop through the array, calling each function in turn.
             Set the return value equal to our temp value variable.
             When the loop finishes return our temp value.
*/

function chain(input, fs) {
    for (let i = 0; i < fs.length; i++) {
        input = fs[i](input);
    }
    return input;
}

console.log(chain(2, [add, mult]));

function add(num) {
  return num + 1;
}

function mult(num) {
  return num * 30;
}

// We could use reduce instead
//return fs.reduce((v, fn) => fn(v), input);