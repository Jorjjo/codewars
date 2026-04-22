//Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const stringToLowerCase = string.toLowerCase();
    const containsAll = letters.every((letter) => stringToLowerCase.includes(letter));
    return containsAll;
}
console.log(isPangram("This is not a pangram."));
