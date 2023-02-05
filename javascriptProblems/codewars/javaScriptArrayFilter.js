/* JavaScript Array Filter

JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]

PREP
Parameters: An array of numbers.
Returns: An array of even numbers.
Examples: getEvenNumbers([2,34,57,87,5,24,69,0]);//[2,34,24,0]
Pseudo code: Use filter method on the array. In the filtering function return values that are evenly divisible by 2. Return the array.
*/

function getEvenNumbers(numbersArray){
    return numbersArray.filter(n => n % 2 === 0);
}

console.log(getEvenNumbers([2,34,57,87,5,24,69,0]))