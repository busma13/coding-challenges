function canThreePartsEqualSum(arr: number[]): boolean {
  const total = arr.reduce((acc, c) => acc + c);
  console.log(total);
  if (total % 3 !== 0) return false;
  const goal = total / 3;
  let i = 0;
  let j = arr.length - 1;
  let totalLeft = 0;
  let totalRight = 0;

  while (i < j - 1) {
    if (totalLeft < goal) {
      totalLeft += arr[i];
      i++;
    }
    if (totalRight < goal) {
      totalRight += arr[j];
      j--;
    }
    if (totalLeft === totalRight && totalLeft === goal) return true;
    console.log(i, j, totalLeft, totalRight);
  }

  return false;
}

console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]));
console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1]));
console.log(canThreePartsEqualSum([3, 3, 6, 5, -2, 2, 5, 1, -9, 4]));
console.log(canThreePartsEqualSum([6,1,1,13,-1,0,-10,20])):