//Complete the solution so that it reverses the string passed into it.

function solution(str) {
  let reverseString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i];
  }
  return reverseString;
}
