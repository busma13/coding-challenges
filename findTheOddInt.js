/* Find the odd int 

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
Examples

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

PREP
Parameters: An array of integers. One integer will always appear an odd number of times.
Returns: An integer that is the number that was included an odd number of times.
Examples: findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]); //5
Pseudo code: Create a tracking object.
             Loop through array:
                If int is not in object, add int at that position as an object key with a value of 0.
                Increment the value of our 'int' key.
             Loop through object values to find the odd value.
             Return key assocaited with that value.  
*/

function findOdd(A) {
    const tracker = {};
    A.forEach(el => {
        if (!tracker[el]) {
            tracker[el] = 0;
        }
        tracker[el]++;
    });
    for (const key in tracker) {
        if (tracker[key] % 2 === 1) return Number(key);
    }
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])); //5
console.log(findOdd([7])); //7
console.log(findOdd([0])); //0
console.log(findOdd([1,1,2])); //2