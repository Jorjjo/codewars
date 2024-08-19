//Your task is to write a function that takes two or more objects
//and returns a new object which combines all the input objects.

function combine(...objs) {
  console.log(objs);

  let result = objs.reduce((sum, current) => {
    for (let key in current) {
      if (typeof current[key] !== "undefined") {
        sum[key] = (sum[key] || 0) + current[key];
      }
    }
    console.log(sum);
    return sum;
  }, {}); //т.е. при первом вызове sum = initial, если он передан, в данном случае initial передан в качестве пуcтого объекта {}, который заполняется с каждым прохождением
  return result;
}

console.log(
  combine({ a: 10, b: 20, c: 30 }, { a: 3, c: 6, d: 3 }, { a: 1, c: 1, d: 3 })
);
