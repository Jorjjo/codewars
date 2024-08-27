// Given: a sequence of different type of values (number, string, boolean).
// You should return an object with a separate properties for each of types presented in input.
// Each property should contain an array of corresponding values.

function separateTypes(input) {
  let number = [];
  let string = [];
  let boolean = [];

  for (const el of input) {
    switch (typeof el) {
      case "number":
        number.push(el);
        break;
      case "string":
        string.push(el);
        break;
      case "boolean":
        boolean.push(el);
        break;
    }
  }

  let newObj = {
    number: number,
    string: string,
    boolean: boolean,
  };

  return newObj;
}

console.log(separateTypes(["a", 1, 2, false, "b"]));

//вариант for dummies
// let newObj = {};
// if (number.length > 0) newObj.number = number;
// if (string.length > 0) newObj.string = string;
// if (boolean.length > 0) newObj.boolean = boolean;
