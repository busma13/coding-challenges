/* Counting Duplicates

Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

PREP
Parameters: A string containing uppercase and lowercase letters and digits.
Returns: The count of characters that occur more than once (case insensitive).
Examples: duplicateCount('abcde'); //0, duplicateCount('aA11'); //2
Pseudo code: Convert characters in input string to lowercase. Convert input string into an array of characters. Loop through array and make a count of each character. Return the number of characters with a count of 2 or more. 
*/

function duplicateCount(text){
    let obj = text
                .toLowerCase()
                .split('')
                .reduce((obj, ch) => {
                    if(!obj[ch]) {
                        obj[ch] = 0;
                    }
                    obj[ch]++;
                    return obj;
                }, {});
    let sum = Object
                .values(obj)
                .reduce((acc, c) => {
                    if (c > 1) acc++;
                    return acc;
                }, 0);
    return sum;
}

console.log(duplicateCount('ABBA'))
console.log(duplicateCount('aabCCdEEEefGg335567'))