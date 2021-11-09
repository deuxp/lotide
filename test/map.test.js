



const words = ["you", "spin", "me", "right", "round", 'baby', 'right', "round"];
const firstLetter = word => word[0]; // callback lifted out
const result1 = map(words, firstLetter);

console.log(result1);
assertArraysEqual(map(words, firstLetter), ['y', 's', 'm', 'r', 'r', 'b', 'r', 'r']);