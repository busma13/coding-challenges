/*
https://www.meetup.com/arizona-codes/events/300263969/
* Given a integer M,
derive a new smallest integer N > M such that the
sum of digits of N are twice(double) the sum of digits of M.
* Examples;
* Input M = 123, output N=129 => 1+2+9 =12
*
* M = 1+2+3 = 6
* find integer > 123+6
* 
* System.out.println("Testing 826 -- Theoretical Answer: 5999, Actual Answer: " + InterviewCheck2(826));
System.out.println("Testing 9001 -- Theoretical Answer: 9029, Actual Answer: " + InterviewCheck2(9001));
System.out.println("Testing 90004 -- Theoretical Answer: 90089, Actual Answer: " + InterviewCheck2(90004));
System.out.println("Testing 120 -- Theoretical Answer: 123, Actual Answer: " + InterviewCheck2(120));
System.out.println("Testing 89 -- Theoretical Answer: 7999, Actual Answer: " + InterviewCheck2(89));
System.out.println("Testing 101 -- Theoretical Answer: 103, Actual Answer: " + InterviewCheck2(101));
System.out.println("Testing 89232 -- Theoretical Answer: 399999, Actual Answer: " + InterviewCheck2(89232));
* */

function newSmallestInteger(M: number): number {
  const mArr = M.toString().split("").map(Number);
  let sum = mArr.reduce((acc, c) => acc + c);
  const target = sum * 2;
  if (target < 10 && mArr.length < 10) {
    return target;
  }
  const nArr: number[] = [];
  let nSum = 0;
  while (nSum + 9 <= target) {
    nSum += 9;
    nArr.push(9);
  }
  const leftOver = target - nSum;
  const digitsLeft = mArr.length - nArr.length;
  if (digitsLeft <= 1) {
    nArr.push(leftOver);
  }
  console.log(nArr);
  let n = "";
  const len = nArr.length;
  for (let i = 0; i < len; i++) {
    n = n + nArr.pop()?.toString();
  }
  return Number.parseInt(n);
}

console.log(newSmallestInteger(3)); //129
console.log(newSmallestInteger(123)); //129
console.log(newSmallestInteger(826)); //5999
console.log(newSmallestInteger(9001)); //9029
