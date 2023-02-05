/* Get Number From String

Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

getNumberFromString(s)
*/

function getNumberFromString(s) {
    return parseInt(s.split('').filter(c => /\d/.test(c)).join(''));
}

//return +s.replace(/\D/g, "");
//+ converts to number
// /\D/g finds all non digits globally