/* 6095. Strong Password Checker II

A password is said to be strong if it satisfies all the following criteria:

It has at least 8 characters.
It contains at least one lowercase letter.
It contains at least one uppercase letter.
It contains at least one digit.
It contains at least one special character. The special characters are the characters in the following string: "!@#$%^&*()-+".
It does not contain 2 of the same character in adjacent positions (i.e., "aab" violates this condition, but "aba" does not).
Given a string password, return true if it is a strong password. Otherwise, return false.

 

Example 1:

Input: password = "IloveLe3tcode!"
Output: true
Explanation: The password meets all the requirements. Therefore, we return true.
Example 2:

Input: password = "Me+You--IsMyDream"
Output: false
Explanation: The password does not contain a digit and also contains 2 of the same character in adjacent positions. Therefore, we return false.
Example 3:

Input: password = "1aB!"
Output: false
Explanation: The password does not meet the length requirement. Therefore, we return false.
 

Constraints:

1 <= password.length <= 100
password consists of letters, digits, and special characters: "!@#$%^&*()-+".
*/

/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function(password) {
    arr = password.split('');
    let lower = false;
    let upper = false;
    let digit = false;
    let special = false;
    let notAdjacent = true;
    
    if (password.length < 8) {
        return false;
    }
    arr.forEach((c,i)  => {
        if ('abcdefghijklmnopqrstuvwxyz'.includes(c)) {
            lower = true;
        }
        if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(c)) {
            upper = true;
        } 
        if ('0123456789'.includes(c)) {
            digit = true;
        }
        if ('!@#$%^&*()-+'.includes(c)) {
            special = true;
        }
        if (i !== 0) {
            if (c === arr[i-1]) {
                notAdjacent = false;
            }
        }
    })

    return (lower && upper && digit && special && notAdjacent);
};

console.log(strongPasswordCheckerII('IloveLe3tcode!'))
console.log(strongPasswordCheckerII('Me+You--IsMyDream'))
console.log(strongPasswordCheckerII('1aB!'))
console.log(strongPasswordCheckerII('0Aa!a!a!'))