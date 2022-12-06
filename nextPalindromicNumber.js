/* Next Palindromic Number

There were and still are many problem in CW about palindrome numbers and palindrome strings. We suposse that you know which kind of numbers they are. If not, you may search about them using your favourite search engine.

In this kata you will be given a positive integer, val and you have to create the function next_pal()(nextPal Javascript) that will output the smallest palindrome number higher than val.

Let's see:

For Javascript
nextPal(11) == 22

nextPal(188) == 191

nextPal(191) == 202

nextPal(2541) == 2552

You will be receiving values higher than 10, all valid.

Enjoy it!!
*/

function nextPal(val) {
    let numStr = val.toString();
    let mid = Math.floor(numStr.length / 2);
    let firstHalf = numStr.slice(0, mid);
    let secondHalf = numStr.length % 2 === 0 ? numStr.slice(mid) : numStr.slice(mid + 1);
    let firstHalfReversed = firstHalf.split('').reverse().join('');
    
    if (Number(firstHalfReversed) > Number(secondHalf)) {
        if (numStr.length % 2 === 0) {
            return Number(firstHalf + firstHalfReversed); 
        } else {
            return Number(firstHalf + numStr[mid] + firstHalfReversed);
        }
    } else {
        if (numStr.length % 2 === 0) {
            firstHalf = (Number(firstHalf) + 1).toString();
            firstHalfReversed = firstHalf.split('').reverse().join(''); 
            return Number(firstHalf + firstHalfReversed); 
        } else {
            if (numStr[mid] == 9) {
                firstHalf = (Number(firstHalf) + 1).toString();
                firstHalfReversed = firstHalf.split('').reverse().join(''); 
                return Number(firstHalf + 0 + firstHalfReversed);
            } else {
                let newMid = (Number(numStr[mid]) + 1).toString();
                return Number(firstHalf + newMid + firstHalfReversed);
            }
        }
    }
}

console.log(nextPal(10), 11)
console.log(nextPal(11), 22)
console.log(nextPal(12), 22)
console.log(nextPal(188), 191)
console.log(nextPal(191), 202)
console.log(nextPal(251), 252)
console.log(nextPal(2541), 2552)
console.log(nextPal(2534), 2552)
console.log(nextPal(2575), 2662)
console.log(nextPal(25575), 25652)
