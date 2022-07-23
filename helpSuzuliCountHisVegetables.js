/* Help Suzuki count his vegetables...

Help Suzuki count his vegetables....

Suzuki is the master monk of his monastery so it is up to him to ensure the kitchen is operating at full capacity to feed his students and the villagers that come for lunch on a daily basis.

This week there was a problem with his deliveries and all the vegetables became mixed up. There are two important aspects of cooking in his kitchen, it must be done in harmony and nothing can be wasted. Since the monks are a record keeping people the first order of business is to sort the mixed up vegetables and then count them to ensure there is enough to feed all the students and villagers.

You will be given a string with the following vegetables:

"cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip"

Return a list of tuples with the count of each vegetable in descending order. If there are any non vegetables mixed in discard them. If the count of two vegetables is the same sort in reverse alphabetical order (Z->A).

(119, "pepper"),
(114, "carrot"),
(113, "turnip"),
(102, "onion"),
(101, "tofu"),
(100, "cabbage"),
(93, "mushroom"),
(90, "cucumber"),
(88, "potato"),
(80, "celery")



PREP
Parameters: A string of words representing vegetables and other foods. 
Returns: An ordered list containing the count followed by the name for each vegetable in the original string.
Examples: see above.
Pseudo code: Split string into an array of words. If the word is in the list of possible vegetables, add 1 to the count.  When done going through the list, order the count highest to lowest.  If two vegetables have the same count order by reverse alphabetical order. Return the count list.
             

*/
function countVegetables(string) {
    vegList = ["cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip"];
    countList = [];
    vegList.forEach(veg => countList.push([0, veg]));
    arr = string.split(' ');
    arr.forEach(word => {
        if (vegList.includes(word)) {
            let idx = countList.findIndex(subArr => subArr[1] === word);
            countList[idx][0]++;
        }
    })
    countList.sort((a, b) => {
        if (a[0] > b[0]) return -1;
        else if (a[0] < b[0]) return 1;
        else {
            if (a[1] > b[1]) return -1;
            else return 1;
        }
    })
    countList = countList.filter(subArr => subArr[0] > 0);
    return countList;
}

console.log(countVegetables("potato tofu cucumber cabbage turnip pepper carrot celery mushroom potato tofu cucumber cabbage"));