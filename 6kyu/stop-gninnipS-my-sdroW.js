//Write a function that takes in a string of one or more words,
// and returns the same string, but with all words that have five or more letters reversed

function spinWords(str) {
    return str
        .split(' ')
        .map((word) => {
            return word.length >= 5 ? word.split('').reverse().join('') : word;
        })
        .join(' ');
}

console.log(spinWords('Hey fellow warriors'));
