/* Find Count of Most Frequent Item in an Array

Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0
Example

input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
ouptut: 5 

The most frequent number in the array is -1 and it occurs 5 times.
*/

function mostFrequentItemCount(collection) {
    if (collection.length === 0) return 0;
    let frequencyMap = collection.reduce((acc, c) => {
        if (!acc[c]) {
            acc[c] = 1;
        } else {
            acc[c]++;
        }
        return acc;
    },{});

    return Object.values(frequencyMap).sort((a, b) => b - a)[0];
}

console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]), 5)