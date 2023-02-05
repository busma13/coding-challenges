/* Baddie Week - Day 1

Baddies Week

This week is a little different, in that rather than focusing on a specific Javascript data structure or concept, we're focusing on related code skills. Ever wonder what sets 'bad' code apart from 'good' code? Want to work on some debugging skills? What makes some code better than others, and what are small things we can do to make our code a little better? This is the focus of this week. Love the baddie within, but nurture the code weenie within us all.
🎯 Today: Improving Code Readability
Combining Checks

Pay attention to any nested conditionals in your code that could be combined. Taking time to combine layers of conditional checks has a big payoff in the readability of your functions. It's not unusual for the first draft of a function to contain easy wins like this.

Notice that this function has nested if statements, 
and a chaining set of if...else checks */
function example(x) {
    if (x != null) {
          if (!x.includes('err')) {
                if (x.length < 25) {
                    x = x.toLowerCase()
                } else if (x.length < 50) {
                    x = x[0].toUpperCase()+x.slice(1)
                } else {
                    x = x.toUpperCase()
                }
          }
    }
    return x
}

/* The first 2 if statements could be combined, 
as there's never a situation where something happens 
if one is true and not the other */
function example(x) {
    if (x != null && !x.includes('err') ) {
        if (x.length < 25) {
            x = x.toLowerCase()
        } else if (x.length < 50) {
            x = x[0].toUpperCase()+x.slice(1)
        } else {
            x = x.toUpperCase()
        }
    }
    return x
}

/*
Our example function is already a little shorter and easier to follow, but there's more we can do.

Guard Clauses

If...else statements are powerful things, but if you're using several of them or nesting them, functions can become complex and hard to read. Guard clauses can help return a lot of simplicity to our functions. In simplest terms, a guard clause is a check that causes immediate exiting from a function.

Clear as mud? Don't worry, let's continue looking at our example:

Our function after combining checks.
Did you notice there's no 'else' that pairs with our first if statement? 
There is no need to continue in the function if x is null or includes 'err' */
function example(x) {
    if (x != null && !x.includes('err') ) {
        if (x.length < 25) {
            x = x.toLowerCase()
        } else if (x.length < 50) {
            x = x[0].toUpperCase()+x.slice(1)
        } else {
            x = x.toUpperCase()
        }
    }
    return x
}

/* Let's use a guard clause to exit the function if either of those 
conditions are true, removing a layer of conditional complexity */
function example(x) {
    if (x == null || x.includes('err') ) return x;

    if (x.length < 25) {
        x = x.toLowerCase()
    } else if (x.length < 50) {
        x = x[0].toUpperCase()+x.slice(1)
    } else {
        x = x.toUpperCase()
    }
    return x
}

/* Taking the idea a step further, what if instead of chaining
if...else statements, modifying a variable and returning at the end
we simply returned the appropriate value as we completed each check? */
function example(x) {
    if (x == null || x.includes('err') ) return x;

    if (x.length < 25) return x.toLowerCase()
    if (x.length < 50) return x[0].toUpperCase()+x.slice(1)

    return x.toUpperCase()
}

/* This final version of example is cleaner and easier to read. If I have a given x, I immediately know what's going to be returned without tracing through multiple layers of conditionals.

🏆 The Challenge - Day 1

This week we'll be nurturing our inner code weenies and working on bringing up the quality of code and work. Remember, be proud of what you create but always be open to improvement!

Today's challenge is to simplify the example function below based on what we've discussed today. I also challenge you to look at some recent functions you've written and apply these same principles to those! */

function myExampleFunction(arr) {
    if (arr != null) {
        if (arr.length !== 0) {
            if (arr[0].length !== 0) {
                if (arr.length > 10) {
                    arr.push('maximum')
                } else if (arr.length === 10) {
                    arr.push('maximum')
                } else {
                    if (arr[0] === 'must be maximum') {
                        arr.push('failure')
                    } else if (arr[0] === 'flexible') {
                        arr.push('success')
                    }
                }
            }
        }
    }
    return arr
}

function myExampleFunction(arr) {
    if (arr == null || arr.length === 0 || arr[0].length === 0) return arr
    
    if (arr.length >= 10) arr.push('maximum')
    if (arr[0] === 'must be maximum') arr.push('failure')
    if (arr[0] === 'flexible') arr.push('success')
    
    return arr
}

console.log(myExampleFunction(null))
console.log(myExampleFunction([]))
console.log(myExampleFunction(['']))
console.log(myExampleFunction([1,2,3,4,5,6,7,8,9]))//less than 10
console.log(myExampleFunction([1,2,3,4,5,6,7,8,9,10]))// = to 10
console.log(myExampleFunction([1,2,3,4,5,6,7,8,9,10,11]))//more than 10
console.log(myExampleFunction(['must be maximum']))
console.log(myExampleFunction(['flexible']))
