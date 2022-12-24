/* Remove the Parentheses

In this kata you are given a string for example:

"example(unwanted thing)example"

Your task is to remove everything inside the parentheses as well as the parentheses themselves.

The example above would return:

"exampleexample"

Notes

    Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
    There can be multiple parentheses.
    The parentheses can be nested.
*/

function removeParentheses(s){
    let openStack = [];
    let resultArr = s.slice().split('');
    let i = 0;
    while (i < s.length) {
        if (s[i] === '('){
            openStack.push(i);
            i++;
        } else if (s[i] === ')') {
            let start = openStack.pop();
            let end = i - start + 1;
            let sub1 = s.slice(0, start);
            let sub2 = s.slice(i + 1);
            s = sub1 + sub2;
            i = start;
        } else {
            i++;
        }
    }
    return s;
}

console.log(removeParentheses("example(unwanted thing)example"), "exampleexample")
console.log(removeParentheses("a (bc d)e"), "a e")
console.log(removeParentheses("a(b(c))"), "a")