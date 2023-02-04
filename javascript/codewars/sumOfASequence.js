/* Sum of a sequence

Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

If begin value is greater than the end, function should returns 0

Examples

2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)

PREP
Parameters: 3 non-negative integers.
Returns: 1 integer that is the sum determined by the sequence or 0.
Examples: sequenceSum(2,2,2); //2, equenceSum(1,5,1); //15
Pseudo code: Create a sum variable that is equal to 0.
             Create a for loop.
             Set iterator to begin parameter.
             Set the stopping condition as  the end parameters.
             Set the increment to the step parameter.
             In the loop add iterator to sum.
             Return sum.
*/

const sequenceSum = (begin, end, step) => {
    let sum = 0;
    for (let i = begin; i <= end; i += step) {
        sum += i;
    }
    return sum;
};

console.log(sequenceSum(2,2,2));
console.log(sequenceSum(2,6,2));
console.log(sequenceSum(1,5,1));
console.log(sequenceSum(1,5,3));