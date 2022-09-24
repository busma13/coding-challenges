/* Tribonacci Sequence

Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]

But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]

Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

PREP
Parameters: An array of 3 numbers(signature) and a number(n). 
Returns: An array of numbers of length n.
Examples: tribonacci([1,2,3], 0);//[], tribonacci([1,2,3], 6);//[1,2,3,6,11,20]
Pseudo code: First check if n is equal or lower than the signature length of 3.  If so, return a copy of the array from index 0 to index n-1.  If n is greater than 3, add the 3 signature values to get the next number.  Add that to the array.  From there loop from 3 to n-2 and do the following each loop: Multiple the element at index i by two, subtract the element at index i-3 from it, and push that number to the array.
When the loop is over return the array.
*/

function tribonacci(signature,n){
    if (n <= 3) return signature.slice(0, n);
    signature.push(signature[0] + signature[1] + signature[2]);
    for( let i = 3; i < n-1; i++) {
        signature.push(signature[i] * 2 - signature[i-3]);
    }
    return signature;
}

console.log(tribonacci([1,2,3],0))
console.log(tribonacci([1,2,3],3))
console.log(tribonacci([1,2,3],6))