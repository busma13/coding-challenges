/* Persistent Bugger

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)

PREP
Parameters: A positive integer (num).
Returns: A positive integer.
Examples: persistence(5); //0, persistence(25); //2, persistence(643); //3
Pseudo code: Check if num is 1 digit long.  If so return 0.  If not create a while loop that runs until num is 1 digit long and a counter set to 0. In the loop multiply the digits of num and assign it to num.  Add one to counter.  When the loop exits return counter.
*/

function persistence(num) {
    let counter = 0;
    while (num.toString().length > 1) {
        num = num.toString()
        let temp = 1;
        for (let i = 0; i < num.length; i++) {
            temp *= num[i];
        }
        num = temp;
        counter++;
    }
    return counter;
}

console.log(persistence(5));
console.log(persistence(10));
console.log(persistence(25));
console.log(persistence(229));