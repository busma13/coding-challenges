/* List Filtering

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
Example

filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

PREP
Parameters: An array of non-negative integers and strings.
Returns: A new array that only contains the numbers.
Examples: see above.
Pseudo code: Run the filter method on the list. Filter out anything that isn't of type number. 
*/

function filter_list(l) {
    return l.filter(el => typeof el == 'number');
}

console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,'a','b',0,15]));
console.log(filter_list([1,2,'aasf','1','123',123]));
