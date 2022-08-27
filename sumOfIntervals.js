/* Sum Of Intevals

Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.
Intervals

Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.
Overlapping Intervals

List containing overlapping intervals:

[
   [1,4],
   [7, 10],
   [3, 5]
]

The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.
Examples:

sumIntervals( [
   [1,2],
   [6, 10],
   [11, 15]
] ); // => 9

sumIntervals( [
   [1,4],
   [7, 10],
   [3, 5]
] ); // => 7

sumIntervals( [
   [1,5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ); // => 19

Random Tests

    100 tests with 1 - 10 intervals from the range [-20, 20]
    100 tests with 20000 - 50000 intervals from the range [-10^9, 10^9]

PREP
Parameters: An array containing arrays of 2 integers.  The second integer is always larger than the first.
Returns: An integer representing the sum of the lengths of the intervals.
Examples: see above.
Pseudo code: Sort the intervals by smallest first number and smallest second number. Loop through the outer array. Check the first number of each array against the array after it.  If the first numbers are equal, change both numbers in that array to 0 (difference of 0).  If the second number is greater than or equal to the first number of the following interval but smaller than the second, replace it with the second number of that interval and remove the other interval. If it is larger than both numbers remove that other interval.

Take the difference of each interval and add them to a total.  Return that value.
*/
function sumIntervals(intervals) {
    let total = 0;
    intervals.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    for (let i = 0; i < intervals.length - 1; i++) {
        if (intervals[i][0] === intervals[i + 1][0]) {
            intervals[i][0] = 0;
            intervals[i][1] = 0;
        } else if (intervals[i][1] >= intervals[i + 1][0]) {
            if (intervals[i][1] <= intervals[i + 1][1]) {
                intervals[i+1][0] = intervals[i][0]
                intervals[i][0] = 0;
                intervals[i][1] = 0;
            } else {
                intervals[i+1][0] = intervals[i][0]
                intervals[i+1][1] = intervals[i][1]
                intervals[i][0] = 0;
                intervals[i][1] = 0;
            } 
        } else {
            total += intervals[i][1] - intervals[i][0];
        }  
    }
    total += intervals[intervals.length - 1][1] - intervals[intervals.length - 1][0];
    return total;
}

console.log(sumIntervals([[1,4],[1, 10],[1, 5]]))
console.log(sumIntervals([[1,4],[7, 10],[3, 5]]))
console.log(sumIntervals([
    [1,2],
    [6, 10],
    [11, 15]
 ]))
console.log(sumIntervals( [
    [1,5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11]
 ])); 