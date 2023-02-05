/* Baddie Week - Day 2

Today: Helpers and Naming

First, I have to warn you that all the functions today are weird nonsense. It was a strange day and looking back, I don't know what was going on inside my noggin. I've tried to leave room for improvement based on yesterday's lesson in our examples as well, as applicable. Go wild!

Helper Functions

You may have heard of the concept of DRY (Don't Repeat Yourself) code, and though I would argue that taking that to the extreme can be a bad idea, I would say that like most things in life, it's a good thing to do in moderation. Helper functions are an excellent start.

Imagine a group of functions that all do different things, but share common steps between them. Pulling those common procedures out into a separate function that we can then call in our other functions. For example: */

function removeVowels(str) {
  const arr = str.split('')
  const rev = []
  for(let i=arr.length-1; i>=0; i--) {
    rev.push(arr[i])
  }
  const mir = arr.concat(rev)
  const vowels = ['a','e','i','o','u']
  return mir.filter(x => vowels.indexOf(x.toLowerCase()) === -1)
}

function hasHello(str) {
  const arr = str.split('')
  const rev = []
  for(let i=arr.length-1; i>=0; i--) {
    rev.push(arr[i])
  }
  const mir = arr.concat(rev)
  return mir.join('').toLowerCase().includes('hello')
}

/* Those two bizarre functions share several parts 
in common. Let's pull them out into a helper function */

function makeMirrorArr(str) {
    const arr = str.split('')
    const rev = []
    for(let i=arr.length-1; i>=0; i--) {
      rev.push(arr[i])
    }
    return arr.concat(rev)
  }
  
  function removeVowels(str) {
    const mir = makeMirrorArr(str)
    const vowels = ['a','e','i','o','u']
    return mir.filter(x => vowels.indexOf(x.toLowerCase()) === -1)
  }
  
  function hasHello(str) {
    const mir = makeMirrorArr(str)
    return mir.join('').toLowerCase().includes('hello')
  }
  
  /* One of the biggest benefits of DRY code is the ease of maintenance. Now that repeating processes are contained in a single function, updating or making changes to those processes is a matter of editing one function.

  Names Matter
  
  This one might have some naysayers, but I'm firmly planted on this hill and not giving it up. Names in your code matter. Naming things with generic characters of ambiguous abbreviations is doing a HUGE disservice to anyone reading that code now or in the future.
  
  Self-documenting code speaks for itself! You don't need to rely on comments scattered throughout a well-named, well-organized file. Anything you name, be that functions, parameters, props, variables, or files, should have a name that makes sense. Good names tell someone what happening without them having to ask or dig. Aim for human-readable names that someone new to your codebase could understand.
  
  Another important aspect of self-documenting code is avoiding overly complex one-line operations. Have you ever seen nested ternaries that made you cross-eyed, or layers of array indexing and method chaining that made you want to weep? Avoid that. Pull things apart.
  
  Take these two versions of the same function, one with useless, unhelpful naming, and one with thoughtful naming. Also note that sometimes it makes sense to pull parts of logic out for clarity's sake: */
  
  // What is even happening here?
  function fn1(s,x) {
    return (Math.abs(s.charCodeAt(0) - s.charCodeAt(s.length-1)) === 0) 
      ? 'Already there' 
      : (Math.abs(s.charCodeAt(0) - s.charCodeAt(s.length-1)) <= x)
      ? 'Not far off' 
      : 'Too far'
  }
  
  
  // Oh, now I see
  function differenceStartEndCharCodes( string, threshold ) {
    const startCharCode = string.charCodeAt(0)
    const endCharCode = string.charCodeAt(string.length-1)
    const absoluteDiff = Math.abs(startCharCode-endCharCode)
  
    if (absoluteDiff === 0) { return 'Already there' }
    if (absoluteDiff <= threshold) { return 'Not far off' }
    return 'Too far'
  }
  
  /*
  🏆 The Challenge - Day 2
  
  This week we'll be nurturing our inner code weenies and working on bringing up the quality of code and work. Remember, be proud of what you create but always be open to improvement!
  
  Today your challenge is to apply the principles of helper functions and self-documenting code to this mess of a code snippet below. Take time to play with the function, find out what is going on, and make improvements. You can even try to apply our readability principles from yesterday!
  
  As will all our challenges this week, go forth and do the same in some of your own recent code! */
  
  function comp1(dateA, dateB) {
    const aInDays = convertToDays(dateA)
    const bInDays = convertToDays(dateB)
    const dateStringA = dateA.toDateString()
    const dateStringB = dateB.toDateString()
    if (aInDays * 2 <= bInDays) {
        return `If you thought ${dateStringA} was a long wait, wait until you see how long it is until ${dateStringB}.`
    } else if (aInDays < bInDays) {
        return `Don't worry, ${dateStringB} isn't too much farther away than ${dateA} in the scheme of things.`
    } else if (aInDays === bInDays) {
        return `They're the same number of days away!`
    } else {
        return `You know ${dateStringA} is closer, right?`
    }
  }
  
  function comp2(dateA, dateB) {
    const aInDays = convertToDays(dateA)
    const bInDays = convertToDays(dateB)
    const dateStringA = dateA.toDateString()
    const dateStringB = dateB.toDateString()
    if (aInDays < bInDays) {
        const x = Math.floor(bInDays/aInDays)
        return `Looks like ${dateStringB} is ${x} times farther away than ${dateStringA}.`
    } else if (aInDays === bInDays) {
        return `Same exact date there, mate.`
    } else {
        const x = Math.floor(aInDays/bInDays)
        return `Looks like ${dateStringA} is ${x} times farther away than ${dateStringB}.`
    }
  }
  
  function tot(dateA, dateB) {
      const aInDays = convertToDays(dateA)
      const bInDays = convertToDays(dateB)
      const dateStringA = dateA.toDateString()
      const dateStringB = dateB.toDateString()
      return `You have ${aInDays} days left until ${dateStringA}, and ${bInDays} days left until ${dateStringB}.`
  }

  function convertToDays(date) {
    const currentDate = new Date()
    const days = Math.ceil(Math.abs(currentDate.getTime() - date.getTime()) / (1000*60*60*24))
    return days
  }
  
  // feel free to plug these example dates into your functions
  const dateA = new Date(2022,09,26)
  const dateB = new Date(2022,11,25)

  console.log(comp1(dateA, dateB))
  console.log(comp2(dateA, dateB))
  console.log(tot(dateA, dateB))
  /*
  How are you feeling about this week's theme? Be honest - I can take it! Practice of these skills will set the newbie coder apart from the experienced coder.
  */