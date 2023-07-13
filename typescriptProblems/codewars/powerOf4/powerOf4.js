/* Power Of 4

Write a method that returns true if a given parameter is a power of 4, and false if it's not. If parameter is not an Integer (eg String, Array) method should return false as well.

(In C# Integer means all integer Types like Int16,Int32,.....)
Examples

power_of_4(1024) => true
power_of_4(55)   => false
power_of_4("Four") => false
*/
var powerOf4 = function (num) {
    if (typeof num !== 'number') {
        return false;
    }
    if (num === 0) {
        return false;
    }
    while (num != 1) {
        if (num % 4 != 0) {
            return false;
        }
        num /= 4;
    }
    return true;
};
module.exports = powerOf4;
