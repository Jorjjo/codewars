// You are going to be given a word. Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character.
// If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
  let middle = "";

  if (s.length % 2 === 1) {
    middle = s[(s.length - 1) / 2];
    console.log({ s, middle });
  } else {
    middle = s[s.length / 2 - 1] + s[s.length / 2];
    console.log({
      s,
      middle1: s[(s.length - 1) / 2],
      middle2: s[(s.length - 1) / 2 + 1],
      len: s.length,
    });
  }
  return middle;
}

console.log(getMiddle("loot"));
console.log(getMiddle("march"));
