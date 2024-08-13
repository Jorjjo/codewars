//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//Return your answer as a number.

function sumMix(x) {
  const toNumber = x.map((el) => parseInt(el));
  const result = toNumber.reduce((sum, current) => sum + current, 0);
  return result;
}
