/* Multiplication Table For Number

Your goal is to return multiplication table for number that is always an integer from 1 to 10.

For example, a multiplication table (string) for number == 5 looks like below:

1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50

P. S. You can use \n in string to jump to the next line.

Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

PREP
Parameters: an integer number >= 1 and <= 10.
Returns: a string that is the multiplication table of the input number up to 10.
Examples: multiTable(5); // 1 * 5 = 5
                            2 * 5 = 10
                            3 * 5 = 15
                            4 * 5 = 20
                            5 * 5 = 25
                            6 * 5 = 30
                            7 * 5 = 35
                            8 * 5 = 40
                            9 * 5 = 45
                            10 * 5 = 50 
Pseudo code: Declare a string variable and assign it a value of ''.
             Create a for loop that goes from 1 to 10.
             For each loop: Calculate i * parameter number.
                            Show that math in a string and add it to our string variable.
             Remove '\n' from the last line of string variable.
             return our string variable.

*/

function multiTable(number) {
    let result = '';
    for(let i = 1; i <= 10; i++) {
        result += `${i} * ${number} = ${i * number}\n`;
    }
    return result.slice(0, -1); //remove \n from last line to pass the test
}

console.log(multiTable(4));
console.log(multiTable(8));