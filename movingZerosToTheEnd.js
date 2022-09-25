/* Moving Zeros To The End

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

PREP
Parameters: An array of elements of any type.
Returns: The same array with all the zeros at the end.
Examples: moveZeros([0,3,6,true,'hello',0,undefined]);//[3,6,true,'hello',undefined,0,0]
Pseudo code: Use the filter array method to remove any element that is a 0 and add a zero to a second array we will call zeroArr. Then add zeroArr to the end of the array. Return the array.
*/

function moveZeros(arr) {
    let zeroArr = [];
    return arr.filter(el => {
        if (el === 0) {
            zeroArr.push(0);
            return false;
        } else {
            return true;
        }
    }).concat(zeroArr);
}

console.log(moveZeros([0,3,6,true,'hello',0,undefined]));