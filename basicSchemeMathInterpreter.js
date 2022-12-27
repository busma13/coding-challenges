/* Basic Scheme Math Interpreter

Your challenge: create a function that interprets simple scheme-like math commands and returns the value resulting from the operation. We will only be working with the four main math operators (+ - * /). The main difference between these commands and actual scheme commands is that scheme commands only accept two arguments while these commands accept infinitely many arguments so as to avoid having to nest functions with like operators.

Input: string, such as '(+ 4 3)'
Output: number
Constraints: 0-15 arguments, numbers from -15 to 15 (when dividing, those will never be 0)
Edge Cases: don't forget that no arguments results in either 0 or 1 for +/- and * respectively

Syntax consists of an open parenthesis, a math operator, a space, space-separated arguments, and a close parenthesis. Example: (+ 3 4). All inputs will be valid.

If no arguments are provided, return the following (You won't get '(/)'):

'(+)'         // 0
'(-)'         // 0
'(*)'         // 1

Examples of valid commands:

'(+ 3 4)'     // 7
'(- 3 4)'     // -1
'(* 3 4)'     // 12
'(/ 3 4)'     // 0.75
'(+ 4 4 -4)'  // 4

*/

// function scheme(cmd) {
//     cmd = cmd.slice(1, -1);
//     const args = cmd.split(' ');
//     let expression = '';
//     if (args.length === 1) {
//         switch (args[0]) {
//             case '+':
//                 expression += 0;
//                 break;
//             case '-':
//                 expression += 0;
//                 break;
//             case '*':
//                 expression += 1;
//                 break;
//         }
//     }
//     for (let i = 1; i < args.length; i++) {
//         expression +=  `${args[0]}${args[i]}`;
//     }
//     expression = expression.slice(1)
//     return eval(expression);
// }

function scheme(cmd) {
    cmd = cmd.slice(1, -1);
    let args = cmd.split(' ');
    const operator = args.shift();
    args = args.map(Number);
    let result;
    switch (operator) {
        case '+':
            result = args.reduce((acc, c) => acc + c, 0);
            break;
        case '-':
            if (args.length === 0) {
                result = 0;
            } else {
                result = args.reduce((acc, c) => acc - c)
            }
            break;
        case '*':
            result = args.reduce((acc, c) => acc * c, 1)
            break;
        case '/':
            result = args.reduce((acc, c) => acc / c)
            break;
    }
    return result;
}

console.log(scheme('(+)'), 0);
console.log(scheme('(-)'), 0);
console.log(scheme('(*)'), 1);
console.log(scheme('(+ 3 4)'), 7);
console.log(scheme('(- 3 4)'), -1);
console.log(scheme('(* 3 4)'), 12);
console.log(scheme('(/ 3 4)'), 0.75);
console.log(scheme('(+ 4 4 -4)'), 4);
console.log(scheme('(- 12)'), 12);
