/* Regex Count Lowercase Letters

Your task is simply to count the total number of lowercase letters in a string.
Examples

lowercaseCount("abc"); ===> 3

lowercaseCount("abcABC123"); ===> 3

lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

lowercaseCount(""); ===> 0;

lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26
*/

function lowercaseCount(str){
    const arr = str.match(/[a-z]/g); //if no matches str.match() returns null.
    return (arr ? arr.length : 0); //return 0 if arr is null
}