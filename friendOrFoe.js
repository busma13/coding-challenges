/* Friend or Foe?

Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

Note: keep the original order of the names in the output.

PREP
Parameters: An array of strings.
Returns: An array of strings.
Examples: friend(["Bob", "John", "Jim", "Lisa"]); //["John", "Lisa"]
Pseudo code: Use the filter method on the input array. Filter out any word that does not have a length of 4. Return the filtered array.
*/

function friend(friends){
    return friends.filter(name => name.length === 4);
}

console.log(friend(["Bob", "John", "Jim", "Lisa"]));