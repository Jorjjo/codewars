// get the sum of two arrays. Actually the sum of all their elements.

function arrayPlusArray(arr1, arr2) {
  let arrMerged = [...arr1, ...arr2];
  const result = arrMerged.reduce((sum, current) => sum + current, 0);
  return result;
}
