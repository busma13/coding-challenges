/* Sum of Odd Numbers

Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8

PREP
Parameters: A number 'n' that represents the row of the triangle.
Returns: A number that is the sum of the numbers in the nth row of the triangle.
Examples: rowSumOddnumbers(3);//27
Pseudo code: Looking at the first few rows, there is a pattern. The sum of each row is the number of elements in the row to the third power. The argument 'n' is not only the row number, but the number of elements in the row, so all we need to do is multiply 'n' to the third power.
*/

function rowSumOddNumbers(n) {
    return n**3;
}

console.log(rowSumOddNumbers(1))
console.log(rowSumOddNumbers(5))
console.log(rowSumOddNumbers(42))