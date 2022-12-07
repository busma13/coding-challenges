/* How Many Arguments

Create a function called args_count that returns the number of arguments provided.

args_count(1, 2, 3) -> 3
args_count(1, 2, 3, 10) -> 4

*/

// function args_count(...args) {
//     return args.length;
// }

function args_count() {
    return arguments.length;
}

console.log(args_count(1,2,3), 3)
console.log(args_count(1,2,3,10), 4)