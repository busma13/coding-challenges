/* Phone Words

Given a string of numbers, you must perform a method in which you will translate this string into text, based on the below image:

For example if you get "22" return "b", if you get "222" you will return "c". If you get "2222" return "ca".

Further details:

    0 is a space in the string.
    1 is used to separate letters with the same number.
    always transform the number to the letter with the maximum value, as long as it does not have a 1 in the middle. So, "777777" -->  "sq" and "7717777" --> "qs".
    you cannot return digits.
    Given a empty string, return empty string.
    Return a lowercase string.

Examples:

"443355555566604466690277733099966688"  -->  "hello how are you"
"55282"                 -->  "kata"
"22266631339277717777"  -->  "codewars"
"66885551555"           -->  "null"
"833998"                -->  "text"
"000"                   -->  "   "

*/
function phoneWords(stringOfNums) {
    let msg = '';
    let count = 0;
    const letterList = [' ', '','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
    for (let i = 0; i < stringOfNums.length; i++) {
        if (stringOfNums[i] === '0') {
            msg += ' ';
            continue;
        }
        if (stringOfNums[i] === '1') {
            continue;
        }
        if (stringOfNums[i] !== stringOfNums[i + 1]){
            msg += letterList[stringOfNums[i]][count];
            count = 0;
        } else {
            if (stringOfNums[i] === '7' || stringOfNums[i] === '9') {
                if (count === 3) {
                    msg += letterList[stringOfNums[i]][count];
                    count = 0;
                } else {
                    count++;
                    continue;
                }
            } else {
                if (count === 2) {
                    msg += letterList[stringOfNums[i]][count];
                    count = 0;
                } else {
                    count++;
                    continue;
                }
            }
        }
    }
    return msg;
}

console.log(phoneWords("443355555566604466690277733099966688"), "hello how are you");
console.log(phoneWords("55282"), "kata");
console.log(phoneWords("22266631339277717777"), "codewars");
console.log(phoneWords("66885551555"), "null");
console.log(phoneWords("833998"), "text");
console.log(phoneWords("000"), "   ");