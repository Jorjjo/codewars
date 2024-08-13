//Given an array of integers your solution should find the smallest integer.

function findSmallestInt(arr) {
  let min = arr[0];
  for (const el of arr) {
    if (el < min) {
      min = el;
    }
  }
  return min;
}

findSmallestInt([78, 56, 232, 12, 8]);
