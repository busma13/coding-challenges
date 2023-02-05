/* Who likes it?

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Note: For 4 or more names, the number in "and 2 others" simply increases.

PREP
Parameters: An array of strings. It can be empty.
Returns: A string.
Examples: likes([]); //"no one likes this", likes(["Max", "John", "Mark"]); //"Max, John and Mark like this"
Pseudo code: Find the length of the array.
             If names.length is 0 return "no one likes this".
             if it is 1 return the first element + "likes this".
             If it is 2 return first element + "and" + second element + "like this".
             If it is 3 return first element, second element + "and" + third element + "like this".
             If four or more return first element, second element + "and" + length - 2 + "others like this".
*/

function likes(names) {
    if (names.length === 0) {
        return "no one likes this";
    } else if (names.length === 1) {
        return `${names[0]} likes this`;
    } else if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`;
    } else if (names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else {
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
}

console.log(likes([])); //'no one likes this'
console.log(likes(['Peter'])); //'Peter likes this'
console.log(likes(['Jacob', 'Alex'])); //'Jacob and Alex like this'
console.log(likes(['Max', 'John', 'Mark'])); //'Max, John and Mark like this'
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])); //'Alex, Jacob and 2 others like this'
