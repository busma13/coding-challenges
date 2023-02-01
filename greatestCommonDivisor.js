/* Greatest Common Divisor

Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

*/

function mygcd(x,y){
    let greatest = 1;
    const smaller = Math.min(x,y);
    const larger = Math.max(x,y);
    for (let i = 1; i < smaller/2; i++) {
        if (smaller % i === 0) {
            const divisor = smaller / i;
            if (larger % divisor === 0) return divisor;
        }
    }
    return greatest;
}

console.log(mygcd(30,12),6)
console.log(mygcd(8,9),1)
console.log(mygcd(1,1),1)

module.exports = mygcd;