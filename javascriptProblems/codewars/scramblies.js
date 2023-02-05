/* Scramblies

Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

    Only lower case letters will be used (a-z). No punctuation or digits will be included.
    Performance needs to be considered.

Examples

scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False

PREP
Parameters: Two strings of lowercase letters (str1 and str2).
Returns: True of false.
Examples: See above.
Pseudo code: Create a variable idx and set it to -1. Covert both argument strings to arrays and sort alphabetically.  Loop through str2. For each letter find the index where it appears in str1 starting form index idx + 1. If it's -1 (not found) return false. Else store the index where it was found in idx.  If the loop finishes return true.
*/

function scramble(str1, str2) {
    if (str1.length < str2.length) return false
    let idx = -1
    arr1 = str1.split('').sort()
    arr2 = str2.split('').sort()
    console.log(arr1, arr2)
    for (let i = 0; i < arr2.length; i++) {
        let res = arr1.indexOf(arr2[i], idx + 1)
        idx = res
        if (res === -1) return false
    }
    return true
}

console.log(scramble('rkqodlw', 'world'))
console.log(scramble('cedewaraaossoqqyt', 'codewars'))
console.log(scramble('katas', 'steak'))

// times out on long strings