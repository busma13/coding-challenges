/* Do I Get A Bonus?

It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).

PREP
Parameters: An integer (salary) and a boolean (bonus).
Returns: A string representing the total pay the person received (salary + bonus) prefixed with £.
Examples: bonusTime(10000, true); // '£100000', bonusTime(78, false); // '£78'
Pseudo code:  If bonus is true concatinate '£' and salary * 10 and return the string, otherwise return '£' + salary.
*/

function bonusTime(salary, bonus) {
    return bonus ? '£' + salary * 10 : '£' + salary    
}

console.log(bonusTime(10000, true))
console.log(bonusTime(10000, false))