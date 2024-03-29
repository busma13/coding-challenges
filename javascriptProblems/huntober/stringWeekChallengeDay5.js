/* String Week Challenge - Day 5

So, I may have bitten off a bit more than I can chew this week. Will you help me out?

My friend has invented a 'Best Cat-Themed Pun of a TV Show Title Ever' award and I promised I'd help her with the submissions. The problem is, I didn't realize just how much help she would need whittling down the submissions to the finalists. Between work, family, and Huntober, I just don't have time to get the final list over to her. Can you help?

Here is a comma-separated list of the submissions:

"The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood"

There are some very strict rules that the pun submissions had to follow. I need to know which of these cat puns made the cut. I promise tomorrow we'll get back to decoding our secret message, and coincidentally, I'm pretty sure the number of these puns that met the criteria will match a key sequence value we'll need tomorrow. Isn't that lucky?
Here are the rules these submissions had to follow:

    No empty spaces at the start or end of the submission (my friend can't stand when people don't follow directions)
    Cannot contain 'dog', 'bark', or 'bone' in any combination of upper or lower case (canine trolling can't be stopped)
    Total length of pun cannot be a multiple of 5 (this includes spaces and punctuation)
    The sum of the charCodes of the 1st and last characters must be odd (my friend's a bit of a character, but she's great once you get to know her)
    Character directly after the middle of the string may not be 'e' (For example the character to check in even-length string center is t, for odd an example would be weird -> 'r')
    Must have an even number of lowercase letters (do not count punctuation or spaces as letters)
    Must have at least 2 capital letters (honestly, I'm a little worried these requirements are too strict)
    Must not contain a capital 'S' (definitely too strict. What does S even have to do with cat puns?)

Send me a DM of the puns that made the cut on Twitter, and go ahead and save the final count to use tomorrow. Thanks!
🕵️ It still looks like Gibberish

If you've started trying to decode this week's message you may be wondering if you're on the right track. Chances are if it still looks like someone mashed the keyboard, you're doing A-OK! Feel free to compare notes!

Anyone want to hazard a guess at what the final message will be?

PREP
Parameters: A string of comma seperated puns.
Returns: An array with all the puns that met the requirements. 
Examples: 
Pseudo code: Create an empty results array.  Convert the input string to an array.  Loop through all of the elements in the array.  Check the following:
    No empty spaces at the start or end of the submission.
    Cannot contain 'dog', 'bark', or 'bone' in any combination of upper or lower case.
    Total length of pun cannot be a multiple of 5.
    The sum of the charCodes of the 1st and last characters must be odd.
    Character directly after the middle of the string may not be 'e' (For example the character to check in even-length string center is t, for odd an example would be weird -> 'r').
    Must have an even number of lowercase letters (do not count punctuation or spaces as letters).
    Must have at least 2 capital letters.
    Must not contain a capital 'S'.
If the string passes all of these tests add it to the results array. Return the 
*/

function allowedPuns(str) {
    let results = []
    let arr = str.split(',')
    let iterator = [1,2,3]
    for (let pun of arr) {
        if (pun[0] === ' ' || pun[pun.length - 1] === ' ') continue
        if (pun.toLowerCase().includes('dog') || pun.toLowerCase().includes('bark') || pun.toLowerCase().includes('bone')) continue
        if (pun.length % 5 === 0) continue
        if ((pun.charCodeAt(0) + pun.charCodeAt(pun.length - 1)) % 2 === 0)continue
        if (pun[Math.ceil(pun.length / 2)] === 'e') continue
        
        let lowerCount = pun.split('').reduce((acc, c) => {
            if (c.charCodeAt(0) > 96 && c.charCodeAt(0) < 123) acc++
            return acc
        },0)
        if (lowerCount % 2 !== 0) continue
        
        let capCount = pun.split('').reduce((acc, c) => {
            if (c.charCodeAt(0) > 64 && c.charCodeAt(0) < 91) acc++
            return acc
        },0)
        if (capCount < 2) continue
        
        if (!pun.split('').every(ch => ch !== 'S')) continue
        results.push(pun)
    }
    return results
}

const puns = "The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood"
console.log(allowedPuns(puns))