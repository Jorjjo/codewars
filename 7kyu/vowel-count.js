// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    const vowels = 'aeiou';
    const arr = (str.split('').filter((item) =>
        vowels.includes(item),
    ));
    return arr.length;
}

console.log(getCount('o a kak ushakov lil vo kashu kakao'));
