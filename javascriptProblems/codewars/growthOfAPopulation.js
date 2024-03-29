/* Growth of a Population

In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.

More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10

Note:

Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.


PREP
Parameters: p0 and p are positive integers. aug is a positive or negative integer. percent is a positive or null float.
Returns: an integer representing the number of years.
Examples: see above.
Pseudo code: Start a counter at 0.
             Convert percent to decimal.
             Add 1 to it.
             In a loop do the following:
                Increment the counter.
                Multiply p0 by percent.
                Round to nearest whole number.
                Add aug to the product.
                Check if it is greater than or equal to p.
             If false do it again.
             If true return number in counter.
*/

function nbYear(p0, percent, aug, p) {
    let counter = 0;
    percent = percent * .01 + 1;
    while (p0 < p) {
        p0 = Math.round(p0 * percent + aug);
        counter++;
    }
    return counter;
}

console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000))