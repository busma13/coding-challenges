/* Get the mean of an array

It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

PREP
Parameters: An array of numbers.
Returns: A number that is the mean of all the numbers in the array rounded down to the nearest integer.
Examples: getAverage([2,2,2,2]); //2, getAverage([1,2,3,4,5]); //3
Pseudo code: Add all the numbers in the array.  Divide that number by the length of the array. Round down to nearest integer.  Return that number.
*/
function getAverage(marks){
    return Math.floor(marks.reduce((acc, c) => acc + c)/marks.length);
}

console.log(getAverage([2,2,2,2]))
console.log(getAverage([1,2,3,4,5]))
console.log(getAverage([1,1,1,1,1,2]))