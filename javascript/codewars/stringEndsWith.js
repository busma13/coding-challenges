/* String Ends With?

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

PREP
Parameters: Two strings.
Returns: True or false.
Examples: solution('abcde', 'cde'); // true, solution('abcde', 'abc'); // false
Pseudo code: Reverse both strings.
             Loop through the 2nd string and compare each character to the character in the same position of the first string.
             If they don't match return false.
             If they match continue the loop until all characters have been checked.
             If we get to the end of the loop return true.
*/

function solution(str, ending){
  revStr = str.split('').reverse().join('');
  revEnding = ending.split('').reverse().join('');
  for (let i = 0; i < revEnding.length; i++) {
    if (revEnding[i] !== revStr[i]) return false;
  }
  return true;
}

console.log(solution('abc', 'bc'));
console.log(solution('abc', 'd'));