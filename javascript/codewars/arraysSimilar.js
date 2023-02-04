/* Arrays Similar

Write a function that determines whether the passed in arrays are similar. Similar means they contain the same elements, and the same number of occurrences of elements.

const arr1 = [1, 2, 2, 3, 4],
      arr2 = [2, 1, 2, 4, 3],
      arr3 = [1, 2, 3, 4],
      arr4 = [1, 2, 3, "4"]

arraysSimilar(arr1, arr2); // Should equal true
arraysSimilar(arr2, arr3); // Should equal false
arraysSimilar(arr3, arr4); // Should equal false

PREP
Parameters: Two arrays.
Returns: True or false.
Examples: see above.
Pseudo code: Return false if arrays are not the same length. Loop through the first array. Check if that element is in the second array by using findIndex(). If the element isn't in the second array return false. If it is remove the element from the second array. If we get to the end of the loop return true.
*/

function arraysSimilar(arr1, arr2) {
    console.log("arrays",arr1, arr2)
    if (arr1.length !== arr2.length) return false;
    let tempArr = arr2.slice();
    let i = 0;
    while (i < arr1.length) {
        let index = tempArr.indexOf(arr1[i]);
        console.log('element: ', arr1[i], 'index: ', index)
        if (index === -1) return false;
        delete tempArr[index];
        console.log('temp', tempArr)
        i++;
    }
    return true;
}

const arr1 = [1, 2, 2, 3, 4],
      arr2 = [2, 1, 2, 4, 3],
      arr3 = [4, 1, 2, 3],
      arr4 = [1, 2, 3, "4"]

console.log(arraysSimilar(arr1, arr2)); // Should equal true
console.log(arraysSimilar(arr2, arr3)); // Should equal false
console.log(arraysSimilar(arr3, arr4)); // Should equal false