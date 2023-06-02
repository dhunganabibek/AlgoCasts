// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let ans = parseInt(n.toString().split("").reverse().join(""));
  return n > 0 ? parseInt(ans) : parseInt(ans * -1);
}

console.log(reverseInt(-98640));

module.exports = reverseInt;
