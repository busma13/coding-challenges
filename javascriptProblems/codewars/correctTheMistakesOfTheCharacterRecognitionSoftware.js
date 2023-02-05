/* Correct the mistakes of the character recognition software

Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

    S is misinterpreted as 5
    O is misinterpreted as 0
    I is misinterpreted as 1

The test cases contain numbers only by mistake.

PREP
Parameters: A string.
Returns: The same string with 5, 0, and 1 replaced with S, O, and I respectively.
Examples: correct('L0NDON');// 'LONDON', correct("51NGAP0RE"); //"SINGAPORE"
Pseudo code: Run the replaceAll() method on the string three times. Once for 5/S, once for 0/O and once for 1/I. return the string after.
*/

function correct(string) {
    return string.split('').map(ch => {
        if (ch === '5') return 'S'
        if (ch === '0') return 'O'
        if (ch === '1') return 'I'
        return ch
    }).join('')
}

console.log(correct('L0NDON'))
console.log(correct('DUBL1N'))
console.log(correct('51NGAP0RE'))
console.log(correct('BUDAPE5T'))
console.log(correct('PAR15'))

// string = string.replaceAll('5','S')
// string = string.replaceAll('0','O')
// string = string.replaceAll('1','I')
// return string