/* Library Opening Times

You are frantically studying for your exams. To do so you need to frequently visit the library to get your revision time in.

You will be given a string as a parameter letting you know the current time. The passed string will be given in the form:

"Monday 12:35"

Your task is to create a function which lets you know either:

-When the library closes if it is open or,

-When the library opens if it is closed.

If the library is closed and opens later in the current day, you want your return string to say:

"Library opens: today XX:XX"

Where "XX:XX" is the time the library opens in a 24 hour format.

If the library is closed and opens the next day, you want your return string to say:

"Library opens: WEEKDAY XX:XX"

Where "WEEKDAY" is the next day that the library opens.

If the library is open, you want to return:

"Library closes at XX:XX"

Where "XX:XX" is the time that the Library closes.

You can see the opening times of the library below.

Opening Times -
Monday:  08:00 - 20:00 
Tuesday:  08:00 - 20:00
Wednesday:  08:00 - 20:00
Thursday:  08:00 - 20:00
Friday:  08:00 - 20:00
Saturday:  10:00 - 18:00
Sunday:  12:00 - 16:30

Some things to note:

-The string given will always be in the form "WORD XX:XX" Where "X" will always be a digit from 1-9.

-Capitalisation of the passed string should not affect the outcome.

-The time is given in a 24 hour format (your return string should also be in this format).

-If the first word of the passed string is not a weekday or the time is invalid your function should return "Invalid time!".

-The format of your returned weekday should start with a capital, with all other characters in lower case eg Monday.

-The first letter of the returned string should always be a capital.

Examples:

openingTimes("Monday 09:30"); //returns "Library closes at 20:00" 

openingTimes("Saturday 00:00"); //returns "Library opens: today 10:00"

openingTimes("Tuesday 20:00"); //returns "Library opens: Wednesday 08:00"

openingTimes("MoNDay 07:59"); //returns "Library opens: today 08:00"

openingTimes("Tuesday 13:61"); //returns "Invalid time!"

openingTimes("wednsay 12:40"); //returns "Invalid time!"

Happy coding!
*/

function openingTimes(str) {
	let [day, time] = str.split(' ');
    day = day.toLowerCase();
    let [hour, min] = time.split(':')
    hour = Number(hour);
    min = Number(min);
    if (!schedule[day]) return 'Invalid time!';
    if (hour < 0 || hour > 23 || min < 0 || min > 59) return 'Invalid time!';
    if (schedule[day].open < time && schedule[day].close > time) {
        return `Library closes at ${schedule[day].close}`;
    } else if (schedule[day].open > time) {
        return `Library opens: today ${schedule[day].open}`;
    } else if (schedule[day].close <= time) {
        const nextDay = schedule[day].nextDay;
        const nextDayCap = nextDay[0].toUpperCase() + nextDay.slice(1);
        return `Library opens: ${nextDayCap} ${schedule[nextDay].open}`;
    }
}

const schedule = {
    monday: {
        open: '08:00', 
        close: '20:00',
        nextDay: 'tuesday'
    },
    tuesday: {
        open: '08:00', 
        close: '20:00',
        nextDay: 'wednesday'
    },
    wednesday: {
        open: '08:00', 
        close: '20:00',
        nextDay: 'thursday'
    },
    thursday: {
        open: '08:00', 
        close: '20:00',
        nextDay: 'friday'
    },
    friday: {
        open: '08:00', 
        close: '20:00',
        nextDay: 'saturday'
    },
    saturday: {
        open: '10:00', 
        close: '18:00',
        nextDay: 'sunday'
    },
    sunday: {
        open: '12:00', 
        close: '16:30',
        nextDay: 'monday'
    },
}

console.log(openingTimes("Monday 09:30"), "Library closes at 20:00")
console.log(openingTimes("Saturday 00:00"), "Library opens: today 10:00")
console.log(openingTimes("Tuesday 20:00"), "Library opens: Wednesday 08:00")
console.log(openingTimes("MoNDay 07:59"), "Library opens: today 08:00")
console.log(openingTimes("Tuesday 13:61"), "Invalid time!")
console.log(openingTimes("wednsay 12:40"), "Invalid time!")
console.log(openingTimes("Wednesday 09:60"), "Invalid time!")