// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase() === 'r') {
    return `${name} plays banjo`;
  }
   return `${name} does not play banjo`
}

console.log(areYouPlayingBanjo('Ron'));
