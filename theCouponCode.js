/* The Coupon Code

Story

Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
Task

Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
Examples:

checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

PREP
Parameters: Four strings, the first two representing the coupon code entered adn the correct coupon code, the last two representing the current date and the expiration date in MONTH DATE, YEAR format.
Returns: true of false
Examples: See above
Pseudo code: Check if the entered and correct codes are the same. If they aren't return false.  Convert the dates to type Date. If current date is before or equal to expiration date return true. Else return false.
*/

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if (enteredCode !== correctCode) return false
  currentDate = new Date(currentDate)
  expirationDate = new Date(expirationDate)
  return currentDate <= expirationDate 
}

console.log(checkCoupon("123", "123", "July 9, 2015", "July 9, 2015"))
console.log(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015"))
console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'))
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014'))