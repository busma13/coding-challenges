/* Take A Ten Minute Walk
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

    Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

PREP
Parameters: An array of strings: either 'n', 'e', 's', or 'w'.
Returns: True or false boolean.
Examples: isValidWalk(['n', 'e', 's', 'w', 'n', 'e', 's', 'w', 'n', 's']);//true, isValidWalk(['n', 'e', 's', 'w']);//false, isValidWalk(['n', 'e', 's']);//false
Pseudo code: First check if the walk is ten blocks long (array has 10 elements).  If false return false. If true, check if the walk returns you to your starting point.  Create a coordinates array of [0 ,0]. Loop through the walk array.  If the string is 'n' add 1 to the 'y' coordinate. If the string is 's' subtract 1 from the 'y' coordinate. If the string is 'e' add 1 to the 'x' coordinate. If the string is 'w' subtract 1 from the 'x' coordinate.  When the loop is over check if the coordinates array is equal to [0, 0].  If false return false. Otherwise return true.
*/

function isValidWalk(walk) {
    if (walk.length !== 10) return false;
    let start = [0, 0];
    let coords = [0, 0];
    for (let i = 0; i < 10; i++) {
        switch (walk[i]) {
            case 'n':
                coords[1] += 1;
                break;
            case 's':
                coords[1] -= 1;
                break;
            case 'e':
                coords[0] += 1;
                break;
            case 'w':
                coords[0] -= 1;
                break;
        }
    }
    return JSON.stringify(coords) == JSON.stringify(start); 
}

console.log(isValidWalk(['n', 'e', 's', 'w', 'n', 'e', 's', 'w', 'n', 's']));
console.log(isValidWalk(['n', 'e', 's', 'w', 's', 'e', 's', 'w', 'n', 's']));
console.log(isValidWalk(['n', 'e', 's', 'w']));
console.log(isValidWalk(['n', 'e', 's']));