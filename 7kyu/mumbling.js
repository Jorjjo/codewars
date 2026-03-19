//accum("abcd") -> "A-Bb-Ccc-Dddd"
//accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//accum("cwAt") -> "C-Ww-Aaa-Tttt"

// 1. func(letter, num) => string
// i.e. const str = "abcd", func (str[3], 3) => Dddd

function accum(string) {
    let result = [];
    for (let charPointer = 0; charPointer < string.length; charPointer++) {
        let newString = string[charPointer].toUpperCase();
        for (let char = 0; char < charPointer; char++) {
            newString = newString + string[charPointer].toLowerCase();
        }
        result.push(newString);
    }
    return result.join('-');
}

console.log(accum('RqaEzty'));

function accum(string) {
    let result = '';

    for (let charPointer = 0; charPointer < string.length; charPointer++) {
        let newString = string[charPointer].toUpperCase();

        for (let char = 0; char < charPointer; char++) {
            newString += string[charPointer].toLowerCase();
        }
        if (charPointer > 0) {
            result += '-';
        }

        result += newString;
    }

    return result;
}
