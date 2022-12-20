/* Required Data I

We need a function count_sel() that receives an array or list of integers (positive and negative) and may give us the following information in the order and structure presented bellow:

[(1), (2), (3), [[(4)], 5]]

(1) - Total amount of received integers.

(2) - Total amount of different values the array has.

(3) - Total amount of values that occur only once.

(4) and (5) both in a list

(4) - It is (or they are) the element(s) that has (or have) the maximum occurrence. If there are more than one, the elements should be sorted (by their value obviously)

(5) - Maximum occurrence of the integer(s)

Let's see some cases

____ count_sel([-3, -2, -1, 3, 4, -5, -5, 5, -1, -5]) ----> [10, 7, 5, [[-5], 3]]

(1) - The list has ten elements (10 numbers)

(2) - We have seven different values: -5, -3, -2, -1, 3, 4, 5 (7 values)

(3) - The numbers that occur only once: -3, -2, 3, 4, 5 (5 values)

(4) and (5) - The number -5 occurs three times (3 occurrences)

____ count_sel([4, 4, 2, -3, 1, 4, 3, 2, 0, -5, 2, -2, -2, -5]) ----> [14, 8, 4, [[2, 4], 3]]

//input - integer array, pos & neg
//output - integer array, 4 elements, last element is multidimensional array.

Enjoy it and happy coding!!
*/
const countSel = lst => {
    const result = [];
    const map = {};
    let onceCount = 0;
    let maxOccurenceCount = 0;
    let maxOccurenceNumbers = [];
    
    for (const num of lst) {
        map[num] = map[num] + 1 || 1;
    }

    for (key in map) {
        if (map[key] === 1) onceCount++;
        
        if (map[key] > maxOccurenceCount) {
            maxOccurenceCount = map[key];
            maxOccurenceNumbers = [Number(key)];
        } else if (map[key] === maxOccurenceCount) {
            maxOccurenceNumbers.push(Number(key));
        }
    }
    
    maxOccurenceNumbers.sort((a, b) => a - b);
    
    result.push(lst.length);
    result.push(Object.keys(map).length);
    result.push(onceCount);
    result.push([maxOccurenceNumbers, maxOccurenceCount]);

    return result;
}

console.log(countSel([-3, -2, -1, 3, 4, -5, -5, 5, -1, -5]), [10, 7, 5, [[-5], 3]])
console.log(countSel([4, 4, 2, -3, 1, 4, 3, 2, 0, -5, 2, -2, -2, -5]), [14, 8, 4, [[2, 4], 3]])