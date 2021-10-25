// /*
// input -> (a) object, (b) value
// output-> the first key of the value; else undefined if empty -- 'string'
// */
const findKeyByValue = (obj, value) => {
  const entries = Object.entries(bestTVShowsByGenre);
  for (let i = 0; i < entries.length; i++) {
    const values = entries[i][1];
    const key = entries[i][0];
    if (values === value) return key;
  }
};
// // ========================================================================
/*
custom assert function which will log a message to console
isString() tests for a string to concat quotes on output. To see typeof easier.
*/
// // ========================================================================
const assertEqual = (actual, expected) => {
  const isString = input => typeof input === "string";
  if (actual !== expected) {
    console.log(`🚨🚨🚨 Assertion Failed: ${isString(actual) ? '"' + actual + '"' : actual} !== ${isString(expected) ? '"' + expected + '"' : expected}`);
  } else {
    console.log(`💎💎💎 Assertion Passed: ${isString(actual) ? '"' + actual + '"' : actual} === ${isString(expected) ? '"' + expected + '"' : expected}`);
  }
};
// // ========================================================================
// // tests
// // ========================================================================
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
