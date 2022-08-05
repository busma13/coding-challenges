/* Isograms

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)

PREP
Parameters: A string of only letters.
Returns: True if an isogram, false if not.
Examples: isIsogram("hello"); //false, isIsogram("bye"); //true
Pseudo code: Create an empty chech string. Convert parameter string to lowercase.  Split parameter string into an array of letters. Loop through the array. Check if that letter is in the check string. If it is return false. Otherwise add that letter to the check string.  If the loop ends return true.
*/

function isIsogram(str){
    let check = '';
    let arr = str.toLowerCase().split('')
    for (let i = 0; i < arr.length; i++) {
        if (check.includes(arr[i])){
            return false;
        } else {
            check += arr[i];
        }
    };
    return true;
}

console.log(isIsogram(""))
console.log(isIsogram("abc"))
console.log(isIsogram("aa"))
console.log(isIsogram("aA"))

//return new Set(str.toUpperCase()).size == str.length;