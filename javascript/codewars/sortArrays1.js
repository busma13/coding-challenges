/* Sort Arrays - 1

Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.

PREP
Parameters: An array.
Returns: An array sorted in lexigraphical order.
Examples: sortme(['c','b','a']);//['a','b','c']
Pseudo code: Use javascript's built in sort method to sort the array.  Return the array.
*/

function sortme(names) {
    return names.sort();
}

console.log(sortme(['c','b','a']))