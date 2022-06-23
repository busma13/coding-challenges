/* Create phone number

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
Example

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!

PREP
Parmaeters: An array of 10 integers between 0 and 9.
Returns: A string with the following format: (123) 456-7890.
Examples: createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // "(123) 456-7890"
          createPhoneNumber([5, 5, 5, 4, 5, 6, 5, 4, 3, 2]) // "(555) 456-5432"
Pseudo code: 
*/

function createPhoneNumber([a,b,c,d,e,f,g,h,i,j]){
  return `(${a}${b}${c}) ${d}${e}${f}-${g}${h}${i}${j}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(createPhoneNumber([5, 5, 5, 4, 5, 6, 5, 4, 3, 2]));