/* Total Amount of Points

Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

    if x > y: 3 points
    if x < y: 0 point
    if x = y: 1 point

Notes:

    there are 10 matches in the championship
    0 <= x <= 4
    0 <= y <= 4

PREP
Parameters: An array of 10 strings in the following format: 'x:y'.
Returns: An integer that is the total points of the 10 matches.
Examples: points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']);//30
Pseudo code: Use the reduce method to loop through the array. Inside reduce check whether the first number is larger than the second.  If so add 3. If equal add one.  If less add 0. Return the sum of the reduce method.
*/

function points(games) {
  return games.reduce((acc,c) => {
    if (c[0] > c[2]) return acc + 3;
    if (c[0] == c[2]) return acc + 1;
    return acc;
  },0)
}

console.log(points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']));
console.log(points(['1:1','2:2','3:3','4:4','2:2','3:3','4:4','3:3','4:4','4:4']))
console.log(points(['0:1','0:2','0:3','0:4','1:2','1:3','1:4','2:3','2:4','3:4']))