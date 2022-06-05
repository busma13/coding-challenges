/* Blood Moon

Alan is going to watch the Blood Moon (lunar eclipse) tonight for the first time in his life. But his mother, who is a history teacher, thinks the Blood Moon comes with an evil intent. The ancient Inca people interpreted the deep red coloring as a jaguar attacking and eating the moon. But who believes in Inca myths these days? So, Alan decides to prove to her mom that there is no jaguar. How? Well, only little Alan knows that. For now, he needs a small help from you. Help him solve the following calculations so that he gets enough time to prove it before the eclipse starts.

https://i.ibb.co/jRd3Z1K/Screenshot-3.png

Three semicircles are drawn on AB, AD, and AF. Here CD is perpendicular to AB and EF is perpendicular to AD.
Task

Given the radius of the semicircle ADBCA, find out the area of the lune AGFHA (the shaded area).

PREP
Parameters: a number that represents the radius of a semicircle.
Returns: a number that is the area of the 'moon' in the picture.
Examples: bloodMoon(0); //0, bloodMoon(3); //2.25,bloodMoon(2); //1
Pseudo code: Use pythagorean theorum to find length AD.
             Divide AD by 2 to get length AE.
             Use pythagorean theorum to find length AF.
             Find area of semicircle AGFA.
             Find area of semicircle AFDEA.
             Find area of triange AFEA.
             Divide area of AFDEA by 2 to get area of AHFEA.
             Subtract area of AFEA from AHFEA to get area AHFA.
             Subtract AHFA from AGFA to get AGFHA.
             ROund to two digits.
             Return AGFHA.
*/

function bloodMoon(r){
    const lengthAD = Math.sqrt(r*r*2);
    const lengthAE = lengthAD / 2;
    const lengthAF = Math.sqrt(lengthAE*lengthAE*2);
    const areaAGFA = Math.PI * (lengthAF / 2)**2 / 2;
    const areaAFDEA = Math.PI * lengthAE**2 / 2;
    const areaAFEA = lengthAE**2 / 2;
    const areaAHFEA = areaAFDEA / 2;
    const areaAHFA = areaAHFEA - areaAFEA;
    let areaAGFHA = areaAGFA - areaAHFA;
    areaAGFHA = Math.round(areaAGFHA * 100) / 100;
    return areaAGFHA;
}

console.log(bloodMoon(0));
console.log(bloodMoon(1));
console.log(bloodMoon(2));
console.log(bloodMoon(3));