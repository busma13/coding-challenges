/* Find the Vowels

We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]

NOTES

    Vowels in this context refers to: a e i o u y (including upper case)
    This is indexed from [1..n] (not zero indexed!)

PREP
Parameters: A string 
Returns: An array containing the indices of all vowels (a, e, i , o, u, y). Index starts at 1. 
Examples: vowelIndices('Super'); // [2,4], vowelIndices('mmm'); //[]
Pseudo code: Split string into an array of characters.
             Check if the character is a vowel.
             If so, get it's index, add 1, and push it to a new array.
             Return the new array.
*/

function vowelIndices(word){
    const list = [];
    word.split('').forEach((char, idx) => {
        if ('aeiouy'.includes(char.toLowerCase())) {
            list.push(idx + 1);
        }
    });
    return list;
}

console.log(vowelIndices('Super'));
console.log(vowelIndices('mmm'));