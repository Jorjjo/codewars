// Create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(array) {
  let filteredArr = array.filter((i) => typeof i === "number");
  return filteredArr;
}

console.log(filter_list([1, 2, "a", "b"]));
console.log(filter_list([1, "a", "b", 0, 15]));
console.log(filter_list([1, 2, "aasf", "1", "123", 123]));
