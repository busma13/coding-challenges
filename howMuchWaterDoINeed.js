/* How much water do I need?

Description:

My washing machine uses water amount of water to wash load (in JavaScript and Python) or max_load (in Ruby) amount of clothes. You are given a clothes amount of clothes to wash. For each single item of clothes above the load, the washing machine will use 10% more water (multiplicative) to clean.

For example, if the load is 10, the amount of water it requires is 5 and the amount of clothes to wash is 14, then you need 5 * 1.1 ^ (14 - 10) amount of water.

Write a function howMuchWater (JS)/how_much_water (Python and Ruby) to work out how much water is needed if you have a clothes amount of clothes. The function will accept 3 arguments: - water, load (or max_loadin Ruby) and clothes.

My washing machine is an old model that can only handle double the amount of load (or max_load). If the amount of clothes is more than 2 times the standard amount of load (max_load), return 'Too much clothes'. The washing machine also cannot handle any amount of clothes less than load (max_load). If that is the case, return 'Not enough clothes'.

The answer should be rounded to the nearest 2 decimal places.

PREP
Parameters: Three numbers representing water, load, and clothes.
Returns: A number rounded to the nearest two decimals or an error message.
Examples: howMuchWater(5, 10, 14); //7.32 
Pseudo code: Check for too much or too little clothing.
             Subtract clothes from load.
             Find 1.1 to that power.
             Multiple it by water.
             Round the result to 2 decimals.
             Return the result.
*/

function howMuchWater(water, load, clothes){
    if (clothes - load > load) return 'Too much clothes';
    if (clothes < load) return 'Not enough clothes';
    let diff = clothes - load;
    let extra = 1.1**diff;
    let result = Math.round(water * extra * 100)/100;
    return result;  
}

console.log(howMuchWater(10,10,21)) //'Too much clothes'
console.log(howMuchWater(10,10,2)) //'Not enough clothes'
console.log(howMuchWater(10,11,20)) // 23.58
console.log(howMuchWater(50,15,29)) // 189.87