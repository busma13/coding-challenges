/* Regexp Basics - is it a digit?

Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.
*/

String.prototype.digit = function(s) {
    if (this.length > 1) {
        return false;
    } else {
        return /\d/.test(this);
    }
};


//one line
// return /^\d$/.test(this);