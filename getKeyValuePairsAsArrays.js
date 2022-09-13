/* Get Key Value Pairs As Arrays

Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

Example:

keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]

Style Points (JS/CoffeeScript only): This kata only tests for data that uses object literal notation (simple objects). For extra style, can you get your method to check for objects that extend their prototype?

PREP
Parameters: An object. It can be empty.
Returns: An array of two arrays, one of keys, one of values.
Examples: keysAndValues({});//[[], []], keysAndValues(1: 'a', 2: 'b', 3: 'c'});// [['1', '2', '3'], ['a', 'b', 'c']]
Pseudo code: Make an empty arrays called result.  Use the keys() method to put an array of keys in the result array.  Use the valuess() method to put an array of valuess in the result array. Return the result array.
*/

function keysAndValues(data){
    return [Object.keys(data), Object.values(data)];
}

console.log(keysAndValues({}))
console.log(keysAndValues({a: 1, b: 2, c: 3}))