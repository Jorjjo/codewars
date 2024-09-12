//Take any non-negative integer as an argument and return it with its digits in descending order.
//Essentially, rearrange the digits to create the highest possible number.

//Input: 42145 Output: 54421
//Input: 145263 Output: 654321

function descendingOrder(n) {
  return Number(
    n
      .toString()
      .split("")
      .sort((prev, next) => next - prev)
      .join("")
  );
}

console.log(descendingOrder(42145));
