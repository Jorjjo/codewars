function highAndLow(numbers) {
    let arr = numbers.split(" ");
    console.log(arr);
    let max = Math.max(...arr);
    console.log(max);
    let min = Math.min(...arr);
    console.log(min);
}
// ...

highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
