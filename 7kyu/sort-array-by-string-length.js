function sortByLength(array) {
  const sortedArr = array.sort((prev, next) => prev.length - next.length);
  return sortedArr;
}

console.log(sortByLength(["Beg", "Life", "I", "To"]));
console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]));
console.log(sortByLength(["Longer", "Longest", "Short"]));
