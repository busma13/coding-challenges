/* Remove the Minimum

The museum of incredible dull things

The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
Task

Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.
Examples

* Input: [1,2,3,4,5], output= [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]

PREP
Parameters: An array of integers.
Returns: The same array with the lowest value removed.
Examples: removeSmallest([1,2,3,4,5]);//[2,3,4,5], removeSmallest([5,3,2,1,4]);//[5, 3, 2, 4]
Pseudo code: Make a copy of the array. Sort the copy from lowest to highest. Search the original array for the index of the first value in the copy array. Splice out the element at that array index. Return the array.
*/

function removeSmallest(numbers) {
    const copy1 = numbers.slice();
    const copy2 = numbers.slice();
    copy1.sort((a,b) => a - b);
    const idx = numbers.indexOf(copy1[0]);
    copy2.splice(idx, 1);
    console.log(numbers, copy1, copy2)
    return copy2;
}

console.log(removeSmallest([1,2,3,4,5]))
console.log(removeSmallest([5,3,4,1,2]))
console.log(removeSmallest([5]))
console.log(removeSmallest([]))