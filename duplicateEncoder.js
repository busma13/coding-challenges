/* Duplicate Encoder

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Notes

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

PREP
Parameters: A string.
Returns: Another string of only "(" and ")".
Examples: duplicateEncode("word");//'((((', duplicateEncode("Success");//')())())'
Pseudo code: Create an empty test string and empty result string. Convert input string to lowercase.  Loop through each character of the input string. On each loop check if the character is repeated later in the string or in the test string. If so add ")" to the result string. If not add "(" to the result string.  Add the character to the test string. When the loop is done return the result string.
*/

// function duplicateEncode(word){
//     let testStr = '';
//     let resultStr = '';
//     word = word.toLowerCase();
//     for (let i = 0; i < word.length; i++) {
//         if (word.substring(i + 1).includes(word[i]) || testStr.includes(word[i])){
//             resultStr += ')';
//         } else {
//             resultStr += '(';
//         }
//         testStr += word[i];
//     }
//     return resultStr;
// }

function duplicateEncode(word) {
    //convert string to lowercase
    wordArr = word.toLowerCase().split('')
    let hashmap = wordArr.reduce((map, letter)=>{
        if (!map[letter]) {
            map[letter] = 0
        }
        map[letter]++
        return map
    }, {})

    let resultString = ''
    for (letter of wordArr) {
        resultString += hashmap[letter] > 1 ? ')' : '('
    }

    return resultString
}
console.log(duplicateEncode("word")); //'(((('
console.log(duplicateEncode("wwoorrdd")); //'))))))))'
console.log(duplicateEncode('Success')); //')())())'

/*
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
*/