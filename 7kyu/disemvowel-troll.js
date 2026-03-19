//Your task is to write a function that takes a string and return a new string with all vowels removed.
//For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

function disemvowel(str) {
    const vowels = 'aeiouAEIOU';
    const newStr = str
        .split('')
        .filter((item) => !vowels.includes(item))
        .join('');
    return newStr;
}

console.log(disemvowel('This website is for losers LOL!'));
