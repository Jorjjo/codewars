//Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.
//ie:["1", "2", "3"] to [1, 2, 3]

function toNumberArray(stringArray) {
  let newArr = [];
  for (const el of stringArray) {
    newArr.push(+el);
  }

  return newArr;
}

