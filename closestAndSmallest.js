/* Closest and Smallest

Input

    a string strng of n positive numbers (n = 0 or n >= 2)

Let us call weight of a number the sum of its digits. For example 99 will have "weight" 18, 100 will have "weight" 1.

Two numbers are "close" if the difference of their weights is small.
Task:

For each number in strng calculate its "weight" and then find two numbers of strng that have:

    the smallest difference of weights ie that are the closest
    with the smallest weights
    and with the smallest indices (or ranks, numbered from 0) in strng

Output:

    an array of two arrays, each subarray in the following format:

[number-weight, index in strng of the corresponding number, original corresponding number in strng]

or a pair of two subarrays (Haskell, Clojure, FSharp) or an array of tuples (Elixir, C++)

or a (char*) in C or a string in some other languages mimicking an array of two subarrays or a string

or a matrix in R (2 rows, 3 columns, no columns names)

The two subarrays are sorted in ascending order by their number weights if these weights are different, by their indexes in the string if they have the same weights.
Examples:

Let us call that function closest

strng = "103 123 4444 99 2000"
the weights are 4, 6, 16, 18, 2 (ie 2, 4, 6, 16, 18)

closest should return [[2, 4, 2000], [4, 0, 103]] (or ([2, 4, 2000], [4, 0, 103])
or [{2, 4, 2000}, {4, 0, 103}] or ... depending on the language)
because 2000 and 103 have for weight 2 and 4, their indexes in strng are 4 and 0.
The smallest difference is 2.
4 (for 103) and 6 (for 123) have a difference of 2 too but they are not 
the smallest ones with a difference of 2 between their weights.
....................

strng = "80 71 62 53"
All the weights are 8.
closest should return [[8, 0, 80], [8, 1, 71]]
71 and 62 have also:
- the smallest weights (which is 8 for all)
- the smallest difference of weights (which is 0 for all pairs)
- but not the smallest indices in strng.
....................

strng = "444 2000 445 544"
the weights are 12, 2, 13, 13 (ie 2, 12, 13, 13)

closest should return [[13, 2, 445], [13, 3, 544]] or ([13, 2, 445], [13, 3, 544])
or [{13, 2, 445}, {13, 3, 544}] or ...
444 and 2000 have the smallest weights (12 and 2) but not the smallest difference of weights;
they are not the closest.
Here the smallest difference is 0 and in the result the indexes are in ascending order.
...................

closest("444 2000 445 644 2001 1002") --> [[3, 4, 2001], [3, 5, 1002]] or ([3, 4, 2001], 
[3, 5, 1002]]) or [{3, 4, 2001}, {3, 5, 1002}] or ...
Here the smallest difference is 0 and in the result the indexes are in ascending order.
...................

closest("239382 162 254765 182 485944 468751 49780 108 54")
The weights are: 27, 9, 29, 11, 34, 31, 28, 9, 9.
closest should return  [[9, 1, 162], [9, 7, 108]] or ([9, 1, 162], [9, 7, 108]) 
or [{9, 1, 162}, {9, 7, 108}] or ...
108 and 54 have the smallest difference of weights too, they also have 
the smallest weights but they don't have the smallest ranks in the original string.
..................

closest("54 239382 162 254765 182 485944 468751 49780 108")
closest should return  [[9, 0, 54], [9, 2, 162]] or ([9, 0, 54], [9, 2, 162])
or [{9, 0, 54}, {9, 2, 162}] or ...

Notes :

If n == 0 closest("") should return []

    or ([], []) in Haskell, Clojure, FSharp

    or [{}, {}] in Elixir or '(() ()) in Racket

    or {{0,0,0}, {0,0,0}} in C++

    or "[(), ()]" in Go, Nim,

    or "{{0,0,0}, {0,0,0}}" in C, NULL in R

    or "" in Perl.

See Example tests for the format of the results in your language.

PREP
Parameters: a string strng of n positive numbers (n = 0 or n >= 2)
Returns: an array of two arrays. Each subarray has the weight, index, and     original number.
Examples: see above.
Pseudo code: Calculate 'weight' of each number in strng.
             Find the smallest difference of weights.
             If there is more than one pair with the same difference, find the pair with the smallest weights.
             If there is more than one pair with the smallest weights, find the two with the smallest indices. 

             Put each of the pairs into their own array with weight, index, and number.
             Put the two arrays into another array.
             Return the array.
*/

function  closest(strng) {
    if (strng === '') return [];
    let numArray = strng.split(' ');

    let weightArray = numArray.map(num => {
        return num.split('').reduce((acc, c) => +acc + +c, 0);        
    });
    
    let subarraysArray = numArray.map((num, idx) => {
        return [weightArray[idx],idx,Number(num)];
    })
    subarraysArray.sort((a,b) => {
        if (a[0] === b[0]){
            return a[1] - b[1]
        } else {
            return a[0] - b[0]
        }
    });
    console.log(subarraysArray);
    
    weightArray.sort((a,b) => a - b)
    let weightDiff = Infinity;
    let index = 0;
    for (let i = 1; i <= weightArray.length; i++) {
        if (weightArray[i] - weightArray[i - 1] < weightDiff) {
            index = i - 1;
            weightDiff = weightArray[i] - weightArray[i - 1];
        }
    }

    return subarraysArray.slice(index, index + 2);
}

console.log(closest("103 123 4444 99 2000"))
console.log(closest("80 71 62 53"))
console.log(closest("444 2000 445 544"))
console.log(closest("444 2000 445 644 2001 1002"))
console.log(closest("239382 162 254765 182 485944 468751 49780 108 54"))
console.log(closest("461131 128 445070 112 18060 144 404159 7 8411 101 282863 24 402309 106 132200 99 222383 160 288234 119 240683 195 432288 173 167806 162 353984 97 195433 98 17"))
console.log(closest("289911 124 124227 16 67447 171 414209 184 424307 135 217453 35 401575 107 33678 28 413291 13 20335 32 51073 124 172901 174 91796 137 482909 30 278387 127 91"))