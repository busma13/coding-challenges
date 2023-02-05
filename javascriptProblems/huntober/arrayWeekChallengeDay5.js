/* Array Week Challenge - Day 5

Have you ever seen something at the store and thought to yourself, "I could make that myself"? If you have, then you may have noticed that sometimes just because we can do a thing ourselves, it might not be the best idea.

Sure, sometimes your Do It Yourself version is perfection and everything you could've dreamed of, but not always. Sometimes the item you could've bought cost less than the supplies you ended up buying to make it yourself, sometimes the store item had features you couldn't DIY or the quality was much better than what you ended up with. It's not uncommon.

If you've not had an opportunity to learn this life lesson yet, or if you haven't transferred that lesson over to your code yet, don't despair! You're about to learn.

Today your challenge is 2-parts: first, the DIY, and then the 'store-bought'.

    Please create a function that will take in an array like we've been working with all week (X-inner arrays of X-primitive values each) and shuffle it up in place. The inner primitive values can move to any of the inner arrays, but the length of those inner arrays must always remain X. Other than that, shuffle away! Do your best to have a thorough, random shuffle in a single call of your function.

For example:

myArray = [[1,2,3],[4,5,6],[7,8,9]]
// shuffle shuffle
=> [[8,3,5],[2,4,9],[6,7,1]]

Don't move on to part 2 until you've done part 1!

    You're probably feeling pretty good about your shuffle function and I'm betting it's amazing. How long did it take? Your second task today is to google how to shuffle a 2D array and read about why some approaches are better than others. Find a shuffle method that you like. How does it compare in speed, randomness, and thoroughness to yours?

My goal with this challenge is to hopefully show you that often finding a method or other code online is not only OK, but a time-saver and sometimes better than what you could've done yourself! If you walk away with that knowledge, I'm a happy camper.

See you tomorrow!

Input - 2 dimensional array
OUtput - same array, but shuffled

*/

function shuffle2DimArray(arr) {
    let result = []
    let sub = []
    let size = arr.length
    let total = arr.length**2
    arr = arr.flat()
    for (let i = 0; i < size; i++) {
        for (let k = 0; k < size; k++) {
            let temp = Math.floor(Math.random() * total)
            sub.push(arr.splice(temp, 1))
            total--
        }
        result.push(sub.flat())
        sub = []
    }
    return result
}

myArray = [[1,2,3],[4,5,6],[7,8,9]]
console.log(shuffle2DimArray(myArray))

function shuffleFromInternet(arr) {
    let size = arr.length
    for (let i = 0; i < size; i++) {
        for (let k = 0; k < size; k++) {
            let a = Math.floor(Math.random() * size)
            let b = Math.floor(Math.random() * size)
            let temp = arr[i][k]
            arr[i][k] = arr[a][b]
            arr[a][b] = temp
        }
    }
    return arr
}

console.log(shuffleFromInternet(myArray))