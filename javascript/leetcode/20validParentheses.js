//input - a string containing only (){}[].
//output true or false

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    if (s.length % 2 !== 0) return false
    let arr = s.split('')
    const lefts = '{(['
    const matches = {')':'(', '}':'{', ']':'['}
    let unmatched = []
    
    for (let i = 0; i <= arr.length; i++) {
        if (lefts.includes(arr[i])) {
            unmatched.push(arr[i])
        } else {
            if (matches[arr[i]] === unmatched[unmatched.length - 1]) {
                unmatched.pop()
            } else {
                return false
            }
        }
    } 
    return true
};

console.log(isValid('()'), true)
console.log(isValid('(){}[]'), true)
console.log(isValid('(]'), false)
console.log(isValid('({})'), true)