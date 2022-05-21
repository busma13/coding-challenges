/* Remove First And Last Character

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
PREP
Parameters: a string of at least 2 characters
Returns: a string with the first and last characters removed.
Examples: removeChar('str'); // t, removeChar('Hello everyone!'); //ello everyone
Pseudo code: Take the string parameter and take a slice of it.
             Start the slice at index 1 to remove the first character.
             End the slice at index (str.length - 1). This is the last character. Slice will retrun every character up to but excluding this one.
             Return the string.
*/

function removeChar(str){
    return str.slice(1, str.length - 1);
};

//could have used slice(1, -1);  Slice accepts negative indexes!!!
console.log(removeChar('str'));
console.log(removeChar('Hello world!'));