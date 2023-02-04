/* The wide mouthed frog

The wide-mouth frog is particularly interested in the eating habits of other creatures.

He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

When he meets the alligator, it then makes a tiny mouth.

Your goal in this kata is to complete the 'mouth_size' method. This method takes one argument 'animal' which corresponds to the animal encountered by the frog. If this one is an 'alligator' (case-insensitive) return 'small' otherwise return 'wide'.

PREP
Parameters: a string representing an animal.
Returns: a string - either 'wide' or 'small'.
Examples: mouthSize('alligator'); // small, mouthSize('Alligator'); // small, mouthSize('dog'); //wide
Pseudo code: convert argument string to lower-case.
             compare argument to string 'alligator'
             return 'small' if argument matches 'alligator' or 'wide' otherwise.
*/

function mouthSize(animal){
    return animal.toLowerCase() === 'alligator' ? 'small' : 'wide';
}

console.log(mouthSize('alligator'));
console.log(mouthSize('Alligator'));
console.log(mouthSize('dog'));