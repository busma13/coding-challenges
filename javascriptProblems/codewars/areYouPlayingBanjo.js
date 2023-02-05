/* Are You Playing Banjo?

Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"

Names given are always valid strings.
PREP
Parameters: a valid string.
Returns: Parameter string + " plays banjo" if the string starts with 'R' or 'r'.  Parameter string + " does not play banjo" otherwise.
Examples: areYouPlayingBanjo('Tom'); //Tom does not play banjo
          areYouPlayingBanjo('Robert'); //Robert plays banjo 
Pseudo code: Check if the name parameter starts with 'r' or 'R'.
             If true return name + " plays banjo".
             If false return name + " does not play banjo".
*/

function areYouPlayingBanjo(name) {
    return name.startsWith('r') || name.startsWith('R') ? name + " plays banjo" : name + " does not play banjo";
}

console.log(areYouPlayingBanjo('Tom')); //Tom does not play banjo
console.log(areYouPlayingBanjo('Robert')); //Robert plays banjo 