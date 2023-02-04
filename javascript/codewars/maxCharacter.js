/* Max Character

Given a string of characters, return the character that appears the most often.

describe("Max Character", () => {
 it("Should return max character", () => {
  assert.equal(max("Hello World!"), "l");
 });
});

No String or Array Methods (well brute force it first, but then no methods)! 
*/

function maxCharacter(str) {
    let map = {};
    for (let char of str) {
        if (map[char]) {
            map[char]++;
        } else {
            map[char] = 1;
        }
    }
    let max = 0;
    let maxKey = '';
    for (let key in map) {
        if (map[key] > max) {
            max = map[key];
            maxKey = key;
        }
    }
    console.log(map)
    return maxKey;
}

console.log(maxCharacter("Hello World!"), 'l')
console.log(maxCharacter("Hello World! I added some oooooooos"), 'o')
console.log(maxCharacter("Hello World! I added some pppppps"), 'p')