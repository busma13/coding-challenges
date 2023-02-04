/* Your Order, PLease

Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
Examples

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

PREP
Parameters: a string. Can be empty
Returns: a string where the words are ordered by which number they contain.
Examples: order("is2 Thi1s T4est 3a" ); //"Thi1s is2 3a T4est"
Pseudo code: Split string into array of words.
             Loop through array and check each word for a digit.
             Add that word to an object with the digit as the key.
             Create a for loop the length of our array. i starts at 1.
             On each loop grab the value at key i and add it to a string.
             Return the string.
             */

function order(words) {
    if (words === '') return '';
    let str = '';
    const map = {};
    const arr = words.split(' ');
    arr.forEach(el => {
        let digit = el.split('').find(ch => /\d/.test(ch));
        map[digit] = el;
    });
    for (let i = 1; i <= arr.length; i++) {
        str += map[i] + ' ';
    }
    return (str.trim());
}

console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
console.log(order(''))