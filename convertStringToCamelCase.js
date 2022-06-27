/* Convert String to Camel Case

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

Parameters: a string.
Returns: a string in camel case instead of with dashes or dots.
Examples: toCamelCase("The_Stealth_Warrior"); //"TheStealthWarrior", toCamelCase("the_stealth_warrior"); //"theStealthWarrior"
Pseudo code: Convert string to array of characters.
             Loop through array and find dashes or underscores.
             Remove them.
             Convert next character to upper case.
             Convert array to string.
             Return string.
*/

function toCamelCase(str){
    return str.split('').map((ch, idx, arr) => {
        if (ch === '-' || ch === '_') {
            arr[idx + 1] = arr[idx + 1].toUpperCase();
            return '';
        }
        return ch;
    }).join('');
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase(" "));
console.log(toCamelCase("A-B-C"));