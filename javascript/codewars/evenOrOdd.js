/* Even Or Odd

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

PREP
Parameters: An integer.
Returns: The string 'Even' or the string 'Odd'.
Examples: even_or_odd(2); // 'Even'
Pseudo code: check if number is divisible by 2.
             If true return even, if false return odd.
*/

function even_or_odd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
}

console.log(even_or_odd(2));
console.log(even_or_odd(5));
console.log(even_or_odd(-2));