/* Race Ceremony

The national go-kart racing competition is taking place in your local town and you've been called for building the winners podium with the available wooden blocks. Thankfully you are in a wood-rich area, number of blocks are always at least 6.

Remember a classic racing podium have three platforms for first, second and third places. First place is the highest and second place is higher than third. Also notice that platforms are arranged as 2nd - 1st - 3rd.

The organizers want a podium that satisfies:

    The first place platform has the minimum height posible
    The second place platform has the closest height to first place
    All platforms have heights greater than zero.

Task

Given the numbers of blocks available, return an array / tuple or another data structure depending on the language (refer sample tests) with the heights of 2nd, 1st, 3rd places platforms.
Examples (input -> output)

11 ->   [4, 5, 2]
6  ->   [2, 3, 1]
10 ->   [4, 5, 1]

PREP
Parameters: A number representing how many blocks are available.
Returns: An array of 3 numbers representing the blocks in platform 2, 1, and 3.
Examples: see above.
Pseudo code: Create an array with values 2, 3, and 1.  This is a platform with the minimum number of blocks. Create a loop that runs from i = 7 to i = 'blocks'. Add to the first place platform, then the second, then the third until you are out of blocks.  Use % to determine which platmform to add to next.
*/

function racePodium(blocks) {
    if (blocks === 6) return [2, 3, 1];
    if (blocks === 7) return [2, 4, 1];
    if (blocks === 8) return [3, 4, 1]; 
    let arr = [3, 4, 1];
    for (let i = 9; i <= blocks; i++) {
        if (arr[2] + 1 < arr[0]) {
            arr[2]++;
        } else {
            arr[2]--;
            arr[1]++;
            arr[0]++;

        }
    }
    return arr;
}

console.log(racePodium(6));
console.log(racePodium(7));
console.log(racePodium(8));
console.log(racePodium(9));
console.log(racePodium(10));
console.log(racePodium(11));
console.log(racePodium(12));
console.log(racePodium(13));
console.log(racePodium(100000));