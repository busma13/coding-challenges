/* Fizz Buzz

Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.
*/
// Input: number, integer, positive
// Output: return undefined. print out number, 'Fizz', 'Buzz', or 'FizzBuzz'
// 3 -> 1, 2, 'Fizz'
// 15 -> 1, 2, 'Fizz', 4 ,'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz'

// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('FizzBuzz')
//         } else if (i % 5 === 0) {
//             console.log('Buzz')
//         } else if (i % 3 === 0) {
//             console.log('Fizz')
//         } else {
//             console.log(i)
//         }
//     }
// }

// fizzBuzz(3)
// console.log(1, 2, 'Fizz')
// fizzBuzz(15)
// console.log(1, 2, 'Fizz', 4 ,'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz')


const fizzBuzz = n => {
    let str = ''
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            str += ', FizzBuzz'
        } else if (i % 5 === 0) {
            str += ', Buzz'
        } else if (i % 3 === 0) {
            str += ', Fizz'
        } else {
            str += ', ' + i 
        }
    }
    str = str.slice(2)
    console.log(str)
}

fizzBuzz(3)
console.log("1, 2, Fizz")
fizzBuzz(15)
console.log("1, 2, Fizz, 4 ,Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz")