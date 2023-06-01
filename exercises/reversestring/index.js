// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//TODO: Solution 1
// function reverse(str) {
//   console.log(str.split("").reverse().join(""));
// }

//TODO: Solution 2
function reverse(str) {
  let reversedString = "";

  for (let c of str) {
    reversedString = c + reversedString;
  }
  return reversedString;
}

//TODO: Solution 3
// function reverse(str) {
//   console.log(str.split("").reverse().join(""));
// }

module.exports = reverse;
