/* Millipede Of Words

The set of words is given. Words are joined if the last letter of one word and the first letter of another word are the same. Return true if all words of the set can be combined into one word. Each word can and must be used only once. Otherwise return false.
Input

Array of 3 to 7 words of random length. No capital letters.

Example true
Set: excavate, endure, desire, screen, theater, excess, night.
Millipede: desirE EndurE ExcavatE ExcesS ScreeN NighT Theater.

Example false
Set: trade, pole, view, grave, ladder, mushroom, president.
Millipede: presidenT Trade.
*/

function solution(words, millipede='') {
    if (words.length === 0) return true
    const results = []
    if (millipede === '') {
        for (let i = 0; i < words.length; i++) {
            const newWords = words.slice()
            newWords.splice(i, 1)
            results.push(solution(newWords, words[i]))
        }
        return results.includes(true)
    } else {
        for (let i = 0; i < words.length; i++) {
            if (millipede[0] === words[i][words[i].length - 1]) {
                const newMillipede = words[i] + ' ' + millipede
                const newWords = words.slice()
                newWords.splice(i, 1)
                results.push(solution(newWords, newMillipede))
            } 
            if (millipede[millipede.length - 1] === words[i][0]) {
                const newMillipede = millipede + ' ' + words[i];
                const newWords = words.slice()
                newWords.splice(i, 1)
                results.push(solution(newWords, newMillipede))
            } 
        }
        return results.includes(true)
    }
}

console.log(solution(["excavate", "endure", "desire", "screen", "theater", "excess", "night"]), true)
console.log(solution(["trade", "pole", "view", "grave", "ladder", "mushroom", "president"]), false)
console.log(solution(["screen", "desire", "theater", "excess", "night"]), true)
console.log(solution(["engine", "endure", "elite", "excess"]), true)
console.log(solution(["east", "e", "e", "t", "t", "e", "time"]), true)
console.log(solution(["no", "dog", "on", "good"]), false)