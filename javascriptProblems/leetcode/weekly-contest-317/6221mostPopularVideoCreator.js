/* 6221. Most Popular Video Creator

Difficulty:Medium
You are given two string arrays creators and ids, and an integer array views, all of length n. The ith video on a platform was created by creator[i], has an id of ids[i], and has views[i] views.

The popularity of a creator is the sum of the number of views on all of the creator's videos. Find the creator with the highest popularity and the id of their most viewed video.

If multiple creators have the highest popularity, find all of them.
If multiple videos have the highest view count for a creator, find the lexicographically smallest id.
Return a 2D array of strings answer where answer[i] = [creatori, idi] means that creatori has the highest popularity and idi is the id of their most popular video. The answer can be returned in any order.

 

Example 1:

Input: creators = ["alice","bob","alice","chris"], ids = ["one","two","three","four"], views = [5,10,5,4]
Output: [["alice","one"],["bob","two"]]
Explanation:
The popularity of alice is 5 + 5 = 10.
The popularity of bob is 10.
The popularity of chris is 4.
alice and bob are the most popular creators.
For bob, the video with the highest view count is "two".
For alice, the videos with the highest view count are "one" and "three". Since "one" is lexicographically smaller than "three", it is included in the answer.
Example 2:

Input: creators = ["alice","alice","alice"], ids = ["a","b","c"], views = [1,2,2]
Output: [["alice","b"]]
Explanation:
The videos with id "b" and "c" have the highest view count.
Since "b" is lexicographically smaller than "c", it is included in the answer.
 

Constraints:

n == creators.length == ids.length == views.length
1 <= n <= 105
1 <= creators[i].length, ids[i].length <= 5
creators[i] and ids[i] consist only of lowercase English letters.
0 <= views[i] <= 105

/**
 * @param {string[]} creators
 * @param {string[]} ids
 * @param {number[]} views
 * @return {string[][]}
 */
var mostPopularCreator = function(creators, ids, views) {
   
    let map = creators.reduce((map, creator, idx, arr)=> {
        if (!map[creator]) {
            map[creator] = {}
        }
        
        if (!map[creator]['total']) {
            map[creator]['total'] = 0
        }
        map[creator]['total'] += views[idx]
 
        if (!map[creator]['highestViews']) {
            map[creator]['highestViews'] = views[idx]
            map[creator]['highestIdx'] = idx
        }
        if (views[idx] > views[map[creator]['highestIdx']]) {
            map[creator]['highestViews'] = views[idx]
            map[creator]['highestIdx'] = idx
        } else if (views[map[creator]['highestIdx']] === views[idx]) {
            let smallest = [ids[map[creator]['highestIdx']], ids[idx]].sort()[0]
            map[creator]['highestIdx'] = ids.indexOf(smallest)
        }
        return map
    }, {})
  
    let highest = 0
    let highestArray = []
    for (let creator in map) {
        if (map[creator]['total'] > highest) {
            highest = map[creator]['total']
            highestArray = [[creator, ids[map[creator]['highestIdx']]]]
        } else if (map[creator]['total'] === highest) {
            highestArray.push([creator, ids[map[creator]['highestIdx']]])
        }
    }
    
    return highestArray
    
};
console.log(mostPopularCreator(["alice","bob","alice","chris"], ["one","two","three","four"], [5,10,5,4]))
console.log(mostPopularCreator(["alice","alice","alice"], ["a","b","c"], [1,2,2]))