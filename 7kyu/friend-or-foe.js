// Make a program that filters a list of strings and returns a list with only your friends name in it. If a name has exactly 4 letters in it

// function friend(friends) {
//   const newArr = [];
//   for (const el of friends) {
//     if (el.length === 4 && isNaN(el)) {
//       newArr.push(el);
//     }
//   }
//   return newArr;
// }

function friend(friends) {
  let friendsArr = friends.filter((el) => isNaN(el) && el.length === 4);
  return friendsArr;
}

console.log(friend(["Ryan", "Kieran", "Mark"]));
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));
console.log(
  friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])
);
