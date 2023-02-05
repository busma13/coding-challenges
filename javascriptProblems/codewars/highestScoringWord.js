/* Highest Scoring Word

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x){
    let arr = x.split(' ');
    let count = arr.map(w => w.split('').reduce((acc, c) => acc + (c.charCodeAt(0)-96), 0));
    let highestIdx = count.reduce((acc, c, i, arr) => {
        console.log('prev value: ', arr[i - 1]);
        if (c > arr[acc]) {
            acc = i;
        }
        console.log(acc);
        return acc;
    }, 0);
    console.log('highestIdx: ', highestIdx)
    return arr[highestIdx];
}

high('man i need a taxi up to ubud') //taxi